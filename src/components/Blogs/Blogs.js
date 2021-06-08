import React from 'react';
import NavBar from '../NavBar/NavBar';
import Blog1 from './Blog1/Blog1';
import Blog2 from './Blog2/Blog2';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div my-5>
                <NavBar></NavBar>
            </div>
            <div>
                <h1>This is blogs</h1>
                <div>
                   <Blog1></Blog1>
                </div>
                <div style={{margin: '40px'}}>
                    <Blog2></Blog2>
                </div>
                {/* <div style={{margin: '40px'}}>
                    <Blog1></Blog1>
                </div> */}

                
            </div>
        </div>
    );
};

export default Blogs;