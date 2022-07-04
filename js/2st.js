const socials = document.querySelectorAll(".follow__block img");

socials.forEach((el) => {
  el.onclick = () => {
    if (
      !el.classList.contains("redborder") &&
      !el.classList.contains("blueborder")
    ) {
      el.classList.add("redborder");
    } else if (el.classList.contains("redborder")) {
      el.classList.replace("redborder", "blueborder");
    } else if (el.classList.contains("blueborder")) {
      el.classList.remove("blueborder");
      el.classList.remove("redborder");
    }
  };
});
