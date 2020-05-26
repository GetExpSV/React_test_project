import React, {useState, useEffect, ChangeEvent} from 'react'
import s from '../PersonInfo.module.css';

type Props = {
    status: string
    putStatus: (value: string) => void
}

let Status: React.FC<Props> = (props) =>{

    let [editMod, setEditMod] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status);
    }, [props.status]);

    let activateEditMod = () =>{
        setEditMod(true)
    };

    let deactivateEditMod = () =>{
        setEditMod(false);
        props.putStatus(status)
    };

    let changeStatus = (e: ChangeEvent<HTMLInputElement>) =>{
        setStatus(e.currentTarget.value)
    };

    return(<div>
        {!editMod ?
            <div onDoubleClick={activateEditMod}><span className={s.item}>Status: </span>{status || "status can be here"}</div> :
            <input value={status} onBlur={deactivateEditMod} autoFocus={true} onChange={changeStatus}/>
        }
    </div>)
};

export default Status;