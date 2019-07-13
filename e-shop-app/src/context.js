import React, { Component } from 'react'
import axios from 'axios'
// import { storeProducts, detailProduct } from './data'

const ProductContext = React.createContext()
//Provider
//Consumer

class ProductProvider extends Component {
    state = {
        products: [],
        // detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: {},
        hamza : 0,
        cartTax: 0,
        cartTotal: 0,
        storeProducts:[],
        ideas:null,


    }
    componentDidMount(){
    axios.get("/getdata",(req,res)=>{
        console.log("getdata",res.data)
    })
    .then(user=> {
        user.data && user.data.map(d => {
            d.inCart = false
            d.count = 0
            d.total = 0
        })
       this.setState({
            storeProducts: user.data,
            modalProduct: user.data[0]
        })    
        this.setProducts();
    })
    }
    
    setProducts = ()=>{
        let tempProducts =[];
        this.state.storeProducts.forEach(item =>{
            const singleItem = { ...item };
            tempProducts = [...tempProducts,singleItem]
        })
        this.setState(()=>{
            return {products: tempProducts}
        })

    }

    getItem = id =>{
        const product = this.state.products.find(item => item.id === id);
        return product; 
    }

    handleDetail = id =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct: product}
        })
    }

    testFunc = (id) =>{
        this.setState({
            ideas:id
        })
        console.log(id)
    }

    addToCart = id =>{  
       let tempProducts = [...this.state.products];
       const index = tempProducts.indexOf(this.getItem(id));
       const product = tempProducts[index]
       product.inCart = true;
       product.count = 1;
       const price = product.price;
       product.total = price;
       this.setState(()=>{
           return {products: tempProducts, cart:[...this.state.cart,product]}
       },()=>{
           this.addTotals();
       })
       
    }

    openModal = id =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {modalProduct: product, modalOpen:true}
        })
    }

    closeModal = () => {
        this.setState(()=>{
            return {modalOpen: false}
        }) 
    }

    increment = (id) =>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item=> item.id === id);
        
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count +=1;
        product.total = product.count * product.price;

        this.setState(()=>{return {cart:[...tempCart]}},()=>{this.addTotals()})
    }

    decrement = (id) =>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item=> item.id === id);
        
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count -= 1
        if(product.count === 0 ){
            this.removeItem(id)
        }else{
            product.total = product.count * product.price;
            this.setState(()=>{return {cart:[...tempCart]}},()=>{this.addTotals()})
        }



    }

    removeItem = id => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id )

        const index = tempProducts.indexOf(this.getItem(id));
        const removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0
        removedProduct.total = 0;

        this.setState(()=>{
            return {
                cart:[ ...tempCart],
                products: [...tempProducts]
            }
        },()=>{
            this.addTotals()
        })
    }

    clearCart = () =>{
        this.setState(()=>{
            return{ cart: [] }
        },()=>{
            this.setProducts();
            this.addTotals();
        })
    }
    addTotals = () =>{
        let subTotal = 0  
        this.state.cart.map(item =>(subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const  tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tempTax;
        this.setState(()=>{
            return {
                hamza : subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }
    render() {
        // console.log("this.state.sample", this.state.storeProducts)
        // console.log("this.state.modal",this.state.modalProduct)
        return (
                <ProductContext.Provider value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment : this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,
                }}>
                    {this.props.children}
                </ProductContext.Provider>
            )
    }
}

const ProductConsumer = ProductContext.Consumer;

// export {ProductProvider,ProductConsumer}
export {ProductProvider,ProductConsumer}


