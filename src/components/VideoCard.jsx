export function VideoCard ({title,src}){
    return(
        <article className='video-card'>
            <header className='video-card-header'>
                <div className="bg-green-900 border-2 border-green-900 text-center">
                    <img className="w-72" src={src} alt=""/>
                    <span className="font-bold">{title}</span>
                </div>
            </header>
        </article>
    )
}