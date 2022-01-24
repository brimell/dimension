import React from 'react'
import Cards from '../../Cards/Cards'
export default function Home() {

    const data = [{
        title: 'Flex',
        image: false,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, recusandae?',
    },
    {
        title: 'another',
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