import { storyblokInit, apiPlugin } from '@storyblok/js';
import { c as createComponent, a as createAstro, m as maybeRenderHead, s as spreadAttributes, r as renderComponent, b as renderTemplate, e as addAttribute, F as Fragment, u as unescapeHTML, f as renderScript, g as defineScriptVars, h as renderSlot, i as renderHead } from '../chunks/astro/server_k8c-8OH0.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                  */
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const { storyblokApi } = storyblokInit({
            accessToken: "sUhooSw6fVlDyPKmMMBFcgtt",
            use: [apiPlugin],
            apiOptions: undefined,
          });
          const storyblokApiInstance = storyblokApi;

globalThis.storyblokApiInstance = storyblokApiInstance;

const Or = /[\p{Lu}]/u, xr = /[\p{Ll}]/u, Me = /^[\p{Lu}](?![\p{Lu}])/gu, Je = /([\p{Alpha}\p{N}_]|$)/u, fe = /[_.\- ]+/, jr = new RegExp("^" + fe.source), Ne = new RegExp(fe.source + Je.source, "gu"), ze = new RegExp("\\d+" + Je.source, "gu"), Er = (o, t, r, s) => {
  let i = false, l = false, u = false, f = false;
  for (let g = 0; g < o.length; g++) {
    const y = o[g];
    f = g > 2 ? o[g - 3] === "-" : true, i && Or.test(y) ? (o = o.slice(0, g) + "-" + o.slice(g), i = false, u = l, l = true, g++) : l && u && xr.test(y) && (!f || s) ? (o = o.slice(0, g - 1) + "-" + o.slice(g - 1), u = l, l = false, i = true) : (i = t(y) === y && r(y) !== y, u = l, l = r(y) === y && t(y) !== y);
  }
  return o;
}, Rr = (o, t) => (Me.lastIndex = 0, o.replaceAll(Me, (r) => t(r))), Lr = (o, t) => (Ne.lastIndex = 0, ze.lastIndex = 0, o.replaceAll(ze, (r, s, i) => ["_", "-"].includes(o.charAt(i + r.length)) ? r : t(r)).replaceAll(Ne, (r, s) => t(s)));
function Pr(o, t) {
  if (!(typeof o == "string" || Array.isArray(o)))
    throw new TypeError("Expected the input to be `string | string[]`");
  if (t = {
    pascalCase: false,
    preserveConsecutiveUppercase: false,
    ...t
  }, Array.isArray(o) ? o = o.map((l) => l.trim()).filter((l) => l.length).join("-") : o = o.trim(), o.length === 0)
    return "";
  const r = t.locale === false ? (l) => l.toLowerCase() : (l) => l.toLocaleLowerCase(t.locale), s = t.locale === false ? (l) => l.toUpperCase() : (l) => l.toLocaleUpperCase(t.locale);
  return o.length === 1 ? fe.test(o) ? "" : t.pascalCase ? s(o) : r(o) : (o !== r(o) && (o = Er(o, r, s, t.preserveConsecutiveUppercase)), o = o.replace(jr, ""), o = t.preserveConsecutiveUppercase ? Rr(o, r) : r(o), t.pascalCase && (o = s(o.charAt(0)) + o.slice(1)), Lr(o, s));
}
function Fe(o) {
  return Pr(o);
}
var Fr = Object.defineProperty, Dr = (o, t, r) => t in o ? Fr(o, t, { enumerable: true, configurable: true, writable: true, value: r }) : o[t] = r, S = (o, t, r) => Dr(o, typeof t != "symbol" ? t + "" : t, r);
let Br = class {
  constructor() {
    S(this, "isCDNUrl", (o = "") => o.includes("/cdn/")), S(this, "getOptionsPage", (o, t = 25, r = 1) => ({
      ...o,
      per_page: t,
      page: r
    })), S(this, "delay", (o) => new Promise((t) => setTimeout(t, o))), S(this, "arrayFrom", (o = 0, t) => Array.from({ length: o }, t)), S(this, "range", (o = 0, t = o) => {
      const r = Math.abs(t - o) || 0, s = o < t ? 1 : -1;
      return this.arrayFrom(r, (i, l) => l * s + o);
    }), S(this, "asyncMap", async (o, t) => Promise.all(o.map(t))), S(this, "flatMap", (o = [], t) => o.map(t).reduce((r, s) => [...r, ...s], [])), S(this, "escapeHTML", function(o) {
      const t = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, r = /[&<>"']/g, s = new RegExp(r.source);
      return o && s.test(o) ? o.replace(r, (i) => t[i]) : o;
    });
  }
  /**
   * @method stringify
   * @param  {object} params
   * @param  {string} prefix
   * @param  {boolean} isArray
   * @return {string} Stringified object
   */
  stringify(o, t, r) {
    const s = [];
    for (const i in o) {
      if (!Object.prototype.hasOwnProperty.call(o, i))
        continue;
      const l = o[i], u = r ? "" : encodeURIComponent(i);
      let f;
      typeof l == "object" ? f = this.stringify(
        l,
        t ? t + encodeURIComponent(`[${u}]`) : u,
        Array.isArray(l)
      ) : f = `${t ? t + encodeURIComponent(`[${u}]`) : u}=${encodeURIComponent(l)}`, s.push(f);
    }
    return s.join("&");
  }
  /**
   * @method getRegionURL
   * @param  {string} regionCode region code, could be eu, us, cn, ap or ca
   * @return {string} The base URL of the region
   */
  getRegionURL(o) {
    const t = "api.storyblok.com", r = "api-us.storyblok.com", s = "app.storyblokchina.cn", i = "api-ap.storyblok.com", l = "api-ca.storyblok.com";
    switch (o) {
      case "us":
        return r;
      case "cn":
        return s;
      case "ap":
        return i;
      case "ca":
        return l;
      default:
        return t;
    }
  }
};
const Ur = function(o, t) {
  const r = {};
  for (const s in o) {
    const i = o[s];
    t.includes(s) && i !== null && (r[s] = i);
  }
  return r;
}, Hr = (o) => o === "email", qr = () => ({
  singleTag: "hr"
}), Gr = () => ({
  tag: "blockquote"
}), Jr = () => ({
  tag: "ul"
}), Wr = (o) => ({
  tag: [
    "pre",
    {
      tag: "code",
      attrs: o.attrs
    }
  ]
}), Kr = () => ({
  singleTag: "br"
}), Zr = (o) => ({
  tag: `h${o.attrs.level}`
}), Vr = (o) => ({
  singleTag: [
    {
      tag: "img",
      attrs: Ur(o.attrs, ["src", "alt", "title"])
    }
  ]
}), Xr = () => ({
  tag: "li"
}), Yr = () => ({
  tag: "ol"
}), Qr = () => ({
  tag: "p"
}), en = (o) => ({
  tag: [
    {
      tag: "span",
      attrs: {
        "data-type": "emoji",
        "data-name": o.attrs.name,
        emoji: o.attrs.emoji
      }
    }
  ]
}), tn = () => ({
  tag: "b"
}), rn = () => ({
  tag: "s"
}), nn = () => ({
  tag: "u"
}), on = () => ({
  tag: "strong"
}), an = () => ({
  tag: "code"
}), sn = () => ({
  tag: "i"
}), ln = (o) => {
  if (!o.attrs)
    return {
      tag: ""
    };
  const t = new Br().escapeHTML, r = { ...o.attrs }, { linktype: s = "url" } = o.attrs;
  if (delete r.linktype, r.href && (r.href = t(o.attrs.href || "")), Hr(s) && (r.href = `mailto:${r.href}`), r.anchor && (r.href = `${r.href}#${r.anchor}`, delete r.anchor), r.custom) {
    for (const i in r.custom)
      r[i] = r.custom[i];
    delete r.custom;
  }
  return {
    tag: [
      {
        tag: "a",
        attrs: r
      }
    ]
  };
}, cn = (o) => ({
  tag: [
    {
      tag: "span",
      attrs: o.attrs
    }
  ]
}), un = () => ({
  tag: "sub"
}), fn = () => ({
  tag: "sup"
}), dn = (o) => ({
  tag: [
    {
      tag: "span",
      attrs: o.attrs
    }
  ]
}), pn = (o) => {
  var t;
  return (t = o.attrs) != null && t.color ? {
    tag: [
      {
        tag: "span",
        attrs: {
          style: `background-color:${o.attrs.color};`
        }
      }
    ]
  } : {
    tag: ""
  };
}, gn = (o) => {
  var t;
  return (t = o.attrs) != null && t.color ? {
    tag: [
      {
        tag: "span",
        attrs: {
          style: `color:${o.attrs.color}`
        }
      }
    ]
  } : {
    tag: ""
  };
}, hn = {
  nodes: {
    horizontal_rule: qr,
    blockquote: Gr,
    bullet_list: Jr,
    code_block: Wr,
    hard_break: Kr,
    heading: Zr,
    image: Vr,
    list_item: Xr,
    ordered_list: Yr,
    paragraph: Qr,
    emoji: en
  },
  marks: {
    bold: tn,
    strike: rn,
    underline: nn,
    strong: on,
    code: an,
    italic: sn,
    link: ln,
    styled: cn,
    subscript: un,
    superscript: fn,
    anchor: dn,
    highlight: pn,
    textStyle: gn
  }
}, bn = function(o) {
  const t = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }, r = /[&<>"']/g, s = new RegExp(r.source);
  return o && s.test(o) ? o.replace(r, (i) => t[i]) : o;
};
let Ue = false;
class yn {
  constructor(t) {
    S(this, "marks"), S(this, "nodes"), t || (t = hn), this.marks = t.marks || [], this.nodes = t.nodes || [];
  }
  addNode(t, r) {
    this.nodes[t] = r;
  }
  addMark(t, r) {
    this.marks[t] = r;
  }
  render(t, r = { optimizeImages: false }, s = true) {
    if (!Ue && s && (console.warn(
      "Warning ⚠️: The RichTextResolver class is deprecated and will be removed in the next major release. Please use the `@storyblok/richtext` package instead. https://github.com/storyblok/richtext/"
    ), Ue = true), t && t.content && Array.isArray(t.content)) {
      let i = "";
      return t.content.forEach((l) => {
        i += this.renderNode(l);
      }), r.optimizeImages ? this.optimizeImages(i, r.optimizeImages) : i;
    }
    return console.warn(
      `The render method must receive an Object with a "content" field.
      The "content" field must be an array of nodes as the type ISbRichtext.
      ISbRichtext:
        content?: ISbRichtext[]
        marks?: ISbRichtext[]
        attrs?: any
        text?: string
        type: string
        
        Example:
        {
          content: [
            {
              content: [
                {
                  text: 'Hello World',
                  type: 'text'
                }
              ],
              type: 'paragraph'
            }
          ],
          type: 'doc'
        }`
    ), "";
  }
  optimizeImages(t, r) {
    let s = 0, i = 0, l = "", u = "";
    typeof r != "boolean" && (typeof r.width == "number" && r.width > 0 && (l += `width="${r.width}" `, s = r.width), typeof r.height == "number" && r.height > 0 && (l += `height="${r.height}" `, i = r.height), (r.loading === "lazy" || r.loading === "eager") && (l += `loading="${r.loading}" `), typeof r.class == "string" && r.class.length > 0 && (l += `class="${r.class}" `), r.filters && (typeof r.filters.blur == "number" && r.filters.blur >= 0 && r.filters.blur <= 100 && (u += `:blur(${r.filters.blur})`), typeof r.filters.brightness == "number" && r.filters.brightness >= -100 && r.filters.brightness <= 100 && (u += `:brightness(${r.filters.brightness})`), r.filters.fill && (r.filters.fill.match(/[0-9A-F]{6}/gi) || r.filters.fill === "transparent") && (u += `:fill(${r.filters.fill})`), r.filters.format && ["webp", "png", "jpeg"].includes(r.filters.format) && (u += `:format(${r.filters.format})`), typeof r.filters.grayscale == "boolean" && r.filters.grayscale && (u += ":grayscale()"), typeof r.filters.quality == "number" && r.filters.quality >= 0 && r.filters.quality <= 100 && (u += `:quality(${r.filters.quality})`), r.filters.rotate && [90, 180, 270].includes(r.filters.rotate) && (u += `:rotate(${r.filters.rotate})`), u.length > 0 && (u = `/filters${u}`))), l.length > 0 && (t = t.replace(/<img/g, `<img ${l.trim()}`));
    const f = s > 0 || i > 0 || u.length > 0 ? `${s}x${i}${u}` : "";
    return t = t.replace(
      /a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|bmp)/g,
      `a.storyblok.com/f/$1/$2.$3/m/${f}`
    ), typeof r != "boolean" && (r.sizes || r.srcset) && (t = t.replace(/<img.*?src=["|'](.*?)["|']/g, (g) => {
      var y, _;
      const C = g.match(
        /a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|bmp)/g
      );
      if (C && C.length > 0) {
        const T = {
          srcset: (y = r.srcset) == null ? void 0 : y.map((w) => {
            if (typeof w == "number")
              return `//${C}/m/${w}x0${u} ${w}w`;
            if (typeof w == "object" && w.length === 2) {
              let x = 0, H = 0;
              return typeof w[0] == "number" && (x = w[0]), typeof w[1] == "number" && (H = w[1]), `//${C}/m/${x}x${H}${u} ${x}w`;
            }
            return "";
          }).join(", "),
          sizes: (_ = r.sizes) == null ? void 0 : _.map((w) => w).join(", ")
        };
        let $ = "";
        return T.srcset && ($ += `srcset="${T.srcset}" `), T.sizes && ($ += `sizes="${T.sizes}" `), g.replace(/<img/g, `<img ${$.trim()}`);
      }
      return g;
    })), t;
  }
  renderNode(t) {
    const r = [];
    t.marks && t.marks.forEach((i) => {
      const l = this.getMatchingMark(i);
      l && l.tag !== "" && r.push(this.renderOpeningTag(l.tag));
    });
    const s = this.getMatchingNode(t);
    return s && s.tag && r.push(this.renderOpeningTag(s.tag)), t.content ? t.content.forEach((i) => {
      r.push(this.renderNode(i));
    }) : t.text ? r.push(bn(t.text)) : s && s.singleTag ? r.push(this.renderTag(s.singleTag, " /")) : s && s.html ? r.push(s.html) : t.type === "emoji" && r.push(this.renderEmoji(t)), s && s.tag && r.push(this.renderClosingTag(s.tag)), t.marks && t.marks.slice(0).reverse().forEach((i) => {
      const l = this.getMatchingMark(i);
      l && l.tag !== "" && r.push(this.renderClosingTag(l.tag));
    }), r.join("");
  }
  renderTag(t, r) {
    return t.constructor === String ? `<${t}${r}>` : t.map((s) => {
      if (s.constructor === String)
        return `<${s}${r}>`;
      {
        let i = `<${s.tag}`;
        if (s.attrs) {
          for (const l in s.attrs)
            if (Object.prototype.hasOwnProperty.call(s.attrs, l)) {
              const u = s.attrs[l];
              u !== null && (i += ` ${l}="${u}"`);
            }
        }
        return `${i}${r}>`;
      }
    }).join("");
  }
  renderOpeningTag(t) {
    return this.renderTag(t, "");
  }
  renderClosingTag(t) {
    return t.constructor === String ? `</${t}>` : t.slice(0).reverse().map((r) => r.constructor === String ? `</${r}>` : `</${r.tag}>`).join("");
  }
  getMatchingNode(t) {
    const r = this.nodes[t.type];
    if (typeof r == "function")
      return r(t);
  }
  getMatchingMark(t) {
    const r = this.marks[t.type];
    if (typeof r == "function")
      return r(t);
  }
  renderEmoji(t) {
    if (t.attrs.emoji)
      return t.attrs.emoji;
    const r = [
      {
        tag: "img",
        attrs: {
          src: t.attrs.fallbackImage,
          draggable: "false",
          loading: "lazy",
          align: "absmiddle"
        }
      }
    ];
    return this.renderTag(r, " /");
  }
}
const mn = yn, Pn = (o) => {
  if (typeof o != "object" || typeof o._editable > "u")
    return {};
  try {
    const t = JSON.parse(
      o._editable.replace(/^<!--#storyblok#/, "").replace(/-->$/, "")
    );
    return t ? {
      "data-blok-c": JSON.stringify(t),
      "data-blok-uid": t.id + "-" + t.uid
    } : {};
  } catch {
    return {};
  }
};
let vn;
const wn = (o, t) => {
  o.addNode("blok", (r) => {
    let s = "";
    return r.attrs.body.forEach((i) => {
      s += t(i.component, i);
    }), {
      html: s
    };
  });
}, kn = (o) => !o || !(o != null && o.content.some((t) => t.content || t.type === "blok" || t.type === "horizontal_rule")), Tn = (o, t, r) => {
  let s = r || vn;
  if (!s) {
    console.error(
      "Please initialize the Storyblok SDK before calling the renderRichText function"
    );
    return;
  }
  return kn(o) ? "" : (t && (s = new mn(t.schema), t.resolver && wn(s, t.resolver)), s.render(o, {}, false));
};
var Y = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var U = { exports: {} };
U.exports;
var He;
function Sn() {
  return He || (He = 1, function(o, t) {
    var r = 200, s = "__lodash_hash_undefined__", i = 800, l = 16, u = 9007199254740991, f = "[object Arguments]", g = "[object Array]", y = "[object AsyncFunction]", _ = "[object Boolean]", C = "[object Date]", T = "[object Error]", $ = "[object Function]", w = "[object GeneratorFunction]", x = "[object Map]", H = "[object Number]", We = "[object Null]", de = "[object Object]", Ke = "[object Proxy]", Ze = "[object RegExp]", Ve = "[object Set]", Xe = "[object String]", Ye = "[object Undefined]", Qe = "[object WeakMap]", et = "[object ArrayBuffer]", tt = "[object DataView]", rt = "[object Float32Array]", nt = "[object Float64Array]", ot = "[object Int8Array]", at = "[object Int16Array]", st = "[object Int32Array]", it = "[object Uint8Array]", lt = "[object Uint8ClampedArray]", ct = "[object Uint16Array]", ut = "[object Uint32Array]", ft = /[\\^$.*+?()[\]{}|]/g, dt = /^\[object .+?Constructor\]$/, pt = /^(?:0|[1-9]\d*)$/, b = {};
    b[rt] = b[nt] = b[ot] = b[at] = b[st] = b[it] = b[lt] = b[ct] = b[ut] = true, b[f] = b[g] = b[et] = b[_] = b[tt] = b[C] = b[T] = b[$] = b[x] = b[H] = b[de] = b[Ze] = b[Ve] = b[Xe] = b[Qe] = false;
    var pe = typeof Y == "object" && Y && Y.Object === Object && Y, gt = typeof self == "object" && self && self.Object === Object && self, M = pe || gt || Function("return this")(), ge = t && !t.nodeType && t, N = ge && true && o && !o.nodeType && o, he = N && N.exports === ge, Q = he && pe.process, be = function() {
      try {
        var e = N && N.require && N.require("util").types;
        return e || Q && Q.binding && Q.binding("util");
      } catch {
      }
    }(), ye = be && be.isTypedArray;
    function ht(e, n, a) {
      switch (a.length) {
        case 0:
          return e.call(n);
        case 1:
          return e.call(n, a[0]);
        case 2:
          return e.call(n, a[0], a[1]);
        case 3:
          return e.call(n, a[0], a[1], a[2]);
      }
      return e.apply(n, a);
    }
    function bt(e, n) {
      for (var a = -1, c = Array(e); ++a < e; )
        c[a] = n(a);
      return c;
    }
    function yt(e) {
      return function(n) {
        return e(n);
      };
    }
    function mt(e, n) {
      return e == null ? void 0 : e[n];
    }
    function vt(e, n) {
      return function(a) {
        return e(n(a));
      };
    }
    var _t = Array.prototype, wt = Function.prototype, q = Object.prototype, ee = M["__core-js_shared__"], G = wt.toString, O = q.hasOwnProperty, me = function() {
      var e = /[^.]+$/.exec(ee && ee.keys && ee.keys.IE_PROTO || "");
      return e ? "Symbol(src)_1." + e : "";
    }(), ve = q.toString, kt = G.call(Object), Tt = RegExp(
      "^" + G.call(O).replace(ft, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), J = he ? M.Buffer : void 0, _e = M.Symbol, we = M.Uint8Array;
    J && J.allocUnsafe;
    var ke = vt(Object.getPrototypeOf, Object), Te = Object.create, Ct = q.propertyIsEnumerable, At = _t.splice, j = _e ? _e.toStringTag : void 0, W = function() {
      try {
        var e = ne(Object, "defineProperty");
        return e({}, "", {}), e;
      } catch {
      }
    }(), St = J ? J.isBuffer : void 0, Ce = Math.max, It = Date.now, Ae = ne(M, "Map"), z = ne(Object, "create"), $t = /* @__PURE__ */ function() {
      function e() {
      }
      return function(n) {
        if (!R(n))
          return {};
        if (Te)
          return Te(n);
        e.prototype = n;
        var a = new e();
        return e.prototype = void 0, a;
      };
    }();
    function E(e) {
      var n = -1, a = e == null ? 0 : e.length;
      for (this.clear(); ++n < a; ) {
        var c = e[n];
        this.set(c[0], c[1]);
      }
    }
    function Ot() {
      this.__data__ = z ? z(null) : {}, this.size = 0;
    }
    function xt(e) {
      var n = this.has(e) && delete this.__data__[e];
      return this.size -= n ? 1 : 0, n;
    }
    function jt(e) {
      var n = this.__data__;
      if (z) {
        var a = n[e];
        return a === s ? void 0 : a;
      }
      return O.call(n, e) ? n[e] : void 0;
    }
    function Et(e) {
      var n = this.__data__;
      return z ? n[e] !== void 0 : O.call(n, e);
    }
    function Rt(e, n) {
      var a = this.__data__;
      return this.size += this.has(e) ? 0 : 1, a[e] = z && n === void 0 ? s : n, this;
    }
    E.prototype.clear = Ot, E.prototype.delete = xt, E.prototype.get = jt, E.prototype.has = Et, E.prototype.set = Rt;
    function I(e) {
      var n = -1, a = e == null ? 0 : e.length;
      for (this.clear(); ++n < a; ) {
        var c = e[n];
        this.set(c[0], c[1]);
      }
    }
    function Lt() {
      this.__data__ = [], this.size = 0;
    }
    function Pt(e) {
      var n = this.__data__, a = K(n, e);
      if (a < 0)
        return false;
      var c = n.length - 1;
      return a == c ? n.pop() : At.call(n, a, 1), --this.size, true;
    }
    function Mt(e) {
      var n = this.__data__, a = K(n, e);
      return a < 0 ? void 0 : n[a][1];
    }
    function Nt(e) {
      return K(this.__data__, e) > -1;
    }
    function zt(e, n) {
      var a = this.__data__, c = K(a, e);
      return c < 0 ? (++this.size, a.push([e, n])) : a[c][1] = n, this;
    }
    I.prototype.clear = Lt, I.prototype.delete = Pt, I.prototype.get = Mt, I.prototype.has = Nt, I.prototype.set = zt;
    function L(e) {
      var n = -1, a = e == null ? 0 : e.length;
      for (this.clear(); ++n < a; ) {
        var c = e[n];
        this.set(c[0], c[1]);
      }
    }
    function Ft() {
      this.size = 0, this.__data__ = {
        hash: new E(),
        map: new (Ae || I)(),
        string: new E()
      };
    }
    function Dt(e) {
      var n = V(this, e).delete(e);
      return this.size -= n ? 1 : 0, n;
    }
    function Bt(e) {
      return V(this, e).get(e);
    }
    function Ut(e) {
      return V(this, e).has(e);
    }
    function Ht(e, n) {
      var a = V(this, e), c = a.size;
      return a.set(e, n), this.size += a.size == c ? 0 : 1, this;
    }
    L.prototype.clear = Ft, L.prototype.delete = Dt, L.prototype.get = Bt, L.prototype.has = Ut, L.prototype.set = Ht;
    function P(e) {
      var n = this.__data__ = new I(e);
      this.size = n.size;
    }
    function qt() {
      this.__data__ = new I(), this.size = 0;
    }
    function Gt(e) {
      var n = this.__data__, a = n.delete(e);
      return this.size = n.size, a;
    }
    function Jt(e) {
      return this.__data__.get(e);
    }
    function Wt(e) {
      return this.__data__.has(e);
    }
    function Kt(e, n) {
      var a = this.__data__;
      if (a instanceof I) {
        var c = a.__data__;
        if (!Ae || c.length < r - 1)
          return c.push([e, n]), this.size = ++a.size, this;
        a = this.__data__ = new L(c);
      }
      return a.set(e, n), this.size = a.size, this;
    }
    P.prototype.clear = qt, P.prototype.delete = Gt, P.prototype.get = Jt, P.prototype.has = Wt, P.prototype.set = Kt;
    function Zt(e, n) {
      var a = se(e), c = !a && ae(e), d = !a && !c && xe(e), h = !a && !c && !d && Ee(e), m = a || c || d || h, p = m ? bt(e.length, String) : [], v = p.length;
      for (var A in e)
        m && // Safari 9 has enumerable `arguments.length` in strict mode.
        (A == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        d && (A == "offset" || A == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        h && (A == "buffer" || A == "byteLength" || A == "byteOffset") || // Skip index properties.
        $e(A, v)) || p.push(A);
      return p;
    }
    function te(e, n, a) {
      (a !== void 0 && !X(e[n], a) || a === void 0 && !(n in e)) && re(e, n, a);
    }
    function Vt(e, n, a) {
      var c = e[n];
      (!(O.call(e, n) && X(c, a)) || a === void 0 && !(n in e)) && re(e, n, a);
    }
    function K(e, n) {
      for (var a = e.length; a--; )
        if (X(e[a][0], n))
          return a;
      return -1;
    }
    function re(e, n, a) {
      n == "__proto__" && W ? W(e, n, {
        configurable: true,
        enumerable: true,
        value: a,
        writable: true
      }) : e[n] = a;
    }
    var Xt = ur();
    function Z(e) {
      return e == null ? e === void 0 ? Ye : We : j && j in Object(e) ? fr(e) : yr(e);
    }
    function Se(e) {
      return F(e) && Z(e) == f;
    }
    function Yt(e) {
      if (!R(e) || hr(e))
        return false;
      var n = le(e) ? Tt : dt;
      return n.test(wr(e));
    }
    function Qt(e) {
      return F(e) && je(e.length) && !!b[Z(e)];
    }
    function er(e) {
      if (!R(e))
        return br(e);
      var n = Oe(e), a = [];
      for (var c in e)
        c == "constructor" && (n || !O.call(e, c)) || a.push(c);
      return a;
    }
    function Ie(e, n, a, c, d) {
      e !== n && Xt(n, function(h, m) {
        if (d || (d = new P()), R(h))
          tr(e, n, m, a, Ie, c, d);
        else {
          var p = c ? c(oe(e, m), h, m + "", e, n, d) : void 0;
          p === void 0 && (p = h), te(e, m, p);
        }
      }, Re);
    }
    function tr(e, n, a, c, d, h, m) {
      var p = oe(e, a), v = oe(n, a), A = m.get(v);
      if (A) {
        te(e, a, A);
        return;
      }
      var k = h ? h(p, v, a + "", e, n, m) : void 0, D = k === void 0;
      if (D) {
        var ce = se(v), ue = !ce && xe(v), Pe = !ce && !ue && Ee(v);
        k = v, ce || ue || Pe ? se(p) ? k = p : kr(p) ? k = ir(p) : ue ? (D = false, k = or(v)) : Pe ? (D = false, k = sr(v)) : k = [] : Tr(v) || ae(v) ? (k = p, ae(p) ? k = Cr(p) : (!R(p) || le(p)) && (k = dr(v))) : D = false;
      }
      D && (m.set(v, k), d(k, v, c, h, m), m.delete(v)), te(e, a, k);
    }
    function rr(e, n) {
      return vr(mr(e, n, Le), e + "");
    }
    var nr = W ? function(e, n) {
      return W(e, "toString", {
        configurable: true,
        enumerable: false,
        value: Sr(n),
        writable: true
      });
    } : Le;
    function or(e, n) {
      return e.slice();
    }
    function ar(e) {
      var n = new e.constructor(e.byteLength);
      return new we(n).set(new we(e)), n;
    }
    function sr(e, n) {
      var a = ar(e.buffer);
      return new e.constructor(a, e.byteOffset, e.length);
    }
    function ir(e, n) {
      var a = -1, c = e.length;
      for (n || (n = Array(c)); ++a < c; )
        n[a] = e[a];
      return n;
    }
    function lr(e, n, a, c) {
      var d = !a;
      a || (a = {});
      for (var h = -1, m = n.length; ++h < m; ) {
        var p = n[h], v = void 0;
        v === void 0 && (v = e[p]), d ? re(a, p, v) : Vt(a, p, v);
      }
      return a;
    }
    function cr(e) {
      return rr(function(n, a) {
        var c = -1, d = a.length, h = d > 1 ? a[d - 1] : void 0, m = d > 2 ? a[2] : void 0;
        for (h = e.length > 3 && typeof h == "function" ? (d--, h) : void 0, m && pr(a[0], a[1], m) && (h = d < 3 ? void 0 : h, d = 1), n = Object(n); ++c < d; ) {
          var p = a[c];
          p && e(n, p, c, h);
        }
        return n;
      });
    }
    function ur(e) {
      return function(n, a, c) {
        for (var d = -1, h = Object(n), m = c(n), p = m.length; p--; ) {
          var v = m[++d];
          if (a(h[v], v, h) === false)
            break;
        }
        return n;
      };
    }
    function V(e, n) {
      var a = e.__data__;
      return gr(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
    }
    function ne(e, n) {
      var a = mt(e, n);
      return Yt(a) ? a : void 0;
    }
    function fr(e) {
      var n = O.call(e, j), a = e[j];
      try {
        e[j] = void 0;
        var c = !0;
      } catch {
      }
      var d = ve.call(e);
      return c && (n ? e[j] = a : delete e[j]), d;
    }
    function dr(e) {
      return typeof e.constructor == "function" && !Oe(e) ? $t(ke(e)) : {};
    }
    function $e(e, n) {
      var a = typeof e;
      return n = n ?? u, !!n && (a == "number" || a != "symbol" && pt.test(e)) && e > -1 && e % 1 == 0 && e < n;
    }
    function pr(e, n, a) {
      if (!R(a))
        return false;
      var c = typeof n;
      return (c == "number" ? ie(a) && $e(n, a.length) : c == "string" && n in a) ? X(a[n], e) : false;
    }
    function gr(e) {
      var n = typeof e;
      return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
    }
    function hr(e) {
      return !!me && me in e;
    }
    function Oe(e) {
      var n = e && e.constructor, a = typeof n == "function" && n.prototype || q;
      return e === a;
    }
    function br(e) {
      var n = [];
      if (e != null)
        for (var a in Object(e))
          n.push(a);
      return n;
    }
    function yr(e) {
      return ve.call(e);
    }
    function mr(e, n, a) {
      return n = Ce(n === void 0 ? e.length - 1 : n, 0), function() {
        for (var c = arguments, d = -1, h = Ce(c.length - n, 0), m = Array(h); ++d < h; )
          m[d] = c[n + d];
        d = -1;
        for (var p = Array(n + 1); ++d < n; )
          p[d] = c[d];
        return p[n] = a(m), ht(e, this, p);
      };
    }
    function oe(e, n) {
      if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
        return e[n];
    }
    var vr = _r(nr);
    function _r(e) {
      var n = 0, a = 0;
      return function() {
        var c = It(), d = l - (c - a);
        if (a = c, d > 0) {
          if (++n >= i)
            return arguments[0];
        } else
          n = 0;
        return e.apply(void 0, arguments);
      };
    }
    function wr(e) {
      if (e != null) {
        try {
          return G.call(e);
        } catch {
        }
        try {
          return e + "";
        } catch {
        }
      }
      return "";
    }
    function X(e, n) {
      return e === n || e !== e && n !== n;
    }
    var ae = Se(/* @__PURE__ */ function() {
      return arguments;
    }()) ? Se : function(e) {
      return F(e) && O.call(e, "callee") && !Ct.call(e, "callee");
    }, se = Array.isArray;
    function ie(e) {
      return e != null && je(e.length) && !le(e);
    }
    function kr(e) {
      return F(e) && ie(e);
    }
    var xe = St || Ir;
    function le(e) {
      if (!R(e))
        return false;
      var n = Z(e);
      return n == $ || n == w || n == y || n == Ke;
    }
    function je(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= u;
    }
    function R(e) {
      var n = typeof e;
      return e != null && (n == "object" || n == "function");
    }
    function F(e) {
      return e != null && typeof e == "object";
    }
    function Tr(e) {
      if (!F(e) || Z(e) != de)
        return false;
      var n = ke(e);
      if (n === null)
        return true;
      var a = O.call(n, "constructor") && n.constructor;
      return typeof a == "function" && a instanceof a && G.call(a) == kt;
    }
    var Ee = ye ? yt(ye) : Qt;
    function Cr(e) {
      return lr(e, Re(e));
    }
    function Re(e) {
      return ie(e) ? Zt(e) : er(e);
    }
    var Ar = cr(function(e, n, a, c) {
      Ie(e, n, a, c);
    });
    function Sr(e) {
      return function() {
        return e;
      };
    }
    function Le(e) {
      return e;
    }
    function Ir() {
      return false;
    }
    o.exports = Ar;
  }(U, U.exports)), U.exports;
}
Sn();
function zn() {
  if (!(globalThis != null && globalThis.storyblokApiInstance))
    throw new Error("storyblokApiInstance has not been initialized correctly");
  return globalThis.storyblokApiInstance;
}
function Dn(o, t) {
  var s;
  const r = (s = globalThis == null ? void 0 : globalThis.storyblokApiInstance) == null ? void 0 : s.richTextResolver;
  if (!r)
    throw new Error(
      "Please initialize the Storyblok SDK before calling the renderRichText function"
    );
  return Tn(o, t, r);
}

const $$Astro$h = createAstro();
const $$Page = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Page;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main class="content-grid"${spreadAttributes(Pn(blok))}> ${blok.body?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2 })}`;
  })} </main>`;
}, "/Users/alexdring/Sites/ATSD/arise-alp/src/storyblok/Page.astro", void 0);

