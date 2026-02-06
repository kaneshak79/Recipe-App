
function SearchBar ({setSearch}){
  return (
    <input
      type="text"
      placeholder="Search recipes..."
      className="w-full md:w-1/2 p-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
