import React, { Component } from 'react';

class Product extends Component {
    render() {
        
    	var match = this.props.match;
    	var name = match.params.slug;
    	// console.log(name)

        return (
            <div>
                Day la chi tiet san pham {name}
            </div>
        );
    }
}

export default Product;
