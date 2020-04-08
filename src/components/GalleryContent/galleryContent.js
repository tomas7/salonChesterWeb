import React, {useState, useCallback} from 'react'
import myClass from './galleryContent.module.scss'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import * as porftolioImgs from '../../images/photos/photos'

function GalleryContent() {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const PHOTO_SET = [
        {
          src: porftolioImgs.PortfolioImg.img1,
          width: 6,
          height: 10,
          title: "Photoshoot, photo, Creative Photoshoot, Corporate, Corporate photoshoot, Photographer"
        },
        {
          src: porftolioImgs.PortfolioImg.img2,
          width: 10,
          height: 6,
          title: "App design, web design, website design, webdesign, webdeign in Nordjylland, webdesigner Nordjyland, Webdevelopment, Worpress, Wordpress Nordjylland"
        },
        {
          src: porftolioImgs.PortfolioImg.img3,
          width: 1,
          height: 1,
          title: "Photoshoot, photo, Corporate, Corporate photoshoot, Photographer"
        },
        {
          src: porftolioImgs.PortfolioImg.img4,
          width: 10,
          height: 6,
          title: "Photoshoot, photo, Social media, Corporate, Corporate photoshoot, Photographer"
        }
      ];
  
      const openLightbox = useCallback((event, { PHOTO_SET, index }) => {
          console.log(index)
        setCurrentImage(index);
        setViewerIsOpen(true);
      }, []);
    
      const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
      };

      function columns(containerWidth) {
        let columns = 1;
        if (containerWidth >= 500) columns = 1;
        if (containerWidth >= 900) columns = 2;
        if (containerWidth >= 1500) columns = 3;
        if (containerWidth >= 2400) columns = 4;
        return columns;
      }

    return (
        <div className={myClass.galleryWrapper}>
            <div className={myClass.textWrapper}>
                <h1>Photos of our animals</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, a numquam? Quo!</p>
            </div>
            <div className={myClass.imagesWrapper}>
            <Gallery direction="column" columns={columns} photos={PHOTO_SET} onClick={openLightbox} margin={20}/>
                <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                    <Carousel
                        currentIndex={currentImage}
                        views={PHOTO_SET.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                        }))}
                    />
                    </Modal>
                ) : null}
                </ModalGateway>
            </div>
        </div>
    )
}

export default GalleryContent
