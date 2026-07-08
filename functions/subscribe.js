export async function onRequestPost(context) {
  const { request, env } = context;

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };

  try {
    const { prenom, email, session } = await request.json();

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Email invalide' }), { status: 400, headers });
    }

    const body = {
      email,
      listIds: [3],
      updateEnabled: true,
      attributes: {},
    };

    if (prenom) body.attributes.PRENOM = prenom;
    if (session) body.attributes.MERAKI_SESSION = session;

    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': env.BREVO_API_KEY,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (res.ok || res.status === 204) {
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': env.BREVO_API_KEY,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          sender: { name: 'MERAKI', email: 'sublimerlinstant@gmail.com' },
          to: [{ email: 'sublimerlinstant@gmail.com' }],
          subject: '✨ Nouvelle pré-inscription MERAKI',
          htmlContent: `<p>Nouvelle pré-inscription reçue :</p>
            <ul>
              <li><strong>Prénom :</strong> ${prenom || '—'}</li>
              <li><strong>Email :</strong> ${email}</li>
              <li><strong>Session :</strong> ${session || '—'}</li>
            </ul>`,
        }),
      }).catch(() => {});

      return new Response(JSON.stringify({ success: true }), { headers });
    }

    const err = await res.json().catch(() => ({}));
    return new Response(JSON.stringify({ error: err.message || 'Erreur Brevo' }), { status: 500, headers });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500, headers });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
