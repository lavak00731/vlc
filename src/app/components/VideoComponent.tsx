import type VideoComponentInterface from "../interfaces/VideoComponentInterface"


export const VideoComponent = ({width, height, poster, src, className}:VideoComponentInterface) => {
  return (
    <video
      width={ width }
      height={ height }
      poster={ poster }
      className={ className }
      controls
      preload="none"
    >
      <source src={ src } type="video/mp4" />
      
      Tu navegador no soporta  este tipo de video
    </video>
  )
}
