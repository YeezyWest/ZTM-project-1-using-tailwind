import React, { useState, useEffect } from 'react';
import CardList from './component/card-list/card-list.component';
import SearchBox from './component/search-box/search-box.component';

import './App.css';

const App = () => {
  const [searchField , setSearchField] = useState('');
  const  [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then( (users) => setMonsters(users) );
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
   });

   setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])
 
  const onSearchChange = (e) => {
        //console.log(e.target.value)
        const searchFieldString = e.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);     
      };

      return(
        <div className="App flex flex-col justify-center items-center pt-8">
          <h1 className='text-white text-xl md:text-5xl font-black text-center '>monster Rolodex</h1>
           <SearchBox  onChangeHandler = {onSearchChange}
            placeholder = "search-monster"
            className ="monsters-search-box" />
          <CardList monsters = {filteredMonsters} />
          </div>
      )
};


export default App;
