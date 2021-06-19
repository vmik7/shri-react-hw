import React, { useRef } from 'react';

import './style.scss';

function Modal({
    title,
    subtitle,
    content = '',
    classList = [],
    onWrapperClick,
}) {
    const wrapperEl = useRef(null);

    return (
        <div className={['modal', ...classList].join(' ')}>
            <div
                ref={wrapperEl}
                className="modal__wrapper"
                onClick={(e) => {
                    if (e.target === wrapperEl.current) {
                        onWrapperClick();
                    }
                }}
            >
                <div className="modal__window">
                    {title && <p className="modal__title">{title}</p>}
                    {subtitle && <p className="modal__subtitle">{subtitle} </p>}
                    {content}
                </div>
            </div>
        </div>
    );
}

export default Modal;
