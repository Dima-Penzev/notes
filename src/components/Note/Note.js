import "./Note.css";
import { useDispatch, useSelector } from "react-redux";
import { removeNote } from "../../redux/notesSlice";

function Note({ title, text, noteId, onEditNote }) {
  const notes = useSelector((state) => state.notes.value);
  const dispatch = useDispatch();

  return (
    <li className="note">
      <div className="note__text-container">
        <h2 className="note__title">{title}</h2>
        <p className="note__text">{text}</p>
      </div>
      <div className="note__btn-container">
        <button
          className="note__edit"
          type="button"
          onClick={() => {
            onEditNote(noteId);
          }}
        />
        {notes.length > 1 && (
          <button
            className="note__delete"
            type="button"
            onClick={() => {
              dispatch(removeNote(noteId));
            }}
          />
        )}
      </div>
    </li>
  );
}

export default Note;
