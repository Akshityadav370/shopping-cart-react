import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor () {
        super()
        this.state = {
            products: [
                {
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 10,
                    img: '', 
                    id: 2
                },
                {
                    price: 9999,
                    title: 'Laptop',
                    qty: 1,
                    img: '',
                    id: 3
                }
            ]
        }
        // this.increaseQty = this.increaseQty.bind(this);
    }
    render() {
        const {products} = this.state;
        // const arr = [1, 2, 3, 4, 5]
        return (
            <div className="cart">
                <h1>Cart</h1>
                {/* {arr + 5} */}
                {/* {arr.map(
                
                (item)=>{
                    return item + 5;
                })} */}
                {/* <CartItem qty={1} price={99} title={"Watch"} img={''}/>
                <CartItem qty={1} price={999} title={"Mobile Phone"} img={''}/>
                <CartItem qty={1} price={9999} title={"Laptop"} img={''}/> */}
                {/* <CartItem/>
                <CartItem/> */}
                {products.map((product)=>{
                    return <CartItem product={product} key={product.id}
                            // func={()=>console.log('sdsd')}
                            // isloggedin={false}
                            // jsx={<h1>Test</h1>}
                            />
                })}
            </div>
        )
    }
}

export default Cart;