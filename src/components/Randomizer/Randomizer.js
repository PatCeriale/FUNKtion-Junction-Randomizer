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
  const [peopleNumber, setPeopleNumber] = useState(0);
  const [people, setPeople] = useState([]);

  // const array = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  //   22, 23,
  // ];

  const array = props.people;

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

  function pushTheButton() {
    const newArray = [];
    // console.log(result);

    repeat(function () {
      const result = getRandomItem(array).name.first;
      newArray.push(result);
    }, peopleNumber);

    setPeople(newArray);
    console.log(newArray);
  }

  return (
    <Container>
      <Row>
        <Col xs={96}>
          <Form>
            <Form.Group
              controlId='floatingSelect'
              label=' Number of people'
              onChange={(e) => setPeopleNumber(parseInt(e.target.value))}
            >
              <Form.Label>Number of people </Form.Label>
              <Form.Control as='select'>
                <option value='0'>Choose a number</option>
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
          </Form>
        </Col>
        <Col xs={3}>
          <Button variant='primary' onClick={pushTheButton}>
            RANDOMIZE!
          </Button>
        </Col>
      </Row>
      {people.length > 0 ? `Random people: ${people.map((x) => `${x} `)}` : ''}
      {/* Random people: {people.map((x) => `${x} `)} */}
    </Container>
  );
}
