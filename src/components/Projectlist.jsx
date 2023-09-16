import ProjectCard from "../components/Projectcard";
import { Container, Row, Col } from "react-bootstrap";
import curemart from '../Assets/images/curemart.png';
import netfliximage from "../Assets/images/netflix.jpg";
import todolist from "../Assets/images/todolist.jpg";
import "../pages/style.css";




function Projectlist() {
  return (
    <div className="projectbackground" style={{backgroundColor:'black',height:'100vh'}}>
    
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={curemart}
                isBlog={false}
                title="Curemart"
                description=" This project involved creating an application using React and Django framework to manage a medical store. It involves functions such as medicine management where the user can add and update medicines. They can also list, view and delete the necessary medicines. They can also search for medicines to check if it is available. These functions are available to legitimate users upon successful authentication. This project uses ReactJs to create a UI which consumes REST APIs created using Django. 
                "
                ghLink="https://github.com/ijishnupr/medicalstore-management-react"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="Netflix-Clone"
                description="Developed a professional-grade Netflix clone using HTML,CSS, and JavaScript, showcasing strong front-end development skills.
                "
                ghLink="https://github.com/ijishnupr/netflix_clone.git"
              />
            </Col>

          

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="To Do List"
                description=" To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
                ghLink="https"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;