import React from 'react';
 
import Button from '../generic/Button'

function Header({ title, buttons }) {
    return (
        <header className="header">
            <h1 className="header__title">{ title }</h1>
            { buttons.map(button => <Button className="header__button" text={ button.text }/>) }
        </header>
    );
}

export default Header;
