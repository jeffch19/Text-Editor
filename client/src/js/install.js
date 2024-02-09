const butInstall = document.getElementById('buttonInstall');
//done
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  window.deferredPrompt = event;
  butInstall.style.display = 'block';
});
//done
// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  butInstall.style.display = 'none';
  window.deferredPrompt.prompt();
  const { outcome } = await window.deferredPrompt.userChoice;
  if (outcome === 'accepted') {
    console.log('User accepted the A2HS prompt');
  } else {
    console.log('User dismissed the A2HS prompt');
  }
  window.deferredPrompt = null;
});
//done
// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('PWA was installed');
});
