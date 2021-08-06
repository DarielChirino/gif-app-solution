import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import React, { useState, useEffect } from 'react';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs(category)
    //         .then(imgs => setImages(imgs));
    // }, [category]);

    const { data: images, loading } = useFetchGifs(category);
    // console.log(loading);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading...</p>}
            <div className="card-grid">
                {images.map(img => <GifGridItem key={img.id} {...img} />)}
            </div>
        </>
    )
}
