import React from 'react';
import './Technology.scss'
import { ReactComponent as  Js} from '../../images/steck/js.svg';
import { ReactComponent as  Pt} from '../../images/steck/python.svg';
import { ReactComponent as  C} from '../../images/steck/c.svg';
import { ReactComponent as  Andr} from '../../images/steck/android.svg';

const Technology = () => {
    return (
        <div className='technology'>
            <div className='container'>
        <h1>
        Технологии
        </h1>
            <div className='technology__block'>
                <Js className="steck__icon"/>            
                <Pt className="steck__icon"/>
                <C className="steck__icon"/>
                <Andr className="steck__icon"/>
            </div>
            </div>
        </div>
    );
};

export default Technology;