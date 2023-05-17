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
    handleIncreaseQty = (product) => {
        console.log('Hey! please increase the qty of the product:', product)
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1 

        this.setState({
            products: products
        })
    }
    handleDeleteProduct = (id) => {
        const {products} = this.state;

        const items = products.filter((item) => item.id !== id); // [{}]

        this.setState({
            products: items
        })
    }
    handleDecreaseQty = (product) => {
        console.log('Hey! please decrease the qty of the product:', product)
        const {products} = this.state;
        const index = products.indexOf(product);


        if(products[index].qty === 1){
            return
        }else{
            products[index].qty -= 1 
        } 

        this.setState({
            products: products
        })
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
                                onIncreaseQty = {this.handleIncreaseQty}
                                onDecreaseQty = {this.handleDecreaseQty}
                                onDeleteProduct = {this.handleDeleteProduct}
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