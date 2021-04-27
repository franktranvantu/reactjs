import {Col, Form, Row} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.min.css";
import DatePicker from "react-datepicker";
import {useState} from "react";

export default function StudentForm() {

  const [startDate, setStartDate] = useState(new Date());

  return (
    <Form>
      <Row>
        <Col>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control as="input" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="dob">
            <Form.Label>Birthday</Form.Label>
            <DatePicker
              wrapperClassName="form-control"
              className="form-control"
              selected={startDate}
              dateFormat="dd/MM/yyyy"
              onChange={date => setStartDate(date)}
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}