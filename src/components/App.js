import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createNotes(noteItem) {}

function App() {
  return (
    <div>
      <Header />
      {/* Create a map function to loop
      through the array and create a note card to dispaly
      all notes */}
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
