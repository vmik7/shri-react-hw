import React from 'react';

import './style.scss';

import Header from './../Header';

function BuildDetails(props) {
    return (
        <>
            <Header title="philip1967/my-awesome-repo" buttons={[
                { text: 'Rebuild' },
                { text: 'Settings' }
            ]}/>
            <div className="build-details">
                <div className="container build-details__container">
                    This is a BuildDetails component ({ parseInt(props.match.params.number, 10) })
                </div>
            </div>
        </>
    );
}

export default BuildDetails;
