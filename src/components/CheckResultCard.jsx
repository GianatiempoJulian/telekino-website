export function CheckResultCard ({}){
    return(
        <article className='checkResult-card'>
            <header className='checkResult-card-header'>
               <h1>Control de CARTÓN</h1>
               <div className="checkResult-data gap-6 p-6">
                    <form action="">
                        <div className="p-2">
                            <label className="w-12 mr-5" htmlFor="lottery">N° de sorteo</label>
                            <input type="text" name="lottery" placeholder="2330"/>
                        </div>
                        <div className="p-2">
                            <label className="w-12 mr-5" htmlFor="number">N° de cartón</label>
                            <input type="text" name="number" placeholder="número"/>
                        </div>
                        <div className="p-2">
                            <label className="w-12 mr-5" htmlFor="algorithm ">Algoritmo</label>
                            <input type="text" name="algorithm " placeholder="algoritmo"/>
                        </div>
                    </form>
               </div>
            </header>
        </article>
    )
}