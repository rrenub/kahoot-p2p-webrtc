import React from 'react';
import {Link} from "react-router-dom";

const HomeSection = ({title, description, linkText, linkURL}) => {
    return (
        <section>
            <h2>{title}</h2>
            <span>{description}</span>
            <Link to={linkURL}>{linkText}</Link>
        </section>
    );
};

export default HomeSection;