import './index.css';
import Home from './components/Home';
import About from './components/About';
import { Routes, Route } from "react-router-dom";
import Services from './components/Services';
import Pricing from './components/Pricing';
import Cars from './components/Cars';
import Blog from './components/Blog';
import Contact from './components/Contact';

import Img1 from './Assests/3XHQcs.jpg';
import Img2 from './Assests/every-detail-of-a-sleek-modern-car-captured-in-close-up-photo.jpg';
import Img3 from './Assests/images.jpeg';
import Img4 from './Assests/pexels-pixabay-210143.jpg';
import Img5 from './Assests/super-sports-car-segment-in-india-to-register-30-pc-growth-this-year-mclaren-automotive.webp';
import Img6 from './Assests/Current-Bugatti.png';
import Img7 from './Assests/1688544849-maruti-invicto.webp';
import Img8 from './Assests/stylish-elegant-couple-car-salon_1157-24309.avif';
import Img9 from './Assests/newly-married-wedding-car-line-art-icon_408115-1386.avif';
import Img10 from './Assests/city-town-urban-dotted-line-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg';
import Img11 from './Assests/transfer-vector-icon-600nw-1154589949.webp';
import Img12 from './Assests/airplane-icon-vector-transportation-logo-600nw-1283834365.webp';
import Img13 from './Assests/group-asian-generation-z-people-600nw-2421838799.webp';
import Img14 from './Assests/bike-on-rent-in-bhubaneswar.jpg';
import Img15 from './Assests/172192d0d51607fdd1ef2b5709290d73.jpg';
import Img16 from './Assests/pre-trip-car-checklist-for-safe-summer-vacation.webp';
import Img17 from './Assests/road-trip-concept-with-young-couple (1).jpg';
import Img18 from './Assests/Blog_Article3-890x664.jpg';
import Img19 from './Assests/1000_F_145126694_RDl1ZhYdqPL45vI0XLMBtQqdTjdgu9IB.jpg';
import Img20 from './Assests/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg';
import Img21 from './Assests/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg';

function App() {

  const imageProps = {
    image1: Img1,
    image2: Img2,
    image3: Img3,
    image4: Img4,
    image5: Img5,
    image6: Img6,
    image7: Img7,
    image8: Img8,
    image9: Img9,
    image10: Img10,
    image11: Img11,
    image12: Img12,
    image13: Img13,
    image14: Img14,
    image15: Img15,
    image19: Img19,
    image20: Img20,
    image21: Img21,
  };

  const imageProps1 = {
    image13: Img13,
    image14: Img14,
    image15: Img15,
    image16: Img16,
    image17: Img17,
    image18: Img18,
  };

  const imageProps2 = {
    image9: Img9,
    image10: Img10,
    image11: Img11,
    image12: Img12,
  };

  const imageProps3 = {
    image1: Img1,
    image2: Img2,
    image3: Img3,
    image4: Img4,
    image5: Img5,
    image6: Img6,
    image7: Img7,
  };

  const imageProps5 = {
    image8: Img8,
    image19: Img19,
    image20: Img20,
    image21: Img21,
  };

  return (
    <div className="carbook">
      <Routes>
        <Route path="/" element={<Home {...imageProps} />} />
        <Route path="/about" element={<About {...imageProps5} />} />
        <Route path="/services" element={<Services {...imageProps2} />} />
        <Route path="/pricing" element={<Pricing {...imageProps3} />} />
        <Route path="/cars" element={<Cars {...imageProps3} />} />
        <Route path="/blog" element={<Blog {...imageProps1} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;