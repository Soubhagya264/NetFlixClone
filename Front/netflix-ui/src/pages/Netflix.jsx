import React from 'react'
import {useState} from 'react';
import Navbar from '../components/Navbar';
import backgroundImage from "../assets/Home.png";
import MovieLogo from "../assets/HomeTitle1.png";
import {FaPlay} from 'react-icons/fa';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {useEffect} from 'react';
import { getGenres } from '../store';



 const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(50%);
      }
    img {
      height: 100vh;
      width: 100vw;
    
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
        img {
          width: 45%;
          height: 60%;
          margin-bottom: -5rem;
          margin-left: 2rem;
          filter: brightness(80%);
        }
      }
      .buttons {
        margin: 5rem;
        gap: 2rem;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;

const Netflix = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres());
    }
    , []);

    window.onscroll = () => {
      setIsScrolled(window.pageYOffset <1 ? false : true);
      return () => (window.onscroll = null);
    };
    
    
    const navigate = useNavigate();
  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
        <img
          src={backgroundImage}
          alt="background"
          className="background-image"
        />
        <div className="container">
          <div className="logo">
            <img src={MovieLogo} alt="Movie Logo" />
          </div>
          <div className="buttons flex">
            <button
              onClick={() => navigate("/player")}
              className="flex j-center a-center"
              
            >
              <FaPlay />
              Play
            </button>
            <button className="flex j-center a-center">
              <AiOutlineInfoCircle />
              More Info
            </button>
          </div>
        </div>
      </div>
      {/* <Slider movies={movies} /> */}
    </Container>
  )
}

export default Netflix;
