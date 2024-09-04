import React from 'react';

const LogoComponent = (props) => {
    const theme = props.theme === 'dark' ? 'dark' : 'light';
    
    return (
        <h1 className={`logo ${theme}`}>
            Jay
        </h1>
    );
};

export default LogoComponent;
