import React, { useEffect, useState } from "react";
import { products } from "../Assets/storeList";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../Sotre/cart";

function CartItem(props){

    const {productId, quantity} = props.data;
    const [detail, setDetail] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const findDetail = products.filter(product => product.id === productId)[0];
        setDetail(findDetail);
    }, [productId])

    function handleMinusQuantity(){
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1
        }));
    }

    function handlePlusQuantity(){
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1
        }));
    }

    return(
        <>
        <div>CartItem</div>
        <h3>{detail.name}</h3>
        <h3>{detail.price * quantity}</h3>
        <div>
            <button onClick={handleMinusQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={handlePlusQuantity}>+</button>
        </div>
        </>
    )
}

export default CartItem;