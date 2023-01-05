import React from "react";
import { InnerPrice, PriceWrapper } from "./styled";
import OldPrice from "..//oldPrice/oldPrice";

function FullPrice({ oldPrice, price }) {
  const showFullPrice = oldPrice && price < oldPrice;
  // const [count, setCount] = useState(1);

  return (
    <PriceWrapper>
      {showFullPrice ? <OldPrice value={oldPrice} /> : ""}
      {showFullPrice && " "}
      <InnerPrice value={price} />
    </PriceWrapper>
    /* Количество:
      <Counter onChange={setCount} value={count} /> */
  );
}

export default FullPrice;