const $$Config = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div></div>`;
}, "/Users/alexdring/Sites/ATSD/arise-alp/src/storyblok/Config.astro", void 0);

function renderRichTextRenderer(content) {
  return Dn(content, {
    resolver: (component, blok) => {
      switch (component) {
        case "button":
          return `<a href="${blok.button_link.cached_url}" class="cta">${blok.button_name}</a>`
        default:
          return `Component ${component} not found`
      }
    }
  })
}

const $$Astro$g = createAstro();
const $$Featured = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Featured;
  const { blok } = Astro2.props;
  const content = renderRichTextRenderer(blok.content);
  return renderTemplate`${maybeRenderHead()}<section class="featured"${spreadAttributes(Pn(blok))} data-astro-cid-gghe66ga> <div class="featured__image" data-astro-cid-gghe66ga> <img${addAttribute(`${blok.image.filename}/m/442x0/filters:format(webp)`, "src")}${addAttribute(blok.image.alt, "alt")} data-astro-cid-gghe66ga> </div> <div class="featured__text" data-astro-cid-gghe66ga> <header data-astro-cid-gghe66ga> <p class="subheading" data-astro-cid-gghe66ga>${blok.sub_heading}</p> <h2 data-astro-cid-gghe66ga>${blok.heading}</h2> </header> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })} </div> </section> `;
}, "/Users/alexdring/Sites/ATSD/arise-alp/src/components/Featured.astro", void 0);

const $$Astro$f = createAstro();
const $$Highlighted = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Highlighted;
  const { blok } = Astro2.props;
  zn();
  const content = renderRichTextRenderer(blok.content);
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(Pn(blok))} class="observe toggle" data-astro-cid-iks3tes5> <div class="highlighted__text" data-astro-cid-iks3tes5> <header data-astro-cid-iks3tes5> <p class="subheading" data-astro-cid-iks3tes5>${blok.sub_heading}</p> <h3 data-astro-cid-iks3tes5>${blok.heading}</h3> </header> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })} </div> <!-- <img src={blok.image.filename} alt={blok.image.alt} /> --> <div class="highlighted__image" data-astro-cid-iks3tes5> <img${addAttribute(`${blok.image.filename}/m/488x0/filters:format(webp)`, "src")}${addAttribute(blok.image.alt, "alt")} data-astro-cid-iks3tes5> <!-- <Image inferSize={true} src={blok.image.filename} alt={blok.image.alt} /> --> </div> </section> `;
}, "/Users/alexdring/Sites/ATSD/arise-alp/src/components/Highlighted.astro", void 0);

