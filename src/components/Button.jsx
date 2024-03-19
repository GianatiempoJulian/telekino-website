

export function Button ({ children }){
    return(
        <button className="bg-amber-600 w-3/6 h-16 rounded-md text-blue-800
        font-bold hover:bg-amber-700 hover:text-amber-800 focus:ring focus:ring-white-300 transition delay-100">
           {children}</button>
    )
}