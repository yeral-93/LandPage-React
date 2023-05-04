import React from 'react';
import Header from '../header/Header';
import Main from '../main/Main';
import GlobalStyles from './StyleApp';
import Footer from '../footer/Footer';


const App = () => {
    return (
        <div>
            <GlobalStyles />
            <Header />

             <Main/>

            <Footer/>

        </div>

    )
}

export default App;