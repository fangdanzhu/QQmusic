import React from 'react';
import {render} from 'react-dom'
import './style/less.less'
import './style/index.css'
import Home from './apps/Home'

render(
    <div className='box'>
        <input type="text"/>
        <p className='inner1'>test13</p>
        <p className='inner2'>test2</p>
        <Home/>
    </div>
    ,document.getElementById('app'));
