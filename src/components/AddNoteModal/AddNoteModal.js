import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddNoteModal.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import { createPortal } from "react-dom";
const modalRoot = document.querySelector("#modal-root");

function AddNoteModal({ isLoading, onClose, onSubmit }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [id, setId] = useState("");

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
    setId(nanoid());
  };

  const resetForm = () => {
    setText("");
    setTitle("");
    setId("");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({ title, text, id });
    resetForm();
  };

  return createPortal(
    <ModalWithForm
      title="Создать заметку"
      buttonText={isLoading ? "Создание..." : "Создать"}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="modal__input"
        type="text"
        placeholder="Заголовок"
        name="title"
        required
        onChange={handleChange}
      />
      <textarea
        className="modal__textarea"
        placeholder="Текст"
        name="note"
        cols="40"
        rows="3"
        required
        onChange={handleChange}
      ></textarea>
    </ModalWithForm>,
    modalRoot
  );
}

export default AddNoteModal;
