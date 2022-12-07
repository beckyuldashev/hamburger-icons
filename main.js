(() => {
  const btnOne = document.querySelector('.btn-one');

  btnOne.addEventListener('click', () => {
    if (btnOne.ariaExpanded === 'true') {
      btnOne.ariaExpanded = false;
    } else {
      btnOne.ariaExpanded = true;
    }
  });

})();