import { LotteryAndDate } from "./LotteryAndDate"

export function NextLotteryCard ({date, lotteryNumber, price, prize}){
    return(
        <article className='nextLottery-card'>
            <header className='nextLottery-card-header bg-amber-300 w-full h-full flex flex-col justify-center'>
               <LotteryAndDate
                title ='Proximo Sorteo'
                lotteryNumber = {lotteryNumber}
                date = {date}
               ></LotteryAndDate>
                <div className="nextLottery-prize">
                    <div className="nextLottery-prize-card flex flex-col items-center">
                        <h1 className="font-bold text-7xl inline mb-2">${ prize.money } MILLONES</h1>
                        <h3>+ { prize.car } + {prize.house}</h3>
                        <h5 className="text-sm mt-2">Valor del carton <span className="font-bold">$500</span></h5>
                    </div>
                </div>
            </header>
        </article>
    )
}