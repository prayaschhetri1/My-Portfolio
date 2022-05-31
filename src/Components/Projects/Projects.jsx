import React from 'react';
import { FaGithub, FaLink, FaNodeJs } from 'react-icons/fa';
import {
    ProjectDiv,
    Row,
    ServiceBox,
    ServiceBoxHeader,
    ServiceBoxP,
    A,
    BoxDiv,
} from './Styles';
import { Container, Common, H1 } from '../../SharedStyles/SharedStyles';
import { AiFillGithub } from 'react-icons/ai';
import { FaHtml5, FaReact, FaJs, FaCss3 } from 'react-icons/fa';
import { SiMongodb, SiNodeDotJs, SiRedux, SiHeroku } from 'react-icons/si';
// import { SiExpress, SiMaterialui } from 'react-icons/si/SiExpress';

import { v4 as uuidv4 } from 'uuid';

const Projects = () => {
    const projects = [
        {
            id: 1,
            project_name: 'Zoomcar',
            image: 'https://github.com/Govindlakhotiya/Portfolio-/blob/main/public/ProjectImages/Zoomcar.PNG?raw=true',
            project_desc:
                'My project is a clone of Zoomcar.com.Zoomcar car is a Self-Drive car rental service. Zoomcar is India’s first and largest online self-drive car rental company that provides a user car in the best condition and affordable price. ',
            deploy_link: 'https://wizardly-goldberg-47f842.netlify.app',
            repo_link: '',
            tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />],
        },
        {
            id: 2,
            project_name: 'DotandKey',
            image: 'https://github.com/Govindlakhotiya/Portfolio-/blob/main/public/ProjectImages/Dotandkey.PNG?raw=true',
            project_desc:
                'A web application to Buy Natural, Toxin-Free & Safe Skincare, Bodycare & Haircare Products Online at Dot & Key. A platform for selling and buying skincare products at base price.',
            deploy_link: 'https://chimerical-peony-59abbb.netlify.app',
            repo_link: '',
            tech_stack: [
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />,
                <FaNodeJs />,
                <SiMongodb />,
                <SiHeroku />,
            ],
        },
        {
            id: 3,
            project_name: 'Nykaa',
            image: 'https://github.com/Govindlakhotiya/Portfolio-/blob/main/public/ProjectImages/Nykaa.PNG?raw=true',
            project_desc:
                "web application to Buy Natural, Toxin-Free & Safe Skincare, Bodycare & Haircare Products Online at Dot & Key. A platform for selling and buying skincare products at base price.",
            deploy_link: '#',
            repo_link: '#',
            tech_stack: [
                <FaReact />,
                <SiRedux />,
                // <SiMaterialui />,
                <SiMongodb />,
                // <SiExpress />,
                <AiFillGithub />,
                <FaJs />,
                <FaNodeJs />,
            ],
        },
        
    ];

    return (
        <Container className='projects'>
            <ProjectDiv>
                <Common>
                    <H1>Projects</H1>
                </Common>
                <Row>
                    {projects.map((item) => (
                        <BoxDiv key={uuidv4()}>
                            <ServiceBox>
                                <img
                                    src={item.image}
                                    alt='icon'
                                    style={{ width: '100%' }}
                                />
                                <div style={{ margin: '25px' }}>
                                    <ServiceBoxHeader
                                        style={{ textAlign: 'center' }}
                                    >
                                        {item.project_name}
                                    </ServiceBoxHeader>
                                    <ServiceBoxP>
                                        {item.project_desc}
                                    </ServiceBoxP>
                                    {/* <a href="">Read more</a> */}
                                    <div
                                        style={{
                                            margin: '20px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {item.tech_stack.map((item) => (
                                            <div
                                                key={uuidv4()}
                                                className='iconsTechStack'
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                    <A
                                        href={item.repo_link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <FaGithub /> Code
                                    </A>
                                    <A
                                        href={item.deploy_link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <FaLink /> Demo
                                    </A>
                                </div>
                            </ServiceBox>
                        </BoxDiv>
                    ))}
                </Row>
            </ProjectDiv>
        </Container>
    );
};

export default Projects;
