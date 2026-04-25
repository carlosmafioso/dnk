import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function smoothScrollTo(targetId: string, offset: number = 80, duration: number = 1100) {
  const element = document.getElementById(targetId.replace('#', ''));
  if (!element) return;

  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let start: number | null = null;

  const easeOutQuint = (t: number, b: number, c: number, d: number) => {
    t /= d;
    t--;
    return c * (t * t * t * t * t + 1) + b;
  };

  const animation = (currentTime: number) => {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const run = easeOutQuint(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
}