const $$Astro$e = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Hero;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="full-width"${spreadAttributes(Pn(blok))} data-astro-cid-bbe6dxrz> <img${addAttribute(`${blok.image.filename}/m/1440x0/filters:format(webp)`, "src")}${addAttribute(blok.image.alt, "alt")} data-astro-cid-bbe6dxrz> <!-- <Image inferSize={true} src={blok.image.filename} alt={blok.image.alt} /> --> <div data-astro-cid-bbe6dxrz> <h1 data-astro-cid-bbe6dxrz>${blok.heading}</h1> <p data-astro-cid-bbe6dxrz>${blok.content}</p> </div> </section> `;
}, "/Users/alexdring/Sites/ATSD/arise-alp/src/components/Hero.astro", void 0);

const $$Astro$d = createAstro();
const $$Banner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Banner;
  const { blok } = Astro2.props;
  const content = renderRichTextRenderer(blok.content);
  return renderTemplate`${maybeRenderHead()}<section class="full-width"${spreadAttributes(Pn(blok))} data-astro-cid-kggsjsm4> <div data-astro-cid-kggsjsm4> <h1 data-astro-cid-kggsjsm4>${blok.heading}</h1> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })} </div> </section> `;
}, "/Users/alexdring/Sites/ATSD/arise-alp/src/components/Banner.astro", void 0);

const $$Astro$c = createAstro();
const $$HeroGallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$HeroGallery;
  const { blok } = Astro2.props;
  const content = renderRichTextRenderer(blok.text);
  const images = blok.images;
  const firstTwoImages = images.slice(0, 2);
  const nextThreeImages = images.slice(2, 5);
  return renderTemplate`${maybeRenderHead()}<section class="full-width observe"${spreadAttributes(Pn(blok))} data-astro-cid-bkr7dduh> <div class="gallery-grid" data-astro-cid-bkr7dduh> <div class="gallery-grid__text" data-astro-cid-bkr7dduh> <!-- <h1>{blok.heading}</h1> --> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })} </div> <div class="gallery-grid__grid" data-astro-cid-bkr7dduh> ${nextThreeImages.map((image) => renderTemplate`<img${addAttribute(`${image.filename}/m/275x0/filters:format(webp)`, "src")}${addAttribute(image.alt || "Image", "alt")} data-astro-cid-bkr7dduh>`)} <p class="gallery-grid__subheading" data-astro-cid-bkr7dduh>${blok.accent}</p> </div> <div class="gallery-grid__stacked" data-astro-cid-bkr7dduh> ${firstTwoImages.map((image) => renderTemplate`<img${addAttribute(`${image.filename}/m/573x0/filters:format(webp)`, "src")}${addAttribute(image.alt || "Image", "alt")} data-astro-cid-bkr7dduh>`)} <p class="gallery-grid__subheading" data-astro-cid-bkr7dduh>${blok.accent}</p> </div> </div> </section> `;
}, "/Users/alexdring/Sites/ATSD/arise-alp/src/components/HeroGallery.astro", void 0);

const $$Astro$b = createAstro();
const $$Text = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Text;
  const { blok } = Astro2.props;
  zn();
  const content = renderRichTextRenderer(blok.content);
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(Pn(blok))} class="content-grid" data-astro-cid-yzlqzfct> <div data-astro-cid-yzlqzfct> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })} </div> </section> `;
}, "/Users/alexdring/Sites/ATSD/arise-alp/src/components/Text.astro", void 0);

