import React from 'react';

import './style.scss';

function Modal({
    title,
    subtitle,
    content = '',
    classList = [],
}) {
    return (
        <div className={['modal', ...classList].join(' ')}>
            <div className="modal__wrapper">
                <div className="modal__window">
                    {title && <p className="modal__title">{ title }</p>}
                    {subtitle && <p className="modal__subtitle">{ subtitle} </p>}
                    {content}
                </div>
            </div>            
        </div>
    );
}

export default Modal;