

export function Button ({ children }){
    return(
        <button className="bg-green-600 w-3/6 h-14 rounded-md text-green-900
        font-bold hover:bg-green-900 hover:text-green-950 focus:ring focus:ring-white-300 transition delay-100 w-full" >
           {children}</button>
    )
}