const mobilMenyuDuyme = document.getElementById("mobil-menyu-duymesi");
const naviqasiyaLinkleri = document.getElementById("naviqasiya-linkleri");
const mobilMenyuIkonu = mobilMenyuDuyme.querySelector("i");

mobilMenyuDuyme.addEventListener("click", () => {
  naviqasiyaLinkleri.classList.toggle("open");

  const menyuAcigdir = naviqasiyaLinkleri.classList.contains("open");

  mobilMenyuIkonu.setAttribute(
    "class",
    menyuAcigdir ? "ri-close-line" : "ri-menu-3-line",
  );
});

naviqasiyaLinkleri.addEventListener("click", () => {
  naviqasiyaLinkleri.classList.remove("open");
  mobilMenyuIkonu.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealSecimleri = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".esas-sekil img", {
  ...scrollRevealSecimleri,
  origin: "right",
});

ScrollReveal().reveal(".esas-alt-basliq", {
  ...scrollRevealSecimleri,
});

ScrollReveal().reveal(".esas-mezmun h1", {
  ...scrollRevealSecimleri,
  delay: 500,
});

ScrollReveal().reveal(".esas-mezmun h2", {
  ...scrollRevealSecimleri,
  delay: 1000,
});

ScrollReveal().reveal(".esas-duymeler", {
  ...scrollRevealSecimleri,
  delay: 1500,
});

ScrollReveal().reveal(".haqqinda-sekli img", {
  ...scrollRevealSecimleri,
  origin: "left",
});

ScrollReveal().reveal(".haqqinda-mezmunu .bolme-etiketi", {
  ...scrollRevealSecimleri,
  delay: 500,
});

ScrollReveal().reveal(".haqqinda-mezmunu .bolme-basligi", {
  ...scrollRevealSecimleri,
  delay: 750,
});

ScrollReveal().reveal(".haqqinda-mezmunu p:not(.bolme-etiketi)", {
  ...scrollRevealSecimleri,
  delay: 1000,
  interval: 500,
});

ScrollReveal().reveal(".haqqinda-duymeleri", {
  ...scrollRevealSecimleri,
  delay: 2000,
});

ScrollReveal().reveal(".blog-karti", {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".blog-duymeleri", {
  ...scrollRevealSecimleri,
  delay: 2000,
});

ScrollReveal().reveal(".elaqe-sekli img", {
  ...scrollRevealSecimleri,
  origin: "right",
});

ScrollReveal().reveal(".elaqe-mezmunu .bolme-etiketi", {
  ...scrollRevealSecimleri,
});

ScrollReveal().reveal(".elaqe-mezmunu .bolme-basligi", {
  ...scrollRevealSecimleri,
  delay: 500,
});

ScrollReveal().reveal(".elaqe-mezmunu > p:not(.bolme-etiketi)", {
  ...scrollRevealSecimleri,
  delay: 1000,
});

ScrollReveal().reveal(".elaqe-formasi", {
  ...scrollRevealSecimleri,
  delay: 1500,
});
