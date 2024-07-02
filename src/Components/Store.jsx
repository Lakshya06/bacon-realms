import React, { useState, useEffect } from "react";
// import { Link, Navigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { products } from "../Assets/storeList";
import StoreProduct from "./StoreProduct";
// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from "react-redux";
import CartItem from "./CartItems";

function Store(){

    const [show, setShow] = useState(false);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(store => store.cart.items);

    useEffect(() => {
        let total = 0;
        carts.forEach(item => total += item.quantity)
        setTotalQuantity(total);
    }, [carts])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

        <Button variant="primary" onClick={handleShow}>
            Cart <span>{totalQuantity}</span>
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>CART</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {carts.map((item, key) => 
                 <CartItem key={key} data={item}/>
                )}
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Checkout
            </Button>
            </Modal.Footer>
        </Modal>

        <div>
            {
                products.map((prod, key) => 
                    <StoreProduct key={key} data={prod}/>
                )
            }
        </div>
        
        </>
    )
}

export default Store;