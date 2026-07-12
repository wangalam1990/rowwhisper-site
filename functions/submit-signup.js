export async function onRequestPost(context) {
  const { request, env } = context;
  const formData = await request.formData();
  const userEmail = formData.get("user_email");
  const turnstileToken = formData.get("cf-turnstile-response");

  if (!userEmail || !turnstileToken) {
    return Response.redirect("/register", 302);
  }

  const ip = request.headers.get("CF-Connecting-IP");

  const turnstileResponse = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        secret: "0x4AAAAAAD0VHSQo6y_E_xyka0DjDCc7g1U",
        response: turnstileToken,
        remoteip: ip
      })
    }
  );

  const turnstileData = await turnstileResponse.json();

  if (!turnstileData.success) {
    return Response.redirect("/register", 302);
  }

  await fetch("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: "wangalam1990@outlook.com" }] }],
      from: { email: "no-reply@rowwhisper.com", name: "RowWhisper Sign Up" },
      subject: "New User Registration Request",
      content: [{ type: "text/plain", value: `New signup email: ${userEmail}` }]
    })
  });

  return Response.redirect("/signup-success", 302);
}