import React from 'react';

const Avatar = ({ isSpeaking }) => {
    return (
        <div>
            <div className="relative w-64 h-64">
      <img 
        src="img/talkingtom2.jpg" 
        alt="Talking Avatar" 
        className="rounded-full border-4 border-blue-500"
      />
      {/* Animated Mouth (CSS Animation) */}
      <div 
        className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-pink-300 rounded-full transition-all duration-300 ${isSpeaking ? 'scale-y-50' : 'scale-y-100'}`}
      ></div>
    </div>
        </div>
    );
};

export default Avatar;