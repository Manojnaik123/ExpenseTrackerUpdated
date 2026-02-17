export function setTheme(boolVal) {
  localStorage.setItem("isDark", boolVal);
}

function setLanguage(lanId) {
  localStorage.setItem("languageId", lanId);
}

export function truncateString(str, length) {
  if (str.length <= length) return str;

  return str.slice(0, length) + "...";
}