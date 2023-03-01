const CardList = ({ monsters }) => {
    return (
      <div className="grid  md:grid-cols-3 grid-rows-3 gap-10 mb-6 ">
        {monsters.map((monster) => (
          <div className=" shadow-2xl px-5 py-5 shadow-black" key={monster.id}>
            <img
              alt={`monster ${monster.name}`}
              src={`https://robohash.org/${monster.id}?set=set2&size180x180`}
            />
            <h2 className="text-center text-xl font-bold text-white pt-2">{monster.name}</h2>
            <p className="text-center text-xl font-bold text-white pt-2">{monster.username}</p>
            <p className="text-center text-xl font-bold text-white pt-2">{monster.email}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default CardList;
  