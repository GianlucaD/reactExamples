import React, { Component } from 'react'
import PropTypes from 'prop-types'; 

export default class ProptypeTest extends Component {
    render(props) {
        return (
            <div>
             <h1>property is: {this.props.name}</h1>  
            </div>
        )
    }
}
ProptypeTest.propTypes = {
    name: PropTypes.string
} 
