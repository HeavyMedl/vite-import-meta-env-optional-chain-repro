const direct = {
  MODE: import.meta.env.MODE,
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD,
  VITE_APP_ENV: import.meta.env.VITE_APP_ENV,
};

const optional = {
  MODE: import.meta?.env?.MODE,
  DEV: import.meta?.env?.DEV,
  PROD: import.meta?.env?.PROD,
  VITE_APP_ENV: import.meta?.env?.VITE_APP_ENV,
};

console.log('direct', direct);
console.log('optional', optional);

const out = document.getElementById('out');
out.textContent = JSON.stringify({ direct, optional }, null, 2);
