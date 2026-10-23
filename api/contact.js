// Función serverless de Vercel: recibe el formulario de contacto y lo envía por email con Resend.
// Variables de entorno (Vercel → Settings → Environment Variables):
//   RESEND_API_KEY        clave de API de Resend
//   CONTACT_TO_EMAIL      correo donde recibir los mensajes
//   CONTACT_FROM_EMAIL    (opcional) remitente; por defecto onboarding@resend.dev

const MAX = { name: 100, email: 254, message: 5000 };
const MIN_MESSAGE = 10;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const text = (value) => (typeof value === 'string' ? value.trim() : '');

function respond(res, wantsJson, { status = 200, ok = false, error = '' }) {
  if (wantsJson) {
    return res.status(status).json(ok ? { ok: true } : { ok: false, error });
  }
  if (ok) {
    res.setHeader('Location', '/contacto/gracias/');
    return res.status(303).end();
  }
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  return res
    .status(status)
    .send(
      `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Error al enviar</title></head><body><p>${error}</p><p><a href="/contacto/">Volver al formulario</a></p></body></html>`,
    );
}

export default async function handler(req, res) {
  const wantsJson = (req.headers.accept || '').includes('application/json');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return respond(res, wantsJson, { status: 405, error: 'Método no permitido.' });
  }

  const origin = req.headers.origin;
  if (origin) {
    try {
      if (new URL(origin).host !== req.headers.host) {
        return respond(res, wantsJson, { status: 403, error: 'Origen no permitido.' });
      }
    } catch {
      return respond(res, wantsJson, { status: 403, error: 'Origen no permitido.' });
    }
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {};

  // Honeypot: si un bot rellena el campo oculto, se responde como si fuera correcto sin enviar nada.
  if (text(body.website)) {
    return respond(res, wantsJson, { ok: true });
  }

  const name = text(body.name);
  const email = text(body.email);
  const message = text(body.message);
  const consent = body.consent === 'on' || body.consent === 'true' || body.consent === true;

  if (!name || name.length > MAX.name) {
    return respond(res, wantsJson, { status: 400, error: 'Indica tu nombre (máximo 100 caracteres).' });
  }
  if (!EMAIL_RE.test(email) || email.length > MAX.email) {
    return respond(res, wantsJson, { status: 400, error: 'Indica un correo electrónico válido.' });
  }
  if (message.length < MIN_MESSAGE || message.length > MAX.message) {
    return respond(res, wantsJson, {
      status: 400,
      error: 'El mensaje debe tener entre 10 y 5000 caracteres.',
    });
  }
  if (!consent) {
    return respond(res, wantsJson, {
      status: 400,
      error: 'Debes aceptar la política de privacidad para enviar el mensaje.',
    });
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    console.error('Formulario sin configurar: faltan RESEND_API_KEY o CONTACT_TO_EMAIL');
    return respond(res, wantsJson, {
      status: 500,
      error: 'El formulario no está disponible en este momento.',
    });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>',
        to: [CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `Mensaje de ${name.replace(/[\r\n]+/g, ' ')} desde taniadominguez.com`,
        text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      console.error('Resend respondió con estado', response.status);
      return respond(res, wantsJson, {
        status: 502,
        error: 'No se ha podido enviar el mensaje. Inténtalo de nuevo más tarde.',
      });
    }
  } catch (err) {
    console.error('Error al llamar a Resend:', err instanceof Error ? err.name : 'desconocido');
    return respond(res, wantsJson, {
      status: 502,
      error: 'No se ha podido enviar el mensaje. Inténtalo de nuevo más tarde.',
    });
  }

  return respond(res, wantsJson, { ok: true });
}
