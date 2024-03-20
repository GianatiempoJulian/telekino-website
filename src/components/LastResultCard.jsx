import { LastResultNumber } from "./LastResultNumber"
import { LotteryAndDate } from "./LotteryAndDate"
import { Button } from "./Button"

export function LastResultCard ({date, lotteryNumber}){
    return(
        <article className='lastResult-card h-full grid justify-center  bg-blue-500'>
            <header className='lastResult-card-header content-center'>
            <LotteryAndDate
                title ='Ultimo Sorteo'
                lotteryNumber = {lotteryNumber}
                date = {date}
               ></LotteryAndDate>
                <div className="lastResult-card-numbers mt-6">
                    <div className="grid grid-cols-5 grid-rows-3 lastResult-telekino-numbers gap-y-5 gap-x-2">
                        <LastResultNumber
                        style='lastResult-number telekino'>
                                01
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number telekino'>
                                01
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number telekino'>
                                01
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number telekino'>
                                01
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number telekino'>
                                01
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number telekino'>
                                01
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number telekino'>
                                01
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number telekino'>
                                01
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number telekino'>
                                01
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number telekino'>
                                01
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number telekino'>
                                01
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number telekino'>
                                01
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number telekino'>
                                01
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number telekino'>
                                01
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number telekino'>
                                01
                        </LastResultNumber>
                    </div>
                    <img src="images/logoRekino.webp" className="w-24 mt-10" alt="logo-rekino" />
                    <div className="lastResult-rekino-numbers grid grid-cols-5 grid-rows-3 gap-y-5  mt-5 justify-items-center">
                        <LastResultNumber 
                         style='lastResult-number rekino'>
                            02
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number rekino'>
                            02
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number rekino'>
                            02
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number rekino'>
                            02
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number rekino'>
                            02
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number rekino'>
                            02
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number rekino'>
                            02
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number rekino'>
                            02
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number rekino'>
                            02
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number rekino'>
                            02
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number rekino'>
                            02
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number rekino'>
                            02
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number rekino'>
                            02
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number rekino'>
                            02
                        </LastResultNumber>
                        <LastResultNumber
                        style='lastResult-number rekino'>
                            02
                        </LastResultNumber>
                    </div>
                </div>
            </header>
            <aside className="grid grid-cols-2 mt-5 justify-items-center gap-5">
                <Button>Imprimir</Button>
                <Button>Otros resultados</Button>
            </aside>
        </article>
    )
}