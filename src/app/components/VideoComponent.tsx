import type VideoComponentInterface from "../interfaces/VideoComponentInterface"


export const VideoComponent = ({width, height, poster, src}:VideoComponentInterface) => {
  return (
    <video
      width={ width }
      height={ height }
      poster={ poster }
      controls
      preload="none"
    >
      <source src={ src } type="video/mp4" />
      
      Tu navegador no soporta  este tipo de video
    </video>
  )
}
