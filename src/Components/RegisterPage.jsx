import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

function RegisterPage(){
    // window.onload = function() {
    //     document.getElementById('login-nav').className = 'active';
    //   };

    const [data, setData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handleChange({currentTarget: input}){
        setData({ ...data, [input.name]: input.value })
    };

    async function handleSubmit(e){

        e.preventDefault();
        try{
            // const url = "http://localhost:4000/api/users";
            const url = "https://bacon-realms-api.onrender.com/api/users";
            const {data: res} = await axios.post(url, data);
            navigate("/login");
            console.log(res.message);
        }
        catch(error){
            if(error.response && error.response.status >= 400 && error.response.status <= 500){
                setError(error.response.data.message)
            }
        }
    }

    return(
        <>
        <Container className="login-page my-5">

            <div className="text-center luckiest-guy-regular">
                <h1>REGISTER</h1>
            </div>

            <Row className="my-5 league-spartan-500">
                <Col className="d-flex justify-content-center align-items-center login-form">
                <form className="my-5" onSubmit={handleSubmit}>
                <div class="mb-4">
                    <label for="exampleInputEmail1" class="form-label">Enter Username</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" name="username" onChange={handleChange} value={data.username} required/>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div class="mb-4">
                    <label for="exampleInputPassword1" class="form-label">Enter Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={handleChange} value={data.password} required/>
                </div>

                <div class="mb-3">
                    <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Re-enter Password" name="confirmPassword" onChange={handleChange} value={data.confirmPassword} required/>
                </div>

                <span className="password-warning"><i><p>*password must be at least 8 chars long and must have a lower case, an upper case and a special character</p></i></span>

                <div className="text-center mt-5">

                {error && <div class="alert alert-danger mb-4" role="alert">
                                {error}
                            </div>}

                <button type="sumbit" class="btn btn-warning w-50">Register</button>
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