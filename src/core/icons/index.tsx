import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

/**
 * Minimalist Technological Mail Envelope Icon
 * Precision: 1.75px stroke, rounded terminals
 */
export function MailIcon({ size = 14, className, ...props }: IconProps): React.JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

/**
 * Precision Telephone Handset Line Icon
 * Precision: 1.75px stroke, rounded terminals
 */
export function PhoneIcon({ size = 14, className, ...props }: IconProps): React.JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/**
 * Authentic WhatsApp Speech-Bubble & Handset Vector Icon
 * Precision vector path inheriting currentColor
 */
export function WhatsAppIcon({ size = 14, className, ...props }: IconProps): React.JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.176.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.5-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.634-.929-2.238-.244-.588-.493-.508-.678-.518-.176-.009-.377-.01-.578-.01s-.527.075-.803.377c-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.723.23 1.381.198 1.901.12.58-.088 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.351zM12.042 21.75c-1.758 0-3.483-.472-4.996-1.365l-.358-.213-3.714.974.991-3.621-.233-.371A9.704 9.704 0 0 1 2.25 12.042C2.25 6.643 6.643 2.25 12.042 2.25c2.614 0 5.071 1.018 6.92 2.867 1.849 1.849 2.868 4.306 2.868 6.925 0 5.399-4.393 9.708-9.788 9.708zm0-18C7.472 3.75 3.75 7.472 3.75 12.042c0 1.62.467 3.197 1.35 4.568l.21.325-.59 2.158 2.21-.58.315.187a8.232 8.232 0 0 0 4.797 1.5c4.567 0 8.292-3.725 8.292-8.292 0-2.215-.863-4.298-2.43-5.865A8.243 8.243 0 0 0 12.042 3.75z" />
    </svg>
  );
}

/**
 * Precision Upward Chevron / Arrow Icon
 * High-assurance line stroke for apex navigation
 */
export function ArrowUpIcon({ size = 14, className, ...props }: IconProps): React.JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}
