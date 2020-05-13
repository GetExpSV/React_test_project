import React, {useState} from 'react';
import avatar_class from './Avatar.module.css';

const Avatar = (props) => {
    let avatarImg = "http://getdrawings.com/img/silhouette-avatar-12.png";

    let [isChange, setIsChange] = useState(false)

    let onSubmit = (e) =>{
        if(e.target.files.length>0) {
            props.putPhoto(e.target.files[0]);
            setIsChange(false);
        }
    }

    return (
        <div className={avatar_class.avatar}>
            { !props.avatarImg ? <img src={avatarImg}/> : <img
                src={props.avatarImg}/>}
                <div onClick={()=>setIsChange(!isChange)}>Change photo</div>
            {isChange && <input type={"file"} accept='.jpg, .jpeg' onChange={onSubmit}/>}
        </div>
    );
}

export default Avatar;