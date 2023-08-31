function SearchQuery({ handleSubmit, handleSearch }) {
  <div className="search-query flex flex-col gap-4 mt-6">
    <h2>Find, Now!</h2>
    <form onSubmit={handleSubmit} className="mb-6">
      <input type="text" onChange={handleSearch} />
      <button type="submit">Search</button>
    </form>
  </div>;
}

export default SearchQuery;
