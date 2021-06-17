import React from 'react';
 
import Header from '../Header'

function BuildList() {
    return (
        <>
            <Header title="philip1967/my-awesome-repo" buttons={[
                { text: 'Run Build' },
                { text: 'Settings' }
            ]}/>
            <div className="build-list">
                This is a BuildList component
            </div>
        </>
    );
}

export default BuildList;
