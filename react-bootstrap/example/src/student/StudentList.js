import {Card, Col, Row, Table} from "react-bootstrap";
import {useEffect, useState} from "react";

export default function StudentList() {

  const [students, setStudents] = useState([]);

  useEffect(async () => {
    const response = await fetch('/jdbc/students');
    const data = await response.json();
    console.log(data);
  }, []);

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

  return (
    <Row>
      <Col>
        <Card>
          <Card.Header className="d-flex justify-content-between align-items-center border-0 bg-transparent">
            <h4 className="mb-0">All Students List</h4>
            <a href="#" className="btn btn-primary">+ Add new</a>
          </Card.Header>
          <Card.Body>
            <Table responsive>
              {body}
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}