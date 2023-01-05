import React, { useState } from "react";
import Title from "/src/title/title";
import Code from "/src/code/code";
import Counter from "/src/counter/counter";
import Delivery from "/src/delivery/delivery";
import Description from "/src/description/description";
import FullPrice from "/src/full-price/fullPrice";
import Comments from "/src/comments/comments";
import Disclaimer from "/src/disclaimer/disclaimer";
import Tabs from "/src/tabs/tabs";
import PopUp from "/src/popup/popup";
import Accordion from "/src/accordion/accordion";
import Slader from "/src/slider/slider";
import {
  StyledProductPage,
  Header,
  ProductWrapper,
  ProductInfo,
  ProductInfoLine,
  BuyButton
} from "./styled";

const MAX_TEXT_SIZE = 200;
const COMMENTS_COUNT = 3;

export default function ProductPage({ product, showInfoInAccordion }) {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(false);
  const [isShowAllDescription, setIsShowAllDescription] = useState(false);
  const [commentsShow, setCommentsShow] = useState(COMMENTS_COUNT);

  const tabs = [
    {
      title: "Описание",
      content: (
        <Description
          text={
            isShowAllDescription
              ? product.description
              : product.description.slice(0, MAX_TEXT_SIZE)
          }
          onShowMore={() => setIsShowAllDescription(!isShowAllDescription)}
          isShowAllDescription={isShowAllDescription}
        />
      )
    },
    {
      title: "Комментарии",
      content: (
        <Comments
          comments={product.comments.slice(0, commentsShow)}
          onShowMore={() => setCommentsShow(commentsShow + COMMENTS_COUNT)}
          allCommentsLength={product.comments.length}
        />
      )
    }
  ];

  return (
    <StyledProductPage>
      <Header>
        <Title>{product.name}</Title>
        <Code>{product.code}</Code>
      </Header>
      <ProductWrapper>
        <Slader images={product.images} />
        <ProductInfo>
          <ProductInfoLine>
            Цена:{" "}
            <FullPrice
              oldPrice={product.oldPrice * count}
              price={product.price * count}
            />
          </ProductInfoLine>
          <ProductInfoLine>
            Количество:
            <Counter onChange={setCount} value={count} minValue={1} />
          </ProductInfoLine>
          <ProductInfoLine>
            Доставка:
            <Delivery date={product.delivery} />
          </ProductInfoLine>
          <BuyButton size="large" onClick={() => setIsShow(true)}>
            Купить
          </BuyButton>
          <Disclaimer count={product.comments} />
        </ProductInfo>
      </ProductWrapper>
      {showInfoInAccordion ? <Accordion items={tabs} /> : <Tabs tabs={tabs} />}
      <PopUp isShow={isShow} onClose={() => setIsShow(false)} />
    </StyledProductPage>
  );
}
