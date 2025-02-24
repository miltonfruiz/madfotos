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
