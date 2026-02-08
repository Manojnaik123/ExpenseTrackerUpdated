export function setTheme(boolVal) {
  localStorage.setItem("isDark", boolVal);
}

function setLanguage(lanId) {
  localStorage.setItem("languageId", lanId);
}