const milestones = document.querySelectorAll('.timeline-item');
const max = milestones.length;
var idx = 0;

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('animate');
    } else {
      entry.target.classList.remove('animate');
    }
  });
});

milestones.forEach(milestone => {
  observer.observe(milestone);
});

document.addEventListener("keydown", function(event) {
  event.preventDefault();
  const key = event.key;
  if ((key === "ArrowLeft") || (key === "ArrowUp")) {
    idx > 0 ? idx-- : 0;
    var current = milestones[idx];
    current.scrollIntoView();
  }
  if ((key === "ArrowRight") || (key === "ArrowDown")) {
    var current = milestones[idx];
    current.scrollIntoView();
    idx < max - 1 ? idx++ : idx; 
  }
});
