// @ts-nocheck
import { json } from "@sveltejs/kit";
import { sendEmail } from "$lib/server/mailer.js";

function sanitize(str = "", max = 2000) {
	return String(str).trim().slice(0, max);
}

export async function POST({ request }) {
	let body;

	try {
		body = await request.json();
	} catch {
		return json({ error: "Invalid request" }, { status: 400 });
	}

	const name = sanitize(body.name, 120);
	const email = sanitize(body.email, 200);
	const message = sanitize(body.message, 4000);

	if (!name || !email || !message) {
		return json({ error: "Missing fields" }, { status: 400 });
	}

	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return json({ error: "Invalid email" }, { status: 422 });
	}

	const subject = `Contact message from ${name}`;
	const to = "findyourway88@gmail.com";
	const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;
	const html = `
		<div style="font-family:Arial,sans-serif;line-height:1.5">
			<p><strong>Name:</strong> ${escapeHtml(name)}</p>
			<p><strong>Email:</strong> ${escapeHtml(email)}</p>
			<p><strong>Message:</strong></p>
			<pre style="white-space:pre-wrap">${escapeHtml(message)}</pre>
		</div>
	`;

	try {
		await sendEmail({
			to,
			subject,
			text,
			html,
			replyTo: email,
			fromDisplayName: "Contact Form"
		});

		return json({ ok: true });
	} catch (err) {
		console.error("Email send failed:", err);
		return json({ error: "Failed to send email" }, { status: 500 });
	}
}

function escapeHtml(s = "") {
	return String(s)
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#039;");
}
