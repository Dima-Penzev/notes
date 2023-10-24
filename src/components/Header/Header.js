import AddButton from "../AddButton/AddButton";
import "./Header.css";

function Header({ openModal }) {
  return (
    <header className="header">
      <AddButton openModal={openModal} />
    </header>
  );
}

export default Header;
