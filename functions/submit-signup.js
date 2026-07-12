export async function onRequestPost(context) {
  const { request, env } = context;
  const formData = await request.formData();
  const userEmail = formData.get("user_email");

  if (!userEmail) {
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