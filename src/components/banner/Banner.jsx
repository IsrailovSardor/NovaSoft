import React from 'react';
import './banner.scss'
import {useTypingText} from "../../hooks/useTypingText";

const Banner = () => {
    const {word, stop, start} = useTypingText(["We create fantastic software"],
        230,
        120)
    return (
        <div className={'banner'}>
            <div className="container">
                <h1>
                    We create fantastic software
                </h1>
            </div>
        </div>
    );
};

export default Banner;