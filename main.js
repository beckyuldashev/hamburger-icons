(() => {
  const btns = document.querySelectorAll('.btn');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('h')
      if (btn.ariaExpanded === 'true') {
        btn.ariaExpanded = false;
      } else {
        btn.ariaExpanded = true;
      }
    });
  });

})();