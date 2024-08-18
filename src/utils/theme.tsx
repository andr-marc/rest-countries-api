function setTheme(themeName: string, setClassName: any) {
    localStorage.setItem('theme', themeName);
    setClassName(themeName);
    document.getElementById('root')!.classList.value = ''
    document.getElementById('root')?.classList.add(themeName);
}

function keepTheme(setClassName: any) {
  const theme = localStorage.getItem('theme');
  if (theme) {
    setTheme(theme, setClassName);
    return;
  }

  const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)');
  if (prefersLightTheme.matches) {
    setTheme('theme-light', setClassName);
    return;
  }

  setTheme('theme-dark', setClassName);
}

export {
  setTheme,
  keepTheme
}