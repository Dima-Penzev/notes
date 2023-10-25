import "../AddNoteModal/AddNoteModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";
import { createPortal } from "react-dom";
const modalRoot = document.querySelector("#modal-root");

function EditNoteModal({ isLoading, editedNote, onClose, onSubmit }) {
  const [title, setTitle] = useState(editedNote.title);
  const [text, setText] = useState(editedNote.text);

  const handleChange = (evt) => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case "note":
        setText(value);
        break;

      case "title":
        setTitle(value);
        break;

      default:
        return;
    }
  };

  const resetForm = () => {
    setText("");
    setTitle("");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({ title, text, id: editedNote.id });
    resetForm();
  };
  return createPortal(
    <ModalWithForm
      title="Изменить заметку"
      buttonText={isLoading ? "Изменение..." : "Изменить"}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="modal__input"
        type="text"
        placeholder="Заголовок"
        name="title"
        required
        value={title}
        onChange={handleChange}
      />
      <textarea
        className="modal__textarea"
        placeholder="Текст"
        name="note"
        cols="40"
        rows="3"
        required
        value={text}
        onChange={handleChange}
      ></textarea>
    </ModalWithForm>,
    modalRoot
  );
}

export default EditNoteModal;
