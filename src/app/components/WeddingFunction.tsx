import React from 'react';
import { CopyBlock } from "react-code-blocks";
import './WeddingFunction.css';

export const WeddingFunction = () => {

    const CODE = `/**
 * Execute wedding day. The bride and the groom will live together, as a married couple.
 *
 * Wedding day: 📅 10. 6. 2022, 11:00
 * Location: ⛴ Loď Harmónia, Fajnorovo nábrežie 2, Bratislava
 *
 * @see <a href="http://patocka.sk/wedding/">Wedding page</a>
 */
public void wedding() {
    if (acceptWedding(groom) && acceptWedding(bride)) {
        groom.setMarried(bride);
        bride.setMarried(groom);

        try {
            liveHappilyEverAfter(bride, groom);
        } catch (PersonDiedException personDiedException) {
            Person personWhoDied = personDiedException.getPerson();

            throwStuffToBin(personWhoDied);

            if (personWhoDied == groom || personWhoDied == bride) {
                groom.setMarried(null);
                bride.setMarried(null);
            }
        }
    } else {
        new Thread(() -> doSomething(bride)).start();
        new Thread(() -> doSomething(groom)).start();
    }
}`;

    return (
        <div className="wedding-function-component component">
            <div className="container">

                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                        <h2>Wedding function</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-md-offset-0 animate-box">
                        <div className="code-block">
                            <CopyBlock
                                text={CODE}
                                language="java"
                                showLineNumbers={false}
                                startingLineNumber={1}
                                theme={{
                                    mode: 'dark'
                                }}
                                wrapLines
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                        <a
                            href="https://github.com/peter-patocka/wedding/blob/main/java/src/OurLife.java#L25"
                            target="_blank" rel="noreferrer"
                        >
                            Full implementation on <span className="github-logo">github</span>
                        </a>
                    </div>
                </div>

              </div>
        </div>
    );
};
