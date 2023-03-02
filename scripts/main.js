const scroller = document.querySelector('.scroller');

window.addEventListener('scroll', () => {
  let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});
