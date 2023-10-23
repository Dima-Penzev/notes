import "./Note.css";

function Note() {
  return (
    <li className="note">
      <h2 className="note__title">Заголовок заметки</h2>
      <p className="note__text">
        Заметка, в которой нет ничего хорошего dsfadsf asdfasdfas asdfasdfads
        dsfadsf s adfa sdfads fasdf adfadsfadsf adfasdf adfasd fafd f fasdfa
        sdfasdf asdfa fa fas fasdfasdf asdfdfadfa sdfasdfadfaf af fasd adf adsf
        asdfa sdf asdf asdf adsf adf af
      </p>
      <div className="note__btn-container">
        <button className="note__edit" type="button" />
        <button className="note__delete" type="button" />
      </div>
    </li>
  );
}

export default Note;
