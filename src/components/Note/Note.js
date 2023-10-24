import "./Note.css";

function Note({ title, text, noteId, onEditNote, onDeleteNote }) {
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
        <button
          className="note__delete"
          type="button"
          onClick={() => {
            onDeleteNote(noteId);
          }}
        />
      </div>
    </li>
  );
}

export default Note;
