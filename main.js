(() => {
  const btns = document.querySelectorAll('.btn');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentState = btn.getAttribute('data-state');

      if (!currentState || currentState === 'closed') {
        btn.setAttribute('data-state', 'opened');
        btn.ariaExpanded = false;
      } else {
        btn.setAttribute('data-state', 'closed');
        btn.ariaExpanded = true;
      }
    });
  });

})();