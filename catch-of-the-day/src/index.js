import React from 'react';
import { render } from 'react-dom';
import Router from "./components/Router";
import './css/style.css'


// you can also use document.getElementById
render(<Router />, document.querySelector('#main'));