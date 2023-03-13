import React, { useState} from "react";
import Singleimage from "./singleimage";
import "./images.css"
const Images = ()=>{
    const [index, setIndex] = useState(0)
const [images, setImages] = useState([
    {
        url:"https://www.shutterstock.com/image-photo/hong-kong-harbour-260nw-144116347.jpg",
        placeName : "HongKong",
        border:"2px solid black",
        opacity:"1"
        
    },
    {
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvT69vAqGgiPTJ1q_L7Yz-GOb2CPWUUEsvVtMCXbox5b52RxdSaob4Px2laNB9DJ7gkU0&usqp=CAU",
        placeName :"Roman",
        border:"none",
        opacity:"0.5"
    },
    {
        url:"https://www.surfertoday.com/images/jamp/page/lighthouse.jpg",
        placeName :"Light House",
        border:"none",
        opacity:"0.5"
        
    },
    {
        url:"https://assets.thehansindia.com/h-upload/2022/11/05/1319308-sardar-vallabhbhai-patel.webp",
        placeName :"Gujarath",
        border : "none",
        opacity:"0.5"
    },
])

const handleBorder = (e)=>{
 console.log(e.target.id)
 let arr = images.map((val, i)=>{
    debugger
    if(parseInt(e.target.id)===i){
        val.border = "2px solid black"
        val.opacity = "1" 
    }
    else{
        val.border = "none"
        val.opacity = "0.5" 
    }
    return val
 })

 console.log(arr)

 setImages(arr)
}

    return(
        <>
        <Singleimage image ={images} index={index}/>
        <div className="all-images">
            {images.map((val, i)=>{
                return(
                    <img src={val.url} id={i} style={{border:`${val.border}`}} key={i} onClick={(e)=>{
                        setIndex(i)
                        handleBorder(e)
                    }} alt="images"/>
                )
            })}
        </div>

        </>
    )
}
export default Images