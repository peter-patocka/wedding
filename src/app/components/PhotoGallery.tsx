import React from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';
import './PhotoGallery.css';

const sources_images: string[] = [
      "https://lh3.googleusercontent.com/zxvQjaA9km3_abjsdiIgoZJdsRnjOyFlH4OniuIw9su9C6S_2s_mI0IbmrJc3WvOKu9Cj7QrUmyos4GwS3a3_smmszGbUAn6O8PCsu_mjFzxVshy32d7kavbSG4BjMRpcM54AIAodQ=w1920-h1080",
      "https://lh3.googleusercontent.com/r1wMGindkhyghfUQuDb0mJQWF61UcocXgOweIFmS3DPK--0ekinJFSG4qXjGrnPV3zGuquzEhpKVHCaAawPMdPoWSS2DWiob38SgZtkYOyzh_K7vmwBO0fKlcUVhHi3vxRugQOPrcw=w1920-h1080",
      "https://lh3.googleusercontent.com/Ju3RholSoFHn89uCw3uSJMysoa57hG7MYgslRM4y3b_o3xXJHd1wmaeVQQOPVBWKd0hiab3EhXR7Exb4RStitEkD9GzJjXHvSilg4SZlKoh3-0WPQwdI1W3DWwgPSbs0e7WrqcDiwA=w1920-h1080",
      "https://lh3.googleusercontent.com/NqPKauc9bHOSrnbXYfR4aqNq4W8rGhJ93x9StMZP9wOH5bscWBiCvroaCjtkApIDb9ZU4oL_prnO5IQy9jHKBYmXyaFeSi2BpayBIGWigWugoFJlbm7PFDmtbs5Sgyafi7kF1gqq6Q=w1920-h1080",
      "https://lh3.googleusercontent.com/wOSuPjdBvgw40qUpuQK1eVd5Dh2FZ7pe32LRThBMD04Kj9da98EOcYUlRiMxBIzG2ZuDgCs-qq2nHEFHMMRxKzgoxs3tbfLQlxLUvvfuMVQ2j5vcXquZs2y8MMykAvFa-S39JGQwFQ=w1920-h1080",
      "https://lh3.googleusercontent.com/Ew2yALFACVM3lLTAbNWmL_ZF-xHqREHCAMlVsQW7WpBiZ_z7AfGgkcoc087mkouEp25KNKDrXL8JEr-Pfp7FCTnY6a7QvDvsX3Fvjl0OFlh34TguI9hfzd4wTAsk1c36grsMNyKw_A=w1920-h1080",
      "https://lh3.googleusercontent.com/OqqWOTguIc6ENRmo0oSova9DGcexbZ3QhT9nDaa51ugh9CbFrep_TjfKfRNTCNdXOZWQSBTuZd1l-8q2BjnknXsj7TfQAmMOufovBmih-WvUwx-szOVf8PFYbG3k1gXgoNz2PXk_Vw=w1920-h1080",
      "https://lh3.googleusercontent.com/TnqJAPb3Re6VmcDXrTwsBHe6lhdXlDi9W8NuM_txDYkKIHnZcKLedlPH3eyTwia1oq4mo20EOrk5GksZessCSoVyizD-9XlwEsuCbMnA2IqtP2S7yZtBiCsrbmfvDIrZcZczVeAFuw=w1920-h1080",
      "https://lh3.googleusercontent.com/D-MHH4gYx2SwsNd5aSpuHqn9K4mInRNPdenCKVLxJ5HLbrzFtxRXpMWIFnVPPDNlGcAM4ftIbGGTU2w1oWyKfHpB2U9566jAXonT1-VchcipaXqhpqi2sVH3u8-QSGvQ_iOr2YzeLQ=w1920-h1080",
      "https://lh3.googleusercontent.com/c47rsnFyAOvqfgxn3JwpDKJEiPhSbsiy4O2tI3ea3iymSQ7TU33ticAhmTI2pkvYGTsFZdfJC5BJpF21jSyy2ZtQpZAYwSxJ6ZcOQfctGNyw9s6rN8bInHGupYrLu5ugbKHWhD1osA=w1920-h1080",
      "https://lh3.googleusercontent.com/wJeuc98yoVFxGNHT5wwpMp6r9tutEF7UyonaCkC5-IwBnpHRv7xbA60rEvov_enpjHxt3e_eopiJ7q3Ht6fB9SwjI6O8AG8EGLs1fZOMlepSM1SYphd8_dCJb40FBt9YpNiNZl45pw=w1920-h1080",
      "https://lh3.googleusercontent.com/_rQSOE8RJF_LocY49NofaZp6_8vFr-4KKleUXH_RzMWDDyqvgJq4eedD2yy7KzvvzQWKx5HJdtxlRqpEZPDX_5c1VEKhyWAXP7jdHHT9TCiHafkCS5k24GyFeMKIKb8dNlL6R6mPQQ=w1920-h1080",
      "https://lh3.googleusercontent.com/HaJW3YiPzbhjCANeR7iQ5qyuTGGZ7Xl5To7NWdiUn0AJtDeWWWo-IqnkcGiUcy7f4EVNaBw2cDE7xfFv9tlMEnVD94jcr6vKyNsIcoGK0v0ty_8w9WbGKwxdN6aMUZC4_-XVQp7ahg=w1920-h1080",
      "https://lh3.googleusercontent.com/BlFe6hMqzOIdX4yzfSJaPn6wCLi40tpka4cQg77u4wrzq9b_Le48H63AQx-MjKHYtjWhf6fRxqOnNo_sLJe36DeAc-Y1Lh0YyjNNIcMo9k6s8QdBcUj_OM1v2X5puooiNG1Ok7H85Q=w1920-h1080",
      "https://lh3.googleusercontent.com/BoDrtJxqGAtPMp_CmBBm0GzO-V-kenHVzcWL5SIctoYBWZ23daX6bsy-61BA6fw-yzDpZvWlOJWOBlGlat-T8JOvGf0Mcnw_-p0-yHU-ZeC7L6wp2LU-dSMis8INJl9fWtCHDS7yRg=w1920-h1080",
      "https://lh3.googleusercontent.com/4Z8R0xLlMJRTqs7IWr9UTEFdlm9QVlviSXfaKp1-qmKeKxPFLYnceLS86dK8vZUNuXfmH9G4SYfuG_0e1QcqHMz0g4VugxjTtVxGKe9bSfOCf4Gyreb9OFg78ex1UPs8xv1cTWtr7w=w1920-h1080",
      "https://lh3.googleusercontent.com/cSdGUbwhmkrbkvYSTajTLcpMIwVLtaf-gZ9cd5san1QVxpTbnZ2HD1g86nbFWCZ44Wf7LsKzbmst9ETnSMaJsyTfB64fR5ShKLLXi_MYnCLCvjxw9fvBmelH4JkETn5DvfnaWkcmuQ=w1920-h1080",
      "https://lh3.googleusercontent.com/P7CHI3jnS_2IS3e3811p2zJw3QaShVdU1zbWtcjyAuJBk-7VqQ5WgKR_RGNi3ZKf2NL92JlGdHHAVlcv4IOPSCu1IuBBBa07vKwBovNfEOWArDe08zrcLjydyLPhtHW4gDqutVGjrA=w1920-h1080",
      "https://lh3.googleusercontent.com/M9VEKe0rI1YcszPIiiVnYJ7bPLQskiuRRuGDZTHjEoi5OxaQPtSrgxVkYrPn6pfx1SJpnq6lfVFuqmOC1rftYLvDerTGYSrgjAaEyRw8O_FYzW48RT5PEMCS--RZ-PWiYfqNZA1TCQ=w1920-h1080",
      "https://lh3.googleusercontent.com/WLiiQHkp84JeO9pY7QuOF40mTMqvv93W-B4tbA5ktQJN6vn0n55o2lXlxFTdNFGur8wEuOLUY9mLbosIUjflDOeVrG6P4lDECCLEcEIJ6nbEAzbR6FEw5ml2uW8js5u-EWKp6dhv_A=w1920-h1080",
      "https://lh3.googleusercontent.com/3ZDod79hpoDmjMtaZtb_05nGWU3oX_pTCyIpiIkt0WPxsnB53vt-BIHWO0mnd7S9hSG2fHcb_YPEpPveMjmux4UZmYdqECCgzAMMQp77jbKMV3my8kH2do69KcqeWve38iapWpPk_A=w1920-h1080",
];
const images: ReactImageGalleryItem[] = sources_images.map(src => {
      const thumbnail = src.replace("w1920-h1080", "w480-h270");
      return { original: src, thumbnail }
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
