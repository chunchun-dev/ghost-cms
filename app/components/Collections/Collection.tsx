import { Text } from '@geist-ui/core'
import React from 'react'

function Collection({title, url}: { title: string, url: string }) {
  return (
    <div
        style={{
            backgroundColor: '#f3f3f3',
            marginRight: '30px',
            height: '130px',
            width: '200px',
            padding: '1rem',
            paddingTop: '0.5rem',
            minWidth: '150px',
            marginBottom: '2rem'
        }}
    >
        <Text p b>{title}</Text>
    </div>
  )
}

export default Collection