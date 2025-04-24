
import { Button } from '@/components/ui/button';

interface LanguageSelectorProps {
  currentLanguage: 'en' | 'ar';
  onLanguageChange: (language: 'en' | 'ar') => void;
}

const LanguageSelector = ({ currentLanguage, onLanguageChange }: LanguageSelectorProps) => {
  return (
    <div className="flex gap-2">
      <Button
        variant={currentLanguage === 'en' ? 'default' : 'outline'}
        onClick={() => onLanguageChange('en')}
      >
        English
      </Button>
      <Button
        variant={currentLanguage === 'ar' ? 'default' : 'outline'}
        onClick={() => onLanguageChange('ar')}
      >
        العربية
      </Button>
    </div>
  );
};

export default LanguageSelector;
