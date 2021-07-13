import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Note = (props) => {

    const Delete = () => {
        props.deleteNote(props.id);
    }

    return (
        <div className="notes">
            <h1 >{props.ele.title}</h1>
            <p>{props.ele.desc}</p>
            <div className="btn"><button onClick={Delete}><DeleteIcon />
            </button></div>
        </div>
    )
}

export default Note;