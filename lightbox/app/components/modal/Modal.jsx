"use client";

const Modal = ({ show, title, children, onclose }) => {
  return (
    show && (
      <>
        <div className="modal-backdrop" onClick={onclose}></div>
        <div className={`modal-wrapper ${show ? "active" : ""}`}>
          <div className="modal-header">
            <div className="modal-title">{title}</div>
            <span className="modal-close" onClick={onclose}>
              X
            </span>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </>
    )
  );
};

export default Modal;
