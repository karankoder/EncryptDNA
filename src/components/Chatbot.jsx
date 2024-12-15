import React, { useState } from 'react';
import axios from 'axios';
import { FaTimes, FaMinus, FaCog } from 'react-icons/fa';
import chatbot from '../assets/chatbot.png';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Hello! How can I assist you with your DNA queries today?' },

    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSendMessage = async () => {
        if (input.trim() === '') return;

        const instruction = "Please provide a short and to-the-point summary.";
        const newMessages = [...messages, { type: 'user', text: input }];
        setMessages(newMessages);
        setInput('');
        setIsTyping(true);

        try {
            const response = await axios({
                url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${import.meta.env.VITE_APP_API_KEY}`,
                method: "post",
                data: {
                    contents: [
                        { parts: [{ text: `${input} ${instruction}` }] },
                    ],

                },
            });
            console.log(input);
            const botMessage = response["data"]["candidates"][0]["content"]["parts"][0]["text"];
            console.log(botMessage)
            setMessages([...newMessages, { type: 'bot', text: botMessage }]);
        } catch (error) {
            console.error('Error fetching response from API:', error);
        } finally {
            setIsTyping(false);
        }
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
                        <FaTimes className="text-white cursor-pointer mx-1" onClick={toggleChatbot} />
                    </div>
                )}
            </div>
            {isOpen && (
                <div className="flex flex-col h-full p-4 bg-gradient-to-b from-white to-blue-50 rounded-b-lg">
                    <div className="flex-1 overflow-y-auto">
                        {messages.map((message, index) => (
                            <div key={index} className={`${message.type === 'bot' ? 'bot-message' : 'user-message'} mb-2 p-2 ${message.type === 'bot' ? 'bg-blue-100' : 'bg-white'} rounded-lg`}>
                                <span>{message.text}</span>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="typing-indicator flex items-center">
                                <div className="dot bg-gray-400 rounded-full w-2 h-2 mx-1 animate-bounce"></div>
                                <div className="dot bg-gray-400 rounded-full w-2 h-2 mx-1 animate-bounce"></div>
                                <div className="dot bg-gray-400 rounded-full w-2 h-2 mx-1 animate-bounce"></div>
                            </div>
                        )}
                    </div>
                    <div className="mt-2">
                        <input
                            type="text"
                            className="w-full p-2 border rounded-lg"
                            placeholder="Type your message..."
                            value={input}
                            onChange={handleInputChange}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;