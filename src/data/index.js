import {
  fingers,
  sales,
  inventory,
  codeEditor,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "DataStructures & Algorithm",
    company_name: "C++ and Python",
    details: [
      "Proficient in Data Structures and Algorithms (DSA) using <span style='color: white;'>C++</span> and <span style='color: white;'>Python</span>, I possess a solid understanding of fundamental and advanced concepts.",
      " My expertise includes solving complex problems efficiently and optimizing code for better performance, which allows me to contribute effectively to challenging projects.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "HTML, CSS, JavaScript, React, Node.js",
    details: [
      "Skilled in web development with expertise in <span style='color: white;'> HTML, CSS, JavaScript, </span> and <span style='color: white;'>React</span>, I create <span style='color: white;'>dynamic</span> and <span style='color: white;'>responsive</span> user interfaces.",
      " My focus is on delivering clean, scalable, and engaging web solutions, leveraging modern technologies to enhance user experiences, paired with robust backend systems for efficient data management.",
      "My expertise lies in delivering seamless and efficient end-to-end web solutions tailored to user needs.",
    ],
  },
  {
    title: "Data Analytics",
    company_name: "Python, Pandas, Numpy, Matplotlib, SQL ",
    details: [
      "Proficient in Data Analytics, I leverage Python libraries such as <span style='color: white;'>Pandas</span>, <span style='color: white;'>NumPy</span>, and <span style='color: white;'>Matplotlib</span> alongside <span style='color: white;'>SQL</span> to extract, analyze, and visualize data effectively.",
      " My skills enable me to uncover insights and drive data-driven decision-making for impactful results.",
    ],
  },
];

const portfolio = [
  {
    name: "Inventory Management System",
    description:
      "The Inventory Management System is built using React and Node.js. It enables tracking of products, stock levels, and inventory updates with a user-friendly interface. it also show the expenses by categories with the help of charts.",
    image: inventory,
  },
  {
    name: "Code Editor",
    description:
      "The Code Editor project in React and Node.js offers a simple and efficient way to write and edit code in multiple languages. It use convex for backend as well as clerk for user login and authentication. You can also share code snippets with others. It features a clean and intuitive interface, with syntax highlighting and code folding for improved readability.",
    image: codeEditor,
  },
  {
    name: "Sales Analysis",
    description:
      "The Python sales comparison script reads sales data from an Excel file for the past two years, compares the monthly figures, and generates a line graph to visually represent the trends. Using libraries like pandas, numpy and matplotlib, the script identifies which year was more profitable and provides a clear visual analysis of monthly sales performance.",
    image: sales,
  },
  {
    name: "Fingers Counting using OpenCV",
    description:
      "The Finger Counting project in Python utilizes computer vision techniques to detect and count the number of fingers shown in front of a camera. By leveraging libraries like OpenCV and MediaPipe, the program tracks hand landmarks and processes video feed in real-time to recognize finger gestures, accurately determining how many fingers are raised",
    image: fingers,
  },
];

export { experiences, portfolio };