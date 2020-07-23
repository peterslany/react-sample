import React from 'react'
import { Divider, Typography } from 'antd';
import { Link } from 'react-router-dom';
export default function About() {
    return (
        <div>
            <Typography.Title>What is this web app?</Typography.Title>
            <Divider />
            <p>
                This is <a href="https://github.com/peterslany/react-sample" target="blank">open-sourced responsive React application </a>, 
                which I created in order to practice React and other web technologies.
                
                <br/>
                This app consists of 2 main sections:
                <ul>
                    <li>
                        <Link to="/home">Parallax storytelling section</Link>, where I put some information about me using parallax scrolling effect.
                    </li>
                    <li>
                        <Link to="/news">News section</Link>, which is using Guardian API to fetch articles, which
                        you can search for using that section search bar. It is sending requests to own REST API server,
                        running on localhost which sends requests to Guardian APIs using secret API key and redirects responses.
                        <strong>If you cloned this repository and want to use the news section, you need to 
                        <a href="https://bonobo.capi.gutools.co.uk/register/developer" target="blank"> register for developer key </a> 
                         and assign your key to variable in <Typography.Text code>REPOSITORY_PATH/rest-api/index.js</Typography.Text> on LINE 9.</strong>
                    </li>
                </ul>
            </p>
            <br/>
            <Typography.Title level={4}>
                Technologies I used
            </Typography.Title>
            <Divider />
            <ul>
                <li>React (+ React Spring for parallax, React Transition Group for transitions)</li>
                <li>Typescript</li>
                <li>Ant Design CSS framework for faster styling</li>
                <li>Redux for state management</li>
                <li>Docker for containerization</li>
                <li>NodeJS with Express.js for REST API server</li>
                <li>Nginx for HTTP server</li>
            </ul>
            <br/>
            Credit for illustrations: <a href="https://undraw.co" target="blank">undraw.co</a>
        </div>
    )
}
