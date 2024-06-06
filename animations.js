
  document.addEventListener('DOMContentLoaded', () => {
    const lines = document.querySelectorAll('.line');
    lines.forEach(line => {
      const randomDelay = Math.random() * 5; // Random delay between 0 and 5 seconds
      line.style.setProperty('--animation-delay', `${randomDelay}s`);
    });
  });
