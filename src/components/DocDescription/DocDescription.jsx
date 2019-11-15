import React from "react";

import "./DocDescription.css";

const DocDescription = () => {
    return (
        <div className="doc"> 
            <div className="profile">
                <img src="https://cdn2.vectorstock.com/i/thumb-large/78/06/person-gray-photo-placeholder-woman-vector-23907806.jpg" alt=""/>
                <div className="disc">
                    <h1>Professional name</h1>
                    <div className="proffe">
                        <p> <a href="/">PSICOLOGIST</a> | Lisbon</p>
                    </div>
                    <p>
                        <i className="fas fa-star" style={{color: "rgb(254, 214, 98)"}}></i>  
                        <i className="fas fa-star" style={{color: "rgb(254, 214, 98)"}}></i>  
                        <i className="fas fa-star" style={{color: "rgb(254, 214, 98)"}}></i>  
                        <i className="fas fa-star" style={{color: "rgb(254, 214, 98)"}}></i>  
                        <i className="fas fa-star" style={{color: "rgb(254, 214, 98)"}}></i>  
                        (20 Reviews)
                    </p>
                    <h2>R$160 /50 minutes</h2>
                </div>
            </div>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus officia perspiciatis illo recusandae similique neque velit beatae culpa. Iure error perspiciatis debitis nulla quis nihil! Consequuntur magnam cupiditate illo.</p>
        </div>
    )
}

export default DocDescription;