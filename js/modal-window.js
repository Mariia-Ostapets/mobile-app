(() => {
  const modalWindow = document.querySelector('.js-modal-container');
  const openModalBtn = document.querySelector('.js-open-modal');
  const closeModalBtn = document.querySelector('.js-close-modal');

  const toggleModal = () => {
    const anchors = modalWindow.querySelectorAll('a[href*="#"]');
    const isModalOpen =
      openModalBtn.getAttribute('aria-expanded') === 'true' || false;
    openModalBtn.setAttribute('aria-expanded', !isModalOpen);
    modalWindow.classList.toggle('is-open');
    

    const scrollLockMethod = !isModalOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
    
    if(anchors.length === 0) return;
    
    if(!isModalOpen) {
      anchors.forEach(anchor => {
        anchor.addEventListener("click", toggleModal)
      })
      return;
    }
    
    anchors.forEach(anchor => {
        anchor.removeEventListener("click", toggleModal)
      })
  };

  openModalBtn.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', toggleModal);

  // Вказати брейкпоінт після якого повинна зачинятися
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    modalWindow.classList.remove('is-open');
    openModalBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();