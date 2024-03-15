export function VideoCard ({src}){
    return(
        <article className='video-card'>
            <header className='video-card-header'>
                <div>
                    <img src={src} alt="" />
                </div>
            </header>
        </article>
    )
}