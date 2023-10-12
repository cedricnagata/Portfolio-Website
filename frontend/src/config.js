let backendHost;

const hostname = window && window.location && window.location.hostname;

if(hostname === 'portfolio-website-iota-teal.vercel.app') {
  backendHost = 'https://nagatac.pythonanywhere.com';
} else {
  backendHost = 'http://localhost:8000';
}

export const API_BASE_URL = backendHost;
