import React from 'react';

import BuildItem from '../BuildItem';
import BuildLog from '../BuildLog';

import './style.scss';

function BuildDetails() {

    let buildData = {
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        configurationId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        buildNumber: 1368,
        commitMessage: 'add documentation for postgres scaler',
        commitHash: '9c9f0b9',
        branchName: 'master',
        authorName: 'Philip Kirkorov',
        status: 'Success',
        start: '2021-06-18T08:35:41.117Z',
        duration: 80,
    };

    let buildLogs = 
`[2K[1G[1myarn run v1.22.5[22m
    [2K[1G[2m$ webpack --config webpack/production.js --color[22m
    /Users/fedinamid/Workspace/webpack-config/webpack
    Hash: [1m2a88f51a3c1cffdbdac8[39m[22m
    Version: webpack [1m4.44.1[39m[22m
    Time: [1m65[39m[22mms
    Built at: 06/19/2021 [1m3:08:51 AM[39m[22m
          [1mAsset[39m[22m       [1mSize[39m[22m  [1mChunks[39m[22m  [1m[39m[22m                 [1m[39m[22m[1mChunk Names[39m[22m
        [1m[32mmain.js[39m[22m  963 bytes       [1m0[39m[22m  [1m[32m[emitted][39m[22m        main
    [1m[32mmain.js.map[39m[22m   4.52 KiB       [1m0[39m[22m  [1m[32m[emitted] [dev][39m[22m  main
    Entrypoint [1mmain[39m[22m = [1m[32mmain.js[39m[22m [1m[32mmain.js.map[39m[22m
    [0] [1m./src/index.js[39m[22m 1 bytes {[1m[33m0[39m[22m}[1m[32m [built][39m[22m
    [2K[1GDone in 0.84s.    
`;

    //{/* This is a BuildDetails component ({ parseInt(props.match.params.number, 10) }) */}
    
    return (
        <div className="build-details">
            <div className="container build-details__container">
                <BuildItem {...buildData} isDetailed={true}/>
                <BuildLog classList={['build-details__logs']} logs={ buildLogs }/>
            </div>
        </div>
    );
}

export default BuildDetails;
