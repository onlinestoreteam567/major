import Slider from 'react-slick';
import { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cl from './index.module.scss';
import leftArrow from '../../../assets/svg/banners/arrowLeft.svg';
import rightArrow from '../../../assets/svg/banners/arrowRight.svg';
import CommentCard from './CommentsCard';

// Slider settings for comments
const settings = {
  accessibility: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  lazyLoad: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// Comments banner component
const CommentsBanner = () => {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  // Example array of comments data
  const commentsData = [
    {
      productTitle: "Шампунь для тонкого волосся",
      rating: 5,
      userComment: "Цей шампунь зробив чудеса з моїм тонким волоссям! Після використання протягом кількох тижнів, моє волосся стало більш об'ємним і здоровим. Щиро рекомендую його всім, хто має подібні проблеми!",
      userName: "Емма Джонсон",
      date: "07.12.2024",
      link: "#"
    },
    {
      productTitle: "Зволожуючий крем для обличчя",
      rating: 4,
      userComment: "Крем має приємну текстуру і добре зволожує, але хотілося б, щоб його ефект тривав довше протягом дня. Все ж це надійний продукт для сухої шкіри.",
      userName: "Софія Лі",
      date: "05.11.2024",
      link: "#"
    },
    {
      productTitle: "Антивіковий сироватка",
      rating: 5,
      userComment: "Я в захваті від цього сироватки! Я помітила помітне зменшення дрібних зморшок, і моя шкіра стала значно гладкішою. Обов'язково куплю знову.",
      userName: "Ава Мартін",
      date: "12.10.2024",
      link: "#"
    },
    {
      productTitle: "Зволожуючий бальзам для губ",
      rating: 3,
      userComment: "Цей бальзам для губ нормальний, але не настільки зволожуючий, як я сподівалася. Він виручає в екстрених ситуаціях, але я пробувала кращі альтернативи.",
      userName: "Олівія Девіс",
      date: "28.09.2024",
      link: "#"
    },
    {
      productTitle: "Освітлююча маска з вітаміном C",
      rating: 4,
      userComment: "Ця маска залишає мою шкіру свіжою та сяючою, але запах трохи занадто сильний для мого смаку. В цілому, чудовий продукт.",
      userName: "Ізабелла Гарсія",
      date: "14.08.2024",
      link: "#"
    },
    {
      productTitle: "Глибоко очищаючий засіб для обличчя",
      rating: 5,
      userComment: "Найкращий засіб для очищення, який я коли-небудь використовувала! Він дійсно очищає в глибину, не пересушуючи шкіру. Ідеально підходить для щоденного використання.",
      userName: "Міа Родрігес",
      date: "02.07.2024",
      link: "#"
    },
    {
      productTitle: "Легкий тональний крем",
      rating: 4,
      userComment: "Чудовий тональний крем, який відчувається легким на шкірі та забезпечує хороше покриття. Можливо, він міг би триматися трохи довше, але в цілому я задоволена.",
      userName: "Шарлотта Уайт",
      date: "18.06.2024",
      link: "#"
    },
    {
      productTitle: "Сонцезахисний крем SPF 50",
      rating: 5,
      userComment: "Обов'язковий до використання! Цей сонцезахисний крем легкий, не жирний і не залишає білого відтінку. Ідеально підходить для щоденного використання, навіть під макіяж.",
      userName: "Амелія Вілсон",
      date: "22.05.2024",
      link: "#"
    },
    {
      productTitle: "Сироватка для контролю фризу",
      rating: 3,
      userComment: "Ця сироватка трохи допомагає з фризом, але не така ефективна, як я очікувала. Найкраще працює в умовах невеликої вологості.",
      userName: "Евелін Кларк",
      date: "09.04.2024",
      link: "#"
    },
    {
      productTitle: "Нічний крем для відновлення",
      rating: 5,
      userComment: "Я прокидаюся з неймовірно м'якою шкірою щоранку! Цей нічний крем змінив текстуру моєї шкіри та вирівняв колір обличчя.",
      userName: "Гарпер Льюіс",
      date: "15.03.2024",
      link: "#"
    }
];

  

  return (
    <div className="slider-container">
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2 style={{ fontSize: '36px', color: 'black', marginTop: '180px', marginBottom: '60px' }}>Відгуки про наші засоби</h2>
      </div>
      <div style={{ textAlign: 'end', marginTop: '30px' }}>
        <button className={`button ${cl.arrow}`} onClick={previous}>
          <img src={leftArrow} alt="Previous comment" />
        </button>
        <button className={`button ${cl.arrow}`} onClick={next}>
          <img src={rightArrow} alt="Next comment" />
        </button>
      </div>
      <Slider ref={(slider) => { sliderRef = slider; }} {...settings}>
        {commentsData.map((comment, index) => (
          <CommentCard key={index} commentData={comment} />
        ))}
      </Slider>
    </div>
  );
};

export default CommentsBanner;
