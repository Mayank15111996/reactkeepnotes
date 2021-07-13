import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';

const Section = (props) => {
    
    // TO EXPAND OR UN-EXPAND THE (TAKE NOTE) BAR.
    const [show, setShow] = useState(false);

    const [note, setNote] = useState({
        title: '',
        desc: ''
    });

    const InputEvent = (event) => {
        const { value, name } = event.target;

        setNote((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const Add = () => {
        props.addNote(note);

        setNote(() => {
            return {
                title: '',
                desc: ''
            }
        })
    }

    document.body.addEventListener("dblclick", (e) => {
        e.preventDefault();
        setShow(false);
    });

    return (<>
            <div className="note_container" >
                {show ?
                <input className='input' type="text" name="title" value={note.title} 
                onChange={InputEvent} placeholder="Title" /> : null}

                <textarea className="input" name="desc" type="text" value={note.desc}
                onChange={InputEvent} onClick={() => setShow(true)} placeholder="Take a note..." />
            </div>
            
                {show ?
                <div className="btn_div">
                <button onClick={Add} ><AddIcon />
                </button></div> : null}
            </>
    )
}

export default Section;