import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './Head.css'

const Head = () => {
    return (
        <div className={"head"}>
            <div>
                <FontAwesomeIcon color={"#828282"} icon={faArrowLeft} />
            </div>
            <a className={"linkText"} href={"#"}>
                Let's plan your saving goal
            </a>
        </div>
    );
};

export default Head;
