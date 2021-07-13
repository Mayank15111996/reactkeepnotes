import React, { useState, useEffect } from 'react';
import Header from './MyKeepNotes/Header';
import Section from './MyKeepNotes/Section';
import Note from './MyKeepNotes/Note';
import './css_files/section.css';

const App = () => {
    let initial;

    if(localStorage.getItem("notes") === null){
        initial = [];
    }
    else{
        initial = JSON.parse(localStorage.getItem("notes"));
    }

    const [notes, setNotes] = useState(initial);

    const addNote = (note) => {
        setNotes((prev) => {
            return [...prev, note];
        })
    }

    const deleteNote = (id) => {
        setNotes((prev) =>
            prev.filter((ele, index) => {
                return id !== index;
            })
        )
    }

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    return (
        <>
        <Header/>
        <Section addNote={addNote}/>
        <div className="main_container">
            {notes.map((ele, index) => {
                return (<Note key={index} id={index} ele={ele} deleteNote={deleteNote} />)
            })}
        </div>
        </>
    )
}

export default App;