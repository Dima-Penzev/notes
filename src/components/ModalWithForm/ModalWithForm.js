import "./ModalWithForm.css";

function ModalWithForm(
  title,
  buttonText,
  onClose,
  children,
  onSubmit,
  isLoading
) {
  return (
    <div className="modal">
      <div className="modal__container">
        <button
          className="modal__close"
          type="button"
          aria-label="закрыть"
          onClick={onClose}
        />
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button className="modal__button" type="submit" disabled={isLoading}>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
