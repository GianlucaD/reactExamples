import React, { Component } from 'react';

class ProductsPage extends Component {
    render() {
        return (
            <div>
                <h1>This is the Product page for {this.props.match.params.id } </h1>
                {console.log("params:", this.props.match.params.id)}
            </div>
        );
    }
}

export default ProductsPage;