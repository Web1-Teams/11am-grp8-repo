

import React from 'react';

const Modal = ({ show, onClose, title, content }) => {
  if (!show) return null;

  return (
    <div className="modal fade show" style={{ display: 'block' }} onClick={onClose}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {content}
      </div>
      </div>
      </div>
      </div>
  );
};

export default Modal;
