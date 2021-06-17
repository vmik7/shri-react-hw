import React from 'react';

import './style.scss';

import Header from './../Header';

function Settings() {
    return (
        <>
            <Header title="School CI server" buttons={[]}/>
            <div className="settings">
                <div className="container settings__container">
                    This is a Settings component
                </div>
            </div>
        </>
    );
}

export default Settings;
