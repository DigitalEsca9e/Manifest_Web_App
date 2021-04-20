import React, {useEffect} from 'react';
import { render } from 'react-dom';
import * as ManiF from '../helpers.js';
import {Button} from 'react-bootstrap';
import './settings.css';
const Settings = () => {
    return(
        <div className="appWidth">
            {/* *** Add words to explain functionality. Style the button too */}
            <Button onClick={ManiF.deleteCollection}>Erase All</Button>
        </div>
    )

}
export default Settings;