/**
 * Cloudflare Pages Function: POST /api/lead
 * Stubs the lead form; replace with email/CRM, KV queue, or external webhook.
 * @param {{ request: Request, env: object }} context
 */
export async function onRequestPost({ request }) {
  const ct = request.headers.get('content-type') || '';
  if (ct.includes('multipart/form-data')) {
    try {
      await request.formData();
    } catch {
      return new Response(JSON.stringify({ ok: false, error: 'invalid_form' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      });
    }
  }
  return new Response(JSON.stringify({ ok: true, received: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
