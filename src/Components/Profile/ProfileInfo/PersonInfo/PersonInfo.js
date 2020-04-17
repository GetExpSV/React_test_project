import React from 'react';
import personInfo_class from './PersonInfo.module.css';
import StatusContainer from "./Status/StatusContainer";
import Status from "./Status/Status";

const PersonInfo = (props) => {
    return (
        <div>
            <Status status={props.status} putStatus={props.putStatus}/>
            <div><span className={personInfo_class.item}>Name:</span> {props.name}</div>
            <div><span className={personInfo_class.item}>Surname:</span> {'props.surname'}</div>
            <div><span className={personInfo_class.item}>Birthday:</span> {'props.birthDay'}</div>
        </div>
    );
}

export default PersonInfo;