import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {
  AboutDiv,
  Column,
  Img,
  AboutInfo,
  AboutInfoP,
  HeaderUl,
  HeaderLi,
  JelloHori,
} from "./Styles";

import { Container, H1 } from "../../SharedStyles/SharedStyles";
const socialMediaLinks = [
  {
    id: 0,
    link: "https://www.linkedin.com/in/prayash-chhetri-27a37a233/",
    icon: <FaLinkedin />,
  },
  {
    id: 1,
    link: "https://github.com/prayaschhetri1",
    icon: <FaGithub />,
  },
  {
    id: 2,
    link: "#",
    icon: <FaTwitter />,
  },
  /* {
        id: 3,
        link: 'https://leetcode.com/aadityaneve',
        icon: <SiLeetcode />,
    }, */
];
const About = () => {
  return (
    <Container className="about">
      <AboutDiv>
        <Column>
          <Img
            src="https://github.com/Govindlakhotiya/Portfolio-/blob/main/public/ProjectImages/profile-1.jpg?raw=true"
            alt="my image"
          />
        </Column>
        <Column>
          <H1>About Me</H1>
          <AboutInfo>
            <AboutInfoP>
              Hello Learners, I am Prayash Chhetri from Siliguri. An optimistic
              and self-motivated individual, looking forward to work in an IT
              industry which allows pushing my boundaries and serve really good
              work. Strong knowledge of HTML, CSS, and JavaScript.
            </AboutInfoP>
            <AboutInfoP>
              After graduating from my higher secondary school. I couldn't carry
              on with my study due to some really severe financial crisis in my
              home and to sort it out I worked in several cities and states in
              India. From a salesman to a delivery boy I faced some really
              challenging times But I was always interested to be a problem
              solver and because of this attitude I came to know about the tech
              industries and how they work. After scrolling to many
              skill-building websites and watching tons of tutorial videos I was
              feeling directionless and overwhelmed but joining Masai school was
              my best decision till now.
            </AboutInfoP>
          </AboutInfo>
          <HeaderUl>
            {socialMediaLinks.map((item) => (
              <JelloHori key={item.id}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <HeaderLi>{item.icon}</HeaderLi>
                </a>
              </JelloHori>
            ))}
          </HeaderUl>
        </Column>
      </AboutDiv>
    </Container>
  );
};

export default About;
