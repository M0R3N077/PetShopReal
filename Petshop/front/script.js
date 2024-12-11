// Função para alternar a visibilidade do menu
// Função para alternar a visibilidade do menu
function toggleMenu() {
    const sideMenu = document.getElementById('side-menu'); // Obtém o menu lateral
    if (sideMenu.style.right === '-300px' || sideMenu.style.right === '') {
        sideMenu.style.right = '0'; // Mostra o menu
    } else {
        sideMenu.style.right = '-300px'; // Esconde o menu
    }
}

  // Adiciona os eventos de clique nos botões

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Impede o comportamento padrão do link

      // Obtém o destino do link
      const target = document.querySelector(this.getAttribute('href'));

      // Calcula a posição do destino ajustada para o header fixo
      const offset = 80;
      const position = target.offsetTop - offset;

      // Faz o scroll suave até o destino
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    });
  });


  

  document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 3, // Mostra 3 slides em telas grandes
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        1024: {
          slidesPerView: 3, // Três slides em telas maiores que 1024px
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2, // Dois slides em tablets
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1, // Um slide em telas menores
          spaceBetween: 10,
        },
      },
    });
});
