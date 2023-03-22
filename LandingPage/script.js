const images = document.querySelectorAll('.profile-picture');
const modal = document.querySelector('.modal-container');
const modalImg = document.querySelector('.modal-img');
const closeBtn = document.querySelector('.close');

// Adiciona evento de clique em cada imagem
images.forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = image.src;
  });
});

// Fecha modal quando usuário clica no botão de fechar ou fora da imagem
window.addEventListener('click', e => {
  if (e.target === modal || e.target === closeBtn) {
    modal.style.display = 'none';
  }
});