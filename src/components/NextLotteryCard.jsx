export function NextLotteryCard ({date, lotteryNumber, price, prize}){
    return(
        <article className='nextLottery-card'>
            <header className='nextLottery-card-header bg-rose-800'>
                <div className="nextLottery-card-info">
                    <strong>Proximo Sorteo!</strong>
                    <div>
                        <span>Sorteo N°: </span>
                        <span>{ lotteryNumber }</span>
                    </div>
                    <div>
                        <span>Fecha: </span>
                        <span>{ date }</span>
                    </div>
                    <div className="bg-neutral-100">
                        <span className="text-green-600">Valor del cartón: </span>
                        <span className="font-bold">${ price }</span>
                    </div>
                </div>
                <div className="nextLottery-prize">
                    <div className="nextLottery-prize-card">
                        <span className="bg-green-500 text-white">Pozo estimado a los 15 aciertos</span>
                        <div className="bg-neutral-100">
                            <h1 className="font-bold text-5xl">${ prize.money }</h1>
                            <h3>+ { prize.car } </h3>
                            <h3>+ { prize.house }</h3>
                        </div>
                    </div>
                </div>
            </header>
        </article>
    )
}