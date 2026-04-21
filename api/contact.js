export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Name, email, and message are required." });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    return res.status(500).json({ error: "Email service not configured." });
  }

  const topicLabel = subject || "General Enquiry";

  // ── Email to HEQA (notification) ─────────────────────────────────────────
  const internalHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1d4ed8,#1e3a8a);border-radius:16px 16px 0 0;padding:32px 40px;text-align:center;">
            <img src="https://heqasolutions.com/heqa-logo-transparent.png" alt="HEQA Solutions" width="56" height="56" style="border-radius:12px;margin-bottom:12px;display:block;margin-left:auto;margin-right:auto;" />
            <p style="color:#93c5fd;font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;margin:0 0 4px;">New Website Contact</p>
            <h1 style="color:#ffffff;font-size:22px;font-weight:800;margin:0;">You have a new message 📬</h1>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:36px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:#f8fafc;border-radius:12px;padding:20px 24px;border-left:4px solid #2563eb;margin-bottom:20px;">
                  <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1.5px;">Topic</p>
                  <p style="margin:0;font-size:16px;font-weight:700;color:#1e293b;">${topicLabel}</p>
                </td>
              </tr>
              <tr><td style="height:16px;"></td></tr>
              <tr>
                <td>
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td width="48%" style="background:#f8fafc;border-radius:12px;padding:16px 20px;">
                        <p style="margin:0 0 4px;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1.5px;">From</p>
                        <p style="margin:0;font-size:15px;font-weight:700;color:#1e293b;">${name}</p>
                      </td>
                      <td width="4%"></td>
                      <td width="48%" style="background:#f8fafc;border-radius:12px;padding:16px 20px;">
                        <p style="margin:0 0 4px;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1.5px;">Reply to</p>
                        <p style="margin:0;font-size:15px;font-weight:700;color:#2563eb;">${email}</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr><td style="height:20px;"></td></tr>
              <tr>
                <td style="background:#f8fafc;border-radius:12px;padding:20px 24px;">
                  <p style="margin:0 0 10px;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1.5px;">Message</p>
                  <p style="margin:0;font-size:15px;color:#334155;line-height:1.7;white-space:pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
                </td>
              </tr>
              <tr><td style="height:28px;"></td></tr>
              <tr>
                <td align="center">
                  <a href="mailto:${email}?subject=Re: ${encodeURIComponent(topicLabel)}" style="display:inline-block;background:#2563eb;color:#ffffff;font-size:14px;font-weight:700;padding:14px 32px;border-radius:10px;text-decoration:none;">Reply to ${name}</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;border-top:1px solid #e2e8f0;">
            <p style="margin:0;font-size:12px;color:#94a3b8;">This message was submitted via the contact form on <strong>heqasolutions.com</strong></p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  // ── Confirmation email to user ────────────────────────────────────────────
  const confirmHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <tr>
          <td style="background:linear-gradient(135deg,#1d4ed8,#1e3a8a);border-radius:16px 16px 0 0;padding:40px;text-align:center;">
            <img src="https://heqasolutions.com/heqa-logo-transparent.png" alt="HEQA Solutions" width="64" height="64" style="border-radius:14px;display:block;margin:0 auto 16px;" />
            <h1 style="color:#ffffff;font-size:26px;font-weight:800;margin:0 0 8px;">We got your message! 🎉</h1>
            <p style="color:#bfdbfe;font-size:15px;margin:0;">Thank you for reaching out to HEQA Solutions</p>
          </td>
        </tr>
        <tr>
          <td style="background:#ffffff;padding:40px;">
            <p style="font-size:16px;color:#334155;line-height:1.7;margin:0 0 20px;">Hi <strong>${name}</strong>,</p>
            <p style="font-size:15px;color:#475569;line-height:1.8;margin:0 0 24px;">
              Your message has been received loud and clear. Our team reviews every enquiry carefully, and we will get back to you within <strong>24 hours</strong> — usually much sooner.
            </p>
            <!-- Summary box -->
            <div style="background:#f8fafc;border-radius:12px;padding:20px 24px;border-left:4px solid #16a34a;margin-bottom:28px;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1.5px;">Your message summary</p>
              <p style="margin:0 0 4px;font-size:13px;color:#64748b;"><strong>Topic:</strong> ${topicLabel}</p>
              <p style="margin:0;font-size:13px;color:#64748b;"><strong>Submitted:</strong> ${new Date().toLocaleString("en-GB", { dateStyle: "long", timeStyle: "short", timeZone: "Africa/Douala" })} (WAT)</p>
            </div>
            <p style="font-size:15px;color:#475569;line-height:1.8;margin:0 0 28px;">
              In the meantime, feel free to explore the HEQA app, join our community on social media, or reach us instantly on WhatsApp if your matter is urgent.
            </p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center">
                  <a href="https://wa.me/237690055252" style="display:inline-block;background:#25d366;color:#ffffff;font-size:14px;font-weight:700;padding:14px 32px;border-radius:10px;text-decoration:none;margin-right:12px;">Chat on WhatsApp</a>
                  <a href="https://heqasolutions.com" style="display:inline-block;background:#2563eb;color:#ffffff;font-size:14px;font-weight:700;padding:14px 32px;border-radius:10px;text-decoration:none;">Visit Website</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:#f8fafc;border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;border-top:1px solid #e2e8f0;">
            <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#1e293b;">HEQA Solutions 🇨🇲</p>
            <p style="margin:0 0 4px;font-size:12px;color:#94a3b8;">Cameroon's #1 Exam Prep App</p>
            <p style="margin:0;font-size:12px;color:#cbd5e1;">
              <a href="mailto:info@heqasolutions.com" style="color:#2563eb;text-decoration:none;">info@heqasolutions.com</a>
              &nbsp;·&nbsp;
              <a href="https://heqasolutions.com" style="color:#2563eb;text-decoration:none;">heqasolutions.com</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  try {
    // Send both emails in parallel
    const [internalRes, confirmRes] = await Promise.all([
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "HEQA Solutions <noreply@heqasolutions.com>",
          to: ["info@heqasolutions.com"],
          reply_to: email,
          subject: `[Contact] ${topicLabel} — from ${name}`,
          html: internalHtml,
        }),
      }),
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "HEQA Solutions <noreply@heqasolutions.com>",
          to: [email],
          subject: "We've received your message — HEQA Solutions",
          html: confirmHtml,
        }),
      }),
    ]);

    if (!internalRes.ok) {
      const errText = await internalRes.text();
      console.error("Resend internal error:", internalRes.status, errText);
      return res
        .status(502)
        .json({ error: "Failed to send message. Please try again." });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact handler error:", err?.message ?? err);
    return res
      .status(500)
      .json({
        error:
          "An unexpected error occurred. Please try WhatsApp or email us directly.",
      });
  }
}
