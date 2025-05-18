import React from 'react';
import './myGames.css'
import icon from '../../asets/images/quiz-game-icon.png'
import {Link} from "react-router-dom";

const MyGames = () => {
    return (
        <div className='myGames'>
            <img src={icon} alt='icon game'/>
            <div>
                <h3>Quiz: Hit the target!</h3>
                <h4>Test Your Brainpower!</h4>
                <p>Ready to challenge your knowledge?</p>
                <p>"Quiz: Hit the Target!" is an exciting trivia game packed with questions from a wide variety of
                    categories:</p>
                <ul>
                    <li>World History</li>
                    <li>Sports</li>
                    <li>Human Body</li>
                    <li>Movies & Cartoons</li>
                    <li>Geography</li>
                    <li>Science</li>
                </ul>
                <h4>How to Play</h4>
                <p>Choose the best answer from multiple options! Even if you don’t get it exactly right, you’ll still
                    earn points — <strong>the closer your answer is to the correct one, the higher your score!</strong></p>
                <h4>Game Features</h4>
                <ul>
                    <li>Questions from various categories</li>
                    <li>Scoring system based on accuracy</li>
                    <li>Colorful and intuitive interface</li>
                    <li>Fun for all ages</li>
                    <li>Great for solo play or with friends</li>
                </ul>
                <p>See how much you know about the world and <strong>climb to the top of the leaderboard!</strong></p>
                <p>Download to <a
                    href="https://appgallery.huawei.com/app/C114148997" target="_blank"
                    rel="noopener noreferrer">Huawei AppGallery</a> </p>
                <p>Download to <a
                    href="https://quiz-hit-the-target.en.aptoide.com/app" target="_blank"
                    rel="noopener noreferrer">Aptoide</a> </p>
            </div>
            <div className='blockLink'>
                <Link className='textLink' to="/privacy-policy-quiz">Privacy Policy and Terms of Use</Link>
            </div>
        </div>
    );
};

export default MyGames;
