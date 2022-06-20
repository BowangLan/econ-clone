import React from "react";
import styled from "styled-components";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useSCard } from "../context";

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const ItemContainer = styled.div`
  display: flex;

  & > img {
    width: 88px;
    border-radius: 8px;
    overflow: hidden;
    margin-right: 12px;
  }

  & .title {
    font-size: 1.15rem;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & .price {
    font-size: 1.15rem;
    color: blue;
  }
`;

const ItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-y: scroll;
  gap: 2rem;
`;

const Item = ({ data }) => {
  const { addOne, removeOne } = useSCard();
  return (
    <ItemContainer>
      <img src={data.pic_path} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div className="title">{data.title}</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span className="price">
            {data.priceShow.unit}
            {data.priceShow.price}
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#666",
            }}
          >
            <AiOutlineMinusCircle
              size={26}
              style={{ color: "#666" }}
              onClick={() => removeOne(data)}
            />
            <span style={{ fontSize: "1rem" }}>{data.count}</span>
            <AiOutlinePlusCircle
              size={26}
              style={{ color: "#666" }}
              onClick={() => addOne(data)}
            />
          </div>
        </div>
      </div>
    </ItemContainer>
  );
};

export default function ShoppingCard() {
  const data1 = [
    {
      count: 3,
      uniqpid: "1253738807",
      priceShowWithIcon: {
        iconHeight: "15",
        suffixColor: "#F7002F",
        iconWidth: "15",
        priceColor: "#F7002F",
        showOriginPrice: "false",
        index: "0",
        suffixText: "限时价",
        domClass: "jhs_price_icon",
        hiddenPriceUnderline: "false",
        iconUrl:
          "https://gw.alicdn.com/tfs/TB1kgDhVVzqK1RjSZFCXXbbxVXa-45-45.png",
      },
      activityIdBase64: "MTA5MzgyMDAx",
      short_title_c2c: "",
      priceWithRate: "4299.00",
      clickTrace:
        "query:%E5%8F%8C%E8%82%A9%E5%8C%85;nid:641684085098;cat_id:122690003;seller_id:2200657715182;seller_type:1;src:mainse;recType:10;rn:4799e37ec95b6a135876c819507c2a02;c_flag:false;client:android;sp_rank_features:vp%3A3999.02734375%3Bxf%3A7.2121547418647e-06%3Bxg%3A5.2034803957213e-05%3Bvb%3A1.7881393432617e-07%3Bvu%3A6.7055225372314e-05%3Buw%3A7.2121620178223e-06%3Buc%3A5.2034854888916e-05%3Bul%3A0.0%3Bac%3A17411198.0;wlsort:0;price:4299;sold:45;sort:_coefp;tpp_bucket:1;catepgoryp:122690003 50006842 0;sumtips:numCom",
      videoAutoPlay: "false",
      extraParams: [
        {
          value: "taobaoSearch",
          key: "xxc",
        },
        {
          value: "%E5%8F%8C%E8%82%A9%E5%8C%85",
          key: "detailAlgoParam",
        },
      ],
      title: "mcm直营小号印花礼物双肩包",
      tItemType: "nt_auction_2019",
      utLogMap: {
        shop: "look_back_user_num;shop_name;into_shop",
        p_t: "1",
        item_price: "4299.00",
        title: "showTitle",
        usp: "numCom",
        pidvid_info: "",
        p_f: "0",
        list_param: "双肩包_0_4799e37ec95b6a135876c819507c2a02",
        evo_buckets: "evo243391_113445#263218_118973evo",
        smartui_exp: "3",
        x_object_type_search: "item",
        price_express_pic:
          "picUrl::O1CN01e0X0Vn1o9PB0x3rxu_!!2200657715182-0-sm.jpg&original::1&picType::p11&channel::wsearchicon-item&biz::common",
        x_ad: "0",
        x_object_id: "641684085098",
      },
      feedback: {
        commonParams: {
          category: "122690003",
          qitXcat1: "2102",
          rn: "4799e37ec95b6a135876c819507c2a02",
        },
        tItemType: "ms_tb-webb-widget_goods_n_feedback_widget",
        actions: [
          {
            param: {
              feedbackType: "no_match",
            },
            icon: "https://img.alicdn.com/imgextra/i1/O1CN01oBYuWL26a7INsNS0n_!!6000000007677-2-tps-54-54.png",
            text: "不喜欢这个商品",
            coverInfo: {
              commonText: "感谢反馈",
              img: "https://img.alicdn.com/imgextra/i1/O1CN01uNzG6L1UjJquyqRHE_!!6000000002553-2-tps-45-45.png",
              desc: "将减少此类内容推荐",
            },
          },
          {
            param: {
              feedbackType: "no_novelty",
            },
            icon: "https://img.alicdn.com/imgextra/i2/O1CN01oeinWm1mQER0pblSi_!!6000000004948-2-tps-54-54.png",
            text: "已经看过/买过",
            coverInfo: {
              commonText: "感谢反馈",
              img: "https://img.alicdn.com/imgextra/i1/O1CN01uNzG6L1UjJquyqRHE_!!6000000002553-2-tps-45-45.png",
              desc: "将减少此类内容推荐",
            },
          },
          {
            param: {
              feedbackType: "no_rel",
            },
            icon: "https://img.alicdn.com/imgextra/i2/O1CN01qhjZqP1WfJcjRVIvt_!!6000000002815-2-tps-54-54.png",
            text: "和搜索词不相关",
            coverInfo: {
              commonText: "感谢反馈",
              img: "https://img.alicdn.com/imgextra/i1/O1CN01uNzG6L1UjJquyqRHE_!!6000000002553-2-tps-45-45.png",
              desc: "将优化搜索结果",
            },
          },
        ],
      },
      auctionURL:
        "http://a.m.taobao.com/i641684085098.htm?&ttid=600000%40taobao_android_10.7.0&sid=9ac975d675ac11a118403123a1830924",
      itemCollect: "false",
      price: "5800.00",
      realSales: "45人付款",
      leafCategory: "122690003",
      isP4p: "false",
      sold: "45",
      shopInfo: {
        pbshowshopinfo: "true",
        shopInfoList: ["天猫国际时尚直营", "进店"],
        url: "https://shop.m.taobao.com/shop/shop_index.htm?shop_navi=allitems&upText=%E5%8F%8C%E8%82%A9%E5%8C%85&item_id=641684085098",
        shopInfoColor: "#333333",
      },
      detailBaseUrl: "",
      similarSameUrl:
        "//market.m.taobao.com/app/nx4/similar_and_same?q=%E5%8F%8C%E8%82%A9%E5%8C%85&prern=4799e37ec95b6a135876c819507c2a02&m=newsimilarsame&isP4p=false&n=10&nid=641684085098&searchToken=99d22b4bb76254c755051d0db3a996278d7839a181c2386399c8232ae926885e&hasSimilar=true&graphnid=641684085098&selected=similar&category=122690003&sellerId=2200657715182&similarVersion=dynamic&appId=18601",
      item_id: "641684085098",
      priceColor: "#000000",
      hiddenSet: {},
      cardType: "item",
      itemPriceSign: "",
      pic_path:
        "http://g.search1.alicdn.com/img/bao/uploaded/i4/i1/2200657715182/O1CN01e0X0Vn1o9PB0x3rxu_!!2200657715182-0-sm.jpg",
      structuredShopInfo: {
        pbshowshopinfo: "true",
        bgColor: "#f7f7f7",
        paddingRight: "6px",
        infoList: [
          {
            color: "#FF7C40",
            text: "回头客10万+",
            hiddenType: "all",
          },
          {
            color: "#666666",
            text: "天猫国际时尚直营",
            hiddenType: "suffix",
          },
          {
            color: "#333333",
            text: "进店",
            hiddenType: "all",
          },
        ],
        guideColor: "#333333",
        radius: "10.5px",
        paddingLeft: "6px",
        url: "https://shop.m.taobao.com/shop/shop_index.htm?shop_navi=allitems&upText=%E5%8F%8C%E8%82%A9%E5%8C%85&item_id=641684085098",
      },
      icons: [
        {
          alias: "jhs_price_icon",
          showType: "0",
          domClass: "jhs_price_icon",
          type: "img",
          group: "4",
        },
        {
          alias: "20220614kuanghuan-T",
          showType: "0",
          domClass: "20220614kuanghuan-T",
          type: "img",
          group: "1",
        },
        {
          alias: "tianmaoguojinew",
          showType: "0",
          domClass: "tianmaoguojinew",
          type: "img",
          group: "1",
        },
        {
          alias: "tmall",
          showType: "0",
          domClass: "tmall",
          type: "img",
          group: "1",
        },
        {
          alias: "m88by",
          showType: "0",
          domClass: "m88by",
          text: "满88包邮",
          type: "text",
          group: "2",
        },
      ],
      priceShow: {
        unit: "¥",
        price: "4299.00",
        preText: "",
      },
      userId: "2200657715182",
      similarURL:
        "http://h5.m.taobao.com/app/searchsimilar/www/tbsimilar/index.html?from=tbsearch&showtype=similar&liantiao=wsearch_pre_http_gray&scm=20140662.search&vm=nw&nid=641684085098&q=%E5%8F%8C%E8%82%A9%E5%8C%85&searchToken=99d22b4bb76254c755051d0db3a996278d7839a181c2386399c8232ae926885e",
      dItemType: "nt_auction_2019",
      productLaunch: "",
      iconList:
        "jhs_price_icon,20220614kuanghuan-T,tianmaoguojinew,tmall,m88by",
      locType: "",
      structuredUSPInfo: [
        {
          text: '11人评价"外型很好看"',
          fieldTemplate: "singleRow",
          textColor: "#E89534",
        },
      ],
    },
    {
      count: 1,
      uniqpid: "611406138",
      activityIdBase64: "",
      short_title_c2c: "",
      clickTrace:
        "query:%E5%8F%8C%E8%82%A9%E5%8C%85;nid:645341853660;cat_id:122690003;seller_id:2209071909401;seller_type:1;src:mainse;recType:10;rn:4799e37ec95b6a135876c819507c2a02;c_flag:false;client:android;sp_rank_features:vp%3A13100.076171875%3Bxf%3A6.6757133936335e-06%3Bxg%3A2.1338441001717e-05%3Bvb%3A2.9802322387695e-07%3Bvu%3A2.0325183868408e-05%3Buw%3A6.6757202148438e-06%3Buc%3A2.133846282959e-05%3Bul%3A0.0%3Bac%3A17220310.0;wlsort:0;price:13100;sold:6;sort:_coefp;tpp_bucket:1;catepgoryp:122690003 50006842 0",
      videoAutoPlay: "false",
      extraParams: [
        {
          value: "%E5%8F%8C%E8%82%A9%E5%8C%85",
          key: "detailAlgoParam",
        },
      ],
      title: "Versace/范思哲男士双肩背包",
      tItemType: "nt_auction_2019",
      utLogMap: {
        shop: "shop_name;into_shop",
        p_t: "1",
        pidvid_info: "20021:112997;",
        item_price: "13100.00",
        p_f: "0",
        list_param: "双肩包_0_4799e37ec95b6a135876c819507c2a02",
        evo_buckets: "evo243391_113445#263218_118973evo",
        smartui_exp: "3",
        x_object_type_search: "item",
        title: "showTitle",
        x_ad: "0",
        x_object_id: "645341853660",
      },
      feedback: {
        commonParams: {
          category: "122690003",
          qitXcat1: "2102",
          rn: "4799e37ec95b6a135876c819507c2a02",
        },
        tItemType: "ms_tb-webb-widget_goods_n_feedback_widget",
        actions: [
          {
            param: {
              feedbackType: "no_match",
            },
            icon: "https://img.alicdn.com/imgextra/i1/O1CN01oBYuWL26a7INsNS0n_!!6000000007677-2-tps-54-54.png",
            text: "不喜欢这个商品",
            coverInfo: {
              commonText: "感谢反馈",
              img: "https://img.alicdn.com/imgextra/i1/O1CN01uNzG6L1UjJquyqRHE_!!6000000002553-2-tps-45-45.png",
              desc: "将减少此类内容推荐",
            },
          },
          {
            param: {
              feedbackType: "no_novelty",
            },
            icon: "https://img.alicdn.com/imgextra/i2/O1CN01oeinWm1mQER0pblSi_!!6000000004948-2-tps-54-54.png",
            text: "已经看过/买过",
            coverInfo: {
              commonText: "感谢反馈",
              img: "https://img.alicdn.com/imgextra/i1/O1CN01uNzG6L1UjJquyqRHE_!!6000000002553-2-tps-45-45.png",
              desc: "将减少此类内容推荐",
            },
          },
          {
            param: {
              feedbackType: "no_rel",
            },
            icon: "https://img.alicdn.com/imgextra/i2/O1CN01qhjZqP1WfJcjRVIvt_!!6000000002815-2-tps-54-54.png",
            text: "和搜索词不相关",
            coverInfo: {
              commonText: "感谢反馈",
              img: "https://img.alicdn.com/imgextra/i1/O1CN01uNzG6L1UjJquyqRHE_!!6000000002553-2-tps-45-45.png",
              desc: "将优化搜索结果",
            },
          },
        ],
      },
      auctionURL:
        "http://a.m.taobao.com/i645341853660.htm?&ttid=600000%40taobao_android_10.7.0&sid=9ac975d675ac11a118403123a1830924",
      itemCollect: "false",
      price: "13100.00",
      summaryTips: ["锦纶"],
      realSales: "6人付款",
      leafCategory: "122690003",
      isP4p: "false",
      sold: "6",
      shopInfo: {
        pbshowshopinfo: "true",
        shopInfoList: ["VERSACE范思哲官方旗舰店", "进店"],
        url: "https://shop.m.taobao.com/shop/shop_index.htm?shop_navi=allitems&upText=%E5%8F%8C%E8%82%A9%E5%8C%85&item_id=645341853660",
        shopInfoColor: "#333333",
      },
      detailBaseUrl: "",
      similarSameUrl:
        "//market.m.taobao.com/app/nx4/similar_and_same?q=%E5%8F%8C%E8%82%A9%E5%8C%85&prern=4799e37ec95b6a135876c819507c2a02&m=newsimilarsame&isP4p=false&n=10&nid=645341853660&searchToken=97b3dc02732c761a1a55416892f109c57275a64e8538520858cd4e2658a13880&hasSimilar=true&graphnid=645341853660&selected=similar&category=122690003&sellerId=2209071909401&similarVersion=dynamic&appId=18601",
      item_id: "645341853660",
      priceColor: "#000000",
      hiddenSet: {},
      cardType: "item",
      itemPriceSign: "",
      pic_path:
        "http://g.search1.alicdn.com/img/bao/uploaded/i4/i1/2209071909401/O1CN01NoSsBz2JJiAmqfnEH_!!0-item_pic.jpg",
      structuredShopInfo: {
        pbshowshopinfo: "true",
        bgColor: "#f7f7f7",
        paddingRight: "6px",
        infoList: [
          {
            color: "#666666",
            text: "VERSACE范思哲官方旗舰店",
            hiddenType: "suffix",
          },
          {
            color: "#333333",
            text: "进店",
            hiddenType: "all",
          },
        ],
        guideColor: "#333333",
        radius: "10.5px",
        paddingLeft: "6px",
        url: "https://shop.m.taobao.com/shop/shop_index.htm?shop_navi=allitems&upText=%E5%8F%8C%E8%82%A9%E5%8C%85&item_id=645341853660",
      },
      icons: [
        {
          alias: "20220614kuanghuan-T",
          showType: "0",
          domClass: "20220614kuanghuan-T",
          type: "img",
          group: "1",
        },
        {
          alias: "2022TopLuxury",
          showType: "0",
          domClass: "2022TopLuxury",
          type: "img",
          group: "1",
        },
        {
          alias: "tmall",
          showType: "0",
          domClass: "tmall",
          type: "img",
          group: "1",
        },
      ],
      priceShow: {
        unit: "¥",
        price: "13100.00",
        preText: "",
      },
      userId: "2209071909401",
      similarURL:
        "http://h5.m.taobao.com/app/searchsimilar/www/tbsimilar/index.html?from=tbsearch&showtype=similar&liantiao=wsearch_pre_http_gray&scm=20140662.search&vm=nw&nid=645341853660&q=%E5%8F%8C%E8%82%A9%E5%8C%85&searchToken=97b3dc02732c761a1a55416892f109c57275a64e8538520858cd4e2658a13880",
      dItemType: "nt_auction_2019",
      productLaunch: "",
      iconList: "20220614kuanghuan-T,2022TopLuxury,tmall",
      locType: "",
    },
  ];

  const { cardItems: data, setShowCard } = useSCard();

  const total = data.reduce(
    (prev, cur) => prev + parseInt(cur.priceShow.price) * cur.count,
    0
  );

  const item_count = data.reduce((prev, cur) => prev + cur.count, 0);

  console.log("render card", data);

  return (
    <Container>
      <ItemListContainer>
        {data.map((item, i) => (
          <Item key={i} data={item} />
        ))}
      </ItemListContainer>
      <div
        style={{
          padding: "2rem 0rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div></div>
        <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
          共 {data.length} 件商品，合计 ¥{total}
        </span>
      </div>
    </Container>
  );
}
