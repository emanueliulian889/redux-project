import React from 'react';
import SongList from "./components/songList/SongList";
import SongDetails from "./components/songDetails/SongDetails";

const App = () => {

  return (
    <div className={`ui container grid`} style={{padding: '25px'}}>
        <div className='ui row'>
            <div className="column eight wide">
                <SongList />
            </div>
            <div className='column eight wide'>
                <SongDetails />
            </div>
        </div>
    </div>
  );
}

export default App;
