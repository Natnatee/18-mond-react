import PokemonFetch from "./ComponentAPI";
function Api (){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
          <PokemonFetch />
        </div>
    )
}

export default Api