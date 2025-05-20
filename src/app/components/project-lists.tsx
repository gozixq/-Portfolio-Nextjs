import React from 'react';
import Carousel from './ui/MultiCarousel';



const ProjectLists: React.FC = () => (
    <section id='projects'>
        <div className='min-h-screen px-6 py-20 flex flex-col items-center justify-center bg-black text-white text-center'>
            <div className="max-w-5xl w-full space-y-10">
                <h1 className="text-3xl font-bold text-purple-400 ">
                    Projects
                </h1>
                <p className="text-gray-300 text-[15px] leading-relaxed">
                    Here are some of the projects I have worked on, showcasing my skills in frontend development, UX/UI design, IOT and Deep learning.
                </p>
                <div className='relative'><Carousel /></div>
                
            </div>
        </div>
    </section>

);

export default ProjectLists;