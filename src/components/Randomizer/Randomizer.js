import react, { useState } from 'react';
import {
  Form,
  Button,
  Col,
  Container,
  Row,
  FloatingLabel,
} from 'react-bootstrap';

// program to get a random item from an array

export default function Randomizer(props) {
  const [peopleNumber, setPeopleNumber] = useState(1);
  const [potentialPeople, setPotentialPeople] = useState([]);
  const [people, setPeople] = useState([]);
  const [groupType, setGroupType] = useState('Number of groups');

  // const array = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  //   22, 23, 24, 25,
  //26, 27, 28, 29, 20, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  //41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
  //60, 61, 62, 63, 64, 65,
  // ];

  const array = props.people;

  function randomSort(arr) {
    const randomSortArray = arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
    console.log(randomSortArray, groupType);
    const newNew =
      groupType === 'Number of groups'
        ? chunkArrayGroupSize(randomSortArray, peopleNumber)
        : chunkArrayPeopleNumber(randomSortArray, peopleNumber);
    console.log(newNew);
    setPeople(newNew);
  }

  function chunkArrayPeopleNumber(myArray, chunk_size) {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      const myChunk = myArray.slice(index, index + chunk_size);
      // Do something if you want with the group
      tempArray.push(myChunk);
    }

    return tempArray;
  }

  function chunkArrayGroupSize(array, number) {
    const copyArray = array.map((v) => v);
    let result = [];
    for (let i = number; i > 0; i--) {
      result.push(copyArray.splice(0, Math.ceil(copyArray.length / i)));
    }
    return result;
  }

  function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];

    return item;
  }

  function repeat(func, times) {
    func();
    times && --times && repeat(func, times);
  }

  function getRandomList() {
    const newArray = [];
    // console.log(result);

    repeat(function () {
      const result = getRandomItem(array);
      // const result = getRandomItem(array).name;
      newArray.push(result);
      // newArray.push(`${result.first} ${result.last}`);
    }, peopleNumber);

    setPotentialPeople(newArray);
    console.log(newArray);
    // console.log(newArray.sort((a, b) => a.localeCompare(b)));
  }

  function hasDuplicates(arr) {
    return arr.some((x) => arr.indexOf(x) !== arr.lastIndexOf(x));
  }

  var arr = [2, 4, 6, 5, 4];

  function pushTheButton() {
    getRandomList();
    // if no duplicates setPeople

    if (hasDuplicates(potentialPeople)) {
      console.log('Duplicate elements found.');
    } else {
      setPeople(potentialPeople);
      console.log('No Duplicates found.');
    }
  }

  return (
    <Container>
      <Form>
        <Row>
          <Col xs={6}>
            {/* Number of people */}{' '}
            <Form.Group
              controlId='floatingSelect'
              label='People per group'
              onChange={(e) => setPeopleNumber(parseInt(e.target.value))}
            >
              <Form.Label></Form.Label>
              <Form.Control as='select'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
                <option value='13'>13</option>
                <option value='14'>14</option>
                <option value='15'>15</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group
              controlId='floatingSelect'
              label='People per group'
              onChange={(e) => setGroupType(e.target.value)}
            >
              <Form.Label></Form.Label>
              <Form.Control as='select'>
                <option value='Number of groups'>Number of groups</option>
                <option value='People per group'>People per group</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={3}>
            {/* <Button variant='primary' onClick={pushTheButton}>
            RANDOMIZE!
          </Button> */}
          </Col>
        </Row>
      </Form>
      <br />
      <Button variant='primary' onClick={() => randomSort(array)}>
        RANDOMIZE!
      </Button>
      {/* {people.length > 0
        ? `Random people: ${people.map((x) => `${x} |||||||`)}`
        : ''} */}
      <br />
      <br />
      {people.length > 0
        ? people.map((x, index) => (
            <ol>
              {'Group ' + (parseInt(index) + 1) + '. ' + x.map((y) => `${y} `)}
            </ol>
          ))
        : ''}
      {/* Random people: {people.map((x) => `${x} `)} */}
    </Container>
  );
}
