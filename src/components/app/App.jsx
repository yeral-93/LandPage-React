import React from 'react';
import Banner from "../banner/Banner";
// import Header from '../header/Header';
import GlobalStyles from './StyleApp';

const App = () => {
    return (
        <div>
            <GlobalStyles />
        <Banner />
            {/* <Header /> */}
        </div>
    )
}

export default App;