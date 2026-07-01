import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL || import.meta.env.GOOGLE_SCRIPT_URL;

    if (!googleScriptUrl) {
      throw new Error("GOOGLE_SCRIPT_URL is not defined in environment variables.");
    }

    const response = await fetch(googleScriptUrl, {
      method: "POST",
      body: formData,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return new Response(JSON.stringify({ success: false, error: "Failed to submit form" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
