import React, { Component } from 'react'
import Navbar from '../Components/UI/Navbar'

class Layout extends Component {


    render() {
        return (
        <React.Fragment>
            <Navbar/>
            <main>
                {this.props.children}
            </main>
        </React.Fragment>
        )
    }
}

export default Layout