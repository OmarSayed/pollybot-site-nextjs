import React from 'react';
import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
  quality = 80,
  ...props
}) => {
  // Check if the image is from the public directory
  const isLocalImage = !src.startsWith('http') && !src.startsWith('blob:');
  
  // For local images, use the optimized versions
  if (isLocalImage) {
    const fileName = src.split('/').pop()?.split('.')[0];
    const fileExt = src.split('.').pop()?.toLowerCase();
    const basePath = src.substring(0, src.lastIndexOf('/'));
    
    // Use WebP by default for better compression
    const optimizedSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    return (
      <Image
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        quality={quality}
        {...props}
      />
    );
  }
  
  // For external images, use Next.js Image with standard optimization
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      quality={quality}
      {...props}
    />
  );
};

export default OptimizedImage;
