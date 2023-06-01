import React, { Component } from 'react'

export class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'PC',
                    name: 'PC'
                },
                {
                    key: 'Xbox One',
                    name: 'Xbox One'
                },
                {
                    key: 'Xbox Series X|S',
                    name: 'Xbox Series X|S'
                },
                {
                    key: 'PlayStation 4',
                    name: 'PlayStation 4'
                },
                {
                    key: 'PlayStation 5',
                    name: 'PlayStation 5'
                },
                {
                    key: 'Stadia',
                    name: 'Stadia'
                },
                {
                    key: 'VR',
                    name: 'VR'
                },
                {
                    key: 'Nintendo Switch',
                    name: 'Nintendo Switch'
                },
                {
                    key: 'MMO',
                    name: 'MMO'
                },
                {
                    key: 'Мобильные',
                    name: 'Мобильные'
                },
                {
                    key: 'Социальные',
                    name: 'Социальные'
                },
                {
                    key: 'Фановые',
                    name: 'Фановые'
                },
                {
                    key: 'Железо',
                    name: 'Железо'
                },
                {
                    key: 'Индустрия',
                    name: 'Индустрия'
                },
                {
                    key: 'Киберспорт',
                    name: 'Киберспорт'
                },
                {
                    key: 'Кино',
                    name: 'Кино'
                }
            ]
        }
    }

    render() {
        return (
            <ul className='categories'>
                {this.state.categories.map((el) => (
                    <li key={el.key}>{el.name}</li>
                ))}
            </ul>
        )
    }
}

export default Categories