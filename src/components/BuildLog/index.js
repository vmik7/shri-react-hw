import React from 'react';

import './style.scss';

function BuildLog({
    logs = '',
    classList = [],
}) {
    return (
        <pre className={['build-log', ...classList].join(' ')}>
            { logs }
        </pre>
    );
}

export default BuildLog;