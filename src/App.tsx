import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import MyGames from "./pages/MyGames";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivacyPolicyQuiz from "./pages/PrivacyPolicyQuiz";
import Contacts from "./pages/Contacts";

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/my-games" element={<MyGames/>}/>
                        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
                        <Route path="/privacy-policy-quiz" element={<PrivacyPolicyQuiz/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
