import React from 'react';
import Sidenavbar from './components/Sidenavbar/Sidenavbar';
import NoteList from './components/NoteList/NoteList';
import Note from './components/Note/Note';
import './App.scss';

function App() {
  return (
    <div className="App">
     <Sidenavbar />
     <NoteList />
     <Note />
    </div>
  );
}

export default App;
