import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";


export const Projects = () => {

    const projects =[
        {
            title: "Project 1",
            description: "This is a description of Project 1",
            imgUrl: projImg1
        },
        {
            title: "Project 2",
            description: "This is a description of Project 2",
            imgUrl: projImg2
        },
        {
            title: "Project 3",
            description: "This is a description of Project 3",
            imgUrl: projImg3
        },
        {
            title: "Project 4",
            description: "This is a description of Project 4",
            imgUrl: projImg1
        },
        {
            title: "Project 5",
            description: "This is a description of Project 5",
            imgUrl: projImg2
        },
        {
            title: "Project 6",
            description: "This is a description of Project 6",
            imgUrl: projImg3
        },
    ]
    return (
        <section className="project" id= "project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Here are some of my projects</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return(
                                                    <ProjectCard 
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }           
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    kloderkloder
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    kloderkloderkloder
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>

    )

}