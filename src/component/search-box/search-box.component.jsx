const SearchBox = ({className, placeholder, onChangeHandler}) => (
        <div className="py-3">
        <input className={`search-box ${className} p-2 rounded-lg outline-none`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler} 
       />
        </div>
      )

export default SearchBox
