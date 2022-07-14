import React from 'react'
import styled from 'styled-components'
import {BsArrowLeft} from 'react-icons/bs'
import video from "../assets/video.mp4";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
.player {
    width:100vw;
    height:100vh;
    .back{
        position:absolute;
        padding:2rem;
        z-index:1;
        svg{
             font-size:2rem;
                color:white;
                cursor:pointer;
                &:hover{
                    opacity:0.8;
                    transform:scale(1.2);
                    transition:0.2s ease-in-out;
                }
    }
    }
    video{
        height:100%;
        width:100%;
        object-fit:cover;
    }
}

    
    
    `

const Player = () => {
    const Navigate = useNavigate()
  return (
    <Container>
    <div className="player">
    <div className="back">
    <BsArrowLeft onClick={()=>Navigate(-1)}/>
    </div>
    <video src={video} autoPlay loop controls>
    </video>
    </div>

    </Container>
  )
}

export default Player
