import React from 'react';
import { Link } from "react-router-dom";
import './style.css';
import Button from "../Button"

function ShoppingCartItem(props) {
  return (
    <li className="ShoppingCartItem">
      <Link to="/product">
        <img src={props.img} alt="Skateboard"/>
      </Link> 
      <h2 className="title">
        {props.title}
      </h2>
      <div className="price">
        {props.sale != null ? <p>{props.price - props.price*props.sale} kr</p> : <p>{props.price} kr</p>}
      </div>
      <div className="description">
        <p>
          två stycken fhdjskla hfjdskl hfjdkslah fjdkslafh jdsklah fjdska
        </p>
        <p>
          lorem jfdsklöf jkdlaöfj kdsöaj fkldsöaj fklödsaj kflöds
        </p>
      </div>
      <Button small>
        Ta bort
      </Button>
    </li>
  );
}

export default ShoppingCartItem;
