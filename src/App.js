import react, { useState, useEffect } from 'react';
import './App.css';
import Randomizer from './components/Randomizer/Randomizer';
import PeopleList from './components/PeopleList/PeopleList';
import API from './utils/API';

function App() {
  const [peopleApi, setPeopleApi] = useState([]);
  // ????????????????
  // useEffect(() => {
  //   API.getPeople()
  //     // .json()
  //     .then((items) => {
  //       setPeopleApi(items);
  //       console.log(peopleApi);
  //     });
  // }, []);

  // async await
  useEffect(() => {
    (async () => {
      const res = await API.getPeople();
      setPeopleApi(res.data.results);
      console.log(res);
    })();
  }, []);

  // Set timeout

  return (
    <div className='App'>
      <header className='App-header'>FUNKtion Junction Randomizer</header>
      <button onClick={() => console.log(peopleApi)}>state check</button>
      <Randomizer people={peopleApi} />
      <PeopleList people={peopleApi} />
    </div>
  );
}

export default App;
