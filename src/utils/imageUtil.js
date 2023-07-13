export const getBase64FromUrl = async (url) => {
  if (url) {
    const data = await fetch(url, {
      headers: { "Cache-Control": "no-cache" },
    });
    const blob = await data.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        resolve(base64data);
      };
    });
  }
};