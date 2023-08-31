function SearchQuery({ handleSubmit, handleSearch }) {
  <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleSearch} />
    <button type="submit">Search</button>
  </form>;
}

export default SearchQuery;
