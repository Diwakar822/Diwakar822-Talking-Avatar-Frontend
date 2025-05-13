import React, { useState } from 'react';
import Avatar from './Avatar';

const Subhomepage = () => {
     const [text, setText] = useState('');
          const [isSpeaking, setIsSpeaking] = useState(false);
        
          const handleSpeak = () => {
            if (!text) return;
            const speech = new SpeechSynthesisUtterance(text);
            speech.onstart = () => setIsSpeaking(true);
            speech.onend = () => setIsSpeaking(false);
            window.speechSynthesis.speak(speech);
          };
    return (
        <div>
            <div>
            <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="flex flex-col items-center">
          {/* Avatar Image */}
          <Avatar isSpeaking={isSpeaking} />

          {/* Text Input + Speak Button */}
          <div className="mt-8 flex w-full max-w-md">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type something..."
              className="flex-1 p-2 border rounded-l focus:outline-none"
            />
            <button
              onClick={handleSpeak}
              className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
        </div>
        </div>
    );
};

export default Subhomepage;