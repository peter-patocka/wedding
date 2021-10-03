import React from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';
import './PhotoGallery.css';
import { NUMBER_OF_IMAGES_IN_GALLERY } from '../../data/constants';

const images: ReactImageGalleryItem[] = [...Array(NUMBER_OF_IMAGES_IN_GALLERY-1)].map((_, i) => {
    const index = i+1;
    const original = process.env.PUBLIC_URL + `/images/gallery/image_${index}.jpg`
    const thumbnail = process.env.PUBLIC_URL + `/images/gallery/image_${index}_thumbnail.jpg`;
    return { original, thumbnail }
});

/**
 * Photo gallery module shows images in responsive image gallery.
 * Navigation is included.
 * Mobile devices is supported.
 * URL to gallery: https://photos.app.goo.gl/5VAfYgihnvYTjmsb6
 */
export const PhotoGallery = () => {
  return (
    <div className="photos component" id="photos">
          <ImageGallery items={images} />
    </div>
  );
};
