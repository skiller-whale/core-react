export default async (formData) => {
  console.log(`submitting to backend...`);

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`submitting to backend... done!`);
      resolve({ ok: true });
    }, Math.random() * 1000);
  });
};