const $$Astro$a = createAstro();
const $$ScrollSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ScrollSection;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="full-width"${spreadAttributes(Pn(blok))} data-astro-cid-fymqvzft> <div class="scroll-section-wrapper" data-astro-cid-fymqvzft> <div class="scroll-section__text" data-astro-cid-fymqvzft> <h3 data-astro-cid-fymqvzft>${blok.heading}</h3> <p data-astro-cid-fymqvzft>${blok.content}</p> </div> <div class="scroll-section" data-astro-cid-fymqvzft> <div class="scroll-section__sticky-wrapper" data-astro-cid-fymqvzft> <div class="scroll-section__container" data-astro-cid-fymqvzft> ${blok.scroll_item.map((item) => renderTemplate`<div class="scroll-section__item" data-astro-cid-fymqvzft> <img${addAttribute(`${item.image.filename}/m/320x0/filters:format(webp)`, "src")}${addAttribute(item.image.alt, "alt")} data-astro-cid-fymqvzft> <div class="scroll-section__item-content" data-astro-cid-fymqvzft> <p class="scroll-section__item-title" data-astro-cid-fymqvzft>${item.title}</p> <p class="scroll-section__item-description" data-astro-cid-fymqvzft> ${item.description} </p> </div> </div>`)} </div> </div> </div> </div> </section>  ${renderScript($$result, "/Users/alexdring/Sites/ATSD/arise-alp/src/components/ScrollSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alexdring/Sites/ATSD/arise-alp/src/components/ScrollSection.astro", void 0);

const $$Astro$9 = createAstro();
const $$NewsCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$NewsCard;
  const { article } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article data-astro-cid-yj7chvyn> <a${addAttribute(article.content.title, "title")}${addAttribute(`/news-updates/${article.slug}`, "href")} data-astro-cid-yj7chvyn> <!-- {article.content.component} --> <img${addAttribute(`${article.content.image.filename}/m/555x277/filters:format(webp)`, "src")}${addAttribute(article.content.image.alt, "alt")} data-astro-cid-yj7chvyn> <div class="news-card-content" data-astro-cid-yj7chvyn> <time class="published-date" data-astro-cid-yj7chvyn> ${new Date(article.content.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })} </time> <h3 data-astro-cid-yj7chvyn>${article.content.title}</h3> <p data-astro-cid-yj7chvyn>${article.content.teaser}</p> </div> <p class="read-more" data-astro-cid-yj7chvyn>Read more <span class="arrow" data-astro-cid-yj7chvyn>→</span></p> </a> </article> `;
}, "/Users/alexdring/Sites/ATSD/arise-alp/src/components/News/NewsCard.astro", void 0);

const $$Astro$8 = createAstro();
const $$Update = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Update;
  const { article } = Astro2.props;
  const renderedRichText = Dn(article.content.content);
  return renderTemplate`${maybeRenderHead()}<article data-astro-cid-szme6vub> <!-- {JSON.stringify(article)} --> <time class="published-date" data-astro-cid-szme6vub>
