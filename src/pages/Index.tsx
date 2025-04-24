
import { useState } from 'react';
import ComicViewer from '@/components/ComicViewer';
import LanguageSelector from '@/components/LanguageSelector';
import { SpeechControls } from '@/components/SpeechControls';

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ar'>('en');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [progress, setProgress] = useState(0);

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <LanguageSelector 
            currentLanguage={currentLanguage} 
            onLanguageChange={setCurrentLanguage} 
          />
          <SpeechControls 
            isSpeaking={isSpeaking}
            progress={progress}
            onPlayPause={() => setIsSpeaking(!isSpeaking)}
          />
        </div>
        <ComicViewer currentLanguage={currentLanguage} />
      </div>
    </div>
  );
};

export default Index;
