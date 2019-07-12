import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faLock,faEllipsisH } from '@fortawesome/free-solid-svg-icons'

function BoarderHeaderNav(){
    return(
        <div className="border-nav">
            <div className="border-nav-board-name">
                <label>Add Board Name</label>
            </div>
            <div className="border-nav-btn-star">
                <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="border-nav-personal-tab">
                <label>Personal</label>
            </div>
            <div className="border-nav-private-tab">
                <label><FontAwesomeIcon icon={faLock} /> Private</label>
            </div>
            <div className="border-nav-team-member">
                <span>NM</span>
            </div>
            <div>
                <button className="border-nav-btn-invite">Invite</button>
            </div>
            <div className="border-nav-side-menu-tab">
                <label><FontAwesomeIcon icon={faEllipsisH} /> Show Menu</label>
            </div>
        </div>
    )
}

export default BoarderHeaderNav