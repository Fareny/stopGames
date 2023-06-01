import React, { Component } from 'react'
import '../styles/index.css';
import Categories from '../components/Categories';
import { AiOutlineMessage } from "react-icons/ai";
import sex from '../img/sex.jpg'


export class Main extends Component {

    constructor(props) {

        super(props);
        this.state = {
            items: [{
                id: 1,
                img: 'ayanami.jpg',
                category: 'tShirt',
                name: "Дебютный выпуск дневников разработчиков «Смуты»",
                price: 10,
                quantity: 'Сегодня в 22:30',
            }, {
                id: 2,
                img: 'ayanami.jpg',
                category: 'shorts',
                name: "Xbox Live Gold в июне: игра про владельца свинофермы Adios и аудиоэкшен The Vale",
                price: 20,
                quantity: 2,
            },
            {
                id: 3,
                img: 'ayanami.jpg',
                category: 'shorts',
                name: "Item 3",
                price: 30,
                quantity: 3,
            },
            {
                id: 4,
                img: 'ayanami.jpg',
                category: 'trousers',
                name: "Item 4",
                price: 40,
                quantity: 4,
            },
            {
                id: 5,
                img: 'ayanami.jpg',
                category: 'caps',
                name: "Item 5",
                price: 50,
                quantity: 5,
            },
            {
                id: 6,
                img: 'ayanami.jpg',
                category: 'tShirt',
                name: "Item 6",
                price: 60,
                quantity: 6,
            },
            ]
        };
    }

    render() {

        return (
            <main>
                <section className='main-content'>
                    <div className='bread-crumbs'>bread-crumbs</div>
                    <div className="main-container">
                        <section className='section-news'>
                            <h1>Игровые новости</h1>
                            <Categories />
                            <div className='news'>
                                {this.state.items.map((el) => (
                                    <div className='container-news'>
                                        <img className='news-img' src={sex} />
                                        <div>
                                            <div className='news-title'>
                                                <a>{el.name}</a>    
                                                <div className='tags'>{el.category}</div>
                                            </div>
                                            <div className='message-news'>
                                                <div className='time-news'>{el.quantity}</div>
                                                <a><AiOutlineMessage /> 0</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <aside className='aside-news'>
                            <h1>Все обсуждают</h1>
                            <section className='aside-section'>
                            {this.state.items.map((el) => (
                                <section className='aside-container'>
                                    <img className='news-img' src={sex} />
                                    <section className='card'>
                                    <a>{el.name}</a>
                                    <div className='tags'>{el.category}</div>
                                    </section>
                                </section>
                            ))}
                                
                            </section>
                        </aside>
                    </div>
                </section>
            </main>
        )
    }
}
export default Main
