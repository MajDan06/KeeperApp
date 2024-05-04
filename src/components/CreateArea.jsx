import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [note, setNote] = useState({
      title: "",
      content: "",
    });

    const [isClicked, setIsClicked] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        setNote((prevValue) => {
          return {
            ...prevValue,
            [name]: value,
          }
        });
    }

    function onSubmit(event) {
        if (note.title !== "" && note.content !== "") {
            props.onClick(note);
            setNote({title: "", content: ""});
            event.preventDefault();
        }
    }

    return (
    <div>
      <form onSubmit={onSubmit} className="create-note">
        {isClicked && <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />}
        <textarea onChange={handleChange} onClick={() => {setIsClicked(true)}} name="content" placeholder="Take a note..." rows={isClicked ? "3" : "1"} value={note.content} />
        <Zoom in={isClicked ? true : false}><Fab type="submit"><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;