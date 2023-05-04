import React from 'react';
import Banner from "../banner/Banner";
import GlobalStyles from './StyleApp';
import Main from '../main/Main';
import Footer from '../footer/Footer';

const App = () => {
    return (
        <div>
            <GlobalStyles />
        <Banner />
            <Header />
            <Main />
            <Footer/>

        </div>
    )
}


export default App;
