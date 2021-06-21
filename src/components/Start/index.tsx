import React from 'react';
import { useHistory } from 'react-router';

import { Routes } from '../../constants';

import Button from '../generic/Button';
import Header from '../Header';

import './style.scss';
import iconSettings from './icons/settings.svg';

export interface StartProps {
    contentClass?: Array<string>;
}

export default function Start({ contentClass = [] }: StartProps) {
    let history = useHistory();

    let openSettings = () => {
        history.push(Routes.settings);
    };

    return (
        <>
            <Header
                title="School CI server"
                isFaded={true}
                buttons={[
                    {
                        text: 'Settings',
                        hasIcon: true,
                        /* prettier-ignore */
                        svg: (<svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M11.34 7.442l-1.03-.595a4.662 4.662 0 000-1.699l1.03-.595a.292.292 0 00.134-.338 6.026 6.026 0 00-1.324-2.29.291.291 0 00-.358-.055l-1.03.595a4.566 4.566 0 00-1.471-.849V.428a.29.29 0 00-.228-.283 6.082 6.082 0 00-2.641 0 .29.29 0 00-.228.283v1.19a4.71 4.71 0 00-1.47.85l-1.03-.595a.287.287 0 00-.357.055A5.99 5.99 0 00.013 4.217a.29.29 0 00.134.339l1.03.595a4.66 4.66 0 000 1.698l-1.03.595a.292.292 0 00-.134.34c.269.86.726 1.64 1.324 2.288.092.099.242.123.358.055l1.03-.595c.434.373.932.66 1.472.85v1.19a.29.29 0 00.227.283 6.082 6.082 0 002.642 0 .29.29 0 00.227-.283v-1.19a4.71 4.71 0 001.471-.85l1.03.595a.287.287 0 00.359-.055 5.989 5.989 0 001.323-2.289.299.299 0 00-.135-.341zm-5.598.491a1.938 1.938 0 01-1.935-1.935c0-1.067.869-1.936 1.935-1.936 1.067 0 1.936.869 1.936 1.936a1.938 1.938 0 01-1.936 1.935z" fill="#111" /></svg>),
                        isSmall: true,
                        onClick: () => {
                            history.push(Routes.settings);
                        },
                    },
                ]}
            />
            <div className={['start', ...contentClass].join(' ')}>
                <div className="container start__container">
                    <img
                        className="start__image"
                        src={iconSettings}
                        alt="Settings"
                    />
                    <p className="start__label">
                        Configure repository connection and synchronization
                        settings
                    </p>
                    <Button
                        isPrimary={true}
                        text="Open settings"
                        onClick={openSettings}
                    />
                </div>
            </div>
        </>
    );
}
