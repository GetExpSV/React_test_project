import React, {useState, useEffect} from 'react'
import s from '../PersonInfo.module.css';


let Status = (props) =>{

    let [editMod, setEditMod] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status);
    }, [props.status])

    let activateEditMod = () =>{
        setEditMod(true)
    }

    let deactivateEditMod = () =>{
        setEditMod(false)
        props.putStatus(status)
    }

    let changeStatus = (e) =>{
        setStatus(e.currentTarget.value)
    }

    return(<div>
        {!editMod ?
            <div onDoubleClick={activateEditMod}><span className={s.item}>Status: </span>{status || "status can be here"}</div> :
            <input value={status} onBlur={deactivateEditMod} autoFocus={true} onChange={changeStatus}/>
        }
    </div>)
}

export default Status;