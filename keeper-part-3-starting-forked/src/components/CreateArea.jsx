import React, { useState } from "react";

function CreateArea(props) {
  /**Here setnote is a function. */
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(function (previousNote) {
      return {
        /**This is the spread operator which is being used by ... 3 dots. */
        ...previousNote,
        /** this following line of code turns the name string into
         * a actual value for the name constant.
         */
        [name]: value
      };
    });
  }

  function submitNote(event) {
    /**onAdd function has been declared in App.jsx */
    props.onAdd(note);
    /**Resetting the note value to empty string after submitting a note successfully */
    setNote({
      title: "",
      content: ""
    });
    /**Preventing the screen refresh after pressing submit button. It is an default characterisitics
     * of submit button property which can be prevented by using following code.
    */
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
