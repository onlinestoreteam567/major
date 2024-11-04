import firstSlideImage from '../../../assets/png/banners/bestSellersBanner/1.png';
import secondSlideImage from '../../../assets/png/banners/bestSellersBanner/2.png';
import thirdSlideImage from '../../../assets/png/banners/bestSellersBanner/3.png';
import fourthSlideImage from '../../../assets/png/banners/bestSellersBanner/4.png';
import fivethSlideImage from '../../../assets/png/banners/bestSellersBanner/5.png';
import sixthSlideImage from '../../../assets/png/banners/bestSellersBanner/6.png';
import seventhSlideImage from '../../../assets/png/banners/bestSellersBanner/7.png';
import eighthSlideImage from '../../../assets/png/banners/bestSellersBanner/8.png';

const data = [
  {
    imgSrc: firstSlideImage,
    imgAlt: 'First best seller image',
    feedbackAmount: '1',
    stars: 1,
    label: ['hit', 'new', 'percent'],
    title: 'Super title',
  },
  {
    imgSrc: secondSlideImage,
    imgAlt: 'Second best seller image',
    feedbackAmount: '2',
    stars: '2',
    label: ['hit', 'percent'],
    title: 'Назва',
  },
  {
    imgSrc: thirdSlideImage,
    imgAlt: 'Third best seller image',
    feedbackAmount: '1',
    stars: '3',
    label: ['new', 'percent'],
    title: 'І ще назва',
  },
  {
    imgSrc: fourthSlideImage,
    imgAlt: 'Fourth best seller image',
    feedbackAmount: '5',
    stars: '4',
    label: ['new', 'hit'],
    title: 'Назва',
  },
  {
    imgSrc: fivethSlideImage,
    imgAlt: 'Fiveth best seller image',
    feedbackAmount: '5',
    stars: '5',
    label: ['hit', 'new'],
    title: 'Назва',
  },
  { imgSrc: sixthSlideImage, imgAlt: 'Sixth best seller image', feedbackAmount: '5', title: 'Назва', stars: '5' },
  { imgSrc: seventhSlideImage, imgAlt: 'Seventh best seller image', feedbackAmount: '5', title: 'Назва', stars: '5' },
  { imgSrc: eighthSlideImage, imgAlt: 'Eighth best seller image', feedbackAmount: '5', title: 'Назва', stars: '5' },
];

export default data;
