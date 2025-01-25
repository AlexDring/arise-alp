import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { o as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_C-wnxWD2.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/alexdring/Documents/Sites/arise-alp/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.SQRKADvc.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/alexdring/Documents/Sites/arise-alp/src/pages/[...slug].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/[...slug]@_@astro":"pages/_---slug_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_B9c16Gr9.mjs","/Users/alexdring/Documents/Sites/arise-alp/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DEPRxZAC.mjs","/Users/alexdring/Documents/Sites/arise-alp/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts":"_astro/BaseLayout.astro_astro_type_script_index_0_lang.DGcTgF2-.js","/Users/alexdring/Documents/Sites/arise-alp/src/components/Nav.astro?astro&type=script&index=0&lang.ts":"_astro/Nav.astro_astro_type_script_index_0_lang.Cb8HPXA5.js","astro:scripts/page.js":"_astro/page.SQRKADvc.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/alexdring/Documents/Sites/arise-alp/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts","const n=document.querySelectorAll(\".observe\");if(n.length){const o=new IntersectionObserver(s=>{s.forEach(({target:e,isIntersecting:l})=>{e.classList.contains(\"toggle\")?e.classList.toggle(\"in-view\",l):l&&(e.classList.add(\"in-view\"),o.unobserve(e))})},{threshold:.5,rootMargin:\"0px\"});n.forEach(s=>o.observe(s))}"],["/Users/alexdring/Documents/Sites/arise-alp/src/components/Nav.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"mobile-menu\"),n=document.getElementById(\"menu-toggle\");n.addEventListener(\"click\",()=>{t.classList.toggle(\"active\"),n.setAttribute(\"aria-expanded\",t.classList.contains(\"active\").toString())});document.addEventListener(\"click\",e=>{const i=e.target;!t.contains(i)&&!n.contains(i)&&(t.classList.remove(\"active\"),n.setAttribute(\"aria-expanded\",\"false\"))});let a=0,s=!1;const o=document.querySelector(\".nav-bar\");window.addEventListener(\"scroll\",()=>{s||(window.requestAnimationFrame(()=>{const e=window.scrollY;e>a&&e>100?o.classList.add(\"hide\"):o.classList.remove(\"hide\"),a=e,s=!1}),s=!0)});"]],"assets":["/_astro/roboto-cyrillic-ext-400-normal.DORK9bGA.woff2","/_astro/roboto-greek-400-normal.BRWHCUYo.woff2","/_astro/roboto-cyrillic-400-normal.DVDTZtmW.woff2","/_astro/roboto-vietnamese-400-normal.kCRe3VZk.woff2","/_astro/roboto-latin-400-normal.mTIRXP6Y.woff2","/_astro/lora-cyrillic-ext-wght-normal.BU83u1rA.woff2","/_astro/lora-cyrillic-wght-normal.jFvAfotC.woff2","/_astro/roboto-latin-ext-400-normal.4bLplyDh.woff2","/_astro/lora-symbols-wght-normal.CY1XnJg6.woff2","/_astro/lora-math-wght-normal.Z_Oh2JgV.woff2","/_astro/lora-vietnamese-wght-normal.DM_poPwB.woff2","/_astro/roboto-cyrillic-ext-500-normal.G9W8hgzQ.woff2","/_astro/lora-latin-ext-wght-normal.DVZdNwTD.woff2","/_astro/roboto-cyrillic-500-normal.DAkZhMOh.woff2","/_astro/lora-latin-wght-normal.BCvxm8Te.woff2","/_astro/roboto-latin-500-normal.Dxdx3aXO.woff2","/_astro/roboto-vietnamese-500-normal.CcijQRVW.woff2","/_astro/roboto-greek-500-normal.CpESfwfG.woff2","/_astro/roboto-latin-ext-500-normal.BWKy6SgX.woff2","/_astro/roboto-cyrillic-ext-700-normal.CsrCEJIc.woff2","/_astro/roboto-cyrillic-700-normal.B5ZBKWCH.woff2","/_astro/roboto-latin-700-normal.CeM5gOv8.woff2","/_astro/roboto-latin-ext-700-normal.BYGCo3Go.woff2","/_astro/roboto-greek-700-normal.Cc2Tq8FV.woff2","/_astro/roboto-vietnamese-700-normal.SekShQfT.woff2","/_astro/roboto-greek-400-normal.BnGNaKeW.woff","/_astro/roboto-cyrillic-400-normal.DCQqOlfN.woff","/_astro/roboto-cyrillic-ext-400-normal.-KougVX-.woff","/_astro/roboto-cyrillic-ext-500-normal.sraxM_lR.woff","/_astro/roboto-latin-ext-400-normal.ABAIaefi.woff","/_astro/roboto-latin-400-normal.BU1SoK4h.woff","/_astro/roboto-cyrillic-500-normal.QpWeYsca.woff","/_astro/roboto-latin-500-normal.Dcm-rhWF.woff","/_astro/roboto-vietnamese-500-normal.Bwg8Dbh6.woff","/_astro/roboto-vietnamese-400-normal.BkEBOAV9.woff","/_astro/roboto-latin-ext-500-normal.B9pAx_JH.woff","/_astro/roboto-cyrillic-700-normal.DAIxw5xX.woff","/_astro/roboto-greek-700-normal.CjuTpGfE.woff","/_astro/roboto-latin-700-normal.Bh431LEL.woff","/_astro/roboto-latin-ext-700-normal.DwUXTeTv.woff","/_astro/roboto-greek-500-normal.CVjdsdX9.woff","/_astro/roboto-cyrillic-ext-700-normal.dDOtDc5i.woff","/_astro/roboto-vietnamese-700-normal.Mc0c6qif.woff","/_astro/Farm-yard.BkJriC3G.jpg","/_astro/arise-logo.Cq5bqgUh.png","/_astro/_slug_.9E71_HPx.css","/favicon.svg","/_astro/page.SQRKADvc.js","/_astro/page.SQRKADvc.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"SR0UUPf4Tt4qocnJJo4YwyYukPX6L5y1udTzLmj98EY="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
