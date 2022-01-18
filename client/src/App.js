import React, { useReducer } from 'react';
import Sidenavbar from './components/Sidenavbar/Sidenavbar';
import NoteList from './components/NoteList/NoteList';
import Note from './components/Note/Note';
import './App.scss';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { NotesContext } from './components/context/context';
import NoteReducer from './reducer/notesReducer';

const initialState = [];

function App() {
  const [notes, notesDispatch] = useReducer(NoteReducer, initialState)
  return (
    <Router>
      <NotesContext.Provider value={{notesState: notes, notesDispatch}}>
        <div className="App">
          <Sidenavbar />
          <Switch>
            <Route path="/all-notes">
              <NoteList title="All Notes" />
              <Route path="/all-notes/:id">
                <Note />
              </Route>
            </Route>
            <Route path="/trash">
              <NoteList title="Trash" />
              <Route path="/trash/:id">
                <Note />
              </Route>
            </Route>
          </Switch>
        </div>
      </NotesContext.Provider>
    </Router>
  );
}

export default App;
