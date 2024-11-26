import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cl from './index.module.scss';

const LogoIcon = ({ fillColor }) => {
  return (
    <Link to="/">
      <svg
        className={cl.headerLogo}
        width="114"
        height="53"
        viewBox="0 0 114 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M85.1257 25.4701C85.1257 25.4701 85.0742 25.3666 84.9711 25.2113C84.8164 24.9008 84.5586 24.4351 84.3523 24.1246L83.9914 23.4519C83.8883 23.2449 83.7852 23.0896 83.7852 23.0379C82.6508 20.4504 82.6508 15.8965 83.0118 14.2923L83.1664 13.7231C83.3211 13.1021 83.5274 12.2741 83.8883 11.7049C84.4039 10.8769 85.332 10.3594 85.5898 10.3077C85.7445 10.2559 85.8991 10.2559 86.0538 10.2559C86.621 10.3077 87.2397 10.5147 87.6522 10.8252C88.0647 11.1874 88.5803 11.9636 88.6318 12.6364C88.6834 13.6196 88.5287 14.3441 88.1162 14.8616C87.91 15.1203 87.6006 15.379 87.2397 15.5343C86.9303 15.6895 86.5694 15.6895 86.2085 15.586C85.8991 15.4825 85.5382 15.2755 85.2289 14.9133C84.8679 14.5511 84.6101 14.1888 84.5586 14.0336L84.0945 12.8951L84.1976 14.1371C84.2492 14.7581 84.4554 15.2755 84.8164 15.6895C85.1257 16.0518 85.5382 16.2588 86.0023 16.3623C86.1054 16.3623 86.2085 16.414 86.3632 16.414C87.1881 16.414 87.91 16.207 88.4772 15.7413L88.5287 15.6895C89.3021 15.0168 89.7662 13.9301 89.8177 12.6364C89.8177 11.3426 89.4052 10.1524 88.6834 9.47969C88.0647 8.91045 87.2397 8.75521 86.621 8.65171C86.5694 8.65171 86.4663 8.65171 86.4147 8.65171C85.6929 8.59996 84.7648 8.91045 84.0945 9.37619C83.7336 9.58319 83.218 10.1524 82.5477 11.4979C82.4962 11.6014 82.4446 11.7049 82.4446 11.8084C81.929 13.2056 81.8259 15.8448 81.8259 15.9483C81.7743 16.7245 81.7743 17.5007 81.8259 18.1735C81.4649 17.3972 81.0525 16.3105 80.9493 15.8448C80.8978 15.7413 80.8462 15.586 80.8462 15.5343C80.9493 15.2755 81.0009 15.0686 81.104 14.8098C81.7227 12.8951 82.5993 9.32445 81.3618 7.20275C81.1556 6.84051 80.4853 6.42651 79.8666 6.63351C79.4025 6.737 79.0416 7.0475 78.7838 7.46149C78.3713 8.18597 78.2166 9.27269 78.3713 10.7734C78.4744 12.2741 78.8869 13.7748 79.0416 14.3441C79.0932 14.5511 79.1447 14.7063 79.1447 14.7581L79.5572 16C79.5057 16.1035 79.5057 16.2588 79.4541 16.414C79.2479 17.0868 78.8869 18.3805 78.5776 19.105C78.4229 19.5189 78.1135 20.0882 77.7526 20.7609C77.7526 20.6574 77.8042 20.6057 77.8042 20.5022C78.2166 18.7945 78.5776 16.1035 78.2166 14.1371V14.0336C78.2166 13.9301 78.1651 13.8266 78.1651 13.6713C78.062 13.1021 77.9073 12.3776 77.5979 11.7566C77.1854 10.9804 76.7214 10.3077 76.2058 9.89368C75.5871 9.37619 74.6074 9.11745 74.2981 9.0657C73.7825 9.01395 73.3184 9.0657 72.8028 9.1692C72.2872 9.27269 71.7716 9.63494 71.4107 10.0489C70.8435 10.6182 70.4826 11.6014 70.3795 12.4811C70.3279 13.1021 70.5857 14.6546 71.2044 15.4308C71.5138 15.793 71.8747 16.0518 72.3903 16.1553C73.37 16.4658 74.5043 16.1553 75.1746 15.3791C75.3293 15.2238 75.4324 15.0168 75.5355 14.8098L75.7417 14.3958L75.3293 14.4993C75.1746 14.5511 74.9683 14.7063 74.8137 14.8098C74.5043 15.0686 74.0918 15.379 73.4215 15.4308C72.5966 15.5343 72.0294 15.0168 71.6685 13.9818C71.3591 12.9986 71.3591 11.7049 72.1841 10.9287C72.9059 10.2042 73.9887 10.4112 74.7621 10.6699C75.2261 10.8252 76.2058 11.8084 76.6698 13.4126C76.8761 14.1371 77.2886 16.1035 76.9276 18.2252L76.8245 18.7427C76.7214 19.5707 76.5667 20.5539 76.3605 21.3819C76.1542 22.4169 75.948 23.1414 75.6902 24.1763L75.3808 25.3666H76.9792H77.1339L77.1854 25.2113C77.237 25.0561 78.3198 21.7959 78.5776 21.2784C78.9385 20.3987 79.7635 18.484 80.1759 17.1903C80.3306 17.5525 80.4337 17.8112 80.5884 18.1217C80.6915 18.3287 80.9493 18.7945 81.2071 19.312C81.5165 19.8812 81.8259 20.5539 81.929 20.7609C82.1868 21.4337 83.0633 23.1414 83.6305 24.1763C83.7852 24.4351 84.1461 25.1078 84.2492 25.2113L84.3008 25.3148H85.4867L85.1257 25.4701ZM80.2791 13.5678C80.2275 13.7231 80.1759 13.8783 80.1759 14.0336C79.9697 13.4643 79.815 12.8951 79.7119 12.2741C79.5572 11.4461 79.5056 10.6182 79.5056 9.84193V9.73843C79.5056 8.59996 79.6603 7.97898 79.9697 7.82373C80.0213 7.82373 80.0213 7.82373 80.0728 7.82373H80.1244C80.3822 7.97898 80.5884 8.8587 80.64 9.42794C80.7947 11.0322 80.5369 12.5846 80.2791 13.5678Z"
          fill={fillColor}
        />
        <path
          d="M113.897 31.473L113.536 31.1108L112.969 30.5415C112.659 30.2311 112.505 29.6618 112.505 28.8856V24.4352C112.505 22.5722 112.041 21.0198 111.112 19.7261C110.545 18.9498 109.875 18.3288 108.998 17.8631C109.875 17.2421 110.648 16.4659 111.267 15.5344C112.298 13.9302 112.865 12.0155 112.865 9.73855C112.865 6.84062 112.092 4.46018 110.545 2.75247C108.947 0.993009 106.781 0.113281 104.1 0.113281H100.285C100.079 0.113281 99.9238 0.26853 99.9238 0.475525V31.68C99.9238 31.887 100.079 32.0423 100.285 32.0423H103.378C103.585 32.0423 103.739 31.887 103.739 31.68V19.3121H104.41C107.349 19.3121 108.689 20.8128 108.689 24.073V28.8338C108.689 29.8171 109.05 30.5933 109.772 31.1625C110.442 31.68 111.319 31.9905 112.35 31.9905H113.639C113.794 31.9905 113.897 31.887 114 31.7835C114 31.7835 114 31.6283 113.897 31.473ZM108.844 9.7903C108.844 12.119 108.38 13.9302 107.452 15.1722C106.627 16.3106 105.389 16.8799 103.739 16.9316V2.59722C105.595 2.64897 106.833 3.16646 107.555 4.30493C108.38 5.5469 108.844 7.35811 108.844 9.7903Z"
          fill={fillColor}
        />
        <path
          d="M17.3759 0.113281H13.1479L15.1588 8.13434L12.5292 20.968L7.42469 0.941261L7.21845 0.113281H2.88738L4.9498 8.13434L0.257802 30.9555L0 32.2493H2.62958L6.39349 13.7232L10.8792 29.3513L12.0651 33.9052L12.8385 30.0241L16.5509 13.775L21.1398 31.266L21.4491 32.2493H25.7286L17.6337 0.941261L17.3759 0.113281Z"
          fill={fillColor}
        />
        <path
          d="M59.5525 0.113281H55.7886V36.1304C55.7886 38.3556 55.273 40.736 54.2933 42.8577C52.2825 47.5151 47.5905 50.5166 42.3829 50.5166C39.8049 50.5166 37.33 49.7921 35.1644 48.4466C31.1943 45.9627 28.7709 41.8228 28.5131 37.0619C28.3069 33.4912 29.3897 30.0241 31.5036 27.2814L31.0396 28.9891C30.8849 29.6101 30.7302 30.1276 30.6787 30.4898C30.524 31.1625 30.3693 31.887 31.1943 32.1975L31.2974 32.2493H32.8442L33.0505 31.6283C33.0505 31.5765 33.1536 31.3178 33.2051 31.1625L33.3083 30.7485C33.4114 30.4381 33.5145 29.9206 33.7723 28.9891C34.0301 27.9541 34.4426 26.4016 35.0613 24.1247C36.1441 23.4002 37.3815 22.8827 38.619 22.5722C38.8252 22.5205 38.9799 22.4687 39.1861 22.4687L41.7126 32.301H45.9405L45.5796 30.852C45.5281 30.645 45.4249 30.1276 45.0125 28.6786L44.8578 28.0059C44.6515 27.2814 44.4969 26.5051 44.2906 25.7289L43.5172 22.7275C45.064 23.245 46.5077 24.2282 47.7967 25.6772L47.9514 25.8324L49.1373 26.5051L48.5701 25.4702C47.178 22.8827 45.2703 21.1233 42.8985 20.347L42.5891 19.1051C42.3313 18.0184 41.9188 16.4141 41.4548 14.6029L38.5159 3.06296C38.0002 1.14826 37.9487 0.837765 37.9487 0.786017L37.7424 0.113281H33.4114L36.041 10.2043L32.7411 22.5722C25.8836 27.3331 23.718 38.0451 28.2553 45.0829C31.349 50.1026 36.505 53.0005 42.486 53.0005C48.6732 53.0005 54.2933 49.8438 57.5416 44.5655C59.2431 41.2535 59.8103 39.1318 59.9134 35.4059V35.2507C59.9134 34.0087 59.9134 25.7807 59.965 19.1051V0.113281H59.5525ZM35.8347 20.8128L37.2784 15.3274L38.4643 19.9848C37.6393 20.14 36.7112 20.4505 35.8347 20.8128Z"
          fill={fillColor}
        />
        <path
          d="M77.1351 0.26802L76.7227 0.319768L77.3929 2.85546L77.7539 2.80371C78.321 2.70021 78.8882 2.59671 79.4554 2.54497H79.61C79.7132 2.54497 79.8163 2.54497 79.971 2.54497C83.9927 2.54497 87.5503 4.66666 89.7674 8.44432C92.4486 12.9465 92.6033 18.6906 90.2315 23.0375C88.994 25.6249 86.8801 27.6431 84.3536 28.8333L84.0958 28.9368L84.7661 31.6278L85.127 31.4725C89.7159 29.8683 93.3251 26.2976 95.0266 21.6403C96.6765 17.1381 96.264 12.1702 93.8407 8.03033C90.5408 2.18272 84.0442 -0.973951 77.1351 0.26802Z"
          fill={fillColor}
        />
        <path
          d="M81.9304 29.6092C81.2601 29.7645 80.5382 29.8162 79.8164 29.8162C77.754 29.8162 75.7947 29.1952 74.0416 28.0568C69.9684 25.3658 67.6997 20.3462 68.1637 14.9643C68.5762 9.89294 71.3089 5.54604 75.3306 3.63134L75.5884 3.47609L74.9181 0.785156L74.5572 0.9404C70.9996 2.23412 68.0606 4.66631 66.1013 8.02998C63.1624 12.9979 63.1624 19.0007 66.0498 24.1756C68.9371 29.2987 74.0932 32.3519 79.8164 32.3519C80.1773 32.3519 80.5382 32.3519 80.8992 32.3002C81.4663 32.2484 82.0335 32.1966 82.6006 32.0932L83.0131 32.0414L82.3428 29.454L81.9304 29.6092Z"
          fill={fillColor}
        />
      </svg>
    </Link>
  );
};

LogoIcon.propTypes = {
  fillColor: PropTypes.string.isRequired,
};
export default LogoIcon;