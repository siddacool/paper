import { browser } from '$app/env';

const downloadFile = (url) => {
  if (browser) {
    const a = document.createElement('a');
    a.href = url;
    a.download = url.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};

export default downloadFile;
