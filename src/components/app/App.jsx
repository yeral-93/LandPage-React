import React from 'react';
import Header from '../header/Header';
import GlobalStyles from './StyleApp';
import Main from '../main/Main';
import Footer from '../footer/Footer';

const App = () => {
    return (
        <div>
            <GlobalStyles />
            <Header />
            <Main />
            <Footer/>

        </div>
    )
}


export default App;
