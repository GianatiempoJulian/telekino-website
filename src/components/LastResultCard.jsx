import { LastResultNumber } from "./LastResultNumber"
import { Button } from "./Button"

export function LastResultCard ({date, lotteryNumber}){
    return(
        <article className='lastResult-card h-full grid justify-center content-center'>
            <header className='lastResult-card-header'>
                <div className="lastResult-card-info h-32 flex flex-col justify-center items-center mb-8">
                    <strong className="bg-amber-600 text-blue-800 rounded-md p-2 w-22">Ultimo Resultado</strong>
                    <div className="grid">
                        <span className="text-slate-50 font-bold">Sorteo N°: </span>
                        <span className="bg-amber-300 rounded-md">{ lotteryNumber }</span>
                    </div>
                    <div className="grid">
                        <span className="text-slate-50 font-bold">Fecha: </span>
                        <span className="bg-amber-300 rounded-md">{ date }</span>
                    </div>
                </div>
                <div className="lastResult-card-numbers">
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
            <aside className="flex justify-center mt-5">
                <Button>Imprimir</Button>
            </aside>
        </article>
    )
}