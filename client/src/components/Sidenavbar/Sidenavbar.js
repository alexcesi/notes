import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSearch, faPlus, faStar, faTrash, faStickyNote, faInfo } from '@fortawesome/free-solid-svg-icons';

import './Sidenavbar.scss';
import { NavLink, useHistory } from 'react-router-dom';
import { postRequest } from '../../utils/apiRequest';
import { BASE_URL, CREATE_NOTE } from './../../utils/apiEndpoints';
import { NotesContext } from '../context/context';


const Sidenavbar = () => {
    const notesContext = useContext(NotesContext);
    const history = useHistory();
    const[error, setError] = useState(null);

    const handleCreateNote = async () => {
        const response = await postRequest(`${BASE_URL}${CREATE_NOTE}`);
        console.log(response);
        if (response.error) {
            setError(response.error);
            return false;
        }
        if(response._id){
            notesContext.notesDispatch({ type: 'createNoteSuccess', payload: response})
            history.pushState({
                pathName: `/all-notes/${response._id}`,
                note: response
            })
        }
    }

    return (
        <div className="sidenavbar">
            <div className="sidenavbar-top">
                <div className="sidenavbar-top_profile">
                    <div className="profile-icon">
                        A
                    </div>
                    <div className="profile-title">
                        Alex Vesier
                        <FontAwesomeIcon className="icon" icon={faAngleDown} />
                    </div>
                </div>
                <div className="sidenavbar-top_search">
                    <div className="search-block">
                    <FontAwesomeIcon icon={faSearch} />
                        <input placeholder='Search' />
                    </div>
                </div>
                <div className="sidenavbar-top_create-note">
                    <div className="create-note-btn" onClick={handleCreateNote}>
                        <FontAwesomeIcon className="icon" icon={faPlus} />
                        <div className="title">
                            New note
                        </div>
                    </div>
                </div>
                <div className="sidenavbar-top_menu-item">
                    <ul>
                        <li>
                            <NavLink to="/dummy-1">
                            <FontAwesomeIcon className="icon" icon={faStar}/>
                            Fake Item
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/all-notes">
                            <FontAwesomeIcon className="icon" icon={faStickyNote}/>
                            All notes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dummy-2">
                            <FontAwesomeIcon className="icon" icon={faStar}/>
                            Fake Item
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dummy-3">
                            <FontAwesomeIcon className="icon" icon={faStar}/>
                            Fake Item
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dummy-4">
                            <FontAwesomeIcon className="icon" icon={faStar}/>
                            Fake Item
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/trash">
                            <FontAwesomeIcon className="icon" icon={faTrash}/>
                            Trash
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dummy-5">
                            <FontAwesomeIcon className="icon" icon={faStar}/>
                            Fake Item
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sidenavbar-bottom">
                <div className="sidenavbar-bottom_need-help">
                    <FontAwesomeIcon className="icon" icon={faInfo} />
                    Contact support
                </div>
            </div>
        </div>
    )
}

export default Sidenavbar;