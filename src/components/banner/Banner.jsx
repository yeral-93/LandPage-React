import React from 'react';
import NavigationBar from "../navigationBar/NavigationBar";
import { StyleBa, StyleContent, StyleItems, StyleH1 } from './StyleBanner';

const Banner = () => {
    return (
        <StyleBa>
            <NavigationBar />
            <StyleContent>
                <StyleItems>
                    <StyleH1>IMMERSIVE EXPERIENCES THAT DELIVER</StyleH1>
                </StyleItems>
            </StyleContent>
        </StyleBa>
    )
}

export default Banner;