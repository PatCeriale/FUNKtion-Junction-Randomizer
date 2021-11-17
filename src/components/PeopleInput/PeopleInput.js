import react, { useState } from 'react';
import {
  Form,
  Button,
  Col,
  Container,
  Row,
  FloatingLabel,
} from 'react-bootstrap';
export default function Randomizer(props) {
  const [person, setPerson] = useState('');
  const [people, setPeople] = useState([]);
  const [personFirstName, setPersonFirstName] = useState('');
  const [personLastName, setPersonLastName] = useState('');
  const [personObject, setPersonObject] = useState({
    name: {
      first: { personFirstName },
      last: { personLastName },
    },
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonObject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Container>
      <Row>
        <Col xs={9}>
          <Form>
            {/*First:{' '}
             <input
              value={personObject.name.first}
              label='First Name'
              placeholder='First Name'
              onChange={handleChange}
            ></input>
            Last:{' '}
            <input
              value={personObject.name.last}
              label='Last Name'
              placeholder='Last Name'
              onChange={handleChange}
            ></input> 
            <Form.Group
              controlId='first'
              name='First Name'
              onChange={(e) => setPersonFirstName(e.target.value)}
              //   onChange={handleChange}
            >
              <Form.Label>First Name </Form.Label>
              <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group
              controlId='last'
              label='Last Name'
              onChange={(e) => setPersonLastName(e.target.value)}
              //   onChange={handleChange}
            >
              <Form.Label>Last Name </Form.Label>
              <Form.Control></Form.Control>
            </Form.Group>*/}
            <Form.Group
              controlId='name'
              label='Name'
              onChange={(e) => setPerson(e.target.value)}
              //   onChange={handleChange}
            >
              <Form.Label>Name </Form.Label>
              <Form.Control></Form.Control>
            </Form.Group>
            <Button
              //   onClick={setPersonObject(()=>{
              //     name: { first: { personFirstName }, last: { personLastName } },
              //   })}
              onClick={() => {
                // setPersonObject();
                const peopleArray = [];
                peopleArray.push(person);
                setPeople(peopleArray);
                console.log(person, people);
              }}
            >
              {' '}
              Add new person
            </Button>
          </Form>
        </Col>
        <Col xs={3}></Col>
      </Row>
    </Container>
  );
}
