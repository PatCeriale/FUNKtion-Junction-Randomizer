import {
  Form,
  Button,
  ToggleButton,
  Col,
  Container,
  Row,
} from 'react-bootstrap';
import react, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import {
  faCheckSquare,
  faCoffee,
  faPlusCircle,
  faMinusCircle,
} from '@fortawesome/fontawesome-free-solid';

// API call for people
// Dump into array

export default function PeopleList(props) {
  // const [addedPeople, setAddedPeople] = useState();
  const [checked, setChecked] = useState(true);

  const addedPeopleArray = props.addedPeople;

  const removeEmployee = (id) => {
    // setChecked(false);
    const updatedPeopleArray = addedPeopleArray.filter((e) => {
      return e !== id;
    });
    console.log(`Target removed: ${id}`);
    props.handleAddedPeople(updatedPeopleArray);
  };

  // function hasDuplicates
  // // (arr) {
  //   // return arr.some((x) => arr.indexOf(x) !== arr.lastIndexOf(x));
  //   (addedPeopleArray) =>
  //     addedPeopleArray.filter((item, index) => arr.indexOf(item) !== index);
  // }

  const addEmployee = (id) => {
    // addedPeopleArray.push(id);
    // if id indexOf != 1
    if (addedPeopleArray.indexOf(id) === -1)
      props.handleAddedPeople((addedPeopleArray) => [...addedPeopleArray, id]);
    console.log(`Target: ${id}`);
    console.log(addedPeopleArray);
    setChecked(true);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xs={6}>
            <h3>Current List</h3>
            <hr />
            {props.addedPeople.length > 0
              ? props.addedPeople
                  .sort((a, b) => a.localeCompare(b))
                  .map((item, index) => {
                    return (
                      <div key={index}>
                        <ToggleButton
                          className='mb-2'
                          id='toggle-check'
                          type='checkbox'
                          variant='danger'
                          checked={checked}
                          value={index}
                          // onChange={(e) =>
                          //   setChecked(e.currentTarget.checked === false)
                          // }
                          onClick={(e) => {
                            e.preventDefault();
                            removeEmployee(item);
                          }}
                        >
                          {`${index + 1}. ${item}`}{' '}
                          <FontAwesomeIcon icon={faMinusCircle} />
                        </ToggleButton>
                      </div>
                    );
                  })
              : 'Add people to list'}
          </Col>
          <Col xs={6}>
            <h3>Digital Studio People</h3> <hr />
            {props.people.length > 0
              ? props.people
                  .sort((a, b) => a.localeCompare(b))
                  .map((item, index) => {
                    return (
                      <div key={index}>
                        {/* <Button
                          // {checked=true ?
                          // style={
                          //   backgroundColor: 'red',
                          //   margin: '3px',
                          //   borderRadius: '5px',
                          // } :
                          style={{
                            backgroundColor: 'red',
                            margin: '3px',
                            borderRadius: '5px',
                          }}
                          // key={index}
                          onChange={(e) =>
                            setChecked((e.currentTarget.checked = false))
                          }
                          onClick={() => {
                            removeEmployee(item);
                          }}
                        >
                          X
                        </Button>{' '} */}
                        <ToggleButton
                          className='mb-2'
                          id='toggle-check'
                          type='checkbox'
                          variant='outline-success'
                          checked={checked}
                          value={index}
                          onChange={(e) =>
                            setChecked(e.currentTarget.checked === true)
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            addEmployee(item);
                          }}
                          style={
                            addedPeopleArray.includes(item)
                              ? { border: 'solid 3px blue' }
                              : { border: 'solid 3px green' }
                          }
                        >
                          {`${index + 1}. ${item}`}{' '}
                          <FontAwesomeIcon icon={faPlusCircle} />
                        </ToggleButton>{' '}
                        {/* <Button
                    style={{
                      backgroundColor: '',
                      margin: '3px',
                      borderRadius: '5px',
                    }}
                    key={index}
                  >
                    Add
                  </Button> */}
                      </div>
                    );
                  })
              : ''}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
