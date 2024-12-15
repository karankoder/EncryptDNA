import React, { useState } from 'react';
import { FaTimes, FaMinus, FaCog } from 'react-icons/fa';
import chatbot from '../assets/chatbot.png';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`fixed bottom-20 right-0 m-4 z-100 ${isOpen ? 'h-96 w-80 rounded-lg' : 'h-14 w-24 rounded-lg bg-gradient-to-r from-blue-400 to-teal-400 flex items-center justify-center cursor-pointer'} bg-white shadow-lg`}
            onClick={!isOpen ? toggleChatbot : undefined}
        >
            <div className={`flex items-center justify-between p-2 ${isOpen ? 'bg-gradient-to-r from-blue-400 to-teal-400 rounded-t-lg' : ''}`}>
                <div className="flex items-center">
                    <img src={chatbot} alt="Chatbot Image" className="w-8 h-8 rounded-lg mr-2" />
                    <span className="text-white font-semibold">Genie</span>
                    {isOpen && <span className="text-white font-semibold"> - Your DNA Guide</span>}
                </div>
                {isOpen && (
                    <div className="flex items-center">
                        <FaMinus className="text-white cursor-pointer mx-1" onClick={toggleChatbot} />
                        <FaCog className="text-white cursor-pointer mx-1" />
                        <FaTimes className="text-white cursor-pointer mx-1" onClick={toggleChatbot} />
                    </div>
                )}
            </div>
            {isOpen && (
                <div className="flex flex-col h-full p-4 bg-gradient-to-b from-white to-blue-50 rounded-b-lg">
                    <div className="flex-1 overflow-y-auto">
                        {/* Chat messages will go here */}
                        <div className="bot-message mb-2 p-2 bg-blue-100 rounded-lg">
                            <span>Hello! How can I assist you with your DNA queries today?</span>
                        </div>
                        <div className="user-message mb-2 p-2 bg-white rounded-lg self-end">
                            <span>Tell me more about DNA encryption.</span>
                        </div>
                        {/* Typing indicator */}
                        <div className="typing-indicator flex items-center">
                            <div className="dot bg-gray-400 rounded-full w-2 h-2 mx-1 animate-bounce"></div>
                            <div className="dot bg-gray-400 rounded-full w-2 h-2 mx-1 animate-bounce"></div>
                            <div className="dot bg-gray-400 rounded-full w-2 h-2 mx-1 animate-bounce"></div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input type="text" className="w-full p-2 border rounded-lg" placeholder="Type your message..." />
                    </div>
                </div>
            )}

        </div>
    );
};

export default Chatbot;