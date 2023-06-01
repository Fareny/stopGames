import React, { Component } from 'react'
import { FiSearch } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { BsFillMoonFill, BsFillPersonFill } from "react-icons/bs";

import logo from '../img/logo.png';

export class Header extends Component {
    render() {
        return (
            <header className='header-container'>
                <div className='header-wrapper'>
                    <img className='header-logo' src={logo} />
                    <nav className='header-nav'>
                        <ul>
                            <li>Новости</li>
                            <li>Читать</li>
                            <li>Смотреть</li>
                            <li>Блоги</li>
                            <li>Стримы</li>
                            <li>Игры</li>
                            <li>Читы</li>
                            <li>Помощь</li>
                        </ul>
                    </nav>
                    <div className='header-right'>

                        <div className='header-icons'>
                            <FiSearch className="search-icon" />
                            <a><BsFillMoonFill /></a>
                            <a><AiOutlineMessage /></a>
                            <a><BsFillPersonFill /></a>
                        </div>

                    </div>
                </div>
            </header>
        )
    }
}

export default Header