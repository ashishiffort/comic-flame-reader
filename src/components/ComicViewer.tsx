
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ComicViewerProps {
  currentLanguage: 'en' | 'ar';
}

const ComicViewer = ({ currentLanguage }: ComicViewerProps) => {
  const [currentText, setCurrentText] = useState("Sample text for the comic");
  
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        // Handle previous panel
      } else if (e.key === 'ArrowRight') {
        // Handle next panel
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="relative rounded-lg overflow-hidden">
      {/* Placeholder for comic image */}
      <div className="aspect-[16/9] bg-gray-800 flex items-center justify-center">
        <p className="text-gray-400">Comic Panel</p>
      </div>
      
      {/* Navigation buttons */}
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
        <Button 
          variant="ghost" 
          size="icon" 
          className="bg-black/50 hover:bg-black/70"
        >
          <ArrowLeft className="text-white" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="bg-black/50 hover:bg-black/70"
        >
          <ArrowRight className="text-white" />
        </Button>
      </div>

      {/* Caption text */}
      <div className="absolute bottom-0 w-full p-6">
        <p className="text-4xl font-bold text-white text-center" 
           style={{
             textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
             WebkitTextStroke: '1px #000'
           }}>
          {currentText}
        </p>
      </div>
    </div>
  );
};

export default ComicViewer;
