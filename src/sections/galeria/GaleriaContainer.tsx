import { useState } from "react";
import DefaultMain from "../../generalPalmeras/DefaultMain"
import pictures from "./components/images"
import styles from './styles/galeria.module.css'

const GaleriaContainer = () => {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };



  return (
    <DefaultMain title="Galería">
      <>
        <div className={styles.galleryContainer}>
          {
            pictures.map(({ id, src, alt }) => (
              <div key={id} className={styles.galleryItem} onClick={() => openModal(src)}>
                <img src={src} alt={alt} className={styles.galleryImage} />
              </div>
            ))
          }
        </div>

        {selectedImage && (
          <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent}>
              <img src={selectedImage} alt="Imagen ampliada" />
            </div>
          </div>
        )}

      </>
    </DefaultMain>
  )
}

export default GaleriaContainer
