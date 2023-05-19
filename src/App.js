
import React from 'react';
import Cart from "./Cart";
import Navbar from "./Navbar";
// import * as firebase from 'firebase';
// import firebase from "firebase/app";
// import "firebase/database";
// import {initializeApp} from 'firebase/app';
import firebase from 'firebase/app'
// import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// import {getMessaging, getToken, onMessage} from 'firebase/messaging';

// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import { initializeApp } from "firebase";
// import { getFirestore } from "firebase/firestore";
// import {doc, getDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBeMEwqSarVRD_0iyYFC3pBxEPNO0ylIfY",
  authDomain: "cart-6ae6a.firebaseapp.com",
  projectId: "cart-6ae6a",
  storageBucket: "cart-6ae6a.appspot.com",
  messagingSenderId: "462031344192",
  appId: "1:462031344192:web:60c661c7ef39721e9345a5"
};
// const app = firebase.initializeApp(firebaseConfig);
export const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig).firestore() : firebase.app().firestore();
// export const firestore = getFirestore(app)

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// if(!firebase.apps.length){
  // firebase.initializeApp(firebaseConfig);
//   let firestore = firebase.firestore();
// }

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);

class App extends React.Component {
  constructor () {
    super()
    this.state = {
        // products: [
        //     {
        //         price: 99,
        //         title: 'Watch',
        //         qty: 1,
        //         img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDY3ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_IN?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683224241054',
        //         id: 1
        //     },
        //     {
        //         price: 999,
        //         title: 'Mobile Phone',
        //         qty: 10,
        //         img: 'https://www.thechennaimobiles.com/image/cache/catalog/140375-600x600.jpg', 
        //         id: 2
        //     },
        //     {
        //         price: 9999,
        //         title: 'Laptop',
        //         qty: 1,
        //         img: 'https://www.zdnet.com/a/img/resize/89ad80ef5e62511b5aa4a3fe55a1e0b81463995d/2022/10/05/3d233bf8-95fc-4c1a-98a2-1bfebe867fa0/macbook-air-m2-2022-770x433.jpg?auto=webp&fit=crop&height=360&width=640',
        //         id: 3
        //     }
        // ]
        products: [],
        loading: true
    }
    // this.db = firebase.firestore();
    // firebase.initializeApp(firebaseConfig);
    // this.increaseQty = this.increaseQty.bind(this);
  }

  componentDidMount () {
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     // console.log(snapshot);
    //     // console.log(snapshot.doc.data());
    //     snapshot.docs.map((doc) => {
    //       // console.log(doc);
    //       console.log(doc.data())
    //     })

    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       data['id'] = doc.id;
    //       return data;
    //     })

    //     this.setState({
    //       products,
    //       loading: false
    //     })
    //   })

    firebase
    .firestore()
    .collection('products')
    .onSnapshot(
      (snapshot) => {
      // console.log(snapshot);
      // console.log(snapshot.doc.data());
      snapshot.docs.map((doc) => {
        // console.log(doc);
        console.log(doc.data())
      })

      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })

      this.setState({
        products,
        loading: false
      })
    }
    )
  }

  handleIncreaseQty = (product) => {
    console.log('Hey! please increase the qty of the product:', product)
    const {products} = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1 

    // this.setState({
    //     products: products
    // })
    const docRef = app.collection('products').doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty + 1
      })
      .then(() => {
        console.log('Updated Successfully')
      })
      .catch((err) => {
        console.log('Error: ', err);
      })
  }
  handleDecreaseQty = (product) => {
      console.log('Hey! please decrease the qty of the product:', product)
      const {products} = this.state;
      const index = products.indexOf(product);


      if(products[index].qty === 1){
          return
      }else{
          // products[index].qty -= 1 
          const docRef = app.collection('products').doc(products[index].id);

          docRef
            .update({
              qty: products[index].qty - 1
            })
            .then(() => {
              console.log('Updated Successfully')
            })
            .catch((err) => {
              console.log('Error: ', err);
            })
      } 

      // this.setState({
      //     products: products
      // })
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
      // return ''
    })

    return cartTotal;
  }

  addProduct = () => {
    app.
      collection('products')
      .add({
        img: '',
        price: 400,
        qty: 3,
        title: 'car'
      })
      .then((docRef) => {
        console.log('Product has been added',docRef)
      })
      .catch((err) => {
        console.log('Error: ', err);
      })
  }

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct} style={{padding: 20, fontSize: 20}}>Add a Product</button>
        <Cart
          products={products}
          onIncreaseQty={this.handleIncreaseQty}
          onDecreaseQty={this.handleDecreaseQty}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products ...</h1>}
        <div style={{fontSize:20, padding:10}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
