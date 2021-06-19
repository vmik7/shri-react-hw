import React from 'react';

import './style.scss';

function Button({
    text = 'Click me!',
    hasIcon = false,
    iconOnly = false,
    svg = '',
    isPrimary = false,
    isSmall = false,
    isDisabled = false,
    classList = [],
    onClick,
    ...props
}) {
    let classArray = ['button', ...classList];
    if (isPrimary) {
        classArray.push('button_primary');
    }
    if (isSmall) {
        classArray.push('button_small');
    }
    if (hasIcon) {
        classArray.push('button_has-icon');
    }
    if (iconOnly) {
        classArray.push('button_icon-only');
    }

    return (
        <button
            className={classArray.join(' ')}
            onClick={onClick}
            disabled={isDisabled}
            {...props}
        >
            {hasIcon && <span className="button__icon">{svg}</span>}
            {!iconOnly && <span className="button__text">{text}</span>}
        </button>
    );
}

export default Button;
