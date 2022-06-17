import React, { useState } from 'react'
import Collection from './Collection'

function Collections() {

    const [collectionList, setCollectionList] = useState([
        {
            title: 'Posts',
            url: '/posts',
        },
        {
            title: 'Posts',
            url: '/posts',
        },
        {
            title: 'Posts',
            url: '/posts',
        },
        {
            title: 'Posts',
            url: '/posts',
        },
        {
            title: 'Posts',
            url: '/posts',
        },
        {
            title: 'Posts',
            url: '/posts',
        },
        {
            title: 'Posts',
            url: '/posts',
        },
    ])

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {collectionList.map((collectionItem, idx) => (
                <Collection title={collectionItem.title} url={collectionItem.url}/>
            ))}
        </div>
    )
}

export default Collections