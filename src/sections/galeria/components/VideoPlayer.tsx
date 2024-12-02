import { useState, useRef, useEffect } from "react";
import styles from "../styles/galeria.module.css";

interface VideoPlayerProps {
  id: number;
  src: string;
  videoRefs: React.MutableRefObject<HTMLVideoElement[]>;
  handlePlay: (id: number) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ id, src, videoRefs, handlePlay }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const onPause = () => setIsPlaying(false);
      const onPlay = () => setIsPlaying(true);

      video.addEventListener("pause", onPause);
      video.addEventListener("play", onPlay);

      return () => {
        video.removeEventListener("pause", onPause);
        video.removeEventListener("play", onPlay);
      };
    }
  }, []);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        handlePlay(id);
        video.play();
      }
    }
  };

  const handleFullScreen = () => {
    const video = videoRef.current;
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if ((video as any).webkitRequestFullscreen) {
        (video as any).webkitRequestFullscreen();
      } else if ((video as any).msRequestFullscreen) {
        (video as any).msRequestFullscreen();
      }
    }
  };

  return (
    <div className={styles.videoContainer}>
      <video
        ref={(vid) => {
          videoRefs.current[id] = vid as HTMLVideoElement;
          videoRef.current = vid;
        }}
        src={src}
        className={styles.galleryVideo}
      />

      <div className={styles.controls}>
        <button onClick={handlePlayPause} className={styles.controlButton}>
          {isPlaying ? "Pausa" : "Play"}
        </button>
        <button onClick={handleFullScreen} className={styles.controlButton}>
          Pantalla Completa
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
