import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Sotre/cart";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function StoreProduct(props){

    const carts = useSelector(store => store.cart.items);
    // console.log(carts);
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
        {/* <h1>{name}</h1>
        <h2>{price}</h2>
        <button onClick={handleAddToCart}>Add To Cart</button> */}

                <Col md={4} xs={12} className="w-80 store-items px-5 py-4 luckiest-guy-regular">
                    <Card className="justify-content-center text-center align-items-center item-card">
                    <Card.Img variant="top" src={require('../Assets/diamond-hoe.png')} className="my-4"/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Title>$ {price}</Card.Title>
                        {/* <Card.Text>
                        $ {price}
                        </Card.Text> */}
                        <Button onClick={handleAddToCart}>Add To Cart</Button>
                    </Card.Body>
                    </Card>
                </Col>

        </>
    )
}

export default StoreProduct;