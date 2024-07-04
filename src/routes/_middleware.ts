import { FreshContext } from "$fresh/server.ts";

export async function handler(req: Request, ctx: FreshContext) {
  const origin = req.headers.get("Origin") || "*";
  const resp = await ctx.next();
  
  resp.headers.set("Access-Control-Allow-Origin", origin);
  resp.headers.set("Access-Control-Allow-Credentials", "true");
  resp.headers.set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With");
  resp.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE");

  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: resp.headers,
    });
  }

  return resp;
}