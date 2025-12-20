function load({ locals }) {
  const lang = locals.lang === "ro" ? "ro" : "en";
  return { lang };
}
export {
  load
};
