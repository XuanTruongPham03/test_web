// Simple horizontal scroll for slider
function slide(dir) {
  const slider = document.getElementById('slider');
  const scrollStep = slider.offsetWidth * 0.7;
  slider.scrollBy({ left: dir * scrollStep, behavior: 'smooth' });
}
