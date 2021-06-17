import React from 'react';
 
function BuildDetails(props) {
    return (
        <div className="build-details">
            This is a BuildDetails component ({ parseInt(props.match.params.number, 10) })
        </div>
    );
}

export default BuildDetails;
