import React from 'react';

import './style.scss';

function BuildItem({
    buildNumber,
    commitMessage,
    commitHash,
    branchName,
    authorName,
    status,
    start,
    duration,
    classList,
 }) {

    const startDate = new Date(start);
    const monthNames = [ 'янв', 'фев', 'мар', 'апр', 'мая', 'июня', 'июля', 'авг', 'сент', 'окт', 'нояб', 'дек' ];
    
    let hours = startDate.getHours();
    if (hours < 10) {
        hours = '0' + hours;
    }
    
    let minutes = startDate.getHours();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    let durationHours = Math.floor(duration / 60);
    let durationMinutes = duration % 60;

    let statusMod = 'build-item_status_' + status.toLowerCase();

    return (
        <article className={['build-item', statusMod, ...classList].join(' ')}>
            <div className="build-item__main">
                <header className="build-item__header">
                    <div className="build-item__number">{ buildNumber }</div>
                    <div className="build-item__message">{ commitMessage }</div>
                </header>
                <div className="build-item__details">
                    <div className="build-item__commit">
                        <div className="build-item__branch">{ branchName }</div>
                        <div className="build-item__hash">{ commitHash }</div>
                    </div>
                    <div className="build-item__author">{ authorName }</div>
                </div>
            </div>
            <footer className="build-item__footer">
                <div className="build-item__time">{ `${startDate.getDate()} ${monthNames[startDate.getMonth()]}, ${hours}:${minutes}` }</div>
                <div className="build-item__duration">{`${durationHours ? durationHours + ' ч ' : ''}${durationMinutes} мин`}</div>
            </footer>
        </article>
    );
}


export default BuildItem;