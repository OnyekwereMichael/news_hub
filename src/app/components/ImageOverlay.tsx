import React, { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ImageOverlayProps {
  src: StaticImageData;
  alt: string;
  children: ReactNode;
  className?: string;
  overlayClassName?: string;
}

const ImageOverlay = ({ src, alt, children, className = '', overlayClassName = '' }: ImageOverlayProps) => (
  <div className={`relative ${className}`}>
    <Image src={src} alt={alt} className="w-full h-full object-cover" fill />
    <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent ${overlayClassName}`}>
      {children}
    </div>
  </div>
);

export default ImageOverlay; 