import React from 'react';
import { useHistory } from 'react-router';

import { Routes } from '../../constants';
import Button from '../generic/Button';

import './style.scss';
import iconSettings from './icons/settings.svg';


function Start() {
    let history = useHistory();

    let openSettings = () => {
        history.push(Routes.settings);
    }

    return (
        <div className="start">
            <div className="container start__container">
                <img className="start__image" src={ iconSettings } alt="Settings" />
                <p className="start__label">
                Configure repository connection and synchronization settings
                </p>
                <Button isPrimary={true} text="Open settings" onClick={ openSettings }/>
            </div>
        </div>
    );
}

export default Start;