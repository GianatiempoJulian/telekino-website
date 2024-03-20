import { VideoCard } from "./VideoCard"

const videos = [
    {
      title:"Comerciales",
      src: "https://http.cat/images/101.jpg"
    },
    {
      title:"Sorteo",
      src: "https://http.cat/images/412.jpg"
    }
  ]

export function VideoList () {
    return (
      <section className="grid grid-cols-2 items-center justify-items-center bg-green-600">
        {
          videos.map((video) => (
            <VideoCard
              key={video.src}
              title={video.title}
              src={video.src}
            >
            </VideoCard>
          ))
        }
      </section>
    )
  }