import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MonCompte from './components/MonCompte';
import Home from './components/Home';
import Footer from './components/Footer'
import "./style/App.css"

function App() {
    return (
        <>
            <Router>
            <div className="app-container">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/mon-compte" element={<MonCompte />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
        </>
    );
}

export default App;
