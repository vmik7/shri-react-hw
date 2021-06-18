import React from 'react';

import './style.scss';

function TextField({
    placeholder = '',
    value = '',
    isLabeled = false,
    labelText = '',
    isRequired = false,
    isInline = false,
    name = '',
    classList,
}) {
    const WrapperTag = (isInline ? 'span' : 'div');

    let inputOptions = {}

    if (name) {
        inputOptions.name = name;
    }
    if (placeholder) {
        inputOptions.placeholder = placeholder;
    }
    if (placeholder) {
        inputOptions.value = value;
    }

    const input = <input className="text-field__input" {...inputOptions}/>;

    return isLabeled ? (
        <WrapperTag className={ ['text-field', ...classList].join(' ') }>
            <label  className='text-field__label-wrap'>
                <span className='text-field__label'>{ labelText }</span>
                <br/>
                { input }
            </label>
        </WrapperTag>
    ) : (
        <WrapperTag className={ ['text-field', ...classList].join(' ') }>
            { input }
        </WrapperTag>
    );
}

export default TextField;