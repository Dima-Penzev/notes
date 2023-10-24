import "./AddButton.css";

function AddButton({ openModal }) {
  return (
    <button className="add-button" type="button" onClick={openModal}></button>
  );
}

export default AddButton;
