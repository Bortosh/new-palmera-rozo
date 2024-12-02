import { useRef, useState } from "react";
import DefaultMain from "../../generalPalmeras/DefaultMain"
import pictures from "./components/images"
import styles from './styles/galeria.module.css'
import videos from "./components/videos";
import VideoPlayer from "./components/VideoPlayer";


const GaleriaContainer = () => {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>('fotos');
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
  };

  const handlePlay = (id: number) => {
    videoRefs.current.forEach((video, index) => {
      if (index !== id && video) {
        video.pause();
      }
    });
  };

  return (
    <DefaultMain title="Galería">
      <div className={styles.wrapperOptions}>
        <p className={`${styles.option} ${selectedOption === 'fotos' ? styles.selected : ''}`} onClick={() => selectOption('fotos')}>fotos</p>
        <p className={`${styles.option} ${selectedOption === 'videos' ? styles.selected : ''}`} onClick={() => selectOption('videos')}>videos</p>
      </div>
      <>
        <div className={styles.galleryContainer}>
          {
            selectedOption === 'fotos' &&
            pictures.map(({ id, src, alt }) => (
              <div key={id} className={styles.galleryItem} onClick={() => openModal(src)}>
                <img src={src} alt={alt} className={styles.galleryImage} />
              </div>
            ))
          }

          {
            selectedOption === 'videos' &&
            videos.map(({ id, src }) => (
              <div key={id} className={styles.galleryItem}>
                <VideoPlayer
                  id={id}
                  src={src}
                  videoRefs={videoRefs}
                  handlePlay={handlePlay}
                />
              </div>
            ))
          }
        </div>
        {
          selectedOption === 'fotos'
            ?
            <>
              {selectedImage && (
                <div className={styles.modal} onClick={closeModal}>
                  <div className={styles.modalContent}>
                    <img src={selectedImage} alt="Imagen ampliada" />
                  </div>
                </div>
              )}
            </>
            :
            null
        }
      </>
    </DefaultMain>
  )
}

export default GaleriaContainer