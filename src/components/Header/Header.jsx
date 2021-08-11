
import React from 'react';
import "./header.css"

export default function Header() {
    return (
        <div className= "header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img 
                className="headerImg"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Neckertal_20150527-6384.jpg/1200px-Neckertal_20150527-6384.jpg" 
                alt="" 
            />
        </div>
    )
}
