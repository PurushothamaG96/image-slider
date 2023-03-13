import React from 'react';
import "./images.css"
function Singleimage(props) {
    const {image, index} = props
    return (
        <>
        <div className='image-container'>
            <img className='img' src={image[index].url} alt="images"/>
            <p>{image[index].placeName}</p>
            <div className='dots-container'>
                {image.map((val, i)=>{
                return(
                    <div className='dots' style={{opacity:`${val.opacity}`}}></div>
                )
            })}
            </div>
            
        </div>
         
        </>
       
    );
}

export default Singleimage;