import React from 'react';
import './Map.css';

export const Map = () => {
  return (
    <div className="map component" id="map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1676.1834654972256!2d17.112662658299218!3d48.139557784694354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDA4JzIyLjQiTiAxN8KwMDYnNDkuNSJF!5e1!3m2!1sen!2ssk!4v1630833775901!5m2!1sen!2ssk"
            title="48°08'22.4 N 17°06'49.5 E"
            loading="lazy">
        </iframe>
    </div>
  );
};
