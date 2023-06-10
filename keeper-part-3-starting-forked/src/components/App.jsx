import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  /**Initial value for the note is an empty array which
   * has been declared in useState([]). Here setNotes is
   * a function.
   */
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(function (previousNotesValue) {
      /**Using spread operator to populate the array by adding the previous
       * value and new value or new notes.
       */
      return [...previousNotesValue, newNote];
    });
  }

  function deleteNote(id) {
    /**<Note key={1} title="Note title" content="Note content" /> */
    console.log("User have deleted a note.");
    setNotes(function (previousNotesinDelete) {
      /**Using filter function to find out the IDs or indexes of all other notes 
       * except the one which user wishes to delete.
       */
      return previousNotesinDelete.filter(function (noteItem, index) {
        /**Returing all the IDs or indexes of all other notes 
       * except the one which user wishes to delete.  */
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/**Using map function inside notes array to render different note component for each item. 
map function will loop thorugh for the each item in notes array and get a hold of each 
noteItem inside the array. Then it will exceute this function.*/}
      {notes.map(function (noteItem, index) {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
