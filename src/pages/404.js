import React from 'react'

import { IoIosWarning } from "react-icons/io";

export default () => {
    return (
        <div className='container' style={{height: '100vh', maxWidth: '100%'}}>
            <div style={{padding: '8rem', maxHeight: '100vh', maxWidth: '100%'}}>
                <IoIosWarning style={{width: '100px', height: '100px'}}/>
                <h1>Page not found!</h1>
                <p>Oops! The page you are looking for does not exist.</p>

                <a href='/' style={{color: '#8bd3f7'}}> &#8592; Go back</a>
            </div>
        </div>
        
    )
}