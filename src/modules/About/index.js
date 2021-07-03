import React from 'react';
import { Row, Column } from 'simple-flexbox'
import BaseComponent from '../baseComponent';
import FooterComponent from '../Footer/footer';
import HeaderComponent from '../Header/header';
import Aboutcomponent from './about';

export default class About extends BaseComponent{
    render() {
        return (
            <div>
               <HeaderComponent/>
                <Aboutcomponent />
                {/* <FooterComponent/> */}
            </div>
        )
    }
}