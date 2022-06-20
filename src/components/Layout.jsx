import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Layout, Menu, Input, Drawer } from "antd";
import ShoppingCart from "./ShoppingCard";

const { Header, Content, Footer } = Layout;

const NavItems = [{ key: "home", label: "主页" }];

export default function MyLayout({ children, handleSearch }) {
  const [showCard, setShowCard] = React.useState(false);

  const openCard = () => {
    setShowCard(true);
  };
  const closeCard = () => {
    setShowCard(false);
  };

  return (
    <Layout className="layout">
      <Header className="header">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={"home"}
          items={NavItems}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <AiOutlineShoppingCart
            size={32}
            onClick={openCard}
            style={{ color: "white", marginRight: "1.5rem", cursor: "pointer" }}
          />
          <Input.Search
            placeholder="Search"
            onSearch={handleSearch}
            className="search-bar"
          />
          {/* <div style={{ background: "red", width: "4rem", height: "4rem" }} /> */}
        </div>
      </Header>
      <Content className="content">{children}</Content>
      <Drawer
        title="购物车"
        placement="left"
        closable={true}
        onClose={closeCard}
        visible={showCard}
        width={700}
      >
        <ShoppingCart />
      </Drawer>
    </Layout>
  );
}
