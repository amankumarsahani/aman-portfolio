//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiMail,
  FiMapPin,
  FiPhoneCall,
  FiLinkedin,
  FiBookmark,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import Qspider from './assets/img/brands/qspider.png';
// import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';
import AwadhIcon from './assets/img/brands/awadh.png';

// projects images
// import Project1 from './assets/img/projects/p1.png';
// import Project1 from './assets/img/projects/newz.PNG'
import Project2 from './assets/img/projects/404.avif';
import Project1 from './assets/img/projects/404.avif';
import Project5 from './assets/img/projects/404.avif';
import Ekaksha from './assets/img/projects/ekaksha.png';
import Newz from './assets/img/projects/newz.PNG';
import School from './assets/img/projects/schoolSite.png';
import Expense from './assets/img/projects/exp.png';



// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: 'https://instagram.com/amankumar.sahani?igshid=ZDdkNTZiNTM=',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/amankumarsahani',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/aman-kumar-sahani-26928320b/',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: AwadhIcon,
    href: 'https://ihub-awadh.in/',
  },
  {
    img: Qspider,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
  
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Store Manager',
    category: 'CRM',
  },
  {
    id: '2',
    image: Project2,
    name: 'IOT Lab',
    category: 'web development',
  },
  {
    id: '3',
    image: School,
    name: 'Parbhawati Vidyapeth',
    category: 'Web Development',
  },
  {
    id: '4',
    image: Newz,
    name: 'Newz 24x7',
    category: 'web development',
  },
  {
    id: '5',
    image: Expense,
    name: 'Expense Tracker',
    category: 'web development',
  },
  {
    id: '6',
    image: Project5,
    name: 'E-Learning Website',
    category: 'web development',
  },
  {
    id: '7',
    image: Ekaksha,
    name: 'Ekaksha',
    category: 'Cross-Platform App',
  },
  {
    id: '8',
    image: Project5,
    name: 'BMI Calculator',
    category: 'Mobile App',
  },
  
  {
    id: '9',
    image: Project1,
    name: 'TODO App',
    category: 'Mobile App',
  },
  
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'CRM',
  },
  {
    name: 'web development',
  },
  {
    name: 'Mobile App',
  },
  {
    name: 'Cross-Platform App',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Cross-Platform Application Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiBookmark/>,
    name: 'Social Media Marketing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Anu Kumar (Co-Founder of FinDev)',
    authorPosition: 'Software Developer',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Ajeet Yadav (Co-Founder of FinDev)',
    authorPosition: 'Software Tester',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Anand Shukla (Co-Founder of FinDev)',
    authorPosition: 'Software Developer',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Sidharth Mudgil (Co-Founder of Ekaksha)',
    authorPosition: 'Android Developer',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Manthan Sharma (Co-Founder of Ekaksha)',
    authorPosition: 'Software Developer',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at amankumar.sahani096@gmail.com',
  },
  {
    icon: <FiPhoneCall />,
    title: 'Contact at',
    subtitle: '+91-769-630-9551',
    description: 'Available-24x7',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Punjab, India',
    description: 'Serving clients worldwide',
  },
];
