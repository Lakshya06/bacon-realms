import React from "react";
import Container from 'react-bootstrap/Container';

function HomePage(){
    return (
        <>
            <Container className="carousels px-5 text-center py-auto mb-0" fluid="xs">
            <h1 className="league-spartan-500 pt-5">WELCOME TO  <span className="luckiest-guy-regular">BACON REALMS</span></h1>
            <h2 className="luckiest-guy-regular"><span>IP: </span>BACONREALMS.COM</h2>
            </Container>

            <Container className="home-about">

                <div className="pt-5 pb-4 pb-md-5 px-1 px-md-3 league-spartan-500">
                    <h2>About Bacon Realms</h2>
                    <h6 className="px-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere ipsam unde corrupti harum voluptate quaerat fuga nostrum est quae commodi veniam sequi laboriosam consectetur magnam laudantium, vitae consequuntur quis! Voluptatibus debitis eaque quod cupiditate neque iure laborum excepturi nesciunt, laboriosam labore, quasi illum, maxime eius eveniet accusamus amet ratione suscipit id hic dolorum? Laudantium tempore laboriosam quod, obcaecati exercitationem libero doloribus fugit quos quas magnam. Nam, accusamus blanditiis expedita voluptatibus, temporibus commodi repellat sapiente architecto incidunt assumenda saepe vero autem cupiditate sint unde, corporis et iste illum! Tempora, tenetur blanditiis!
                        <br /> <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus aut magnam inventore veritatis odit nisi corrupti iste soluta! Officia, tenetur reprehenderit quis quibusdam illum praesentium exercitationem possimus, dolor incidunt accusamus, molestiae ad veritatis excepturi! Libero repudiandae qui maiores itaque nostrum. Autem animi corrupti laboriosam? Quasi commodi, cupiditate ipsam dicta dolorum facilis, labore debitis ducimus tenetur alias eos adipisci numquam?
                    </h6>
                </div>

                <div className="pb-5 py-md-5 px-1 px-md-3 league-spartan-500">
                    <h2>How to Join?</h2>
                    <h4 className="px-4">1. Add the Server</h4>
                    <h6 className="px-5">Go to multiplayer in minecraft, then add server</h6>

                    <h4 className="px-4">2. Enter Server Address</h4>
                    <h6 className="px-5">Enter baconrealms.com in the server  address field and click done</h6>

                    <h4 className="px-4">3. You're done!</h4>
                    <h6 className="px-5">Now you can play on bacon realms with other</h6>
                </div>
            </Container>
        
        </>
    )
}

export default HomePage;