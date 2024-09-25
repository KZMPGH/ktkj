document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.langkah01 > ol > li');
  const yesButton = document.getElementById('yesBtn');
  const noButton = document.getElementById('noBtn');

  yesButton.addEventListener('click', function() {
      items.forEach(item => item.classList.remove("langkah01olli"));
  });

  noButton.addEventListener('click', function() {
    items.forEach(item => item.classList.add("langkah01olli"));
  });
});
