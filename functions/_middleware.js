// Sends visitors to their country edition by IP country or browser language.
// ?edition=main (linked from every edition) sets a cookie that opts out for a year.
const editions = { MX: "mx", NG: "ng", RU: "ru", CN: "cn" };
const languages = { es: "mx", ru: "ru", zh: "cn" };
const botPattern = /bot|crawl|spider|slurp|preview|facebookexternalhit|embedly/i;

export function editionFor(request) {
  const url = new URL(request.url);
  if (url.hostname !== "jkokinda.com") return null;
  if ((request.headers.get("cookie") || "").includes("edition=main")) return null;
  if (botPattern.test(request.headers.get("user-agent") || "")) return null;
  const accept = request.headers.get("accept") || "";
  if (!accept.includes("text/html")) return null;
  const primaryLanguage = (request.headers.get("accept-language") || "").split(/[-,;]/)[0].trim().toLowerCase();
  return editions[request.cf?.country] || languages[primaryLanguage] || null;
}

export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.searchParams.get("edition") === "main") {
    url.searchParams.delete("edition");
    return new Response(null, {
      status: 302,
      headers: {
        location: url.pathname + url.search,
        "set-cookie": "edition=main; Path=/; Max-Age=31536000; SameSite=Lax; Secure",
      },
    });
  }
  const edition = editionFor(context.request);
  if (!edition) return context.next();
  url.hostname = `${edition}.jkokinda.com`;
  return Response.redirect(url.toString(), 302);
}
