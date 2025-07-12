import { useState, useEffect } from 'react';
import { processImageForBackgroundRemoval } from '@/utils/backgroundRemoval';

export const useBackgroundRemoval = (imageSrc: string) => {
  const [processedImage, setProcessedImage] = useState<string>(imageSrc);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processImage = async () => {
      setIsProcessing(true);
      setError(null);
      
      try {
        const processed = await processImageForBackgroundRemoval(imageSrc);
        setProcessedImage(processed);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to process image');
        setProcessedImage(imageSrc); // Fallback to original
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();
  }, [imageSrc]);

  return { processedImage, isProcessing, error };
};