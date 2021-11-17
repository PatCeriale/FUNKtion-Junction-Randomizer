import { Form, Button, Col, Container, Row } from 'react-bootstrap';

// API call for people
// Dump into array

export default function PeopleList(props) {
  const removeEmployee = (id) => {
    console.log(`Target: ${id}`);
  };

  return (
    <div>
      <h3>Digital Studio People</h3>
      {/* create input for new people */}
      {/* list people from API call alphabetically w/ delete button */}
      {/* <ul> */}
      {props.people.length > 0
        ? props.people
            .sort((a, b) => a.localeCompare(b))
            .map((item, index) => {
              return (
                <div key={index}>
                  {`${item}`}{' '}
                  <Button
                    style={{
                      backgroundColor: 'red',
                      margin: '3px',
                      borderRadius: '5px',
                    }}
                    key={index}
                    onClick={() => {
                      removeEmployee(index);
                    }}
                  >
                    X
                  </Button>
                </div>
              );
            })
        : ''}
      {/* </ul> */}
    </div>
  );
}
