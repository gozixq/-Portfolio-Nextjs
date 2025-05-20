'use client'

import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function ContactMe() {
    return (
        <section id="contact">
            <div className="min-h-screen px-6 py-20 flex flex-col items-center justify-center bg-black text-white">
                <div className="max-w-4xl w-full text-center space-y-10">
                    <h1 className="text-3xl font-bold text-purple-400">
                        Contact Me
                    </h1>
                    <p className="text-gray-400 text-ml">
                        👋 I’m always open to connecting! Whether it’s a project, opportunity , or just a chat — feel free to reach out!
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                        <a href="mailto:Nastsinee2545@gmail.com" className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:border-purple-500 hover:bg-gray-800 transition">
                            <FaEnvelope className="text-purple-400 text-2xl" />
                            <div>
                                <p className="text-sm text-gray-400 text-left">Email</p>
                                <p className="text-white font-medium">Nastsinee2545@gmail.com</p>
                            </div>
                        </a>

                        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:border-purple-500 hover:bg-gray-800 transition">
                            <FaPhone className="text-purple-400 text-2xl" />
                            <div>
                                <p className="text-sm text-gray-400 text-left">Phone</p>
                                <p className="text-white font-medium">(+66) 063-043-2714</p>
                            </div>
                        </div>

                        <a href="https://www.linkedin.com/in/natsinee-sasanasopa-a9b981294/" target="_blank" rel="noopener noreferrer" className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:border-purple-500 hover:bg-gray-800 transition">
                            <FaLinkedin className="text-purple-400 text-2xl" />
                            <div>
                                <p className="text-sm text-gray-400 text-left">LinkedIn</p>
                                <p className="text-white font-medium">Natsinee Sasanasopa</p>
                            </div>
                        </a>

                        <a href="https://github.com/gozixq" target="_blank" rel="noopener noreferrer" className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:border-purple-500 hover:bg-gray-800 transition">
                            <FaGithub className="text-purple-400 text-2xl" />
                            <div>
                                <p className="text-sm text-gray-400 text-left">GitHub</p>
                                <p className="text-white font-medium">github.com/gozixq</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
