import React, { useEffect, useState } from 'react';
import Navbar from '../parts/Navbar';
import Hero from '../parts/Hero';
import Service from '../parts/Service';
import News from '../parts/News';
import Variasi from '../parts/Variasi';
import Footer from '../parts/Footer';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);
    console.log(data);

    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=4593d019a4dd437fa9e16e8617734d74')
            .then((result) => {
                setData(result.data.articles)
                console.log('data : ', result.data.articles)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className="home">
            <div className="hero-wrapper">
                <div className="box"></div>
                <div className="content-wrapper w-100"></div>
                <Navbar></Navbar>
                <Hero></Hero>
                <Service></Service>
                <News posts={data}></News>
                <Variasi></Variasi>
                <Footer></Footer>
            </div>
        </div>
    )
}


export default Home;