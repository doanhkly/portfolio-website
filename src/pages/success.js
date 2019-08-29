import React from 'react'
import Layout from '../Layout/Layout'
import { FaPaperPlane } from "react-icons/fa";

export default () => {
    return (
        <Layout>
            <div style={{padding: '8rem', maxHeight: '100vh', maxWidth: '100%'}}>
                <FaPaperPlane style={{width: '95px', height: '95px'}}/>
                <h1>Message sent!</h1>

                <a href='/' style={{color: '#8bd3f7'}}> &#8592; Go back</a>
            </div>
        </Layout>
        
    )
}