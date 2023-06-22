export default function checkStorage() {
  if (localStorage.theme === "dark" || !("theme" in localStorage)) {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  } else if (localStorage.theme === "light") {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
  }
}
export function checkLocale() {
  if (localStorage.locale === "eng  " || !("locale" in localStorage)) {
    localStorage.setItem("locale", "eng");
    document.documentElement.lang = "eng";
  } else if (localStorage.locale === "est" || localStorage.locale === "et") {
    localStorage.setItem("locale", "est");
    document.documentElement.lang = "est";
  } else if (localStorage.locale === "rus" || localStorage.locale === "ru-RU") {
    localStorage.setItem("locale", "rus");
    document.documentElement.lang = "rus";
  }
}
