import React from 'react';
import { HeaderContent, H1, P, A, HeaderButtons, TypeWriterH1 } from './Styles';
import { Container } from '../../SharedStyles/SharedStyles';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <Container className='home'>
            <HeaderContent>
                <div>
                    <H1>Hi 👋 I'mGovind Lakhotiya</H1>
                    <TypeWriterH1>
                        <Typewriter
                            options={{
                                strings: [
                                    'A Software Engineer',
                                    'A Problem Solver',
                                    'A Full Stack Developer',
                                ],
                                pauseFor: 1500,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </TypeWriterH1>
                    <P>
                        An enthusiastic Full Stack Web Developer with a strong
                        set of technical as well as non-technical skills and a
                        dedication towards creating useful and interactive web
                        applications.
                    </P>
                    <HeaderButtons>
                        <A
                            target='_blank'
                            rel='noopener noreferrer'
            href="https://docs.google.com/document/d/1be-2mCn9inTghVi4uYFCsY2CZrEk7-tN/edit?usp=sharing&ouid=108867446777227968415&rtpof=true&sd=true">
                            Resume
                        </A>
                        &nbsp;&nbsp;&nbsp;
                        <Link
                            activeClass='active'
                            to='projects'
                            spy={true}
                            smooth={true}
                            duration={300}
                        >
                            <A>Projects</A>
                        </Link>
                    </HeaderButtons>
                </div>
            </HeaderContent>
        </Container>
    );
};

export default Banner;
