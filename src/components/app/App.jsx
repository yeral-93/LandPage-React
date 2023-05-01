import React from 'react';
import Header from '../header/Header';
import GlobalStyles from './StyleApp';
import Footer from '../footer/Footer';

const App = () => {
    return (
        <div>
            <GlobalStyles />
            <Header />
            <Footer/>
        </div>
    )
}

export default App;