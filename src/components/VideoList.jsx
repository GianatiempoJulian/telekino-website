import { VideoCard } from "./VideoCard"

const videos = [
    {
        src: "https://http.cat/images/101.jpg"
    },
    {
        src: "https://http.cat/images/412.jpg"
    }
  ]

export function VideoList () {
    return (
      <section className="videoList">
        {
          videos.map((video) => (
            <VideoCard
              key={video.src}
              src={video.src}
            >
            </VideoCard>
          ))
        }
      </section>
    )
  }