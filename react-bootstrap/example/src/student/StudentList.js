import {Card, Col, Form, FormLabel, Row, Table} from "react-bootstrap";
import './Student.css';

function StudentList() {
  const students = [
    {
      id: 1,
      name: 'Frank',
      email: 'frank@gmail.com',
      dob: '1992-09-12'
    },
    {
      id: 2,
      name: 'Henry',
      email: 'henry@gmail.com',
      dob: '1992-09-12'
    },
    {
      id: 3,
      name: 'Bean',
      email: 'bean@gmail.com',
      dob: '1992-09-12'
    }
  ];

  const body = students.map(student => {
    return (
      <tr>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.email}</td>
        <td>{student.dob}</td>
      </tr>
    );
  });

  const styles = {
    dropDownMenu: {
      maxHeight: '173px',
      overflow: 'hidden',
      minHeight: '110px',
      position: 'absolute',
      willChange: 'transform',
      top: '0px',
      left: '0px',
      transform: 'translate3d(0px, 36px, 0px)',
      show: {
        maxHeight: '155px',
        overflowY: 'auto',
        minHeight: '92px'
      }
    }
  }

  return (
    <Row>
      <Col>
        <Card>
          <Card.Header className="d-flex justify-content-between align-items-center border-0 bg-transparent">
            <h4 className="mb-0">All Students List</h4>
            <a href="#" className="btn btn-primary">+ Add new</a>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <Form.Label>
                  Show
                  <Form.Control as="select">
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                  </Form.Control>
                  entries
                </Form.Label>
              </Col>
            </Row>
            <Table responsive>

            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default StudentList;