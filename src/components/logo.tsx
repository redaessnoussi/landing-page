import type { SVGProps } from 'react';

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 70 75"
      aria-label="Content Craft AI Logo"
      {...props}
    >
      <defs>
        <linearGradient id="brain-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f783ac" />
          <stop offset="100%" stopColor="#be4bdb" />
        </linearGradient>
      </defs>
      <g transform="scale(0.75)">
        <path
          fill="url(#brain-gradient)"
          d="M50,15 C25,15 15,35 20,55 C15,75 30,90 50,90 C70,90 85,75 80,55 C85,35 75,15 50,15 Z"
        />
        <path
          d="M50,15 C55,45 45,65 50,90"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M38,40 C30,45 30,60 40,65"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
         <path
          d="M62,40 C70,45 70,60 60,65"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
         <path
          d="M45,75 C38,78 38,70 45,70"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
}
