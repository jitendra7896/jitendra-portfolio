import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import Intro from './Intro';

const Main = () => {

    return (
        <div className='main-container dark'>
            <div className='dark-div active'></div>
            <div className="container">
                <PowerButton />
                <LogoComponent theme={'dark'} />

                <a className="contact" target="_blank" rel="noreferrer" href="mailto:chatwanijitu@gmail.com">
                    <motion.h2
                        initial={{ y: -200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
                        animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Connect with me
                    </motion.h2>
                </a>

                <NavLink className='work active' to="/work">
                    <motion.h2
                        initial={{ y: -200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
                        animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Work
                    </motion.h2>
                </NavLink>
                <div className="bottom-bar">
                    <NavLink className='about active' to="/about">
                        <motion.h2
                            initial={{ y: 200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
                            animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            About.
                        </motion.h2>
                    </NavLink>
                    <NavLink className="skills" to="/skills">
                        <motion.h2
                            initial={{ y: 200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
                            animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            My Skills.
                        </motion.h2>
                    </NavLink>
                </div>
            </div>
            <Intro />
        </div>
    );
};

export default Main;