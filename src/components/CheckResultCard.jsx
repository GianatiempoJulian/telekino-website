import { Button } from './Button';

export function CheckResultCard ({}){
    return(
        <article className='checkResult-card bg-emerald-700 '>
            <header className='checkResult-card-header grid w-full h-full justify-center justify-items-center'>
            <strong className="bg-emerald-400 text-blue-800 rounded-md h-12 w-56 mt-5 flex items-center justify-center">Control de cartón</strong>
               <div className="checkResult-data gap-6 p-6">
                    <form action="">
                        <div className="p-2 grid grid-cols-2 w-full">
                            <label className="text-white font-bold ml-4" htmlFor="lottery">N° sorteo</label>
                            <input type="text" name="lottery" className="focus:ring focus:ring-green-300  h-8" placeholder="2330"/>
                        </div>
                        <div className="p-2 grid grid-cols-2">
                            <label className="text-white font-bold ml-4 text-sm" htmlFor="number">N° cartón</label>
                            <input type="text" name="number" className="focus:ring focus:ring-green-300 h-8" placeholder="XX.XX.XXX"/>
                        </div>
                        <div className="p-2 grid grid-cols-2">
                            <label className="text-white font-bold ml-4 text-sm" htmlFor="algorithm ">Algoritmo</label>
                            <input type="text" name="algorithm " className="focus:ring focus:ring-green-300  h-8" placeholder="Ultimos 2 digitos"/>
                        </div>
                    </form>
                    </div>
                    <Button>
                            Controlar
                    </Button>
            </header>
        </article>
    )
}