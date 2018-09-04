'use strict';

import { store } from '../redux/store/index';
import { Provider } from 'react-redux';
import React from 'react';
import MainPage from './mainPage';

export default class MainPageProvider extends React.Component{
    
    render(){
        return(
            <Provider store={store}>
                <MainPage/>
            </Provider>
        );
    }
}