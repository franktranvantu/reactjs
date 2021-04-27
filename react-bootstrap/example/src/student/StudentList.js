import {Card, Col, Row, Table} from "react-bootstrap";
import {useEffect, useState} from "react";

export default function StudentList() {

  const [students, setStudents] = useState([]);

  useEffect(async () => {
    const response = await fetch('/jdbc/students');
    const students = await response.json();
    setStudents(students)
  }, []);

  const headers = ['Id', 'Name', 'Email', 'Birthday'];

  const tableHeaders = headers.map(header => {
    return (
      <th key={header}>{header}</th>
    );
  })

  const tableBody = students.map(student => {
    return (
      <tr key={student.id}>
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
              <thead>
                <tr>
                  {tableHeaders}
                </tr>
              </thead>
              <tbody>
                {tableBody}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}