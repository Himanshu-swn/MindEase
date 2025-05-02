import { Mic, MicOff, Video, VideoOff, ScreenShare, StopCircle, PhoneOff } from 'lucide-react';

const Controls = ({ 
  onToggleAudio, 
  onToggleVideo, 
  onLeave, 
  onShareScreen,
  isAudioMuted, 
  isVideoOff,
  isScreenSharing 
}) => {
  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/60 px-4 py-3 rounded-full flex space-x-4 shadow-lg backdrop-blur-md">
      
      {/* Audio Button */}
      <button
        onClick={onToggleAudio}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
          isAudioMuted ? 'bg-red-600' : 'bg-gray-700 hover:bg-gray-600'
        }`}
      >
        {isAudioMuted ? <MicOff className="text-white" /> : <Mic className="text-white" />}
      </button>

      {/* Video Button */}
      <button
        onClick={onToggleVideo}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
          isVideoOff ? 'bg-red-600' : 'bg-gray-700 hover:bg-gray-600'
        }`}
      >
        {isVideoOff ? <VideoOff className="text-white" /> : <Video className="text-white" />}
      </button>

      {/* Screen Share Button */}
      <button
        onClick={onShareScreen}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
          isScreenSharing ? 'bg-green-600' : 'bg-gray-700 hover:bg-gray-600'
        }`}
      >
        {isScreenSharing ? <StopCircle className="text-white" /> : <ScreenShare className="text-white" />}
      </button>

      {/* Leave Button */}
      <button
        onClick={onLeave}
        className="w-12 h-12 bg-red-700 hover:bg-red-800 rounded-full flex items-center justify-center transition-colors"
      >
        <PhoneOff className="text-white" />
      </button>
    </div>
  );
};

export default Controls;
