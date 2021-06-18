import React from 'react';

import Header from './../Header';
import BuildItem from '../BuildItem';
import BuildLog from '../BuildLog';

import './style.scss';

function BuildDetails(props) {

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
`Starting type checking and linting service...
Using 1 worker with 2048MB memory limit
Hash: d54ed20309f352b3bda76cbbb6d272ed6afde438bd7a265eb08db3624c32dfc883a8c379c67f4de6
Version: webpack 4.41.6
Child
    Hash: d54ed20309f352b3bda7
    Time: 40364ms
    Built at: 2020-02-23 16:04:54
                                    Asset      Size  Chunks             Chunk Names
                    0.bundle.static.css  1.31 MiB       0  [emitted]  vendors~main
                        0.bundle.static.js  10.3 MiB       0  [emitted]  vendors~main
                        bundle.static.css  48.6 KiB       1  [emitted]  main
                        bundle.static.js   613 KiB       1  [emitted]  main
            static/media/Cat.afa2191f.svg  9.83 KiB          [emitted]  
    static/media/illustration.a17c1b18.svg  14.8 KiB          [emitted]  
        static/media/picture.eef6f3b8.svg  16.2 KiB          [emitted]  
    Entrypoint main = 0.bundle.static.css 0.bundle.static.js bundle.static.css bundle.static.js
    [./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 472 bytes {0} [built]
    [./src/account/actions/index.ts] 2.46 KiB {1} [built]
    [./src/account/api/lib/models/index.ts] 2.17 KiB {1} [built]
    [./src/account/api/lib/models/mappers.ts] 21 KiB {1} [built]
    [./src/account/api/lib/schoolaccountAPI.ts] 4.97 KiB {1} [built]
    [./src/account/api/lib/schoolaccountAPIContext.ts] 1.73 KiB {1} [built]
    [./src/account/epics/index.ts] 328 bytes {1} [built]
    [./src/account/epics/pageData.ts] 834 bytes {1} [built]
    [./src/account/epics/personalPage.ts] 2.29 KiB {1} [built]
    [./src/account/epics/registrationForm.ts] 910 bytes {1} [built]
    [./src/account/index.tsx] 561 bytes {1} [built]
    [./src/account/reducers/githubRepos.ts] 837 bytes {1} [built]
    [./src/account/reducers/index.ts] 1.83 KiB {1} [built]
    [./src/account/reducers/serverError.ts] 526 bytes {1} [built]
    [./src/account/store.ts] 1.05 KiB {1} [built]
        + 1864 hidden modules
Child
    Hash: 6cbbb6d272ed6afde438
    Time: 32877ms
    Built at: 2020-02-23 16:04:47
        Asset      Size  Chunks             Chunk Names
    server.js  6.34 MiB    main  [emitted]  main
    Entrypoint main = server.js
    [./src/account/actions/index.ts] 2.46 KiB {main} [built]
    [./src/account/api/lib/models/index.ts] 2.17 KiB {main} [built]
    [./src/account/api/lib/models/mappers.ts] 21 KiB {main} [built]
    [./src/account/api/lib/schoolaccountAPI.ts] 4.97 KiB {main} [built]
    [./src/account/api/lib/schoolaccountAPIContext.ts] 1.73 KiB {main} [built]
    [./src/account/epics/index.ts] 328 bytes {main} [built]
    [./src/account/epics/pageData.ts] 834 bytes {main} [built]
    [./src/account/epics/personalPage.ts] 2.29 KiB {main} [built]
    [./src/account/epics/registrationForm.ts] 910 bytes {main} [built]
    [./src/account/mappers/index.ts] 2.18 KiB {main} [built]
    [./src/account/reducers/githubRepos.ts] 837 bytes {main} [built]
    [./src/account/reducers/index.ts] 1.83 KiB {main} [built]
    [./src/account/reducers/serverError.ts] 526 bytes {main} [built]
    [./src/account/server.tsx] 1.62 KiB {main} [built]
    [./src/account/store.ts] 1.05 KiB {main} [built]
        + 1484 hidden modules`;

    return (
        <>
            <Header title="philip1967/my-awesome-repo" buttons={[
                {
                    text: 'Rebuild',
                    hasIcon: true,
                    svg: (<svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.775 3.031a4.036 4.036 0 00-2.779-1.096 4.07 4.07 0 00-3.938 3.07.291.291 0 01-.282.22H.39a.29.29 0 01-.286-.342 6.002 6.002 0 0110.04-3.221l.865-.864a.58.58 0 01.991.41v3.244c0 .32-.26.58-.58.58H8.175a.58.58 0 01-.41-.991l1.01-1.01zM.581 6.968h3.243a.58.58 0 01.41.991l-1.01 1.01a4.035 4.035 0 002.78 1.096 4.07 4.07 0 003.938-3.07.291.291 0 01.282-.22h1.386a.29.29 0 01.286.342 6.002 6.002 0 01-10.04 3.221l-.865.864a.58.58 0 01-.991-.41V7.548c0-.32.26-.58.58-.58z" fill="#000"/></svg>),
                    isSmall: true,
                },
                {
                    text: 'Settings',
                    hasIcon: true,
                    iconOnly: true,
                    svg: (<svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.34 7.442l-1.03-.595a4.662 4.662 0 000-1.699l1.03-.595a.292.292 0 00.134-.338 6.026 6.026 0 00-1.324-2.29.291.291 0 00-.358-.055l-1.03.595a4.566 4.566 0 00-1.471-.849V.428a.29.29 0 00-.228-.283 6.082 6.082 0 00-2.641 0 .29.29 0 00-.228.283v1.19a4.71 4.71 0 00-1.47.85l-1.03-.595a.287.287 0 00-.357.055A5.99 5.99 0 00.013 4.217a.29.29 0 00.134.339l1.03.595a4.66 4.66 0 000 1.698l-1.03.595a.292.292 0 00-.134.34c.269.86.726 1.64 1.324 2.288.092.099.242.123.358.055l1.03-.595c.434.373.932.66 1.472.85v1.19a.29.29 0 00.227.283 6.082 6.082 0 002.642 0 .29.29 0 00.227-.283v-1.19a4.71 4.71 0 001.471-.85l1.03.595a.287.287 0 00.359-.055 5.989 5.989 0 001.323-2.289.299.299 0 00-.135-.341zm-5.598.491a1.938 1.938 0 01-1.935-1.935c0-1.067.869-1.936 1.935-1.936 1.067 0 1.936.869 1.936 1.936a1.938 1.938 0 01-1.936 1.935z" fill="#111"/></svg>),
                    isSmall: true,
                }
            ]}/>
            <div className="build-details">
                <div className="container build-details__container">
                    {/* This is a BuildDetails component ({ parseInt(props.match.params.number, 10) }) */}
                    <BuildItem {...buildData} isDetailed={true}/>
                    <BuildLog classList={['build-details__logs']} logs={ buildLogs }/>
                </div>
            </div>
        </>
    );
}

export default BuildDetails;
