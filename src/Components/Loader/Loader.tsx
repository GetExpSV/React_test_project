import React from 'react';
import loader_class from './Loader.module.css'
import loader from "../../Images/loader.svg";

let Loader = () => {
    return(
        <div>
            <img className={loader_class.loader} src={loader} alt={"loader"}/>
        </div>
    );
};
export default Loader;