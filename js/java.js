document.addEventListener("DOMContentLoaded", function () {
  const texto = "Comece a ser notado clicando...";
  const typedText = document.getElementById("typed-text");
  let i = 0;

  function digitar() {
    if (i < texto.length) {
      typedText.innerHTML += texto.charAt(i);
      i++;
      setTimeout(digitar, 150);
    }
    // Não remove o cursor nem faz nada aqui, para que ele continue piscando
  }

  digitar();
});



document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper", {
    loop: true,
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
});
