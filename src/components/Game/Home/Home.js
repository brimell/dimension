import React from 'react'
import Cards from '../../Cards/Cards'
import './Home.css'
import farmImg from '../../../assets/img/farm.png'
export default function Home() {

    const data = [{
        title: 'Farm',
        cost: 15,
        image: farmImg,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, recusandae?',
    },
    {
        title: 'Automated Farm',
        cost: 100,
        image: false,
        text: 'some more text',
    },
    {
        title: 'Carpenter',
        cost: 1100,
        image: false,
        text: 'some more text',
    },
    {
        title: 'Mine',
        cost: 12000,
        image: false,
        text: 'some more text',
    },
    {
        title: 'Smithy',
        cost: 130000,
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