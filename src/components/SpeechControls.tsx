
import { CirclePause, CirclePlay } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface SpeechControlsProps {
  isSpeaking: boolean;
  progress: number;
  onPlayPause: () => void;
}

export const SpeechControls = ({ isSpeaking, progress, onPlayPause }: SpeechControlsProps) => {
  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={onPlayPause}
        className="relative z-10 h-12 w-12"
      >
        {isSpeaking ? <CirclePause /> : <CirclePlay />}
      </Button>
      
      <div className="absolute top-0 left-0 w-full h-full -z-0">
        <div className="relative h-full w-full">
          <Progress 
            value={progress} 
            className="absolute top-0 left-0 w-full h-full rounded-full [transform:rotate(-90deg)]"
          />
        </div>
      </div>
    </div>
  );
};
