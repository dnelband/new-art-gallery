import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.bg}>
        <div className={headerStyles.text}>
          <span className={headerStyles.border}>Charlotte Hillborg</span>
        </div>
      </div>
    </header>
  );
};
export default Header;
