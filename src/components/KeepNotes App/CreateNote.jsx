import React,{useState} from 'react'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

function CreateNote(props) {

    const [display, setDisplay] = useState(false);

    const [note, setNote] = useState({
        title: '',
        content: ""
    });

    const handleinput = (event) =>{

        const {name,value}=event.target;

        setNote((prevvalue)=>{
            return{
                ...prevvalue,
                [name]:value,
            };
        })
    }

    const addnote = ()=>{
        
        if(note.title && note.content){
            props.createNote(note);
        setNote((prevvalue)=>{
            return{
                ...prevvalue,
                title: '',
                content: ''
            }
        })
        }
        else{
            alert("Please fill all details")
        }

    }
    return (
        
            <div className="createnote" onDoubleClick={()=>setDisplay(false)}>
                {
                    display?<input type="text" name="title" value={note.title} onChange={handleinput} placeholder="Title" /> :null
                }
                <textarea name="content" value={note.content}  onChange={handleinput} onClick={() => setDisplay(true)} placeholder="Write a note....."/>

                {
                    display?
                    <IconButton className="cr-btn" onClick={addnote}>
                        <AddIcon />
                    </IconButton>:null
                }
                
            </div>
        
    )   
}

export default CreateNote
