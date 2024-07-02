import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function ErrorPage(){
    
    return (
        <>
            <div className="error-page league-spartan-500 m-5">
                <h1>Error 404 | Not Found</h1>
                <h2>
                    Oops! The page you're looking for doesn't exists.
                </h2>
                <Button variant="warning"><Link to="/">Go to Home</Link></Button>
            </div>
        </>
    )
}

export default ErrorPage;