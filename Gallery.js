import React from "react";
import MenuApi from "./MenuApi";

const Gallery = () => {
    return (
        <>
            {
                MenuApi.map((value) => {
                    const { id, image, category, rate, inc, dec } = value
                    return (
                        <div className="container" key={id}>
                            <div className="box">
                                <img src={image} alt="food" />
                                <h2>{category}</h2>
                                <h4>{rate}</h4>
                                <span className="plus">{inc}</span>
                                <span className="minus">{dec}</span>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};
export default Gallery;