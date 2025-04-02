/*---------- Efecto cambio en imagen ----------*/
document.addEventListener("DOMContentLoaded", function () {
  const img = document.getElementById("img-que-es");
  img.addEventListener("mouseenter", function () {
    img.classList.add("hovered");
    setTimeout(() => {
      img.style.opacity = "0";
      setTimeout(() => {
        img.src = img.getAttribute("data-hover");
        img.style.opacity = "1";
      }, 150);
    }, 50);
  });
  img.addEventListener("mouseleave", function () {
    img.classList.remove("hovered");
    setTimeout(() => {
      img.style.opacity = "0";
      setTimeout(() => {
        img.src = img.getAttribute("data-original");
        img.style.opacity = "1";
      }, 150);
    }, 50);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const circleOne = document.getElementById("circle-one");
  circleOne.addEventListener("mouseenter", function () {
    circleOne.style.opacity = "0";
    setTimeout(() => {
      const newImage = circleOne.getAttribute("data-hover");
      circleOne.setAttribute("src", newImage);
      circleOne.style.opacity = "1";
    }, 150);
  });
  circleOne.addEventListener("mouseleave", function () {
    circleOne.style.opacity = "0";
    setTimeout(() => {
      const originalImage = circleOne.getAttribute("data-original");
      circleOne.setAttribute("src", originalImage);
      circleOne.style.opacity = "1";
    }, 150);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const circleTwo = document.getElementById("circle-two");
  circleTwo.addEventListener("mouseenter", function () {
    circleTwo.style.opacity = "0";
    setTimeout(() => {
      const newImage = circleTwo.getAttribute("data-hover");
      circleTwo.setAttribute("src", newImage);
      circleTwo.style.opacity = "1";
    }, 150);
  });
  circleTwo.addEventListener("mouseleave", function () {
    circleTwo.style.opacity = "0";
    setTimeout(() => {
      const originalImage = circleTwo.getAttribute("data-original");
      circleTwo.setAttribute("src", originalImage);
      circleTwo.style.opacity = "1";
    }, 150);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const circleThree = document.getElementById("circle-three");
  circleThree.addEventListener("mouseenter", function () {
    circleThree.style.opacity = "0";
    setTimeout(() => {
      const newImage = circleThree.getAttribute("data-hover");
      circleThree.setAttribute("src", newImage);
      circleThree.style.opacity = "1";
    }, 150);
  });
  circleThree.addEventListener("mouseleave", function () {
    circleThree.style.opacity = "0";
    setTimeout(() => {
      const originalImage = circleThree.getAttribute("data-original");
      circleThree.setAttribute("src", originalImage);
      circleThree.style.opacity = "1";
    }, 150);
  });
});
/*---------- Apertura/Cierre acordeón ¿Que es? ----------*/
document.addEventListener("DOMContentLoaded", function () {
  const accordionButton = document.getElementById("accordionButton");
  const collapseInfo = document.getElementById("collapseInfo");
  accordionButton.addEventListener("mouseover", function () {
    if (!collapseInfo.classList.contains("show")) {
      new bootstrap.Collapse(collapseInfo, { toggle: true });
    }
  });
  collapseInfo.addEventListener("mouseleave", function () {
    if (collapseInfo.classList.contains("show")) {
      new bootstrap.Collapse(collapseInfo, { toggle: true });
    }
  });
});
/*---------- Apertura/Cierre acordeón Como funciona? ----------*/
document.addEventListener("DOMContentLoaded", function () {
  const accordionButtonHow = document.getElementById("accordionButtonHow");
  const collapseHow = document.getElementById("collapseHowItWorks");
  accordionButtonHow.addEventListener("mouseover", function () {
    if (!collapseHow.classList.contains("show")) {
      new bootstrap.Collapse(collapseHow, { toggle: true });
    }
  });
  collapseHow.addEventListener("mouseleave", function () {
    if (collapseHow.classList.contains("show")) {
      new bootstrap.Collapse(collapseHow, { toggle: true });
    }
  });
});
/*---------- Animación de Conteo en Estadísticas ----------*/
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    let target = +counter.getAttribute("data-target");
    let count = 0;
    let increment = target / 100;

    function updateCounter() {
      if (count < target) {
        count += increment;
        counter.innerText = Math.floor(count);
        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target;
      }
    }

    updateCounter();
  });
});
