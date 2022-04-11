import React from 'react';
import css from 'classnames';
import './Timeline.css';

interface TimelineBox {
    id: string;
    title: string;
    time: string;
    description?: string;
}
const boxes: TimelineBox[] = [
    {
        id: 'timeline-10',
        title: 'Otvorenie móla',
        time: '10:00',
        description: 'Vstup na ľoď je možný od 10:00. V lodnom bufete bude možné sa ponúknuť kávou a nápojmi.'
    },
    {
        id: 'timeline-11',
        title: 'Obrad',
        time: '11:00',
        description: 'Obrad sa bude konať na hornej palube. ' +
            'Pre prípad nepriaznivého počasie si nezabudnite doniesť pršiplášťe alebo dáždnik 😎.'
    },
    {
        id: 'timeline-12',
        title: 'Obed',
        time: '12:00',
        description: 'Prípadné intolerancie nám môžete uviesť do formulára vyššie.',
    },
    {
        id: 'timeline-13',
        title: 'Organizovaný spoločný program',
        time: '13:00',
    },
    {
        id: 'timeline-15',
        title: 'Krájanie torty',
        time: '15:00'
    },
    {
        id: 'timeline-16',
        title: 'Voľný program',
        time: '16:00',
        description: 'K dispozícií bude pokrový stôl, workshop maľovania, animátorka pre deti a samozrejme tanečná zábava v podpalubí.',
    },
    {
        id: 'timeline-18',
        title: 'Večera',
        time: '18:00',
        description: 'Večera bude formou bufetových stolov.',
    },
    {
        id: 'timeline-21',
        title: 'Ukončenie akcie',
        time: '21:00',
        description: 'Ľoď máme prenajatú do 22:00.'
    }
]

export const Timeline = () => {
    return (
        <div className="timeline-component component" id="fh5co-couple-story">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                        <span>Timeline</span>
                        <h2>Orientačný harmonogram</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-md-offset-0">
                        <ul className="timeline animate-box">
                            {boxes.map((box, index) => (
                                <li className={css("animate-box", {"timeline-inverted": index % 2 !== 0})} key={box.id}>
                                    <div className="timeline-badge" id={box.id} />
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h3 className="timeline-title">{box.title}</h3>
                                            <span className="date">{box.time}</span>
                                        </div>
                                        {box.description && (
                                            <div className="timeline-body">
                                                <p>
                                                    {box.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
