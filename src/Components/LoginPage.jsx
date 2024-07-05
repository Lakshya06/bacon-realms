import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';


function LoginPage(){

    const [data, setData] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState("");

    function handleChange({currentTarget: input}){
        setData({...data, [input.name]: input.value})
    }

    async function handleSubmit(e){

        e.preventDefault();
        console.log('hi');
        try{
            const url = "http://localhost:4000/api/auth";
            const {data: res} = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            console.log(res.message);
            // window.location = "/";
        }
        catch(error){
            console.log(error);
            if(error.response && error.response.status >= 400 && error.response.status <= 500){
                setError(error.response.data.message)
            }
        }
    }

    return(
        <>
        <Container className="login-page my-5">

            <div className="text-center luckiest-guy-regular">
                <h1>LOGIN</h1>
            </div>

            <Row className="my-5 league-spartan-500">
                <Col className="d-flex justify-content-center align-items-center login-form">
                <form className="my-5" onSubmit={handleSubmit}>
                <div class="mb-4">
                    <label for="exampleInputEmail1" class="form-label">Enter Username</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username"  name="username" onChange={handleChange} value={data.username} required/>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Enter Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleChange} value={data.password} name="password" required/>
                </div>

                <div className="text-center mt-5">
                {error && <div>{error}</div>}
                    <button type="submit" class="btn btn-warning w-50">Log In</button>
                    <h5 className="mt-5">Don't have an account? <u><b><Link to="/register">Register Here</Link></b></u></h5>
                </div>
                </form>
                </Col>
            </Row>

        </Container>


        </>
    )
}

export default LoginPage;