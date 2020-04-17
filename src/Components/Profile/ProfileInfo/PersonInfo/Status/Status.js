import React, {useState} from 'react'


let Status = (props) =>{

    let [editMod, setEditMod] = useState(false)
    let [status, setStatus] = useState(props.status)

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
            <div onDoubleClick={activateEditMod}>{status || "status can be here"}</div> :
            <input value={status} onBlur={deactivateEditMod} autoFocus={true} onChange={changeStatus}/>
        }
    </div>)
}

export default Status;