import React from 'react'
import "../css/Product.css"
export const Product = (props) => {
    return (
    <div className='product'>
            <div className="product__img">
                <img src={props.imgUrl} alt="ad" />
            </div>
            <div className="product__content">
                <div className="product__name">Product Name</div>
                <div className="product__hover">
                    <button className="product__btn">Chi tiet san pham</button>
                </div>
                {/* ({props.description})?{<div className="product__description">{props.description}</div>} */}
                {/* ({props.price})?<div className="product__price">{props.price} <div className="product__currency">đồng</div></div> */}
                {/* <button className="btn__add">Add to cart</button> */}
            </div>
    </div>
    )
}
