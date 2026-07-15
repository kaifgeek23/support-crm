export default function SearchBar({
    search,
    setSearch
}) {
    return (
        <input
            type="text"
            placeholder="Search tickets..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="w-full p-3 border rounded-lg shadow-sm"
        />
    )
}