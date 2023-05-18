import React from 'react';

const CartItem = (props) => {
    // constructor () {
    //     super()
    //     this.state = {
    //         price: 999,
    //         title: 'Mobile Phone',
    //         qty: 1,
    //         img: ''
    //     }
    //     // this.increaseQty = this.increaseQty.bind(this);
    // }
    // increaseQty = () => {
    //     // console.log('test', this.state);
    //     // this.state.qty += 1;
    //     // setState() comes from React.Component (does shallow merging i.e. changes only that property which is specified without touching others)
        
    //     // setState form 1
    //     // this.setState({
    //     //     qty: this.state.qty + 1
    //     // })

    //     // setState form 2 - if prevState required use this
    //     this.setState((prevState)=>{
    //         return {
    //             qty: prevState.qty + 1
    //         }
    //     })
    // }
    // decreaseQty = () => {
    //     // var qy = 0;
    //     this.setState((prevState)=>{
    //         // if (prevState.qty == 0){
    //         //     qy =  0
    //         // }else{
    //         //     qy = prevState.qty - 1
    //         // }
    //         return {
    //             qty: (prevState.qty === 1 ? 1 : prevState.qty - 1)
    //         }
    //     })
    // }
    
    // console.log('this.props', this.props);
    // const {price, title, qty} = this.state
    // const {price, title, qty} = this.props
    const {price, title, qty} = props.product
    const {product, onIncreaseQty, onDecreaseQty, onDeleteProduct} = props
    return (
        <div className="cart-item">
            {/* {this.props.jsx} */}
            <div className='left-block'>
                <img style={styles.image} src={product.img}></img>
            </div>
            <div className='right-block'>
                {/* <div style={{fontSize: 25}}>Phone</div> */}
                {/* <div style={{fontSize: 25}}>{this.state.title}</div> */}
                <div style={{fontSize: 25}}>{title}</div>
                <div style={{color: '#777'}}>Rs. {price}</div>
                <div style={{color: '#777'}}>Qty: {qty}</div>
                {/* <div className='cart-item-actions'>
                    {/* Buttons */}
                    {/* <img alt='increase' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/262/262038.png' */}
                    {/* // onClick={this.increaseQty.bind(this)}
                    // onClick={this.increaseQty}
                    // onClick={()=> this.props.onIncreaseQty(this.props.product)}
                    onClick={()=> onIncreaseQty(product)}
                    ></img>
                    <img  */}
                    {/* // onClick={this.decreaseQty}
                    // onClick={()=> this.props.onDecreaseQty(this.props.product)}
                    onClick={()=> onDecreaseQty(product)}
                    
                    <img */}
                    {/* onClick={() => onDeleteProduct(product.id)} 
                    
                </div> */}
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img
                        alt="increase"
                        className="action-icons"
                        // src="https://image.flaticon.com/icons/svg/992/992651.svg"
                        src='data:image/png;base64,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'
                        onClick={() => onIncreaseQty(product)}
                    />
                    <img
                    
                        alt="decrease"
                        className="action-icons"
                        // src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkm0f9iSCPVaOQ5x5RxKyxemlOAdkMNvledA&usqp=data:image/png;base64,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'
                        onClick={() => onDecreaseQty(product)}
                    />
                    <img
                        alt="delete"
                        className="action-icons"
                        // src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAABzc3NUVFRNTU1cXFympqaEhIQ0NDTu7u4UFBRoaGjo6Oitra21tbUICAgzMzO8vLxGRkbi4uL29vYqKiqdnZ3MzMx7e3s5OTny8vJwcHCNjY1iYmJZWVmTk5PX19fJyckdHR3xSjGKAAACyUlEQVR4nO3dYVeiQBSA4cAyWRsEAYUMs/7/j9yVU5vMDCKzM17b3vdr9+Q8WqSOnbm7IyIiIiKib1y5VfPLU9tSesFTy7NoWlkqveRpqYm+Y9+KWLw7CN8L6WVPaO4AjKKN9LInVDsJa+FVl8nlLZ2Eywm34P/Sm9SLX5e3chKuJtxCUz/5BRaV05pDVnm9MD030h5LzbNHYSqtsebzD6jbtTF0Pq+9btfG0C0RIkQoHkKECOVDiBChfAgRIpQPIUKE8vkU7qQx1nYehRtpjDWfe1WF20ZE2FZe39Z/leZY8rzd6LbnGTLv+6mJerylVOIbSERERPRflbZNtpAqa9rQn9EsW+kn3FEb9tPEt/Bi3+dLe6NcWteVBxS+SOO6XgIKY2lcV4wQIULxECJEKJ+YcJYWT8eKfODp+T7/HNjbB9rPgXR2i8LT51LWf107fRveupmlTgbOPT8UEva3Ky07OfHYd3rtDZzZlBUS9re6krGBwhxIxgZkhY02uR4bMP4LZz02ICy81yYf9IGZNmBcSx60gXuECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIcIfJNRPpzAA+l1gAPS7wDghQ1hYaSdLZsaA9q0qfSDrf700BoSFUf980K050D+X0XJW5LY3kA7flJCw6h0TY/klWpw+yuXCHOj9HCfDD6HYaUjrw9+xwnrg0/5r4GA98Kn9OmznMPxbKHlm13Kujs3j1cDA7mNg6LzWVfwxcOYoJFHhtUKIEKF8CBH+bGEtjeuqAwqtR09evc34Qp07SOO6DgGFN/EghnwI/6TOvKq5SpUaX+S/Vb6puVzqrRxfIhERERERXb/fJ/13l9UGjcAAAAAASUVORK5CYII='
                        onClick={() => onDeleteProduct(product.id)}
                    />
                </div>
            </div>
        </div>
    )
}


const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}


export default CartItem;