import React from 'react' 

import { Navbar, Footer } from '../components'

export default ( { children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}