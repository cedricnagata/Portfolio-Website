let backendHost;

const hostname = window && window.location && window.location.hostname;
console.log(hostname)

if(hostname === 'https://www.cedricnagata.com') {
  backendHost = 'https://nagatac.pythonanywhere.com';
} else {
  backendHost = 'http://localhost:8000';
}

export const API_BASE_URL = backendHost;
