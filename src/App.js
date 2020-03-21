import React from "react";
import Routes from "./routes";
import "./App.css";
import Header from './header';
import Footer from './footer';

function App() {
    return (
        <>
            <Header />
            <Routes />
            <Footer />
        </>
    );
}

export default App;
