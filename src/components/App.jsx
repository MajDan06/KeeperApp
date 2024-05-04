import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
    const [notesList, setNotesList] = useState([]);

    function addNote(note) {
        setNotesList(prevList => {
            return [...prevList, note];
        });
    }

    function deleteNote(id) {
        setNotesList(prevList => {
            return prevList.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onClick={addNote} />
            {notesList.map((note, index) => (
            <Note key={index} id={index} title={note.title} content={note.content} onClick={deleteNote} />
            ))}
            <Footer />
        </div>
    );
};

export default App;