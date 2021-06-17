import React from 'react';
 
import Header from './../Header'

function BuildDetails(props) {
    return (
        <>
            <Header title="philip1967/my-awesome-repo" buttons={[
                { text: 'Rebuild' },
                { text: 'Settings' }
            ]}/>
            <div className="build-details">
                This is a BuildDetails component ({ parseInt(props.match.params.number, 10) })
            </div>
        </>
    );
}

export default BuildDetails;
