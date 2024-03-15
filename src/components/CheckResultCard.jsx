export function CheckResultCard ({}){
    return(
        <article className='checkResult-card'>
            <header className='checkResult-card-header'>
               <h1>Control de CARTÓN</h1>
               <div className="checkResult-data">
                    <form action="">
                        <label htmlFor="lottery">N° de sorteo</label>
                        <input type="text" name="lottery" placeholder="2330"/>
                        <label htmlFor="number">N° de cartón</label>
                        <input type="text" name="number" placeholder="número"/>
                        <label htmlFor="algorithm ">Algoritmo </label>
                        <input type="text" name="algorithm " placeholder="algoritmo"/>
                    </form>
               </div>
            </header>
        </article>
    )
}