import React from 'react';
 
import './style.scss';

import Button from '../generic/Button';

function Header({ 
    title,
    isFaded = false,
    buttons = [],
}) {

    let classArray = ['header'];
    if (isFaded) {
        classArray.push('header_faded');
    }

    return (
        <header className={classArray.join(' ')}>
            <div className="container header__container">
                <h1 className="header__title">{ title }</h1>
                { buttons.map(buttonProps => <Button {...buttonProps} classList={['header__control']}/>) }
            </div>
        </header>
    );
}

export default Header;
