import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';
import styles from './Favorite.module.scss';
import Card from '../Card/Card';
const Favorite = () => {
  const favoritesCards = useSelector((state) => getFavoriteCards(state));
  if (favoritesCards.length === 0) return <Navigate to='/' />;
  return (
    <Container>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.favorites}>
        <ul className={styles.cards}>
          {favoritesCards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              isFavorite={card.isFavorite}
              id={card.id}
            />
          ))}
        </ul>
      </div>
    </Container>
  );
};
export default Favorite;
