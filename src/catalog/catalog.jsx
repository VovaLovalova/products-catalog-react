import React from "react";
import { List, CardTitle, ListItem, Image, StyledLink } from "./styled";
import Title from "/src/title/title";
import FullPrice from "/src/full-price/fullPrice";

export default function Catalog({ products }) {
  return (
    <>
      <Title>Каталог</Title>
      <List>
        {products &&
          products.length &&
          products.map((product) => (
            <ListItem key={product.code}>
              <StyledLink to={`/product/${product.code}`}>
                <Image src={product.images[0]} alt={product.name} />
                <CardTitle>{product.name}</CardTitle>
                <FullPrice price={product.price} oldPrice={product.oldPrice} />
              </StyledLink>
            </ListItem>
          ))}
      </List>
    </>
  );
}
