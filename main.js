window.addEventListener(
  "DOMContentLoaded",
  () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }
);

//ALT

document.addEventListener(
  "DOMContentLoaded",
  () => {
    window.scrollTo({
      top: 60, // количество пикселей
      behavior: "smooth", // плавная прокрутка (по желанию)
    });
    console.log("cheker");
  }
);
