/* eslint-disable import/prefer-default-export */
export const popup = (message, color) => {
  const error = document.createElement('aside');
  const parent = document.getElementById('root');
  error.textContent = message;
  error.id = 'error-popup';
  error.classList.add(`bg-${color}-700`,
    'opacity-1',
    'fixed',
    'm-auto',
    'left-0',
    'right-0',
    'mt-16',
    'transition-all',
    'rounded-xl',
    'text-center',
    'h-auto',
    'w-3/4',
    'md:w-1/3',
    'montserrat',
    'duration-1000',
    'text-3xl',
    'font-bold',
    'leading-relaxed');
  setTimeout(() => {
    error.classList.add('opacity-0');
  }, 2500);
  parent.appendChild(error);
  setTimeout(() => {
    parent.removeChild(document.getElementById('error-popup'));
  }, 3500);
};
