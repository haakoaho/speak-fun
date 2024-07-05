document.addEventListener('DOMContentLoaded', async () => {
    const launchButton = document.getElementById('launchButton');
    
    try {
      const response = await fetch('https://haakoaho.github.io/deployments/mobile-speak.json');
      const data = await response.json();
      const mobileSpeakUrl = data.url;
  
      launchButton.addEventListener('click', () => {
        window.location.href = mobileSpeakUrl;
      });
    } catch (error) {
      console.error('Error fetching mobile-speak URL:', error);
    }
  });
  
  // PWA Installation
// Register the service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, (error) => {
          console.log('ServiceWorker registration failed: ', error);
        });
    });
  }
  
  document.addEventListener('DOMContentLoaded', async () => {
    const launchButton = document.getElementById('launchButton');
    
    try {
      const response = await fetch('/deployments/mobile-speak.json');
      const data = await response.json();
      const mobileSpeakUrl = data.url;
  
      launchButton.addEventListener('click', () => {
        window.location.href = mobileSpeakUrl;
      });
    } catch (error) {
      console.error('Error fetching mobile-speak URL:', error);
    }
  });
  
  // PWA Installation
  let deferredPrompt;
  const installButton = document.createElement('button');
  installButton.textContent = 'Install App';
  installButton.style.display = 'none';
  document.body.appendChild(installButton);
  
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installButton.style.display = 'block';
  
    installButton.addEventListener('click', () => {
      installButton.style.display = 'none';
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        deferredPrompt = null;
      });
    });
  });
  