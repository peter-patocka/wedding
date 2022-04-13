import React from 'react';
import spotifyIcon from "../../assets/spotify.png";
import './Spotify.css';

export const Spotify = () => {
    return (
        <div className="fh5co-section spotify-section">
            <div className="container">
                <div className="row animate-box">
                    <div className="col-md-12 col-md-offset-0">
                        <div className="spotify-icon">
                            <img src={spotifyIcon} alt="Spotify" />
                        </div>
                        <h3>
                            Doplňte náš svadobný playlist o vaše obľúbené pesničky.
                        </h3>
                        <iframe className="spotify-frame"
                                src="https://open.spotify.com/embed/playlist/5Je1p25hVtjLaCrWGfrchM?utm_source=generator&theme=0"
                                width="100%" height="380" frameBorder="0" allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                        <a
                            href="https://open.spotify.com/playlist/5Je1p25hVtjLaCrWGfrchM?si=690ba1c213b34d4e&pt=8c0617201fdc3a7f16b8d32a1012db42"
                            className="btn btn-default btn-block btn-success"
                            target="_blank" rel="noreferrer"
                        >
                            Pridať pesničku do zoznamu
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