Posted on <span data-astro-cid-szme6vub> ${new Date(article.content.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })} </span> </time> <div class="content-wrapper" data-astro-cid-szme6vub> <h3 data-astro-cid-szme6vub>${article.content.title}</h3> <!-- <div class="content">
      {article.content.content}
    </div> --> <div class="content" data-astro-cid-szme6vub>${unescapeHTML(renderedRichText)}</div> </div> <div class="image-wrapper" data-astro-cid-szme6vub> <img${addAttribute(`${article.content.image.filename}/m/238x100/filters:format(webp)`, "src")}${addAttribute(article.content.image.alt, "alt")} data-astro-cid-szme6vub> </div> </article> `;
}, "/Users/alexdring/Sites/ATSD/arise-alp/src/components/News/Update.astro", void 0);

const $$Astro$7 = createAstro();
const $$AllNews = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$AllNews;
  const { blok } = Astro2.props;
  const storyblokApi = zn();
  const { data } = await storyblokApi.get(`cdn/stories`, {
    version: "draft",
    // or 'published'
    starts_with: "news-updates/",
    is_startpage: 0
  });
  const allNews = data.stories;
  const news = allNews.filter((article) => article.content.component === "news");
  const updates = allNews.filter(
    (article) => article.content.component === "update"
  );
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(Pn(blok), void 0, { "class": "astro-rqupyieb" })} data-astro-cid-rqupyieb> ${updates?.length && renderTemplate`<h2 class="updates-title" data-astro-cid-rqupyieb>Updates</h2>`} <ul data-astro-cid-rqupyieb> ${updates?.length && updates.map((article) => {
    article.content.slug = article.slug;
    return renderTemplate`<li data-astro-cid-rqupyieb> ${renderComponent($$result, "Update", $$Update, { "article": article, "data-astro-cid-rqupyieb": true })} </li>`;
  })} </ul> ${news?.length && renderTemplate`<h2 class="updates-title" data-astro-cid-rqupyieb>News</h2>`} <ul class="news-list" data-astro-cid-rqupyieb> ${news?.length && news.map((article) => {
    article.content.slug = article.slug;
    return renderTemplate`<li data-astro-cid-rqupyieb> ${renderComponent($$result, "NewsCard", $$NewsCard, { "article": article, "data-astro-cid-rqupyieb": true })} </li>`;
  })} </ul> </section> `;
}, "/Users/alexdring/Sites/ATSD/arise-alp/src/components/News/AllNews.astro", void 0);

