import React from 'react';

import './style.scss';

import Header from './../Header';
import TextField from './../generic/TextField';
import Button from './../generic/Button';

function Settings() {
    return (
        <>
            <Header title="School CI server" buttons={[]}/>
            <div className="settings">
                <div className="container settings__container">
                    <div className="settings__header">
                        <h2 className="settings__title">
                            Settings
                        </h2>
                        <p className="settings__sub-title">
                            Configure repository connection and synchronization settings.
                        </p>
                    </div>
                    <from method="POST">
                        <TextField 
                            placeholder="user-name/repo-name"
                            isLabeled={true}
                            labelText="GitHub repository"
                            isRequired={true}
                            classList={[ 'settings__input' ]}
                            name="repo"
                        />
                        <TextField 
                            value="npm ci && npm run build"
                            placeholder="example: npm run build"
                            isLabeled={true}
                            labelText="Build command"
                            isRequired={true}
                            classList={[ 'settings__input' ]}
                            name="build"
                        />
                        <TextField 
                            value="master |"
                            placeholder="master"
                            isLabeled={true}
                            labelText="Main branch"
                            classList={[ 'settings__input' ]}
                            name="branch"
                        />
                        <div className="settings__input_inline">
                            Synchronize every
                            <TextField 
                                value="10"
                                placeholder="20"
                                isInline={true}
                                classList={[]}
                                name="period"
                            />
                            minutes
                        </div>
                        <div className="settings__controls">
                            <Button
                                text="Save"
                                isPrimary={true}
                                classList={['settings__button', 'settings__button_action_save']}
                            />
                            <Button
                                text="Cancel"
                                classList={['settings__button', 'settings__button_action_cancel']}
                            />
                        </div>
                    </from>
                </div>
            </div>
        </>
    );
}

export default Settings;
