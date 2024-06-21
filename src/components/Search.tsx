

const Search = ({
    search,searchTerm
}:{
    search:(term:string)=>void,
    searchTerm:string
}) => {
  return (
    
        <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => search(e.target.value)}
            className="border-2 border-gray-300 p-2 max-sm:focus:w-full transition rounded-lg w-1/2"
        />
    
  )
}

export default Search