const $$Astro$6 = createAstro();
const $$NewsMinilist = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$NewsMinilist;
  const { blok } = Astro2.props;
  const storyblokApi = zn();
  const { data } = await storyblokApi.get(`cdn/stories`, {
    version: "draft",
    // or 'published'
    starts_with: "news-updates/",
    is_startpage: 0
  });
  const allNews = data.stories;
  const news = allNews.filter((article) => article.content.component === "news");
  const updates = allNews.filter(
    (article) => article.content.component === "update"
  );
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(Pn(blok), void 0, { "class": "astro-qcpxunkv" })} data-astro-cid-qcpxunkv> ${updates?.length && renderTemplate`<h2 class="updates-title" data-astro-cid-qcpxunkv>Updates</h2>`} <ul data-astro-cid-qcpxunkv> ${updates?.length && updates.map((article) => {
    article.content.slug = article.slug;
    return renderTemplate`<li data-astro-cid-qcpxunkv> ${renderComponent($$result, "Update", $$Update, { "article": article, "data-astro-cid-qcpxunkv": true })} </li>`;
  })} </ul> ${news?.length && renderTemplate`<h2 class="updates-title" data-astro-cid-qcpxunkv>News</h2>`} <ul class="news-list" data-astro-cid-qcpxunkv> ${news?.length && news.map((article) => {
    article.content.slug = article.slug;
    return renderTemplate`<li data-astro-cid-qcpxunkv> ${renderComponent($$result, "NewsCard", $$NewsCard, { "article": article, "data-astro-cid-qcpxunkv": true })} </li>`;
  })} </ul> </section> `;
}, "/Users/alexdring/Sites/ATSD/arise-alp/src/components/News/NewsMinilist.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$5 = createAstro();
const $$News = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$News;
  const { blok } = Astro2.props;
  zn();
  const renderedRichText = Dn(blok.content);
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<article class="content-grid"', ' data-astro-cid-k3zcmm3x> <img class="news-image"', "", ' data-astro-cid-k3zcmm3x> <div class="news-content" data-astro-cid-k3zcmm3x> <header data-astro-cid-k3zcmm3x> <a class="back-link" href="/news-updates" data-astro-cid-k3zcmm3x>See all news/updates</a> <time class="published-date" data-astro-cid-k3zcmm3x>Posted on\n', " </time> <h1 data-astro-cid-k3zcmm3x> ", " </h1> </header> <hr data-astro-cid-k3zcmm3x> <div data-astro-cid-k3zcmm3x>", "</div> </div> </article> <script>(function(){", "\n  // Now blok is available directly in this script scope\n})();<\/script> "])), maybeRenderHead(), spreadAttributes(Pn(blok)), addAttribute(blok.image.alt, "alt"), addAttribute(`${blok.image.filename}/m/1024x430`, "src"), new Date(blok.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }), blok.title, unescapeHTML(renderedRichText), defineScriptVars({ blok }));
}, "/Users/alexdring/Sites/ATSD/arise-alp/src/components/News/News.astro", void 0);

const $$Astro$4 = createAstro();
const $$AllTeamMembers = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AllTeamMembers;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(Pn(blok), void 0, { "class": "astro-rzfbbu3o" })} data-astro-cid-rzfbbu3o> <header data-astro-cid-rzfbbu3o> <h1 data-astro-cid-rzfbbu3o>Meet the team</h1> <p data-astro-cid-rzfbbu3o>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.</p> </header> <div class="team-members" data-astro-cid-rzfbbu3o> ${blok.all_team?.map((member) => {
    return renderTemplate`<div class="team-member" data-astro-cid-rzfbbu3o> <img${addAttribute(`${member.image.filename}/m/356x260/filters:format(webp)`, "src")}${addAttribute(member.image.alt, "alt")} data-astro-cid-rzfbbu3o> <div class="team-member__content" data-astro-cid-rzfbbu3o> <p class="team-member__name" data-astro-cid-rzfbbu3o>${member.name}</p> <p class="team-member__job" data-astro-cid-rzfbbu3o>${member.job}</p> <p class="team-member__description" data-astro-cid-rzfbbu3o>${member.description}</p> </div> </div>`;
  })} </div> </section> `;
}, "/Users/alexdring/Sites/ATSD/arise-alp/src/components/AllTeamMembers.astro", void 0);

