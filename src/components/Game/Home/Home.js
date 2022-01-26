import React from 'react'
import Cards from '../../Cards/Cards'
import './Home.css'
import $ from 'jquery'
export default function Home() {

    const data = [{
        title: 'Farm',
        cost: 15,
        image: false,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, recusandae?',
    },
    {
        title: 'another',
        image: false,
        text: 'some more text',
    },
    {
        title: 'another2',
        image: false,
        text: 'some more text',
    },
    {
        title: 'another3',
        image: false,
        text: 'some more text',
    },
    {
        title: 'another4',
        image: false,
        text: 'some more text',
    }
    ]

    return (
        <div className="Home-container">
            <Cards data={data}/>
        </div>
    )
}