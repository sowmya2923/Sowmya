import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import audio from "./assets/audio.mp3";
import PicSong from "./assets/PicSong.jpeg";
import "./SongSlide.css";

function SongSlide() {
    const audioRef = useRef(null);
    const navigate = useNavigate();
    const [isPlaying, setIsPlaying] = useState(false);

    // ▶ Play / Pause Toggle
    const handleAudioToggle = () => {
        if (!isPlaying) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    // 💗 Navigate Button
    const handleNavigate = () => {
        audioRef.current.pause();   // stop song before leaving
        navigate("/together");
    };

    return (
        <div className="song-container">

            <h1 className="song-heading">Song for U 💖</h1>

            <div className="image-wrapper">
                <img src={PicSong} alt="Song Cover" />
            </div>

            {/* ▶ Play / Pause Button */}
            <button 
                className="icon-play-button" 
                onClick={handleAudioToggle}
            >
                {isPlaying ? "⏸" : "▶"}
            </button>

            {/* 💗 Pink Navigate Button */}
            <button 
                className="play-button"
                onClick={handleNavigate}
            >
                Continue Together 💕
            </button>

            <audio ref={audioRef} src={audio} />

        </div>
    );
}

export default SongSlide;