const components = {page: $$Page,config: $$Config,featured: $$Featured,highlighted: $$Highlighted,hero: $$Hero,banner: $$Banner,heroGallery: $$HeroGallery,text: $$Text,scrollSection: $$ScrollSection,allNews: $$AllNews,newsMinilist: $$NewsMinilist,news: $$News,update: $$Update,allTeamMembers: $$AllTeamMembers};

const $$Astro$3 = createAstro();
const $$StoryblokComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$StoryblokComponent;
  const { blok, ...props } = Astro2.props;
  if (!blok) {
    throw new Error(
      "Cannot render StoryblokComponent. 'blok' prop is undefined."
    );
  }
  let key = Fe(blok.component);
  const componentFound = key in components;
  let Component;
  if (!componentFound) {
    throw new Error(
        `Component could not be found for blok "${blok.component}"! Is it defined in astro.config.mjs?`
      );
  } else {
    Component = components[key];
  }
  return renderTemplate`${renderComponent($$result, "Component", Component, { "blok": blok, ...props })}`;
}, "/Users/alexdring/Sites/ATSD/arise-alp/node_modules/@storyblok/astro/dist/components/StoryblokComponent.astro", void 0);

const $$Astro$2 = createAstro();
const $$Menu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Menu;
  const { menuItems, id: idName, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(idName, "id")}${spreadAttributes(rest)}> ${menuItems.map((item) => {
    return renderTemplate`<li> <a${addAttribute(
      item.link.story.slug === "/" ? "/" : `/${item.link.story.slug}`,
      "href"
    )}> ${item.link.story.name} </a> ${item.dropdown_menu && renderTemplate`<div class="mobile-submenu"> <ul> ${item.dropdown_menu.map((dropdownItem) => {
      return renderTemplate`<li> <a${addAttribute(
        dropdownItem.link.story.slug === "/" ? "/" : `/${dropdownItem.link.story.slug}`,
        "href"
      )}> ${dropdownItem.link.story.name} </a> </li>`;
    })} </ul> </div>`} </li>`;
  })} </ul>`;
}, "/Users/alexdring/Sites/ATSD/arise-alp/src/components/Menu.astro", void 0);

const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const storyblokApi = zn();
  const { data } = await storyblokApi.get("cdn/stories/config", {
    version: "draft" ,
    resolve_links: "story"
  });
  const headerMenu = data?.story?.content?.header_menu;
  return renderTemplate`${maybeRenderHead()}<div class="nav-bar at-top" class="full-width" data-astro-cid-dmqpwcec> <div data-astro-cid-dmqpwcec> <img src="https://a.storyblok.com/f/321954/5000x2141/34d500aa43/black-on-transparent.png/m/136x59/filters:format(webp)" alt="Arise ALP logo" data-astro-cid-dmqpwcec> </div> <nav class="top" data-astro-cid-dmqpwcec> <button id="menu-toggle" aria-expanded="false" aria-controls="menu" data-astro-cid-dmqpwcec> <span class="sr-only" data-astro-cid-dmqpwcec>Menu</span> <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="menu-icon" data-astro-cid-dmqpwcec> <line x1="3" y1="12" x2="21" y2="12" data-astro-cid-dmqpwcec></line> <line x1="3" y1="6" x2="21" y2="6" data-astro-cid-dmqpwcec></line> <line x1="3" y1="18" x2="21" y2="18" data-astro-cid-dmqpwcec></line> </svg> <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="close-icon" data-astro-cid-dmqpwcec> <line x1="18" y1="6" x2="6" y2="18" data-astro-cid-dmqpwcec></line> <line x1="6" y1="6" x2="18" y2="18" data-astro-cid-dmqpwcec></line> </svg> </button> <!-- <Menu menuItems={headerMenu} /> --> <ul id="menu" data-astro-cid-dmqpwcec> <div class="dropdown-background" data-astro-cid-dmqpwcec> <span class="arrow" data-astro-cid-dmqpwcec></span> </div> ${headerMenu.map((item) => {
    if (item.component === "menu_dropdown_link") {
      return renderTemplate`<li class="dropdown-trigger" data-astro-cid-dmqpwcec> <a${addAttribute(
        item.link.story.slug === "/" ? "/" : `/${item.link.story.slug}`,
        "href"
      )} data-astro-cid-dmqpwcec> ${item.link.story.name} <span class="dropdown-arrow" data-astro-cid-dmqpwcec></span> </a> <div class="dropdown-content" data-astro-cid-dmqpwcec> <ul data-astro-cid-dmqpwcec> ${item.dropdown_menu.map((dropdownItem) => {
        return renderTemplate`<li data-astro-cid-dmqpwcec> <a${addAttribute(
          dropdownItem.link.story.slug === "/" ? "/" : `/${dropdownItem.link.story.slug}`,
          "href"
        )} data-astro-cid-dmqpwcec> ${dropdownItem.link.story.name} </a> </li>`;
      })} </ul> </div> </li>`;
    }
    return renderTemplate`<li data-astro-cid-dmqpwcec> <a${addAttribute(
      item.link.story.slug === "home" ? "/" : `/${item.link.story.slug}`,
      "href"
    )} data-astro-cid-dmqpwcec> ${item.link.story.name} </a> </li>`;
  })} </ul> <div class="mobile-menu-wrapper" data-astro-cid-dmqpwcec> ${renderComponent($$result, "Menu", $$Menu, { "id": "mobile-menu", "menuItems": headerMenu, "data-astro-cid-dmqpwcec": true })} </div> </nav> </div>  ${renderScript($$result, "/Users/alexdring/Sites/ATSD/arise-alp/src/components/Nav.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alexdring/Sites/ATSD/arise-alp/src/components/Nav.astro", void 0);

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const storyblokApi = zn();
  const { data } = await storyblokApi.get("cdn/stories/config", {
    version: "draft" ,
    resolve_links: "story"
  });
  const footerMenu1 = data?.story?.content?.footer_menu_1;
  const footerMenu2 = data?.story?.content?.footer_menu_2;
  console.log(footerMenu1);
  console.log(footerMenu2);
  return renderTemplate`${maybeRenderHead()}<div class="content-grid wrapper" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <div class="map-container" data-astro-cid-sz7xmlte> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.9901869819882!2d-2.5869462999999993!3d51.403234999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718eaac01bbc95%3A0x373224249ba1d2c!2sHartcliffe%20City%20Farm!5e0!3m2!1sen!2suk!4v1737572199295!5m2!1sen!2suk" width="500" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-astro-cid-sz7xmlte></iframe> </div> <div class="contact-container" data-astro-cid-sz7xmlte> <form class="contact-form" name="contact" method="POST" data-netlify="true" data-astro-cid-sz7xmlte> <fieldset data-astro-cid-sz7xmlte> <legend class="subheading" data-astro-cid-sz7xmlte>Get in touch</legend> <div class="form-group" data-astro-cid-sz7xmlte> <label class="sr-only" for="name" data-astro-cid-sz7xmlte>Name</label> <input type="text" id="name" name="name" required aria-required="true" placeholder="Name" data-astro-cid-sz7xmlte> </div> <div class="form-group" data-astro-cid-sz7xmlte> <label class="sr-only" for="email" data-astro-cid-sz7xmlte>Email</label> <input type="email" id="email" name="email" required aria-required="true" placeholder="Email" data-astro-cid-sz7xmlte> </div> <div class="form-group" data-astro-cid-sz7xmlte> <label class="sr-only" for="message" data-astro-cid-sz7xmlte>Message</label> <textarea id="message" name="message" rows="4" required aria-required="true" placeholder="Message" data-astro-cid-sz7xmlte></textarea> </div> <button type="submit" data-astro-cid-sz7xmlte>Send Message</button> </fieldset> </form> </div> </div> </div> <footer data-astro-cid-sz7xmlte> <div class="content-grid" data-astro-cid-sz7xmlte> <div class="footer-container" data-astro-cid-sz7xmlte> <div class="footer-logo" data-astro-cid-sz7xmlte> <img src="https://a.storyblok.com/f/321954/5000x2141/34d500aa43/black-on-transparent.png/m/136x59/filters:format(webp)" alt="Arise ALP logo" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>
Email:
<a href="mailto:jwright@arisealp.co.uk" data-astro-cid-sz7xmlte>jwright@arisealp.co.uk</a> <br data-astro-cid-sz7xmlte>
Phone: <a href="tel:07511568953" data-astro-cid-sz7xmlte>07511568953</a> </p> </div> <div class="footer-menu" data-astro-cid-sz7xmlte> <p class="subheading" data-astro-cid-sz7xmlte>Menu</p> <ul data-astro-cid-sz7xmlte> ${footerMenu1.map((item) => renderTemplate`<li data-astro-cid-sz7xmlte> <a${addAttribute(item.link.story.full_slug, "href")} data-astro-cid-sz7xmlte>${item.link.story.name}</a> </li>`)} </ul> </div> <div class="legal-menu" data-astro-cid-sz7xmlte> <p class="subheading" data-astro-cid-sz7xmlte>Legal</p> <ul data-astro-cid-sz7xmlte> ${footerMenu2.map((item) => renderTemplate`<li data-astro-cid-sz7xmlte> <a${addAttribute(item.link.story.full_slug, "href")} data-astro-cid-sz7xmlte>${item.link.story.name}</a> </li>`)} </ul> </div> </div> </div> </footer> `;
}, "/Users/alexdring/Sites/ATSD/arise-alp/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- <meta name="generator" content={Astro.generator} /> -->', '<script id="usercentrics-cmp" src="https://web.cmp.usercentrics.eu/ui/loader.js" data-settings-id="HH3AIdo6s4dsV4" async><\/script><title>Arise ALP</title>', "</head> <body> ", " ", " ", "  ", "</body></html>"])), renderScript($$result, "/Users/alexdring/Sites/ATSD/arise-alp/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderComponent($$result, "Nav", $$Nav, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderScript($$result, "/Users/alexdring/Sites/ATSD/arise-alp/src/layouts/BaseLayout.astro?astro&type=script&index=1&lang.ts"));
}, "/Users/alexdring/Sites/ATSD/arise-alp/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro();
const prerender = false ;
async function getStaticPaths() {
  const storyblokApi = zn();
  const links = await storyblokApi.getAll("cdn/links", {
    version: "draft" 
  });
  return links.filter((link) => !link.is_folder).map((link) => {
    return {
      params: {
        slug: link.slug === "home" ? void 0 : link.slug
      }
    };
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (!slug) ; else if (slug.startsWith(".well-known/")) {
    return Astro2.redirect("/404");
  }
  const storyblokApi = zn();
  const { data } = await storyblokApi.get(
    `cdn/stories/${slug === void 0 ? "home" : slug}`,
    {
      version: "draft" 
    }
  );
  const story = data.story;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": story.content })} ` })}`;
}, "/Users/alexdring/Sites/ATSD/arise-alp/src/pages/[...slug].astro", void 0);

const $$file = "/Users/alexdring/Sites/ATSD/arise-alp/src/pages/[...slug].astro";
const $$url = "/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$,
        file: $$file,
        getStaticPaths,
        prerender,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
