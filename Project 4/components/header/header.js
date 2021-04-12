import React, {Component} from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <a href="https://www.youtube.com/watch?v=ih2xubMaZWI" className="hidden-msg">
                    <h1>Click Here</h1>
                </a>
            </div>
        )
    }
}