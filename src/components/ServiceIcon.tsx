"use client";

interface ServiceIconProps {
  id: string;
  className?: string;
}

export default function ServiceIcon({ id, className = "w-14 h-14" }: ServiceIconProps) {
  // Define unique geometric background badge path and gradient colors based on service id
  switch (id) {
    case "cuci-regular": // 8-Pointed Wavy Star (Blue Gradient)
      return (
        <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad-cuci" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2979D4" />
              <stop offset="100%" stopColor="#1B3FA0" />
            </linearGradient>
          </defs>
          {/* Geometric Badge Shape (8-point rounded starburst) */}
          <path 
            d="M32 4c2.8 0 5.4 2.2 7.2 4.1 1.8 1.9 4.6 2.5 7.1 3.2 2.5.7 5 2.5 6 5.1 1 2.6.4 5.4 1 8.1.6 2.7 2.4 5.2 2.4 8s-1.8 5.3-2.4 8c-.6 2.7 0 5.5-1 8.1-1 2.6-3.5 4.4-6 5.1-2.5.7-5.3 1.3-7.1 3.2C37.4 57.8 34.8 60 32 60s-5.4-2.2-7.2-4.1c-1.8-1.9-4.6-2.5-7.1-3.2-2.5-.7-5-2.5-6-5.1-1-2.6-.4-5.4-1-8.1-.6-2.7-2.4-5.2-2.4-8s1.8-5.3 2.4-8c.6-2.7 0-5.5 1-8.1 1-2.6 3.5-4.4 6-5.1 2.5-.7 5.3-1.3 7.1-3.2C26.6 6.2 29.2 4 32 4z" 
            fill="url(#grad-cuci)" 
          />
          {/* White Sneaker Vector Icon */}
          <path 
            d="M20 38h7c.8 0 1.5-.4 1.8-1.1l2.5-5.5c.3-.6.9-1 1.6-1h9.6c.7 0 1.3-.4 1.6-1l1.5-3.3c.6-1.3-.4-2.7-1.8-2.7H38.5c-.8 0-1.5.4-1.8 1.1l-2 4.4H24c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2zM36.5 25c1.4 0 2.5-1.1 2.5-2.5S37.9 20 36.5 20 34 21.1 34 22.5s1.1 2.5 2.5 2.5z" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      );

    case "deep-cleaning": // Sparkle Burst (Cyan-Accent Gradient)
      return (
        <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad-deep" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#29B6F6" />
              <stop offset="100%" stopColor="#2979D4" />
            </linearGradient>
          </defs>
          {/* Geometric Badge Shape (12-point sharp star) */}
          <path 
            d="M32 4l3.6 8.7 9.1-2.4-1.2 9.4 8.7 3.6-5.7 7.7 5.7 7.7-8.7 3.6 1.2 9.4-9.1-2.4L32 60l-3.6-8.7-9.1 2.4 1.2-9.4-8.7-3.6 5.7-7.7-5.7-7.7 8.7-3.6-1.2-9.4 9.1 2.4L32 4z" 
            fill="url(#grad-deep)" 
          />
          {/* White Premium Sneaker + Sparkle Icon */}
          <path 
            d="M18 36h6c.6 0 1.2-.3 1.5-.8l2-4.2c.2-.5.8-.8 1.3-.8h8.4c.5 0 1-.3 1.3-.8l1.2-2.6c.5-1-.3-2.2-1.5-2.2H34.8c-.6 0-1.2.3-1.5.8l-1.5 3.2H21.2c-.9 0-1.6.7-1.6 1.6v4.2c0 .9.7 1.6 1.6 1.6z" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M38 20l2 2-2 2-2-2zM43 27l1.5 1.5-1.5 1.5-1.5-1.5z" 
            fill="white" 
          />
        </svg>
      );

    case "repaint-restore": // Pinwheel Flower (Pink/Purple-Blue Gradient)
      return (
        <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad-repaint" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC407A" />
              <stop offset="100%" stopColor="#2979D4" />
            </linearGradient>
          </defs>
          {/* Geometric Badge Shape (Swirling Pinwheel) */}
          <path 
            d="M32 4c5.1 0 10.3 2 13.9 5.8 4.2 4.4 5.3 10.8 2.9 16.4l-3.3-1.9c1.6-3.8.8-8.2-2.1-11.2C40.6 10.3 36.4 9 32 9c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3l-3.2 3.2C13.6 35.8 11 30.7 11 25c0-11.6 9.4-21 21-21zm19.8 18.2l3.2-3.2C58.4 23.6 60 29.3 60 35c0 11.6-9.4 21-21 21-5.1 0-10.3-2-13.9-5.8-4.2-4.4-5.3-10.8-2.9-16.4l3.3 1.9c-1.6 3.8-.8 8.2 2.1 11.2 2.8 2.8 7 4.1 11.4 4.1 8.8 0 16-7.2 16-16 0-4.4-1.8-8.4-4.7-11.3z" 
            fill="url(#grad-repaint)" 
          />
          {/* White Paint Palette + Brush Icon */}
          <path 
            d="M36 22c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12c0-2-.5-3.8-1.4-5.4-.5-.9-1.6-1.1-2.4-.4l-1.7 1.4c-.6.5-1.5.4-2-.2l-2-2.2c-.4-.4-.5-1.1-.1-1.6l1.3-1.6c.7-.9.4-2.2-.6-2.6C40.6 22.4 38.4 22 36 22z" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <circle cx="31" cy="30" r="2" fill="white" />
          <circle cx="30" cy="37" r="2" fill="white" />
          <circle cx="38" cy="40" r="2" fill="white" />
        </svg>
      );

    case "reparasi-sol": // Shield Badge (Dark Blue Gradient)
      return (
        <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad-sol" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1B3FA0" />
              <stop offset="100%" stopColor="#0A0F1E" />
            </linearGradient>
          </defs>
          {/* Geometric Badge Shape (Hexagonal Shield) */}
          <path 
            d="M32 4l22 10v18c0 13.5-9.4 25.1-22 28C19.4 57.1 10 45.5 10 32V14L32 4z" 
            fill="url(#grad-sol)" 
          />
          {/* White Hammer & Sol Repair Icon */}
          <path 
            d="M22 38h20v4H22zM28 26l-6 6M36 26l6 6M32 20v18" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      );

    case "unyellowing": // Diamond Badge (Cyan/Yellow Sunburst Gradient)
      return (
        <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad-unyellow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFB74D" />
              <stop offset="100%" stopColor="#29B6F6" />
            </linearGradient>
          </defs>
          {/* Geometric Badge Shape (Sunburst Diamond) */}
          <path 
            d="M32 4l12 12 12 12-12 12-12 12-12-12-12-12 12-12 12-12z" 
            fill="url(#grad-unyellow)" 
          />
          {/* White Brightening Diamond / Sunburst Icon */}
          <path 
            d="M32 18v8M32 38v8M18 32h8M38 32h8M22 22l6 6M36 36l6 6M42 22l-6 6M28 36l-6 6" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      );

    case "waterproofing": // Lotus Shape (Light Cyan-Primary Gradient)
      return (
        <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad-water" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C8E6FA" />
              <stop offset="100%" stopColor="#2979D4" />
            </linearGradient>
          </defs>
          {/* Geometric Badge Shape (8-petaled Lotus/Water droplet shield) */}
          <path 
            d="M32 4c4 4.5 12 11.2 16 18s4.5 14.5 1 20-11 12-17 12-13.5-6.5-17-12-3-13.2 1-20 12-13.5 16-18z" 
            fill="url(#grad-water)" 
          />
          {/* White Water Droplet Icon */}
          <path 
            d="M32 18c2 2.5 6 6.8 8 11s2.2 8.8.5 12.1-5.5 7.9-8.5 7.9-6.8-4.6-8.5-7.9c-1.7-3.3-1.5-7.9.5-12.1s6-8.5 8-11z" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      );

    case "cleaning-koper": // Rounded Wavy Square (Blue Gradient)
      return (
        <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad-koper" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2979D4" />
              <stop offset="100%" stopColor="#1B3FA0" />
            </linearGradient>
          </defs>
          {/* Geometric Badge Shape (Wavy Square/Shield) */}
          <path 
            d="M16 4h32c6.6 0 12 5.4 12 12v32c0 6.6-5.4 12-12 12H16C9.4 60 4 54.6 4 48V16C4 10.4 9.4 4 16 4zm16 4c-4.4 0-8 3.6-8 8h16c0-4.4-3.6-8-8-8z" 
            fill="url(#grad-koper)" 
          />
          {/* White Luggage/Suitcase Outline Icon */}
          <path 
            d="M20 26h24v24H20zM26 26V18h12v8M28 32h8M28 38h8M28 44h8" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      );

    case "reparasi-handle": // Wavy Octagon (Dark Blue-Cyan Gradient)
      return (
        <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad-handle" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1B3FA0" />
              <stop offset="100%" stopColor="#29B6F6" />
            </linearGradient>
          </defs>
          {/* Geometric Badge Shape (Wavy Octagon) */}
          <path 
            d="M20.2 4h23.6l16.2 16.2v23.6L43.8 60H20.2L4 43.8V20.2L20.2 4z" 
            fill="url(#grad-handle)" 
          />
          {/* White Suitcase Handle Icon */}
          <path 
            d="M20 34h24M24 34v10M40 34v10M26 22h12v12H26z" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      );

    case "reparasi-roda": // Gear Wavy Badge (Cyan-Primary Gradient)
      return (
        <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad-roda" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#29B6F6" />
              <stop offset="100%" stopColor="#2979D4" />
            </linearGradient>
          </defs>
          {/* Geometric Badge Shape (Gear Shape / Rounded Spokes) */}
          <path 
            d="M32 4c1.5 0 2.9.8 3.6 2.2l1.6 3.1c.8 1.5 2.4 2.2 4 1.8l3.3-.9c1.5-.4 3 .2 3.7 1.6l2.3 4c.8 1.4.5 3.1-.7 4l-2.6 2.1c-1.3 1.1-1.7 2.9-1 4.5l1.6 3.1c.8 1.4.5 3.1-.7 4l-2.3 4c-.7 1.4-2.2 2-3.7 1.6l-3.3-.9c-1.6-.4-3.2.3-4 1.8l-1.6 3.1c-.7 1.4-2.1 2.2-3.6 2.2s-2.9-.8-3.6-2.2l-1.6-3.1c-.8-1.5-2.4-2.2-4-1.8l-3.3.9c-1.5.4-3-.2-3.7-1.6l-2.3-4c-.8-1.4-.5-3.1.7-4l2.6-2.1c1.3-1.1 1.7-2.9 1-4.5l-1.6-3.1c-.8-1.4-.5-3.1.7-4l2.3-4c.7-1.4 2.2-2 3.7-1.6l3.3.9c1.6.4 3.2-.3 4-1.8l1.6-3.1c.7-1.4 2.1-2.2 3.6-2.2z" 
            fill="url(#grad-roda)" 
          />
          {/* White Wheel / Gear Outline Icon */}
          <circle cx="32" cy="32" r="12" stroke="white" strokeWidth="2.5" />
          <circle cx="32" cy="32" r="3" fill="white" />
          <path d="M32 20v4M32 40v4M20 32h4M40 32h4" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "reparasi-ritsleting": // Wavy Star Burst (Pink/Magenta Gradient)
      return (
        <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad-zip" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC407A" />
              <stop offset="100%" stopColor="#AB47BC" />
            </linearGradient>
          </defs>
          {/* Geometric Badge Shape (16-point wavy flower) */}
          <path 
            d="M32 4c1.1 0 2.2.4 3.1 1.1l2.5 1.9c1.1.9 2.7 1 3.9.4l2.8-1.4c1-.5 2.3-.3 3.1.4l2.2 2.2c.8.8.9 2 .4 3.1l-1.4 2.8c-.6 1.2-.5 2.8.4 3.9l1.9 2.5c.7.9 1.1 2 1.1 3.1s-.4 2.2-1.1 3.1l-1.9 2.5c-.9 1.1-1 2.7-.4 3.9l1.4 2.8c.5 1 .3 2.3-.4 3.1l-2.2 2.2c-.8.8-2 .9-3.1.4l-2.8-1.4c-1.2-.6-2.8-.5-3.9.4l-2.5 1.9c-.9.7-2 1.1-3.1 1.1s-2.2-.4-3.1-1.1l-2.5-1.9c-1.1-.9-2.7-1-3.9-.4l-2.8 1.4c-1 .5-2.3.3-3.1-.4l-2.2-2.2c-.8-.8-.9-2-.4-3.1l1.4-2.8c.6-1.2.5-2.8-.4-3.9l-1.9-2.5C4.4 37.3 4 36.2 4 35s.4-2.2 1.1-3.1l1.9-2.5c.9-1.1 1-2.7.4-3.9l-1.4-2.8c-.5-1-.3-2.3.4-3.1l-2.2-2.2c.8-.8 2-.9 3.1-.4l2.8 1.4c1.2.6 2.8.5 3.9-.4l2.5-1.9c.9-.7 2-1.1 3.1-1.1z" 
            fill="url(#grad-zip)" 
          />
          {/* White Zipper Repair Outline Icon */}
          <path 
            d="M32 18v28M26 22h12M28 28h8M26 34h12M28 40h8" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
          />
        </svg>
      );

    default:
      return null;
  }
}
