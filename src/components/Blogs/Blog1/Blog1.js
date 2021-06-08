import React from 'react';
import './Blog1.css';

const Blog1 = () => {
    return (
        <div class="blog-card spring-fever">
            <div class="title-content">
                <h3><a href="#">Overview of JavaScript</a></h3>
                <div class="intro"> <a href="#">JavaScript</a> </div>
            </div>
            <div class="card-info">
                We all know JavaScript as dynamic programming language. It has become popular for using in building web pages.Because it allows client-side to interact with the use...
        <a href="https://nasif-nirjhor.medium.com/overview-of-javascript-542d18b56bf8">Read Article<span class="licon icon-arr icon-black"></span></a>
            </div>
            <div class="utility-info">
                <ul class="utility-list">
                    <li><span class="licon icon-like"></span><a href="#">2</a></li>
                    <li><span class="licon icon-com"></span><a href="#">12</a></li>
                    <li><span class="licon icon-dat"></span>05 May 2021</li>
                    <li><span class="licon icon-tag"></span><a href="#">Photos</a>, <a href="#">Nice</a></li>
                </ul>
            </div>
            <div class="gradient-overlay"></div>
            <div class="color-overlay"></div>
        </div>
    );
};

export default Blog1;