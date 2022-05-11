export const topDown = () => {
  const parent = document.getElementById('main');
  setTimeout(() => {
    parent.classList.replace('opacity-0', 'opacity-1');
    parent.classList.remove('-translate-y-full');
  }, 150);
};

export const downTop = () => {
  const parent = document.getElementById('main');
  setTimeout(() => {
    parent.classList.replace('opacity-1', 'opacity-0');
    parent.classList.add('-translate-y-full');
  }, 10);
};
