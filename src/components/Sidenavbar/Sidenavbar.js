import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSearch, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';

import './Sidenavbar.scss';

const Sidenavbar = () => {
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
                    <div className="create-note-btn">
                        <FontAwesomeIcon className="icon" icon={faPlus} />
                        <div className="title">
                            New note
                        </div>
                    </div>
                </div>
                <div className="sidenavbar-top_menu-item">
                    <ul>
                        <li>
                            <FontAwesomeIcon className="icon" icon={faStar}/>
                            Fake Item
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidenavbar;