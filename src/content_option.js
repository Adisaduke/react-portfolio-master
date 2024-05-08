import expenses from "./assets/portfolio/Expensive.PNG";
import contact from "./assets/portfolio/Contact.PNG";
import ecommerce from "./assets/portfolio/ecommerce.PNG";
import Movies from "./assets/portfolio/Movies.PNG";
import wordanalyser from "./assets/portfolio/word-analyser.PNG";

const logotext = "DUKE";
const meta = {
  title: "Adisa Rasak",
  description: "I’m Adisa Rasak Duke, a frontend devloper",
};

const introdata = {
  title: "I’m Adisa Rasak",
  animated: {
    first: "I love coding",
    second: "I code cool websites",
    third: "I develop web apps",
  },
  description:
    "Adisa Rasak is a professional with a passion for coding and a knack for crafting captivating websites and cutting-edge web applications. With a fervent love for the craft, Adisa brings creativity and expertise to every project, ensuring a polished and professional result that exceeds expectations.",
  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
  title: "A bit about my self",
  aboutme:
    "👋 Hey there! I'm Adisa Rasak, a seasoned coder with a love for crafting exceptional digital experiences. With a keen eye for design and a knack for innovation, I specialize in developing sleek websites and robust web applications that leave a lasting impression. Let's bring your digital ideas to life!",
};
const worktimeline = [
  {
    jobtitle: "Designer of week",
    where: "YAdfi",
    date: "2020",
  },
  {
    jobtitle: "Designer of week",
    where: "Jamalya",
    date: "2019",
  },
  {
    jobtitle: "Designer of week",
    where: "ALquds",
    date: "2019",
  },
];

const skills = [
  {
    name: "HTML",
    value: 90,
  },
  {
    name: "CSS",
    value: 85,
  },
  {
    name: "Boostrap",
    value: 80,
  },
  {
    name: "Javascript",
    value: 70,
  },
  {
    name: "React",
    value: 80,
  },
  {
    name: "Jquery",
    value: 85,
  },
  {
    name: "Git & Github",
    value: 85,
  },
];

const services = [
  {
    title: "Frontend Development",
    description:
      "Craft captivating user interfaces and seamless interactions with expertise in HTML, CSS, and JavaScript. Elevate your digital presence with stunning frontend solutions tailored to your needs.",
  },
  {
    title: "Web Apps",
    description:
      "Transform your ideas into powerful web applications that drive engagement and deliver exceptional user experiences. From concept to deployment, I specialize in developing scalable and feature-rich web applications that stand out in the digital landscape.",
  },
  {
    title: "Wordpress Design",
    description:
      "Harness the power of WordPress with custom designs that reflect your brand identity and resonate with your audience. From responsive themes to intuitive user interfaces, I specialize in creating WordPress websites that are both visually stunning and functionally robust.",
  },
  {
    title: "Graphics Design",
    description:
      "Bring your vision to life with captivating graphics that leave a lasting impression. From logos and branding materials to promotional graphics and illustrations, I specialize in creating visually striking designs that elevate your brand and captivate your audience. ",
  },
];

const dataportfolio = [
  {
    img: expenses,
    description:
      "Track your spending effortlessly with Expenses. Manage your finances and stay on top of your budget with ease.",
    link: "https://duke-expenses.netlify.app/",
  },
  {
    img: Movies,
    description:
      "Discover and stream the latest movies with Movies. Explore a vast library of films and enjoy entertainment at your fingertips.",
    link: "https://duke-movie.vercel.app/",
  },
  {
    img: ecommerce,
    description:
      "Shop for trendy clothing online with Ecommerce. Explore a wide range of stylish apparel and accessories from the comfort of your home.",
    link: "https://duke-ecommerce.vercel.app/",
  },
  {
    img: contact,
    description:
      "Organize and access your contacts from anywhere with Contact. Save, search, and manage your contacts seamlessly online.",
    link: "https://duke-contact-save-online.vercel.app/",
  },
  {
    img: wordanalyser,
    description:
      "Analyze text quickly with Word Analyser. Count words, sentences, and paragraphs effortlessly for efficient writing.",
    link: "https://duke-word-analyser.vercel.app/",
  },
];

const contactConfig = {
  YOUR_EMAIL: "adisarasak.official@gmail.com",
  YOUR_FONE: "+(234)-8132720669",
  description:
    "I'm here to assist you with any inquiries or projects you have in mind. Whether it's discussing potential collaborations or seeking advice on your next digital venture, I'm just a message away. ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_3wtppma",
  YOUR_TEMPLATE_ID: "template_66469uj",
  YOUR_USER_ID: "Q2UZIETkfl8LtmtCW",
};

const socialprofils = {
  github: "https://github.com/Adisaduke",
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com/duke_real1",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
