import React from 'react';
import './Header.css';
import { BRIDE, GROOM } from '../../data/constants';

export const Header = () => {
    return (
        <div className="header component">
            <header id="fh5co-header" className="fh5co-cover" role="banner"
                    data-stellar-background-ratio="0.5">
                <div className="overlay"/>
                <div className="container container-full">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <div className="display-t">
                                <div className="display-tc animate-box" data-animate-effect="fadeIn">
                                    <h1>
                                        <span className="groom">{GROOM}</span>
                                        <span className="and">&amp;</span>
                                        <span className="bride">{BRIDE}</span>
                                     </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};
