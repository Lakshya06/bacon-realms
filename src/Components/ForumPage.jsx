import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Accordion from 'react-bootstrap/Accordion';
import ForumPageAccordian from "./ForumPageAccordian";
import { qna } from "../Assets/qnaForum";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


function ForumPage(){

    console.log(qna);
    return (
        <> 
        <Helmet>
            <title>Forums | Bacon Realms</title>
        </Helmet>
            <Container className="forum-page">
                <Row className=" mt-5">
                    {/* <Col> */}
                    <div className="text-center luckiest-guy-regular">
                        <h1>Forums</h1>
                    </div>

                        <Accordion defaultActiveKey="0" className="leauge-spartan-500 p-3 px-md-5 py-md-4 mt-4">
                            <h2>Frequently Asked Questions:</h2>
                        {
                            // console.log(qna)
                            qna.map((prod, key) => 
                                // console.log(prod)
                                <ForumPageAccordian key={key} data={prod} />
                            )
                        }
                        {/* <h5>If yu</h5> */}
                        </Accordion>
                    {/* </Col> */}
                    <div className="text-center p-5 mb-4 mt-3">
                        <h4>If you need any more help, Feel free to ask us on our discord server or post your query in <Link to="/support"><u><b>Support</b></u></Link></h4>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default ForumPage;