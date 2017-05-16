import React from 'react';
import {  Route , IndexRoute } from 'react-router';
import App from  './components/App';
import home from './components/home/home';
import about from './components/about/about';
import Course from './components/course/Course'

export default (
<Route path = "/" component = {App}>
  <IndexRoute component = {home}/>
     <Route path = "Course" component = {Course}/>
    <Route path = "about" component = {about}/>
</Route>
);