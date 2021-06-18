import React from 'react';

import BuildItem from '../BuildItem';
import Button from '../generic/Button';
// import NewBuild from '../NewBuild';

import './style.scss';

function BuildList() {

    let builds = [
        {
            id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            configurationId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            buildNumber: 1368,
            commitMessage: 'add documentation for postgres scaler',
            commitHash: '9c9f0b9',
            branchName: 'master',
            authorName: 'Philip Kirkorov',
            status: 'Success',
            start: '2021-01-18T05:00:12.000Z',
            duration: 80,
        },
        {
            id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            configurationId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            buildNumber: 1367,
            commitMessage: 'Super cool UI kit for making websites that look like games of old.',
            commitHash: '952e5567',
            branchName: 'super-cool-ui-kit',
            authorName: 'Vadim Makeev',
            status: 'Waiting',
        },
        {
            id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            configurationId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            buildNumber: 1368,
            commitMessage: 'add documentation for postgres scaler',
            commitHash: '9c9f0b9',
            branchName: 'master',
            authorName: 'Philip Kirkorov',
            status: 'InProgress',
            start: '2021-02-18T08:35:41.117Z',
        },
        {
            id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            configurationId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            buildNumber: 1368,
            commitMessage: 'add documentation for postgres scaler',
            commitHash: '9c9f0b9',
            branchName: 'master',
            authorName: 'Philip Kirkorov',
            status: 'Fail',
            start: '2021-06-18T08:35:41.117Z',
            duration: 80,
        },
        {
            id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            configurationId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            buildNumber: 1368,
            commitMessage: 'add documentation for postgres scaler',
            commitHash: '9c9f0b9',
            branchName: 'master',
            authorName: 'Philip Kirkorov',
            status: 'Canceled',
            start: '2021-09-18T08:35:41.117Z',
        }
    ]

    return (  
        <div className="build-list">
            <div className="container build-list__container">
                { builds.map(build => <BuildItem {...build} classList={['build-list__item']}/>) }
                <Button
                    text="Show more"
                    isSmall={true}
                />
            </div>
        </div>
    );
}

export default BuildList;
