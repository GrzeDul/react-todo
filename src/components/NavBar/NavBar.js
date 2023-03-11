import Container from '../Container/Container';
import styles from './NavBar.module.scss';
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <i className='fa fa-tasks'></i>
        <ul className={styles.navlist}>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/favorite'>Favorite</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default NavBar;
