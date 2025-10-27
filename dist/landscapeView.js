import { ElTooltip as re, ElTag as le, ElText as ae, ElDialog as ce } from "element-plus/es";
import "element-plus/es/components/base/style/css";
import "element-plus/es/components/dialog/style/css";
import "element-plus/es/components/text/style/css";
import "element-plus/es/components/tag/style/css";
import "element-plus/es/components/tooltip/style/css";
import { defineComponent as ie, computed as ue, ref as W, watch as de, onMounted as pe, openBlock as p, createElementBlock as S, Fragment as O, renderList as z, createElementVNode as l, normalizeStyle as A, unref as c, toDisplayString as w, createBlock as T, withCtx as x, createCommentVNode as U, renderSlot as M, createVNode as I, createTextVNode as B, pushScopeId as fe, popScopeId as ge } from "vue";
import { getTagType as he, getSystemTagType as q } from "./color.js";
import { toKilo as Q } from "./number.js";
import ve from "./ProjectPopover.js";
import { _ as G } from "./ProjectThumbnails.vue_vue_type_script_setup_true_lang-CmGqwUUO.js";
import { RadarRing as L } from "./constant.js";
import { _ as me } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const Y = (D) => (fe("data-v-567e7f1a"), D = D(), ge(), D), ye = {
  id: "landscape",
  "w-full": ""
}, be = {
  class: "landscape-category-name",
  style: { transform: "rotate(180deg)" },
  "write-vertical-right": ""
}, ke = {
  "flex-1": "",
  flex: "",
  "flex-wrap": "",
  "justify-between": ""
}, we = ["onClick"], _e = {
  flex: "",
  "min-w-600px": "",
  class: "project-dialog-header"
}, xe = {
  class: "project-info",
  flex: "",
  "flex-1": "",
  "flex-col": ""
}, je = { flex: "" }, Ce = {
  flex: "",
  "items-center": ""
}, Se = {
  "mr-3": "",
  flex: "",
  "items-center": ""
}, $e = /* @__PURE__ */ Y(() => /* @__PURE__ */ l("span", { class: "i-custom:star-active font-size-4 mr-1" }, null, -1)), Re = {
  "mr-3": "",
  flex: "",
  "items-center": ""
}, Pe = /* @__PURE__ */ Y(() => /* @__PURE__ */ l("span", { class: "i-custom:fork-active font-size-4 mr-1" }, null, -1)), Te = ["href"], Oe = { "pl-6px": "" }, X = 4, ze = /* @__PURE__ */ ie({
  __name: "LandscapeView",
  props: {
    projects: {},
    bgColor: {},
    options: {}
  },
  emits: ["goMore", "clickProject", "toDetailsPage"],
  setup(D, { expose: Z, emit: ee }) {
    const V = D, s = ue(() => ({
      sortProject: (t, i) => t.name.localeCompare(i.name),
      // 默认按名称排序
      autoLayoutMaxCol: 3,
      hasMore: !0,
      boxSize: 40,
      boxGap: 8,
      enableProjectPopover: !0,
      colors: ["#89bff6", "#89c997", "#e8dd92", "#f0b58e", "#aea3db"],
      ...V.options
      // 用户自定义的配置，覆盖默认配置
    })), E = ee, j = W({}), f = W({
      category: "",
      subcategory: "",
      name: "",
      description: "",
      htmlUrl: "",
      logo: "",
      starCount: 0,
      forksCount: 0,
      hasBenchmark: "",
      labels: [],
      language: ""
    }), P = W(!1), N = () => {
      var i;
      let t = (((i = document.getElementById("landscape")) == null ? void 0 : i.offsetWidth) || 1280) - 32;
      return t = t < 350 ? 1248 : t, t;
    };
    function F() {
      return s.value.hasThirdLevel && s.value.layout && V.projects.length ? s.value.layout[V.projects[0].rootCategory || ""] : s.value.layout;
    }
    const te = (t, i) => {
      const y = F(), _ = s.value.autoLayout, r = N();
      for (const g of Object.keys(i)) {
        const e = (_ == null ? void 0 : _[g]) || s.value.autoLayoutMaxCol, n = Object.keys(i[g]), o = n.length, u = Math.ceil(o / e), h = Array.from(
          { length: u },
          () => []
        );
        let $ = 0;
        for (const v of n) {
          const d = i[g][v];
          h[$].push({
            ...d,
            width: 0,
            weight: d.displayCount / o
            // 子类别的权重，等于子类别总数 / 类别总数
          }), h[$].length === e && $++;
        }
        for (const v of h) {
          const d = v.reduce((m, b) => m += b.weight, 0);
          for (const m of v)
            m.width = r * (m.weight / d) - 10;
        }
        const C = (X - 1) * s.value.boxGap + X * s.value.boxSize;
        for (const v of h) {
          const d = {};
          let m = 0;
          for (const b of v)
            b.width < C ? (m += C - b.width, b.width = C) : d[b.subTechStackName] = b.width;
          if (m > 0) {
            const b = m / Object.keys(d).length;
            for (const k of v)
              Object.keys(d).includes(k.subTechStackName) && k.width - b < C && (delete d[k.subTechStackName], m -= k.width - C, k.width = C);
            for (const k of v)
              Object.keys(d).includes(k.subTechStackName) && (k.width -= m / Object.keys(d).length);
          }
        }
        const a = Object.keys(t[g]).filter(
          (v) => !n.includes(v)
        ), R = a[a.length - 1];
        if (y && R) {
          const v = a.reduce(
            // 这里用 layout 取值，是因为 layout 传的是宽度百分比，category 中的 width 是真实的宽度，用百分比方便计算
            (m, b) => m += y[g][b],
            0
          ), d = v - Math.floor(v);
          if (d) {
            const m = y[g][R], b = 1 - d;
            let k = m + b;
            k = k > 1 ? 1 : k, t[g][R].width = r * k - 10;
          }
        }
        for (const v of h)
          for (const d of v)
            t[g][d.subTechStackName] = d;
      }
      return t;
    }, H = (t, i) => {
      const y = F(), _ = N(), r = {}, g = {};
      if (y)
        for (const e of Object.keys(y)) {
          r[e] = {};
          for (const n of Object.keys(y[e])) {
            const o = y[e][n];
            y[e][n] = !o || o > 1 ? 1 : o, r[e][n] = {
              subTechStackName: n,
              isRadarRingAdopt: !1,
              projects: [],
              count: 0,
              displayCount: 0,
              width: _ * y[e][n] - 10
            };
          }
        }
      t.forEach((e) => {
        r[e.category] || (r[e.category] = {}), r[e.category][e.subcategory] || (r[e.category][e.subcategory] = {
          subTechStackName: e.subcategory,
          isRadarRingAdopt: !1,
          projects: [],
          count: 0,
          displayCount: 0,
          width: _ - 10
        }, g[e.category] || (g[e.category] = {}), g[e.category][e.subcategory] = r[e.category][e.subcategory]);
        const n = r[e.category][e.subcategory];
        n.count++;
        const o = e.radarRing === L.Adopt;
        o && (n.isRadarRingAdopt = !0), (o || !s.value.maxProjects || n.projects.length < s.value.maxProjects) && (n.projects.push(e), n.displayCount++);
      });
      for (const e of Object.keys(r)) {
        for (const n of Object.keys(r[e])) {
          const o = r[e][n];
          if (!o.projects.length) {
            delete r[e][n];
            continue;
          }
          o.projects.sort(s.value.sortProject), o.isRadarRingAdopt && o.projects.sort((u, h) => u.radarRing === L.Adopt && h.radarRing !== L.Adopt ? -1 : u.radarRing !== L.Adopt && h.radarRing === L.Adopt ? 1 : 0);
        }
        Object.keys(r[e]).length || delete r[e];
      }
      return te(r, i ? g : r);
    }, J = () => {
      j.value = H(V.projects, !0);
    };
    de(
      () => V.projects,
      () => J()
    ), pe(() => {
      J();
    });
    const oe = (t) => {
      j.value = H(t);
    };
    function se(t) {
      typeof t == "boolean" ? P.value = t : P.value = !P.value;
    }
    Z({
      updateProjects: oe,
      toggleDialogVisible: se
    });
    function ne(t, i) {
      E("goMore", t, i);
    }
    function K(t) {
      s.value.enableProjectDialog && (f.value = t, P.value = !0), E("clickProject", t);
    }
    return (t, i) => {
      const y = re, _ = le, r = ae, g = ce;
      return p(), S("div", ye, [
        (p(!0), S(O, null, z(Object.keys(j.value), (e, n) => (p(), S("div", {
          key: e,
          class: "category-wrap",
          "w-full": "",
          flex: "",
          "mb-16px": ""
        }, [
          l("div", {
            style: A(`background-color:${t.bgColor || c(s).colors[n % c(s).colors.length]}`),
            "w-32px": "",
            "rd-4px": "",
            "c-white": "",
            "text-14px": "",
            "min-h-100px": "",
            flex: "",
            "justify-center": "",
            "items-center": "",
            "mr-16px": ""
          }, [
            l("span", be, w(e), 1)
          ], 4),
          l("div", ke, [
            (p(!0), S(O, null, z(Object.keys(j.value[e]), (o) => (p(), S("div", {
              key: `${e}-${o}`,
              style: A(`width: ${j.value[e][o].width}px;`)
            }, [
              l("div", {
                style: A(`background-color:${t.bgColor || c(s).colors[n % c(s).colors.length]}`),
                "h-32px": "",
                "rd-4px": "",
                "c-white": "",
                "text-14px": "",
                flex: "",
                "justify-center": "",
                "items-center": "",
                "mb-10px": ""
              }, [
                l("span", null, w(o) + " (" + w(j.value[e][o].count || 0) + ")", 1),
                c(s).hasMore ? (p(), T(y, {
                  key: 0,
                  effect: "light",
                  content: "点击查看更多项目",
                  placement: "right"
                }, {
                  default: x(() => [
                    l("div", {
                      class: "more-btn i-custom:more font-size-4 ml-2",
                      onClick: (u) => ne(e, o)
                    }, null, 8, we)
                  ]),
                  _: 2
                }, 1024)) : U("", !0),
                M(t.$slots, "subTechStackTitleExtend", {
                  subTechStack: j.value[e][o]
                }, void 0, !0)
              ], 4),
              l("div", {
                style: A([{ display: "grid", "margin-bottom": "10px" }, {
                  gridTemplateColumns: `repeat(auto-fit,${c(s).boxSize}px)`,
                  gridAutoRows: `${c(s).boxSize}px`,
                  gap: `${c(s).boxGap}px`
                }])
              }, [
                c(s).enableProjectPopover ? (p(!0), S(O, { key: 0 }, z(j.value[e][o].projects, (u, h) => (p(), T(ve, {
                  key: `${e}-${o}-${u.name}-${h}`,
                  project: u,
                  options: c(s)
                }, {
                  reference: x(() => [
                    I(G, {
                      class: "project-logo",
                      project: u,
                      options: { ...c(s), needBigSize: c(s).needBigSize ?? !0 },
                      onClick: ($) => K(u)
                    }, null, 8, ["project", "options", "onClick"])
                  ]),
                  "toolbar-left": x(() => [
                    M(t.$slots, "popover-toolbar-left", { project: u }, void 0, !0)
                  ]),
                  "toolbar-right": x(() => [
                    M(t.$slots, "popover-toolbar-right", { project: u }, void 0, !0)
                  ]),
                  _: 2
                }, 1032, ["project", "options"]))), 128)) : (p(!0), S(O, { key: 1 }, z(j.value[e][o].projects, (u, h) => (p(), T(G, {
                  key: `${e}-${o}-${u.name}-${h}`,
                  class: "project-logo",
                  project: u,
                  options: { ...c(s), needBigSize: c(s).needBigSize ?? !0 },
                  onClick: ($) => K(u)
                }, null, 8, ["project", "options", "onClick"]))), 128))
              ], 4)
            ], 4))), 128))
          ])
        ]))), 128)),
        I(g, {
          modelValue: P.value,
          "onUpdate:modelValue": i[2] || (i[2] = (e) => P.value = e),
          width: "fit-content"
        }, {
          default: x(() => [
            M(t.$slots, "projectDialogHeader", { project: f.value }, () => {
              var e, n, o, u, h, $, C;
              return [
                l("div", _e, [
                  P.value ? (p(), T(G, {
                    key: 0,
                    class: "project-logo",
                    project: f.value,
                    options: {
                      ...c(s),
                      boxSize: 80,
                      needBigSize: !1
                    },
                    "mr-4": "",
                    onClick: i[0] || (i[0] = (a) => E("toDetailsPage", f.value))
                  }, null, 8, ["project", "options"])) : U("", !0),
                  l("div", xe, [
                    l("div", je, [
                      l("span", {
                        truncate: "",
                        "text-lg": "",
                        "fw-bold": "",
                        "mr-3": "",
                        "cursor-pointer": "",
                        onClick: i[1] || (i[1] = (a) => E("toDetailsPage", f.value))
                      }, w((e = f.value) == null ? void 0 : e.name), 1),
                      l("div", Ce, [
                        l("div", Se, [
                          $e,
                          B(" " + w(c(Q)((n = f.value) == null ? void 0 : n.starCount, { fractionDigits: 1, emptyValue: "0" })), 1)
                        ]),
                        l("div", Re, [
                          Pe,
                          B(" " + w(c(Q)((o = f.value) == null ? void 0 : o.forksCount, { fractionDigits: 1, emptyValue: "0" })), 1)
                        ]),
                        l("a", {
                          href: (u = f.value) == null ? void 0 : u.htmlUrl,
                          target: "_blank",
                          class: "i-custom:github font-size-4 mr-3 cursor-pointer"
                        }, null, 8, Te),
                        (h = f.value) != null && h.language ? (p(), T(_, {
                          key: 0,
                          type: "warning",
                          effect: "plain"
                        }, {
                          default: x(() => {
                            var a;
                            return [
                              B(w((a = f.value) == null ? void 0 : a.language), 1)
                            ];
                          }),
                          _: 1
                        })) : U("", !0)
                      ])
                    ]),
                    l("div", null, [
                      I(r, {
                        "line-clamp": "3",
                        "max-w-470px": ""
                      }, {
                        default: x(() => {
                          var a;
                          return [
                            B(w((a = f.value) == null ? void 0 : a.description), 1)
                          ];
                        }),
                        _: 1
                      })
                    ]),
                    l("div", null, [
                      (p(!0), S(O, null, z(($ = f.value) == null ? void 0 : $.labels, (a, R) => (p(), T(_, {
                        key: R,
                        type: c(he)(R),
                        "mr-2": "",
                        "mb-2": ""
                      }, {
                        default: x(() => [
                          B(w(a), 1)
                        ]),
                        _: 2
                      }, 1032, ["type"]))), 128)),
                      (p(!0), S(O, null, z(((C = f.value) == null ? void 0 : C.osInfo) || [], (a, R) => (p(), T(y, {
                        key: R,
                        content: `自 ${a.os} ${a.introduceVersion} 版本开始引入`,
                        effect: "light"
                      }, {
                        default: x(() => [
                          I(_, {
                            type: c(q)(a.os),
                            "mr-2": "",
                            "mb-2": "",
                            class: "tag-system"
                          }, {
                            default: x(() => [
                              l("span", {
                                "pr-6px": "",
                                style: A({
                                  "border-right": `1px solid var(--el-color-${c(q)(a.os)}-light-7)`
                                })
                              }, w(a.os), 5),
                              l("span", Oe, w(a.introduceVersion), 1)
                            ]),
                            _: 2
                          }, 1032, ["type"])
                        ]),
                        _: 2
                      }, 1032, ["content"]))), 128))
                    ])
                  ])
                ])
              ];
            }, !0),
            M(t.$slots, "projectDialogBody", { project: f.value }, void 0, !0)
          ]),
          _: 3
        }, 8, ["modelValue"])
      ]);
    };
  }
}), He = /* @__PURE__ */ me(ze, [["__scopeId", "data-v-567e7f1a"]]);
export {
  He as default
};
