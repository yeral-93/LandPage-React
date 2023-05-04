import React from 'react';
import Header from '../header/Header';
import Main from '../main/Main';
import GlobalStyles from './StyleApp';


const App = () => {
    return (
        <div>
            <GlobalStyles />
            <Header />
             <Main/>
        </div>

    )
}

export default App;