import React from 'react';

const Popup = ({ title, children, onClose }) => {
  return (
    <div className="popup fixed top-0 left-0 right-0 bottom-0 bg-white flex items-center z-50 opacity-0">
      <div className="popup-container rounded-2xl relative overflow-hidden">
        <div className="popup-header">
          <h3 className="popup-title">{title}</h3>
          <button className="popup-close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="popup-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;