import type { SVGProps } from 'react';

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      aria-label="ContentCraft AI Logo"
      {...props}
    >
      <g fill="currentColor">
        <rect width="100" height="100" rx="20" fill="hsl(var(--primary))" />
        <path
          d="M30 70 L30 30 L50 30 C65 30 65 45 50 45 L30 45"
          stroke="hsl(var(--primary-foreground))"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M70 70 L70 30"
          stroke="hsl(var(--accent))"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="70" cy="57.5" r="4" fill="hsl(var(--accent))" />
      </g>
    </svg>
  );
}
