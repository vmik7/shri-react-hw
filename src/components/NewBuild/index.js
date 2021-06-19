import React from 'react';

import Modal from '../generic/Modal';
import TextField from '../generic/TextField';
import Button from '../generic/Button';

import './style.scss';

function NewBuild({
    onWrapperClick,
    onSave,
    onCancel,
}) {
    return (
        <Modal
            classList={['new-build']}
            title="New build"
            subtitle="Enter the commit hash which you want to build."
            onWrapperClick={onWrapperClick}
            content={<form method="POST">
                <TextField 
                    placeholder="Commit hash"
                    isRequired={true}
                    classList={['new-build__input']}
                    name="hash"
                />
                <div className="new-build__controls">
                    <Button isPrimary={true} text="Run build" onClick={onSave}/>
                    <Button text="Cancel" onClick={onCancel}/>
                </div>
            </form>}
        />
    );
}

export default NewBuild;