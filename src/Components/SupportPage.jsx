import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";

function SupportPage(){

    return (
        <>
            <Container className="support-page">
                <div className="luckiest-guy-regular text-center m-5">

                    <h1>SUPPORT</h1>
                </div>
                <Row className="league-spartan-500">
                    <Col xs={12} md={8} className=" my- 2 my-md-5 rules">
                        <h2>RULES</h2>
                        <ol className="">
              
                        <li> Be respectful
                        </li> Treat others as your own family members.

                        <li>Abusing is strictly Prohibited</li>
                        Keep use of profanity to a reasonable minimum. Any derogatory language towards any user is prohibited. Swearing and Racism is totally prohibited.

                        <li>No Spamming </li>
                        Do not spam short messages one after another as it tends to get annoying for others try to keep your messages discreet.

                        <li>No Pornography and Sexual NSFW content </li>
                        This is not that type of server ._. horny/sus is fine porn is not any form of nudity including profile pictures will get you banned

                        <li>No Advertising </li>
                        Speaking the names of other servers and posting ads will result in detainment or worse.

                        <li>Do not share personal info</li>
                        Your own personal info is fine but sharing others info without permission is punishable

                        <li>Avoid spreading misinformation</li>
                        Just dont.

                        <li>Use channels how they're meant to be used.</li>
                        Each channel in the server have specific guidelines for the type of content that is allowed. Make sure to follow these guidelines and respect the purpose of each channel.

                        <li>No sharing hacks / viruses </li>
                        Do I even need to explain why this is bad.

                        <li>No scamming</li>
                        Any form of scamming will be investigated by in game admins and punishments will be distributed as we see fit  (Not knowing values and agreeing to a trade do NOT count as scams learn before trading)

                        <li>Enjoy to the fullest extent </li>
                        Thats all!
                        </ol>
                    </Col>
                    <Col xs={12} md={4} className="staff my-4 my-md-5 px-3 px-md-5">
                        <h2>STAFF</h2>
                        <ul className="mb-5">
                        <li><h4>OWNER: </h4></li>
                        <h5>Asuna</h5>
                        {/* <h5>TEST 1</h5> */}

                        <li><h4>HEAD ADMIN: </h4></li>
                        <h5>Usagi Tsukino</h5>

                        <li><h4>ADMINS: </h4></li>
                        <h5>Yubi</h5>
                        <h5>Yuna</h5>
                        <h5>Karan</h5>

                        <li><h4>MODERATORS: </h4></li>
                        <h5>Nezuko</h5>
                        <h5>Tadzuna</h5>
                        <h5>Emiko</h5>

                        <li><h4>DEVELOPERS: </h4></li>
                        <h5>Etcetera</h5>
                        {/* <h5>TEST 1</h5> */}
                        {/* <h5>TEST 1</h5> */}
                        </ul>

                        <div className="ms-md-3">

                            <h5 className="">If u need any more help, feel free to drop us a mail at <u><b><Link to="mailto:baconrealms1@gmail.com">baconrealms1@gmail.com</Link></b></u></h5>
                        </div>


                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SupportPage;