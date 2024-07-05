import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";

function RegisterPage(){
    // window.onload = function() {
    //     document.getElementById('login-nav').className = 'active';
    //   };
    return(
        <>
        <Container className="login-page my-5">

            <div className="text-center luckiest-guy-regular">
                <h1>REGISTER</h1>
            </div>

            <Row className="my-5 league-spartan-500">
                <Col className="d-flex justify-content-center align-items-center login-form">
                <form className="my-5">
                <div class="mb-4">
                    <label for="exampleInputEmail1" class="form-label">Enter Username</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username"/>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div class="mb-4">
                    <label for="exampleInputPassword1" class="form-label">Enter Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>

                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Re-enter Password"/>
                </div>

                <div className="text-center mt-5">

                <button type="reset" class="btn btn-warning w-50">Register</button>
                <h5 className="mt-5">Already have an account? <u><b><Link to="/login">Login Here</Link></b></u></h5>
                </div>
                </form>
                </Col>
            </Row>

        </Container>


        </>
    )
}

export default RegisterPage;