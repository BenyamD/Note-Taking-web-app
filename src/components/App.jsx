import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);
  // Add notes
  function addItem(NoteItem) {
    setItems((prevVals) => {
      return [...prevVals, NoteItem];
    });
  }
  function deleteItem(id) {
    console.log("trigered");
    setItems((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />

      <CreateArea onAdd={addItem} />
      {items.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={deleteItem}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
