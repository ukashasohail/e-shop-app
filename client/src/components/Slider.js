
import React from 'react'
import { Gallery, GalleryImage } from 'react-gesture-gallery'
import {images} from './slider-images';
import Title from './Title'

export default function Slider(){
        const [index, setIndex] = React.useState(0)

        React.useEffect(()=>{
           const interval = setInterval(()=>{
            if(index === images.length -1){
                setIndex(0)
            } 
            else{ setIndex(index + 1) }  
            },
           1000000)
           return () => clearInterval(interval)
        },[index])

        return (
            <div className='white'>
            <Title title="Welcome to our E-Shop"/>
            <div className='slider'>
           <Gallery index={index}
           
           onRequestChange = {i =>{
               setIndex(i)
           }}
           >
               {images.map((image,index) => (
                       <GalleryImage key={index} src={image} />
               )
               )}
           </Gallery>
           </div>
           </div>
        )
    }




