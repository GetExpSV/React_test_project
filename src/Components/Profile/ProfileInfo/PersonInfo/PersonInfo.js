import React from 'react';
import personInfo_class from './PersonInfo.module.css';
import Status from "./Status/Status";
import PersonInfoForm from "./PersonInfoForm/PersonInfoForm";

const PersonInfo = (props) => {

    let onSubmit = (value) =>{
        props.putProfileInfo(value)
    }

    return (<div className={personInfo_class.container}>
            {!props.isEdit ? <div>
                <Status status={props.status} putStatus={props.putStatus}/>
                <div><span className={personInfo_class.item}>Name:</span>{props.fullName}</div>
                <div><span className={personInfo_class.item}>Looking for a job:</span>{props.lookingForAJob? "yes" : "no"}</div>
                <div><span className={personInfo_class.item}>Skills:</span>{props.lookingForAJobDescription}</div>
                <div><span className={personInfo_class.item}>About me:</span>{props.aboutMe}</div>
                <div><span className={personInfo_class.item}>Contacts:</span></div>
                {Object.keys(props.contacts).map(key =>{
                    return <Contacts social={key} key={key} socialValue={props.contacts[key]} />
                })}
                <div onClick={()=> props.setEditMod(true)}>Edit</div>
            </div>: <PersonInfoForm onSubmit={onSubmit} initialValues={props} contacts={props.contacts}/>}
        </div>
    );
}

const Contacts = (props) =>{
    return(<div><span className={personInfo_class.contacts__item}>{props.social}:</span>{props.socialValue}</div>)
}

export default PersonInfo;

