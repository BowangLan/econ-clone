import { useState } from "react";
import { message } from "antd";
import useSWR from "swr";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useSCard } from "../context";

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 30rem; */
  margin-bottom: 3rem;
  background: white;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  & .card-content {
    margin: 1.6rem 1.4rem;
  }

  & .card-title {
    width: 100%;
    display: inline-block;
    font-size: 1.25rem;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }

  & .price-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .price {
    font-size: 1.5rem;
    color: blue;
    font-weight: 500;
  }

  & .sale {
    font-size: 1rem;
    color: gray;
    margin-left: 8px;
  }

  & .info-list {
    margin-top: 8px;
    display: flex;
    gap: 4px;
    font-size: 1rem;
  }
`;

const Item = ({ data }) => {
  const { addOne } = useSCard();
  const addToCard = () => {
    addOne(data);
    message.success(`成功添加 ${data.title} 到购物车！`);
  };
  return (
    <ItemContainer>
      <img src={data.pic_path} />
      <div className="card-content">
        <span className="card-title">{data.title}</span>
        <div className="price-line">
          <div>
            <span className="price">
              {data.priceShow.unit} {data.priceShow.price}
            </span>
            <span className="sale">{data.realSales}</span>
          </div>
          <AiOutlinePlusCircle
            size={32}
            onClick={addToCard}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="info-list">
          {data.structuredShopInfo.infoList.slice(0, -1).map((info, i) => (
            <span key={i} style={{ color: info.color }}>
              {info.text}
            </span>
          ))}
        </div>
      </div>
    </ItemContainer>
  );
};

const ItemListContainer = styled.div`
  max-width: 96rem;
  margin: 0 auto;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 350px));
  justify-content: space-between;
`;

const ItemList = ({ data }) => {
  return (
    <ItemListContainer>
      {data.map((item, i) => (
        <Item key={i} data={item} />
      ))}
    </ItemListContainer>
  );
};

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/items.json", fetcher);
  const [searchText, setSearchText] = useState("");

  let content;
  if (error) {
    content = <div>{error}</div>;
  } else if (!data) {
    content = <div>Loading...</div>;
  } else {
    content = <ItemList data={data} />;
  }

  return <div>{content}</div>;
}
