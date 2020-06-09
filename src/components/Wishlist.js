import React, { Component } from 'react';
import Wish from './Wish';

class Wishlist extends Component {
    render() {
        let wishList = this.props.wishlist.map((wish) => {
        return (
            <Wish
                key={wish._id}
                wish={wish}
                updateWish={this.props.updateWish}
                deleteWish={this.props.deleteWish}
            />
        );
    });

    return (
        <>
            { wishList }
        </>
    );
    }
}

export default Wishlist;
