import './App.css';
import StudentList from "./student/StudentList";
import {Container} from "react-bootstrap";
import StudentForm from "./student/StudentForm";

function App() {
  return (
    <Container>
      {/*<StudentList />*/}
      <StudentForm />
    </Container>
  );
}

export default App;
