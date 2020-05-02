import React from 'react';
import NavBar from "../nav_bar/nav_bar";
import LoginFormContainer from "../session/signin_form_container";
import SignupFormContainer from "../session/signup_form_container";
import VideoIndexContainer from '../video_index/video_index_container';
import {Route} from 'react-router-dom';
// import {AuthRoute} from '../util/route_util';

import styles from './app_style.module.css'
import VideoIndex from '../video_index/video_index';

const App = () => (
    <div>
        <header>
            {/* <h1 className={styles.header}>TubeTube</h1> */}
            <NavBar />
        </header>

        <VideoIndexContainer />
        
        {/* <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} /> */}
    </div>
)

export default App;