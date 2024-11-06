import Card from '@components/UI/ProductItem/Card';
import ListReviewsCard from '@components/UI/UserReviews/ListReviewsCard';
const style = {
  color: 'rgb(0, 0, 0)',
  fontFamily: 'Oswald',
  fontSize: '20px',
  fontWeight: '500',
  lineHeight: '1.22',
  textAlign: 'center',
};

const AboutPage = () => {
  return (
    <div>
      <Card />
      <h4 style={style}>Відгуки про товар</h4>
      <h4 style={style}>Флюїд шовк для тонкого волосся</h4>
      <ListReviewsCard />
    </div>
  );
};

export default AboutPage;
