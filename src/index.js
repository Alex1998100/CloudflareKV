//https://developers.cloudflare.com/kv/get-started/
//https://developers.cloudflare.com/kv/concepts/kv-bindings/#using-the-kv-binding-when-developing-locally
export default {
  async fetch(request, env, ctx) {
    const { pathname } = new URL(request.url);
    //console.log(pathname);
    let value = await env.cache_dev.get(pathname.replace("/",""));
    return new Response(value);
  },
};