import React from 'react'
import {useState} from 'react';
import Navbar from '../components/Navbar';

const Netflix = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onScroll = () => {
        setIsScrolled(window.scrollY ===0 ? false : true);
        return ()=>{
            window.onScroll = null;
        }
    }

  return (
    <Navbar isScrolled={isScrolled}/>
  )
}

export default Netflix;
