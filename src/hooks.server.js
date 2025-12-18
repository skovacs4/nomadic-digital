export async function handle({ event, resolve }) {
  const lang = event.cookies.get('lang') || 'en';
  event.locals.lang = lang;
  return resolve(event);
}
