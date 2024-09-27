import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteGood } from "../redux/slices/goodsReducer";

export default function PizzaList() {
  const goods = useSelector((state) => state.goods.goods);
  const currentUser = useSelector((state) => state.login.currentUser);
  const dispatch = useDispatch();

  const addToCartHandle = (value) => {
    dispatch(addToCart(value));
  };

  const handleDeleteGood = (value) => {
    dispatch(deleteGood(value));
  };

  return (
    <div className="pizza-card-container">
      {goods.map((good) => (
        <div key={good.id} className="pizza-card">
          <img src={good.img} alt={good.title} className="pizza-image" />
          <h3 className="pizza-title">{good.title}</h3>
          <p className="pizza-description">{good.description}</p>
          <p className="pizza-price">${good.price}</p>
          <p className="pizza-rating">Рейтинг: {good.rating} ⭐</p>
          {currentUser && (
            <>
              <button
                className="add-to-cart-button"
                onClick={() => addToCartHandle(good.id)}
              >
                Добавить в корзину
              </button>

              {currentUser.role === "admin" && (
                <button
                  className="add-to-cart-button"
                  onClick={() => handleDeleteGood(good.id)}
                >
                  Удалить товар
                </button>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
