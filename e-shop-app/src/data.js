// import React, { Component } from 'react'
// import ProductProvider from './context'
// import axios from 'axios'
// export default class Data extends Component {
//   constructor(props){
//     super(props)
//     this.state ={
//       storeProducts: [],
//       detailProduct:[]
//     }
//   }
//   componentDidMount(){
// axios.get("/getdata",(req,res)=>{
//     console.log("getdata",res.data)
//   })
//   .then(res=> {
//     console.log("then res",res.data);
//     const user = res.data
//     for(var i =0; i<user.length;i++){
//       user[i].inCart = false
//       user[i].count = 0
//       user[i].total = 0

//     }
//     this.setState({
//       storeProducts: user,
//       detailProduct: user[0]
//     })
// })

//   }

//   render() {
//     console.log(this.state.storeProducts)
//     return (
//       <div>
//       <ProductProvider storeProducts={this.state.storeProducts} detailProduct={this.state.detailProduct} />
//       </div>

//     )
//   }
// }







// import axios from 'axios'

// let sample = null;

// axios.get("/getdata",(req,res)=>{
//     console.log("getdata",res.data)
//   })
//   .then(user=> {
//     console.log("then res",user.data);
//     //  sample = user.data;
  
// })

// function testFunc(user){
//   console.log(user.data)
//   sample = user.data
// }


export let storeProducts = [
  {
    id: 1,
    title: "Google Pixel - Black",
    img: "img/product-1.png",
    price: 10,
    company: "GOOGLE",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    category: 1,
    count: 0,
    total: 0
  },
  {
    id: 2,
    title: "Samsung S7",
    img: "img/product-2.png",
    price: 16,
    company: "SAMSUNG",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    category: 1,
    total: 0
  },
  {
    id: 3,
    title: "HTC 10 - Black",
    img: "img/product-3.png",
    price: 8,
    company: "htc",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    category: 1,
    count: 0,
    total: 0
  },
  {
    id: 4,
    title: "HTC 10 - White",
    img: "img/product-4.png",
    price: 18,
    company: "htc",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    category: 1,
    total: 0
  },
  {
    id: 5,
    title: "HTC Desire 626s",
    img: "img/product-5.png",
    price: 24,
    company: "htc",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    category: 2,
    count: 0,
    total: 0
  },
  {
    id: 6,
    title: "Vintage Iphone",
    img: "img/product-6.png",
    price: 17,
    company: "apple",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    category: 2,
    count: 0,
    total: 0
  },
  {
    id: 7,
    title: "Iphone 7",
    img: "img/product-7.png",
    price: 30,
    company: "apple",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    category: 2,
    count: 0,
    total: 0
  },
  {
    id: 8,
    title: "Smashed Iphone",
    img: "img/product-8.png",
    price: 2,
    company: "apple",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    category: 2,
    count: 0,
    total: 0
  }
];

  export const detailProduct = {
  id: 1,
  title: "Google Pixel - Black",
  img: "img/product-1.png",
  price: 10,
  company: "google",
  info:
    "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
  inCart: false,
  count: 0,
  total: 0
};
