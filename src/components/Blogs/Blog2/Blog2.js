import React from 'react';
import './Blog2.css';

const Blog2 = () => {
    return (
        <div class="blog-card spring-fever">
            <div class="title-content">
                <h3><a href="#">More Things Needs To Know About JavaScript</a></h3>
                <div class="intro"> <a href="#">JavaScript</a> </div>
            </div>
            <div class="card-info">
            JavaScript is a vast field. Today we won’t discuss about core concepts, but these topics are very important for our work....
        <a href="https://nasif-nirjhor.medium.com/more-things-needs-to-know-about-javascript-7a8cd2a8b047">Read Article<span class="licon icon-arr icon-black"></span></a>
            </div>
            <div class="utility-info">
                <ul class="utility-list">
                    <li><span class="licon icon-like"></span><a href="#">2</a></li>
                    <li><span class="licon icon-com"></span><a href="#">12</a></li>
                    <li><span class="licon icon-dat"></span>06 May 2021</li>
                    <li><span class="licon icon-tag"></span><a href="#">Photos</a>, <a href="#">Nice</a></li>
                </ul>
            </div>
            <div class="gradient-overlay"></div>
            <div class="color-overlay"></div>
        </div>
    );
};

export default Blog2;