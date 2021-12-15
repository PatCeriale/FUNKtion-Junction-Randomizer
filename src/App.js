import react, { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Randomizer from './components/Randomizer/Randomizer';
import PeopleList from './components/PeopleList/PeopleList';
import PeopleInput from './components/PeopleInput/PeopleInput';
import API from './utils/API';

function App() {
  const [peopleApi, setPeopleApi] = useState([]);
  const [newPerson, setNewPerson] = useState([]);
  const [addedPeople, setAddedPeople] = useState([]);

  const peopleArray = [
    'Adriana Montana',
    'Allyson Lower',
    'Amber Fusaro',
    'Angela Ferro Capera',
    'April Hofmann',
    'Ariella Cipra',
    'Ashley Creech',
    'Beck Johnson',
    'Bill Coury',
    'Blythe Meyers',
    'Bradley Griffin',
    'Breana Oliver',
    'Carly Temple-Wareham',
    'Chirag Patel',
    'Chris Olson',
    'Chris Williams',
    'Daidrie Berry',
    'Dion Warrick',
    'Eddie Milton',
    'Elizabeth Adams',
    'Ian Leavitt',
    'James Lee',
    'Jarmo Järvi',
    'Jesse Swedlund',
    'Jessica Curl',
    'Jim Elliott',
    'JoJo Saunders',
    'Joni Roe',
    'Joseph "Joe" Marzullo',
    'Josh Brantley',
    'Justin Calvo',
    'Justin Vinall',
    'Keith McMahon',
    'Klay Simmons',
    'Leana Nakkour',
    'Logan Curl',
    'Lynzley Kolakowski',
    'Margaret Farron',
    'Maria Garcia',
    'Marie Lenac',
    'Mark Bardsley',
    'Mark Deichmiller',
    'Matt Hulbert',
    'Michelle Boyd',
    'Mike Sabin',
    'Miranda Wagner',
    'Nathaniel "Nate" Giron',
    'Nina Newsome',
    'Patrick Ceriale',
    'Paul Calabrese',
    'Pierre Rieunier',
    'Prahba Ganapathi',
    'Raphaela Hunter',
    'Rodrigo Ruiz Quevedo',
    'Rolf Springer',
    'Russell Dow',
    'Ryan Teliczan',
    'Sarah Askey',
    'Scott Pierce',
    'Scott Simpson',
    'Shelby DeBoo',
    'Simon Amarasingham',
    'Terran Sisk',
    'Tiraporn "Tira" Olsen',
    'Young Ju Lee',
    'Yuri Tran',
  ];

  useEffect(() => {
    (async () => {
      setPeopleApi(peopleArray);
    })();
  }, []);

  // async await
  //////////////// this works!!!//////////////////
  const ApiPeopleArray = [];
  useEffect(() => {
    (async () => {
      const res = await API.getPeople();
      // setPeopleApi(res.data.results);
      console.log(`From API: ${JSON.stringify(res.data[0].title)}`);
      for (let i = 0; i < res.data.length; i++) {
        ApiPeopleArray.push({ title: res.data[i].title, id: res.data[i].id });
      }
      console.log(ApiPeopleArray[2].id);
    })();
  }, []);
  //////////////////////////////////////////////
  // Set timeout

  function handleAddPeople() {
    setAddedPeople();
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <Container>
          <Row>
            <Col xs={10}>FUNKtion Junction Randomizer</Col>
            <Col xs={2}>
              <Button>Manage People</Button>
            </Col>
          </Row>
        </Container>{' '}
      </header>
      {/* <button onClick={() => console.log(addedPeople)}>state check</button> */}
      <br />
      Number of people on current list:{' '}
      <span style={{ fontWeight: 'bold' }}>{addedPeople.length}</span>
      <br />
      {/* <Randomizer people={peopleApi} /> */}
      <Randomizer people={addedPeople} />
      {/* <PeopleInput people={setNewPerson} /> */}
      <PeopleList
        people={peopleApi}
        // handleAddPeople={() => handleAddPeople}
        handleAddedPeople={setAddedPeople}
        addedPeople={addedPeople}
      />
      <br />
      <br />
      <a
        href='https://github.com/PatCeriale/FUNKtion-Junction-Randomizer'
        target='blank'
      >
        <i className='fab fa-github'></i>
        GitHub
      </a>
    </div>
  );
}

export default App;
