import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Sotre/cart";

function StoreProduct(props){

    const carts = useSelector(store => store.cart.items);
    console.log(carts);
    const {id, name, price} = props.data;

    const dispatch = useDispatch();
    function handleAddToCart(){
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }))
    }

    return (
        <>
        <h1>{name}</h1>
        <h2>{price}</h2>
        <button onClick={handleAddToCart}>Add To Cart</button>
        </>
    )
}

export default StoreProduct;