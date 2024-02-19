import { NavLink } from "react-router-dom";
import { products } from "../../data";
import Card from "../Card/Card";

import "./Sales.css";

export default function Sales() {
  const firstFourProducts = products.slice(0, 4); // Выбираем только первые четыре продукта

  return (
    <>
      <div className="sales">
        <div className="sale_title">
          <p>Акции</p>
          <a href="">Перейти в каталог</a>
        </div>
        <div className="prod">
          {firstFourProducts.map((product, index) => (
            <Card key={index} {...product} firstPhoto={product.photo[0]} />
          ))}
        </div>
        <div className="salles_btn">
          <NavLink to="/catalog">
            <p>ПОКАЗАТЬ ЕЩЁ</p>
          </NavLink>
        </div>
      </div>
    </>
  );
}
