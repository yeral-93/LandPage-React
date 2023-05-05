import React from 'react';
import Banner from "../banner/Banner";
import GlobalStyles from './StyleApp';
import Footer from '../footer/Footer';

const App = () => {
    return (
        <div>
            <GlobalStyles />
        <Banner />
            <Header />
            <Footer/>
        </div>
    )
}

export default App;