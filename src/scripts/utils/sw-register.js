const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    const { Workbox } = await import('workbox-window');
    if (Workbox) { console.log('Workbox berhasil'); } else console.log('Workbox gagal');
    const wb = new Workbox('../sw.js');
    wb.addEventListener('installed', (event) => {
      if (!event.isUpdate) {
        console.log('Service Worker Installed!');
      }
    });
    wb.addEventListener('activated', (event) => {
      if (!event.isUpdate) {
        console.log('Service Worker Activated!');
      }
    });
    await wb.register();
  }
};
export default swRegister;
