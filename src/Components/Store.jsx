import React, { useState, useEffect } from "react";
// import { Link, Navigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
// import { products } from "../Assets/storeList";

import { allItems, ranks, perks, crates, items } from "../Assets/storeList";

import StoreProduct from "./StoreProduct";
// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from "react-redux";
import CartItem from "./CartItems";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Store(){

    const [show, setShow] = useState(false);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [finalTotalCost, setFinalTotalCost] = useState(0);
    const carts = useSelector(store => store.cart.items);
    const [products , setProducts] = useState(ranks);
    // console.log(carts)
    // let finalTotalCost = 0;

    useEffect(() => {

        let totalCost= 0;
        carts.forEach(
            item => {
                // console.log(item);
                let findDetail = allItems.filter(product => product.id === item.productId)[0];
                totalCost += findDetail.price * item.quantity;
            }
        )
        // finalTotalCost = totalCost;
        setFinalTotalCost(totalCost);
        // console.log(finalTotalCost);

        let total = 0;
        carts.forEach(item => total += item.quantity)
        // console.log(carts);
        setTotalQuantity(total);
    }, [carts])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectValue, setSelectValue] = React.useState("ranks");
    function handleSelectChange(ev){
        ev.preventDefault();
        const value = ev.target.value;
        // products = {value};
        switch(value){
            case "ranks":
                // products = ranks;
                // console.log("ranks");
                setProducts(ranks)
                break;
            case "perks":
                // products = perks;
                // console.log("perks");
                setProducts(perks);
                break;
            case "crates":
                // products = crates;
                // console.log("crates");
                setProducts(crates);
                break;
            case "items":
                // products = items;
                // console.log("wands")
                setProducts(items);
                break;
            default:
                // products = ranks;
                setProducts(ranks);
        }
        // console.log(products);
        setSelectValue(value);
    }

    function handleCheckout(){
        console.log("checkout");
        window.location.reload();
        localStorage.clear();
    }

    return (
        <>
        {/* <hr /> */}
        <Modal show={show} onHide={handleClose} className="modal-cart league-spartan-500 text-start">
            <Modal.Header closeButton>
            <Modal.Title>CART</Modal.Title>
            </Modal.Header>
            <Modal.Body className="pb-0">
                {
                // console.log(carts)
                carts.map((item, key) => 
                 <CartItem key={key} data={item}/>
                )}
            </Modal.Body>
            <Modal.Footer className="mt-0">
                {/* <Container fluid={"xs"}> */}
                <Row className="w-100 justify-content-center">
                    <Col className="text-start p-0">
                    <h5 className="mb-0 mt-2">TOTAL: $ {finalTotalCost}.00 USD</h5>
                    </Col>
                    <Col className="text-end px-0">
                        <Button variant="secondary" onClick={handleClose} className="mx-1 mx-md-3">
                            Close
                        </Button>
                        <Button variant="warning" onClick={handleCheckout}>
                            Checkout
                        </Button>
                    </Col>
                </Row>
                {/* </Container> */}
            </Modal.Footer>
        </Modal>

        <div className="store-page my-5">
            <Container className="pt-2">

                <h1 className="luckiest-guy-regular text-center mb-5">BACON REALMS STORE</h1>

                <Row className="mx-1 mx-md-5 my-3 pt-3 pt-md-5">
                    <Col xs={8} className="float-start">
                        <Form.Select aria-label="Default select example" className="w-1 00" onChange={handleSelectChange} value={selectValue}>
                            <option value="ranks">Ranks</option>
                            <option value="items">Wands</option>
                            <option value="crates">Crate Keys</option>
                            <option value="perks">Perks</option>
                        </Form.Select>
                    </Col>
                    <Col xs={4} className="text-end cart-button">
                        <Button variant="warning" onClick={handleShow} className="acme-regular w-100">
                        Cart <i class="fa-solid fa-cart-shopping"></i> <span className="badge badge-warning" id="lblCartCount">{totalQuantity}</span>
                        </Button>
                    </Col>
                </Row>


                <Row className="mx-1 mt-5 mx-md-5">
                    {/* <Col md={4}> */}
                    {
                        products.map((prod, key) => 
                            <StoreProduct key={key} data={prod}/>
                        )
                    }
                    
                    {/* </Col> */}
                </Row>
            </Container>
        </div>
        
        </>
    )
}

export default Store;