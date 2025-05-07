import React from 'react';
import './home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='titleBlock'>
                <h1>Welcome to Kovalenko Lesia's Official Website!</h1>
                <h3>We are a passionate team dedicated to creating innovative and engaging mobile games.
                    Our focus is on
                    delivering high-quality entertainment experiences that are enjoyable for all ages. Stay tuned as we
                    continue to grow and share exciting new projects with you! </h3>
                <h3> We are an independent game development team, passionate about creating exciting and
                    innovative mobile
                    games. Our mission is to provide players with high-quality, fun, and immersive experiences. We
                    believe
                    in attention to detail, constant improvement, and listening to our users’ feedback.</h3>
                <h3>Our first project is a game aimed at providing an engaging experience for players of all ages. We’re
                    dedicated to continuously improving and bringing new and exciting features to our users.</h3>
                <h3>Thank you for being part of our journey, and we hope you enjoy playing our game!</h3>
                <h3>For inquiries, collaborations, or support, reach out to us at <a className='emailStyle' href="mailto:kovalenko.l.v.fop@gmail.com">kovalenko.l.v.fop@gmail.com</a></h3>
            </div>
        </div>
    );
};

export default Home;
