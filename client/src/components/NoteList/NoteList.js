import React from 'react';
import './NoteList.scss';

const NoteList = (props) => {
    const {title} = props
    return (
        <div className="note-list">
            <div className="note-list__header">
                <div className="note-list__header-title">
                    <h1>{title}</h1>
                </div>
                <div className="note-list__header-sub-head">
                    <div className="note-count">
                        2 notes
                    </div>
                </div>
            </div>
            <div className="note-list__body">
                <div className="note-card">
                    <div className="note-card__head">
                        <div className="note-card__title">
                            Note one
                        </div>
                        <div className="note-card__desc">
                            description
                        </div>
                    </div>
                    <div className="note-card__date">
                        1 er novembre 1992
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoteList;