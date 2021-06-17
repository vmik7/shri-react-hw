import React from 'react';

import './style.scss';

import Header from '../Header';

function BuildList() {
    return (
        <>
            <Header title="philip1967/my-awesome-repo" buttons={[
                { text: 'Run Build' },
                { text: 'Settings' }
            ]}/>
            <div className="build-list">
                <div className="container build-list__container">
                    This is a BuildList component
                </div>
            </div>
        </>
    );
}

export default BuildList;
