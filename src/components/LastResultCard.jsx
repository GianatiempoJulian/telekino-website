import { LastResultNumber } from "./LastResultNumber"

export function LastResultCard ({date, lotteryNumber}){
    return(
        <article className='lastResult-card h-full grid justify-center content-center'>
            <header className='lastResult-card-header'>
                <div className="lastResult-card-info h-32 flex flex-col justify-center items-center mb-8">
                    <strong className="bg-amber-600 text-blue-800 rounded-md p-2">Ultimo Resultado</strong>
                    <div className="grid">
                        <span className="text-slate-50">Sorteo N°: </span>
                        <span className="bg-amber-300 rounded-md">{ lotteryNumber }</span>
                    </div>
                    <div className="grid">
                        <span className="text-slate-50	">Fecha: </span>
                        <span className="bg-amber-300 rounded-md">{ date }</span>
                    </div>
                </div>
                <div className="lastResult-card-numbers">
                    <div className="grid grid-cols-5 grid-rows-3 lastResult-telekino-numbers gap-y-5 gap-x-2 min-h-80">
                        <LastResultNumber>
                                1
                        </LastResultNumber>
                        <LastResultNumber>
                                1
                        </LastResultNumber>
                        <LastResultNumber>
                                1
                        </LastResultNumber>
                        <LastResultNumber>
                                1
                        </LastResultNumber>
                        <LastResultNumber>
                                1
                        </LastResultNumber>
                        <LastResultNumber>
                                1
                        </LastResultNumber>
                        <LastResultNumber>
                                1
                        </LastResultNumber>
                        <LastResultNumber>
                                1
                        </LastResultNumber>
                        <LastResultNumber>
                                1
                        </LastResultNumber>
                        <LastResultNumber>
                                1
                        </LastResultNumber>
                        <LastResultNumber>
                                1
                        </LastResultNumber>
                        <LastResultNumber>
                                1
                        </LastResultNumber>
                        <LastResultNumber>
                                1
                        </LastResultNumber>
                        <LastResultNumber>
                                1
                        </LastResultNumber>
                        <LastResultNumber>
                                1
                        </LastResultNumber>
                    </div>
                    <h3>Rekino</h3>
                    <div className="lastResult-rekino-numbers grid grid-cols-5 grid-rows-3 gap-y-5 gap-x-2 mt-5">
                        <LastResultNumber>
                            2
                        </LastResultNumber>
                        <LastResultNumber>
                            2
                        </LastResultNumber>
                        <LastResultNumber>
                            2
                        </LastResultNumber>
                        <LastResultNumber>
                            2
                        </LastResultNumber>
                        <LastResultNumber>
                            2
                        </LastResultNumber>
                        <LastResultNumber>
                            2
                        </LastResultNumber>
                        <LastResultNumber>
                            2
                        </LastResultNumber>
                        <LastResultNumber>
                            2
                        </LastResultNumber>
                        <LastResultNumber>
                            2
                        </LastResultNumber>
                        <LastResultNumber>
                            2
                        </LastResultNumber>
                        <LastResultNumber>
                            2
                        </LastResultNumber>
                        <LastResultNumber>
                            2
                        </LastResultNumber>
                        <LastResultNumber>
                            2
                        </LastResultNumber>
                        <LastResultNumber>
                            2
                        </LastResultNumber>
                        <LastResultNumber>
                            2
                        </LastResultNumber>
                    </div>
                </div>
            </header>
            <aside>
                <button>Imprimir</button>
            </aside>
        </article>
    )
}