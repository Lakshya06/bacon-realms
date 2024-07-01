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
                    <h6 className="px-4">
                    Explore the Exciting Baconrealms World!! Discover the ultimate Minecraft experience on Baconrealms. Join now to join a vibrant community, epic battles, and endless adventures!
                    Discover the ultimate Minecraft experience with our diverse and engaging gameplay. Join us now and explore a world of endless possibilities!. Immerse yourself in the best Minecraft server with unique features and a welcoming community. Start your adventure today and build, explore, and conquer!. Unleash your creativity and join our Minecraft server for an unforgettable gaming experience. With exciting challenges and friendly players, the fun never ends! Explore custom maps, participate in epic battles, and make new friends and participate weekly events!!!
                    Discover Minecraft with unique gameplay modes, exclusive rewards, and a welcoming community. Perfect for new and seasoned players alike!!!
                    <br />
                    <br />
                    Whats good in minecraft servers?
                    Minecraft servers are the backbone of the multiplayer experience in the game. They provide players with opportunities to embark on adventures, build vast structures with friends, and compete in various challenges. Running a successful Minecraft server involves not just setting it up but also ensuring it stands out in a crowded field. This entails robust server management, fostering a vibrant community, and effective promotion.
                    <br />
                    <br />
                    You can experience a lots of fun things like-
                    Custom Maps and Worlds:
                    Custom maps can significantly set your server apart. These maps can offer unique landscapes, intricate structures, and hidden secrets that aren’t found in the vanilla version of Minecraft. When players explore new territories, it keeps the gameplay fresh and exciting, encouraging them to spend more time on your server.
                    <br />
                    <br />
                    Plugins and Mods:
                    Plugins are essential in customizing the Minecraft experience. They can add new features, such as mini-games, economies, and enhanced moderation tools. Consider plugins that introduce unique game modes or automation tools that make server management more seamless. Mods, on the other hand, can change gameplay elements, graphics, and even add new items to the game, providing a more enriched experience.
                    <br />
                    <br /> 
                    Quests and Achievements:
                    Creating custom quests and achievements can give players goals to work towards, keeping them engaged over the long term. These quests can be simple tasks or elaborate storylines that players can follow, offering rewards and recognition for their efforts.
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