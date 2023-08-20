import axios from "axios";
import React, { useEffect, useState } from "react";
import './Home.css';
import { Link } from "react-router-dom";


function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async (req, res) => {
      try {
        const response = await axios.get(
          `https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=${20}`
        );
        console.log(response.data.photos);
        setData(response.data.photos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="home_view">
      <h1>Image Gallery</h1>
      <div className="home_image_container">
      {data.map((d) => (
        <div key={d.id} className="home_image_item">
            <Link to={`/image-view/${d.id}`}>
            <img src={d.url} alt={`${d.url}`} className="home_image" />
            </Link>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Home;
