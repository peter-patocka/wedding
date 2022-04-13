import React from 'react';
import instagramIcon from "../../assets/instagram.png";
import './InstagramFeed.css';

export const InstagramFeed = () => {

    const anchor = (
        <a
            href="https://www.instagram.com/explore/tags/peteraluciasvadba/"
            target="_blank" rel="noreferrer"
        >
            #peteraluciasvadba
        </a>
    );

    return (
        <div className="fh5co-section instagram-section">
            <div className="container">
                <div className="row animate-box">
                    <div className="col-md-12 col-md-offset-0">
                        <div className="instagram-icon">
                            <img src={instagramIcon} alt="Instagram" />
                        </div>
                        <div className="hashtag">
                            {anchor}
                        </div>
                        <h2>
                            Zdieľajte vaše fotky z našej svadby s tagom {anchor}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
