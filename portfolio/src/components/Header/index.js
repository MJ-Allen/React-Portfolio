import React, {Component } from 'react';
export default class Header extends Component {
    render () {
        return (
            <React.Fragment>
                <header>
                    <a href="/">
                        <h1 className='headerTitle'>Blessings World, I am Marquise</h1>
                    </a>
                    <nav className='nav'>
                        <a href="/aboutme">About Me</a>
                        <a href="/portfolio">Creations</a>
                        <a href="/contactme">Contact Me</a>
                        <a href="/resume">Resume</a>
                    </nav>
                </header>
            </React.Fragment>

        );
    }
}