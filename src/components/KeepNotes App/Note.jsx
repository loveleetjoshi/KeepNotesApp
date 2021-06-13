import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { IconButton } from '@material-ui/core';

function Note(props) {

    return (
        <>
        <div className="note">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <IconButton size="small" className=" note-btn" onClick={()=>{props.deletefun(props.id)}}>
                <DeleteOutlineIcon />
            </IconButton>
        </div>
        </>
    )
}

export default Note
