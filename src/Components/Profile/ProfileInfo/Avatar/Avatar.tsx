import React, {useState, ChangeEvent} from 'react';
import avatar_class from './Avatar.module.css';

type Props = {
    avatarImg: string


    putPhoto: (image: File) => void
}

const Avatar: React.FC<Props> = (props) => {
    let avatarImg = "http://getdrawings.com/img/silhouette-avatar-12.png";

    let [isChange, setIsChange] = useState(false);

    let onSubmit = (event: ChangeEvent<HTMLInputElement>) =>{
        if(event.target.files != null && event.target.files.length>0) {
            props.putPhoto(event.target.files[0]);
            setIsChange(false);
        }
    };

    return (
        <div className={avatar_class.avatar}>
            { !props.avatarImg ? <img src={avatarImg} alt={""}/> : <img
                src={props.avatarImg} alt={""}/>}
                <div onClick={()=>setIsChange(!isChange)}>Change photo</div>
            {isChange && <input type={"file"} accept='.jpg, .jpeg' onChange={onSubmit}/>}
        </div>
    );
};

export default Avatar;