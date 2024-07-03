import React, { useEffect, useState } from "react";
import { allItems } from "../Assets/storeList";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../Sotre/cart";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CartItem(props){

    const {productId, quantity} = props.data;
    const [detail, setDetail] = useState([]);   
    const dispatch = useDispatch();

    useEffect(() => {
        const findDetail = allItems.filter(product => product.id === productId)[0];
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
            <Container className="modal-cart-main my-3">
            {/* <div>CartItem</div> */}
                <Row>
                    <Col>
                        <img src={detail.img} alt="" className="w-10 h-10"/>
                    </Col>
                    <Col>
                        <h5>Item: {detail.name}</h5>
                        <h5>Price: {detail.price * quantity}</h5>
                    </Col>
                    <Col className="py-3 px-0">
                        <button onClick={handleMinusQuantity} className="mx-1 mx-md-2 px-2">-</button>
                        <span className="">{quantity}</span>
                        <button onClick={handlePlusQuantity} className="mx-1 mx-md-2 px-2">+</button>
                    </Col>
                </Row>
            </Container>
            <hr className="mb-0"/>

        {/* {console.log(detail)} */}
        <div>
        </div>
        </>
    )
}

export default CartItem;