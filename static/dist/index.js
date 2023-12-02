var V = Object.defineProperty;
var z = (e, t, n) => t in e ? V(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var h = (e, t, n) => (z(e, typeof t != "symbol" ? t + "" : t, n), n);
function b() {
}
function M(e) {
  return e();
}
function L() {
  return /* @__PURE__ */ Object.create(null);
}
function A(e) {
  e.forEach(M);
}
function I(e) {
  return typeof e == "function";
}
function F(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function U(e) {
  return Object.keys(e).length === 0;
}
function p(e, t) {
  e.appendChild(t);
}
function G(e, t, n) {
  const s = K(e);
  if (!s.getElementById(t)) {
    const c = R("style");
    c.id = t, c.textContent = n, Q(s, c);
  }
}
function K(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function Q(e, t) {
  return p(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function E(e, t, n) {
  e.insertBefore(t, n || null);
}
function j(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function D(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function R(e) {
  return document.createElement(e);
}
function _(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function W(e) {
  return document.createTextNode(e);
}
function X() {
  return W("");
}
function l(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function Y(e) {
  return Array.from(e.childNodes);
}
function Z(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let q;
function v(e) {
  q = e;
}
function tt() {
  if (!q)
    throw new Error("Function called outside component initialization");
  return q;
}
function et(e) {
  tt().$$.on_mount.push(e);
}
const k = [], P = [];
let w = [];
const B = [], nt = /* @__PURE__ */ Promise.resolve();
let C = !1;
function st() {
  C || (C = !0, nt.then(H));
}
function S(e) {
  w.push(e);
}
const N = /* @__PURE__ */ new Set();
let y = 0;
function H() {
  if (y !== 0)
    return;
  const e = q;
  do {
    try {
      for (; y < k.length; ) {
        const t = k[y];
        y++, v(t), rt(t.$$);
      }
    } catch (t) {
      throw k.length = 0, y = 0, t;
    }
    for (v(null), k.length = 0, y = 0; P.length; )
      P.pop()();
    for (let t = 0; t < w.length; t += 1) {
      const n = w[t];
      N.has(n) || (N.add(n), n());
    }
    w.length = 0;
  } while (k.length);
  for (; B.length; )
    B.pop()();
  C = !1, N.clear(), v(e);
}
function rt(e) {
  if (e.fragment !== null) {
    e.update(), A(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(S);
  }
}
function ot(e) {
  const t = [], n = [];
  w.forEach((s) => e.indexOf(s) === -1 ? t.push(s) : n.push(s)), n.forEach((s) => s()), w = t;
}
const ct = /* @__PURE__ */ new Set();
function it(e, t) {
  e && e.i && (ct.delete(e), e.i(t));
}
function T(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function lt(e, t, n) {
  const { fragment: s, after_update: c } = e.$$;
  s && s.m(t, n), S(() => {
    const i = e.$$.on_mount.map(M).filter(I);
    e.$$.on_destroy ? e.$$.on_destroy.push(...i) : A(i), e.$$.on_mount = [];
  }), c.forEach(S);
}
function ut(e, t) {
  const n = e.$$;
  n.fragment !== null && (ot(n.after_update), A(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ft(e, t) {
  e.$$.dirty[0] === -1 && (k.push(e), st(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function $t(e, t, n, s, c, i, r, o = [-1]) {
  const $ = q;
  v(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: b,
    not_equal: c,
    bound: L(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || ($ ? $.$$.context : [])),
    // everything else
    callbacks: L(),
    dirty: o,
    skip_bound: !1,
    root: t.target || $.$$.root
  };
  r && r(u.root);
  let d = !1;
  if (u.ctx = n ? n(e, t.props || {}, (a, m, ...f) => {
    const g = f.length ? f[0] : m;
    return u.ctx && c(u.ctx[a], u.ctx[a] = g) && (!u.skip_bound && u.bound[a] && u.bound[a](g), d && ft(e, a)), m;
  }) : [], u.update(), d = !0, A(u.before_update), u.fragment = s ? s(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const a = Y(t.target);
      u.fragment && u.fragment.l(a), a.forEach(j);
    } else
      u.fragment && u.fragment.c();
    t.intro && it(e.$$.fragment), lt(e, t.target, t.anchor), H();
  }
  v($);
}
let J;
typeof HTMLElement == "function" && (J = class extends HTMLElement {
  constructor(t, n, s) {
    super();
    /** The Svelte component constructor */
    h(this, "$$ctor");
    /** Slots */
    h(this, "$$s");
    /** The Svelte component instance */
    h(this, "$$c");
    /** Whether or not the custom element is connected */
    h(this, "$$cn", !1);
    /** Component props data */
    h(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    h(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    h(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    h(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    h(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, s && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, s) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const c = this.$$c.$on(t, n);
      this.$$l_u.set(n, c);
    }
    super.addEventListener(t, n, s);
  }
  removeEventListener(t, n, s) {
    if (super.removeEventListener(t, n, s), this.$$c) {
      const c = this.$$l_u.get(n);
      c && (c(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let n = function(r) {
        return () => {
          let o;
          return {
            c: function() {
              o = R("slot"), r !== "default" && l(o, "name", r);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(d, a) {
              E(d, o, a);
            },
            d: function(d) {
              d && j(o);
            }
          };
        };
      };
      var t = n;
      if (await Promise.resolve(), !this.$$cn)
        return;
      const s = {}, c = Z(this);
      for (const r of this.$$s)
        r in c && (s[r] = [n(r)]);
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = O(o, r.value, this.$$p_d, "toProp"));
      }
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: s,
          $$scope: {
            ctx: []
          }
        }
      });
      const i = () => {
        this.$$r = !0;
        for (const r in this.$$p_d)
          if (this.$$d[r] = this.$$c.$$.ctx[this.$$c.$$.props[r]], this.$$p_d[r].reflect) {
            const o = O(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(r) : this.setAttribute(this.$$p_d[r].attribute || r, o);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(i), i();
      for (const r in this.$$l)
        for (const o of this.$$l[r]) {
          const $ = this.$$c.$on(r, o);
          this.$$l_u.set(o, $);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, s) {
    var c;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = O(t, s, this.$$p_d, "toProp"), (c = this.$$c) == null || c.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(t) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function O(e, t, n, s) {
  var i;
  const c = (i = n[e]) == null ? void 0 : i.type;
  if (t = c === "Boolean" && typeof t != "boolean" ? t != null : t, !s || !n[e])
    return t;
  if (s === "toAttribute")
    switch (c) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (c) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function at(e, t, n, s, c, i) {
  let r = class extends J {
    constructor() {
      super(e, n, c), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((o) => {
    Object.defineProperty(r.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set($) {
        var u;
        $ = O(o, $, t), this.$$d[o] = $, (u = this.$$c) == null || u.$set({ [o]: $ });
      }
    });
  }), s.forEach((o) => {
    Object.defineProperty(r.prototype, o, {
      get() {
        var $;
        return ($ = this.$$c) == null ? void 0 : $[o];
      }
    });
  }), i && (r = i(r)), e.element = /** @type {any} */
  r, r;
}
class ht {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    h(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    h(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ut(this, 1), this.$destroy = b;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!I(n))
      return b;
    const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return s.push(n), () => {
      const c = s.indexOf(n);
      c !== -1 && s.splice(c, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !U(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const dt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(dt);
function _t(e) {
  G(e, "svelte-1kjtqer", "svg.svelte-1kjtqer{width:100%;height:100%}.clock-face.svelte-1kjtqer{stroke:#333;fill:white}.minor.svelte-1kjtqer{stroke:#999;stroke-width:0.5}.major.svelte-1kjtqer{stroke:#333;stroke-width:1}.hour.svelte-1kjtqer{stroke:#333}.minute.svelte-1kjtqer{stroke:#666}.second.svelte-1kjtqer,.second-counterweight.svelte-1kjtqer{stroke:rgb(180, 0, 0)}.second-counterweight.svelte-1kjtqer{stroke-width:3}");
}
function mt(e, t, n) {
  const s = e.slice();
  return s[4] = t[n], s;
}
function gt(e, t, n) {
  const s = e.slice();
  return s[7] = t[n], s;
}
function pt(e) {
  let t;
  return {
    c() {
      t = _("line"), l(t, "class", "minor svelte-1kjtqer"), l(t, "y1", "42"), l(t, "y2", "45"), l(t, "transform", "rotate(" + 6 * /*minute*/
      (e[4] + /*offset*/
      e[7]) + ")");
    },
    m(n, s) {
      E(n, t, s);
    },
    p: b,
    d(n) {
      n && j(t);
    }
  };
}
function bt(e) {
  let t, n, s = T([1, 2, 3, 4]), c = [];
  for (let i = 0; i < 4; i += 1)
    c[i] = pt(gt(e, s, i));
  return {
    c() {
      t = _("line");
      for (let i = 0; i < 4; i += 1)
        c[i].c();
      n = X(), l(t, "class", "major svelte-1kjtqer"), l(t, "y1", "35"), l(t, "y2", "45"), l(t, "transform", "rotate(" + 30 * /*minute*/
      e[4] + ")");
    },
    m(i, r) {
      E(i, t, r);
      for (let o = 0; o < 4; o += 1)
        c[o] && c[o].m(i, r);
      E(i, n, r);
    },
    p: b,
    d(i) {
      i && (j(t), j(n)), D(c, i);
    }
  };
}
function yt(e) {
  let t, n, s, c, i, r, o, $, u, d, a = T([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]), m = [];
  for (let f = 0; f < 12; f += 1)
    m[f] = bt(mt(e, a, f));
  return {
    c() {
      t = _("svg"), n = _("circle");
      for (let f = 0; f < 12; f += 1)
        m[f].c();
      s = _("line"), i = _("line"), o = _("g"), $ = _("line"), u = _("line"), l(n, "class", "clock-face svelte-1kjtqer"), l(n, "r", "48"), l(s, "class", "hour svelte-1kjtqer"), l(s, "y1", "2"), l(s, "y2", "-20"), l(s, "transform", c = "rotate(" + (30 * /*hours*/
      e[2] + /*minutes*/
      e[1] / 2) + ")"), l(i, "class", "minute svelte-1kjtqer"), l(i, "y1", "4"), l(i, "y2", "-30"), l(i, "transform", r = "rotate(" + (6 * /*minutes*/
      e[1] + /*seconds*/
      e[0] / 10) + ")"), l($, "class", "second svelte-1kjtqer"), l($, "y1", "10"), l($, "y2", "-38"), l(u, "class", "second-counterweight svelte-1kjtqer"), l(u, "y1", "10"), l(u, "y2", "2"), l(o, "transform", d = "rotate(" + 6 * /*seconds*/
      e[0] + ")"), l(t, "viewBox", "-50 -50 100 100"), l(t, "class", "svelte-1kjtqer");
    },
    m(f, g) {
      E(f, t, g), p(t, n);
      for (let x = 0; x < 12; x += 1)
        m[x] && m[x].m(t, null);
      p(t, s), p(t, i), p(t, o), p(o, $), p(o, u);
    },
    p(f, [g]) {
      g & /*hours, minutes*/
      6 && c !== (c = "rotate(" + (30 * /*hours*/
      f[2] + /*minutes*/
      f[1] / 2) + ")") && l(s, "transform", c), g & /*minutes, seconds*/
      3 && r !== (r = "rotate(" + (6 * /*minutes*/
      f[1] + /*seconds*/
      f[0] / 10) + ")") && l(i, "transform", r), g & /*seconds*/
      1 && d !== (d = "rotate(" + 6 * /*seconds*/
      f[0] + ")") && l(o, "transform", d);
    },
    i: b,
    o: b,
    d(f) {
      f && j(t), D(m, f);
    }
  };
}
function kt(e, t, n) {
  let s, c, i, r = /* @__PURE__ */ new Date();
  return et(() => {
    const o = setInterval(
      () => {
        n(3, r = /* @__PURE__ */ new Date());
      },
      1e3
    );
    return () => {
      clearInterval(o);
    };
  }), e.$$.update = () => {
    e.$$.dirty & /*time*/
    8 && n(2, s = r.getHours()), e.$$.dirty & /*time*/
    8 && n(1, c = r.getMinutes()), e.$$.dirty & /*time*/
    8 && n(0, i = r.getSeconds());
  }, [i, c, s, r];
}
class wt extends ht {
  constructor(t) {
    super(), $t(this, t, kt, yt, F, {}, _t);
  }
}
customElements.define("chat-agent", at(wt, {}, [], [], !0));
