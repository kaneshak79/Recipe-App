const SearchBar = ({ setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search recipes..."
      className="w-full md:w-1/2 p-3 border rounded-lg shadow"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
