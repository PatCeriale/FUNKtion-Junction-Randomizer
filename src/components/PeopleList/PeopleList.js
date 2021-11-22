import {
  Form,
  Button,
  ToggleButton,
  Col,
  Container,
  Row,
} from 'react-bootstrap';
import react, { useState, useEffect } from 'react';

// API call for people
// Dump into array

export default function PeopleList(props) {
  // const [addedPeople, setAddedPeople] = useState();
  const [checked, setChecked] = useState(false);

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
            {props.addedPeople.length > 0
              ? props.addedPeople
                  .sort((a, b) => a.localeCompare(b))
                  .map((item, index) => {
                    return (
                      <div key={index}>
                        {`${index + 1}. ${item}`}{' '}
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
                            removeEmployee(item);
                          }}
                        >
                          Remove
                        </ToggleButton>
                      </div>
                    );
                  })
              : ''}
          </Col>
          <Col xs={6}>
            <h3>Digital Studio People</h3>{' '}
            {props.people.length > 0
              ? props.people
                  .sort((a, b) => a.localeCompare(b))
                  .map((item, index) => {
                    return (
                      <div key={index}>
                        {`${index + 1}. ${item}`}{' '}
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
                        >
                          Add
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
