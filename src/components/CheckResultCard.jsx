import { Button } from './Button';

export function CheckResultCard ({}){
    return(
        <article className='checkResult-card bg-orange-400 '>
            <header className='checkResult-card-header grid w-full h-full justify-center justify-items-center'>
            <strong className="mt-3 text-3xl">Control de cartón</strong>
               <div className="checkResult-data gap-6 p-6">
                    <form action="">
                        <div className="p-2 grid grid-cols-2 w-full">
                            <label className="font-bold ml-4 text-base" htmlFor="lottery">N° sorteo</label>
                            <input type="text" name="lottery" className="focus:ring focus:ring-green-300  h-8" placeholder="2330"/>
                        </div>
                        <div className="p-2 grid grid-cols-2">
                            <label className="font-bold ml-4 text-base" htmlFor="number">N° cartón</label>
                            <input type="text" name="number" className="focus:ring focus:ring-green-300 h-8" placeholder="XX.XX.XXX"/>
                        </div>
                        <div className="p-2 grid grid-cols-2">
                            <label className="font-bold ml-4 text-sm text-base" htmlFor="algorithm ">Algoritmo</label>
                            <input type="text" name="algorithm " className="focus:ring focus:ring-green-300  h-8" placeholder="Ultimos 2 digitos"/>
                        </div>
                    </form>
                </div>
                    <Button>
                        Controlar
                    </Button>
                    <a href="" className='text-white hover:text-gray-300 text-sm'>¿Dónde encontrar estos números?</a>
            </header>
        </article>
    )
}