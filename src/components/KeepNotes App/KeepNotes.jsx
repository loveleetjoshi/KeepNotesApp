import React,{useState} from 'react'
import CreateNote from './CreateNote'
import Footer from './Footer'
import Header from './Header'
import Note from './Note'
import './KeepNotes.css'
import Container from '@material-ui/core/Container';

function KeepNotes() {

    const [notes, setNotes] = useState([]);

    const createNote = (note) =>{
        setNotes((prevnotes)=>{
            return [...prevnotes,note];
        });
    }

    const deleteNote = (id) =>{
        setNotes((prevnotes)=>{
            return prevnotes.filter((value,i)=>{
                return i!=id;
            })
        })
    }

    return (
        <div className="app">
            <Header />
            <Container >
                <CreateNote createNote={createNote} />
                {
                    notes.map((currvalue,i)=>{
                        return <Note id={i} key={i} title={currvalue.title} content={currvalue.content} deletefun={deleteNote}/>
                    })
                }
                
            </Container>
            
        </div>
    )
}

export default KeepNotes
