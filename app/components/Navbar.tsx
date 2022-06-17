import { Page } from '@geist-ui/core'
import React from 'react'

const Icon = () => {
    return (
        <svg 
            width="25" 
            height="25" 
            viewBox="0 0 25 25" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M11.5293 0L23 6.90096V19.9978L14.3608 25V11.9032L2.88452 5.00777L11.5293 0Z" fill="#333333"></path>
            <path d="M10.6559 24.2727V14.0518L2 19.0651L10.6559 24.2727Z" fill="#333333"></path>
        </svg>
    )
}

const Burger = () => {
    return (
        <svg
            width="25" 
            height="25" 
            viewBox="0 0 25 25" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="3.5" y="4.5" width="18" height="2" fill="#333333"></rect><rect x="3.5" y="11.5" width="18" height="2" fill="#333333"></rect><rect x="3.5" y="18.5" width="18" height="2" fill="#333333"></rect>
        </svg>
    )
}

function Navbar() {
  return (
    <Page.Header 
        className='flex' 
        padding={1.5} 
        height={3}
        style={{backgroundColor: '#f1f1f1', justifyContent: 'space-between', alignItems: 'center'}}
    >
        <Icon/>
    </Page.Header>
  )
}

export default Navbar