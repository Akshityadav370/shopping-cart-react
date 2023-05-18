
import React from 'react';
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor () {
    super()
    this.state = {
        products: [
            {
                price: 99,
                title: 'Watch',
                qty: 1,
                img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDY3ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_IN?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683224241054',
                id: 1
            },
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 10,
                img: 'https://www.thechennaimobiles.com/image/cache/catalog/140375-600x600.jpg', 
                id: 2
            },
            {
                price: 9999,
                title: 'Laptop',
                qty: 1,
                img: 'https://www.zdnet.com/a/img/resize/89ad80ef5e62511b5aa4a3fe55a1e0b81463995d/2022/10/05/3d233bf8-95fc-4c1a-98a2-1bfebe867fa0/macbook-air-m2-2022-770x433.jpg?auto=webp&fit=crop&height=360&width=640',
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
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // [{}]

    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal += product.qty * product.price;
    })

    return cartTotal;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQty={this.handleIncreaseQty}
          onDecreaseQty={this.handleDecreaseQty}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{fontSize:20, padding:10}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
