export function LotteryAndDate({title, lotteryNumber, date}){
    return(
        <div className="grid justify-items-center">
        <strong className="text-3xl mb-2">{title}</strong>
        <div className="grid w-1/4 justify-center lottery-date">
            <span>Sorteo </span>
            <span className="font-bold">{ lotteryNumber }</span>
        </div>
        <div className="grid w-1/4 justify-center lottery-date">
            <span>Fecha </span>
            <span className="font-bold">{ date }</span>
        </div> 
    </div>
    )
}