import React from 'react';
import dressCode from "../../assets/dress-code.jpg";
import './DressCode.css';

export const DressCode = () => {
    return (
        <div className="dresscode-component component" id="fh5co-couple-story">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                        <span>Dress code:</span>
                        <h2>Semi-formal</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                        <img src={dressCode} alt="Semi-formal dress code" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-md-offset-0">
                        <ul className="dresscode animate-box">
                            <li>
                                <a
                                    href="https://www.bandi.cz/bandi-radi/jak-se-obleknout-podle-dress-codu-semi-formal"
                                    target="_blank" rel="noreferrer"
                                >
                                    Jak se obléknout podle dress codu Semi Formal
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.brides.com/semi-formal-wedding-attire-4800687"
                                    target="_blank" rel="noreferrer"
                                >
                                    What Is Semi-Formal Wedding Attire?
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
