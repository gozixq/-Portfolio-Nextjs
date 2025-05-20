import { useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import {
  FaReact,
  FaMicrochip,
} from 'react-icons/fa';

import {
  SiVite,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiEspressif,
  SiDocker,
  SiArduino,
  SiFigma,
  SiLeaflet,
  SiPython,
  SiPytorch,
  SiHuawei
} from 'react-icons/si';


interface CarouselItem {
  title: string;
  type: string;
  description: string;
  id: number;
  icons: { element: React.ReactElement; label: string }[]; // <-- เปลี่ยนจาก icontool
  responsibility: string;
  link: string;
  image: {
    id: number;
    src: string;
    alt: string;
  };
}


interface CardProps {
  item: CarouselItem;
  current: number;
  setCurrent: (index: number) => void;
  total: number;
}


const projectData: CarouselItem[][] = [
[
  {
    title: "Stroke Fast Track",
    type: "Web Development",
    description: "Web application for tracking stroke patients, including a dashboard for doctors and a tracking system for patients.",
    id: 1,
    icons: [
      { element: <SiVite className="text-white" />, label: "Vite" },
      { element: <FaReact className="text-blue-400" />, label: "React" },
      { element: <SiTailwindcss className="text-cyan-400" />, label: "TailwindCSS" },
      { element: <SiTypescript className="text-blue-500" />, label: "TypeScript" },
      { element: <SiDocker className="text-blue-300" />, label: "Docker" },
    ],
    responsibility: "Developed the front-end using modern UI frameworks and handled API integration with Axios.",
    link: "https://github.com/duxmazter46/sft-project.git",
    image: {
      id: 101,
      src: "https://raw.githubusercontent.com/gozixq/cdn.natsinee.dev/main/ForgotPassword.png",
      alt: "Slide 1",
    },
  },
  {
    title: "Web Design",
    type: "Web Development",
    description: "Figma design for the Stroke Fast Track system, covering the full user flow from authentication to completion.",
    id: 2,
    icons: [
      { element: <SiFigma className="text-white" />, label: "Figma" },
    ],
    responsibility: "Designed the full user experience flow in Figma, including authentication, dashboard, and tracking screens.",
    link: "https://www.figma.com/community/file/1505888262672526769",
    image: {
      id: 102,
      src: "https://raw.githubusercontent.com/gozixq/cdn.natsinee.dev/main/sftwebdesign.png",
      alt: "Slide 2",
    },
  },
],
[
  {
    title: "Drone image processing system",
    type: "Web Development",
    description:
      "A web platform for processing drone imagery using AI models for building segmentation.",
    id: 1,
    icons: [
      { element: <SiNextdotjs className="text-white" />, label: "Next.js" },
      { element: <FaReact className="text-blue-400" />, label: "React" },
      { element: <SiLeaflet className="text-blue-300" />, label: "Leaflet" },
      { element: <SiTailwindcss className="text-cyan-400" />, label: "TailwindCSS" },
      { element: <SiTypescript className="text-blue-500" />, label: "TypeScript" },
      { element: <SiDocker className="text-blue-300" />, label: "Docker" },
    ],
    responsibility:"Developed the front-end of leaflet map for interactive map rendering.",
    link: "https://github.com/Coolestwaii/drone-analytic.git",
    image: {
      id: 101,
      src: "https://raw.githubusercontent.com/gozixq/cdn.natsinee.dev/main/image%20(12).png",
      alt: "Slide 1",
    },
  },
  {
    title: "Web Design",
    type: "Web Development",
    description: "Figma design for the Drone image processing system",
    id: 2,
    icons: [
      { element: <SiFigma className="text-white" />, label: "Figma" },
    ],
    responsibility: "designed the full of user interface and layout of interactive map.",
    link: "https://www.figma.com/design/BQIQWwt5i22OpMjvWoNuHt/Untitled?node-id=1-882&t=itO5q7CMv0mM1JOm-1",
    image: {
      id: 102,
      src: "https://raw.githubusercontent.com/gozixq/cdn.natsinee.dev/main/droneweb.png",
      alt: "Slide 2",
    },
  },
],
[
  {
    title: "Wake on WAN",
    type: "IoT",
    description:
      "An IoT-based solution that enables remote powering on/off of a computer over the internet use cases where Wake-on-LAN isn't supported.",
    id: 1,
    icons: [
      { element: <SiEspressif className="text-white" />, label: "ESP32" },
      { element: <SiArduino className="text-blue-500" />, label: "Arduino IDE" },
      { element: <FaMicrochip className="text-blue-400" />, label: "Easy EDA" },],
    responsibility:
      "Designed and assembled the circuit using ESP32, relay, and optoisolator. Integrated Blynk IoT for control and implemented ESP32-CAM for remote camera access. Troubleshooted hardware issues and iterated on the design for stability.",
    link: "https://medium.com/@natsinee2545/wake-on-wan-c601e9187b33",
    image: {
      id: 101,
      src: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*_2g6pvjkS7WNESOiSG2kaw.png", 
      alt: "Wake on WAN Circuit Diagram",
    },
  }
],
[
  {
    title: "Tree Counting",
    type: "Deep Learning",
    description:
      "A deep learning-based system that uses ResNet-50 and template Matching method for counting trees from drone imagery.",
    id: 1,
    icons: [
      { element: <SiPython className="text-yellow-300" />, label: "Python" },
      { element: <SiPytorch className="text-red-500" />, label: "PyTorch" },
    ],
    responsibility:
      "Built a tree-counting model using ResNet-50 with transfer learning. Preprocessed aerial imagery datasets, trained the model on annotated tree regions, and visualized detection results. Designed the project as a reusable template for future research or production use.",
    link: "https://github.com/gozixq/treeCounting-restNet50-templete.git",
    image: {
      id: 101,
      src: "https://raw.githubusercontent.com/gozixq/cdn.natsinee.dev/main/tree.png",
      alt: "Tree Counting Deep Learning Model",
    },
  }
],
[
  {
    title: "Huawei Cloud Developer Certification (HCCDA – Tech Essentials)",
    type: "Certificate",
    description:
      "Certified in Huawei Cloud Tech Essentials covering core cloud technologies, infrastructure, and services.",
    id: 1,
    icons: [
      { element: <SiHuawei className="text-yellow-300" />, label: "Huawei" },
    ],
    responsibility:
      "Developer Associate",
    link: "https://raw.githubusercontent.com/gozixq/cdn.natsinee.dev/main/HWDCTEDA131188.png",
    image: {
      id: 101,
      src: "https://raw.githubusercontent.com/gozixq/cdn.natsinee.dev/main/HWDCTEDA131188.png",
      alt: "certificate",
    },
  }
],

];



const Card = ({ item, current, setCurrent, total }: CardProps) => (
  <div className="text-white rounded-xl p-4 w-[300px] shadow-md border border-gray-800 h-full flex flex-col justify-between">
    
    {/* Icons */}
    <div className="flex -space-x-3 mb-4">
      {item.icons.map((icon, index) => (
        <div
          key={index}
          className="relative group w-8 h-8 rounded-full bg-[#1f1f1f] flex items-center justify-center border border-gray-700 shadow-sm hover:scale-110 transition-transform duration-200"
          style={{ zIndex: 20 - index }}
          onMouseEnter={(e) => {
            e.currentTarget.style.zIndex = '999'; 
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.zIndex = `${20 - index}`;
          }}
        >
          <div className="text-sm text-white">{icon.element}</div>
          {/* Tooltip */}
          <div className="absolute bottom-[-25px] left-1/2 -translate-x-1/2 hidden group-hover:flex bg-gray-900 text-white text-[10px] px-2 py-1 rounded-md shadow-md whitespace-nowrap animate-fade-in z-50">
            {icon.label}
          </div>
        </div>
      ))}
    </div>

    {/* Image */}
    <Image
      key={item.image.id}
      src={item.image.src}
      alt={item.image.alt}
      width={320}
      height={120}
      className="w-full h-30 object-cover rounded-md mb-3"
    />

    {/* Title + Description */}
    <h3 className="text-base font-semibold">{item.title}</h3>
    <p className="text-xs text-gray-400 mt-1">{item.description}</p>

    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:underline text-xs inline-flex items-center gap-1 self-center"
    >
      View <FiExternalLink className="inline-block" />
    </a>


    {/* Pagination Dots */}
    <div className="flex justify-center space-x-2 mt-4">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrent(i)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            current === i ? "bg-white" : "bg-gray-600"
          }`}
        />
      ))}
    </div>
  </div>
);



const SingleCarousel = ({ items }: { items: CarouselItem[] }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const swipeTo = (newIndex: number, dir: "left" | "right") => {
    setDirection(dir);
    setCurrent(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (current < items.length - 1) swipeTo(current + 1, "left");
    },
    onSwipedRight: () => {
      if (current > 0) swipeTo(current - 1, "right");
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

return (
  <div className="flex flex-col items-center" {...handlers}>
    {/* 👇 แยก Card ออกจาก dot ด้วย div ด้านบน */}
    <div className="relative w-full h-[400px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ x: direction === "left" ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === "left" ? -300 : 300, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute w-full h-full"
        >
          <Card
            item={items[current]}
            current={current}
            setCurrent={(i: number) =>
              swipeTo(i, i > current ? "left" : "right")
            }
            total={items.length}
          />

        </motion.div>
      </AnimatePresence>
    </div>
  </div>
);

};



const MultiCarousel = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {projectData.map((projectItems, index) => (
        <SingleCarousel key={index} items={projectItems} />
      ))}
    </div>
  );
};

export default MultiCarousel;
