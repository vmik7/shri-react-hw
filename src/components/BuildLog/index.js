import React from 'react';
import Ansi from 'ansi-to-react';

import './style.scss';
import './ansi.scss';

function BuildLog({
    logs = '',
    classList = [],
}) {
    return (
        <pre className={['build-log', ...classList].join(' ')}>
            <Ansi useClasses>{ logs }</Ansi>
        </pre>
    );
}

export default BuildLog;