import React from 'react';

      

import Header from '../header/Header';
import GlobalStyles from './StyleApp';
import Main from '../main/Main';

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