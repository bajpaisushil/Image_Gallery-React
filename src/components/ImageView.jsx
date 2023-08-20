import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './ImageView.css';

function ImageView() {
    const {id}=useParams();
    const [particularData, setParticularData]=useState({
        imageUrl: '',
        desc: '',
        title: '',
    })
    useEffect(()=>{
        const fetchData=async(req, res)=>{
            const resp=await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
            console.log(resp.data);
            setParticularData({...particularData, imageUrl: resp.data.photo.url, desc: resp.data.photo.description, title: resp.data.photo.title});
        }
        fetchData();
    }, [])
  return (
    <div className='imageview_container'>
        <div className='imageview_image_container'>
            <img src={particularData.imageUrl} alt='signle-view' className='imageview_image' />
        </div>
        <div className='imageview_contents'>
            <div className='imageview_title'>{particularData.title}</div>
            <div className='imageview_desc'>{particularData.desc}</div>
        </div>
    </div>
  )
}

export default ImageView;

