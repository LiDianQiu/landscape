import { ElText as P, ElTooltip as T, ElPopover as S } from "element-plus/es";
import "element-plus/es/components/base/style/css";
import "element-plus/es/components/popover/style/css";
import "element-plus/es/components/tooltip/style/css";
import "element-plus/es/components/text/style/css";
import { defineComponent as V, toRefs as E, openBlock as p, createBlock as _, mergeProps as N, withCtx as s, renderSlot as d, createElementVNode as o, createVNode as m, unref as e, createTextVNode as f, toDisplayString as a, createElementBlock as I, createCommentVNode as v, normalizeClass as B, normalizeStyle as D, pushScopeId as K, popScopeId as U } from "vue";
import { toKilo as R } from "./number.js";
import { _ as q } from "./ProjectThumbnails.vue_vue_type_script_setup_true_lang-CmGqwUUO.js";
import { radarRingNames as $, radarRingColors as w } from "./constant.js";
import { _ as A } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const y = (n) => (K("data-v-343bd8ed"), n = n(), U(), n), F = { class: "flex items-center mb-3" }, G = { class: "min-w210px flex flex-1 flex-col" }, H = { class: "text-lg fw-bold" }, J = { class: "flex items-center" }, L = { class: "mr-3 flex items-center" }, M = /* @__PURE__ */ y(() => /* @__PURE__ */ o("span", { class: "i-custom:star-active font-size-4 mr-1" }, null, -1)), O = { class: "mr-3 flex items-center" }, Q = /* @__PURE__ */ y(() => /* @__PURE__ */ o("span", { class: "i-custom:fork-active font-size-4 mr-1" }, null, -1)), W = ["href"], X = { class: "max-w132px flex flex-wrap items-center" }, Y = {
  key: 0,
  class: "toolbar-item flex flex-col items-center"
}, Z = /* @__PURE__ */ V({
  __name: "ProjectPopover",
  props: {
    project: {},
    options: {}
  },
  setup(n) {
    const z = n, { project: t, options: r } = E(z);
    return (i, l) => {
      const h = P, u = T, j = S;
      return p(), _(j, N({
        "show-after": 200,
        width: 450,
        offset: 5,
        persistent: !1,
        trigger: "hover"
      }, i.$attrs), {
        reference: s(() => [
          d(i.$slots, "reference", {}, void 0, !0)
        ]),
        default: s(() => [
          o("div", null, [
            o("div", F, [
              m(q, {
                class: "mr-3",
                project: e(t),
                options: {
                  boxSize: 70,
                  borderColor: "#e5e7eb"
                }
              }, null, 8, ["project"]),
              o("div", G, [
                o("span", H, [
                  m(h, {
                    "w-full": "",
                    "line-clamp": "2"
                  }, {
                    default: s(() => [
                      f(a(e(t).name), 1)
                    ]),
                    _: 1
                  })
                ]),
                o("div", J, [
                  o("div", L, [
                    M,
                    f(" " + a(e(R)(e(t).starCount, { fractionDigits: 1, emptyValue: "0" })), 1)
                  ]),
                  o("div", O, [
                    Q,
                    f(" " + a(e(R)(e(t).forksCount, { fractionDigits: 1, emptyValue: "0" })), 1)
                  ]),
                  o("a", {
                    href: e(t).htmlUrl,
                    target: "_blank",
                    class: "i-custom:github font-size-4 mr-3 cursor-pointer"
                  }, null, 8, W)
                ])
              ]),
              o("div", X, [
                d(i.$slots, "toolbar-left", {}, void 0, !0),
                d(i.$slots, "default", {}, () => {
                  var x, b, g;
                  return [
                    (x = e(r)) != null && x.evaluation ? (p(), I("div", Y, [
                      m(u, {
                        effect: "light",
                        content: "先进性评估",
                        placement: "bottom"
                      }, {
                        default: s(() => [
                          o("span", {
                            class: "i-custom:evaluation font-size-8 cursor-pointer",
                            onClick: l[0] || (l[0] = (c) => e(r).evaluation(e(t)))
                          })
                        ]),
                        _: 1
                      })
                    ])) : v("", !0),
                    (b = e(r)) != null && b.addProjectToCompare ? (p(), _(u, {
                      key: 1,
                      effect: "light",
                      content: "添加对比",
                      placement: "bottom",
                      teleported: !1
                    }, {
                      default: s(() => [
                        o("span", {
                          class: "i-custom:add-versus ml8px cursor-pointer font-size-8 color-[#409eff]",
                          onClick: l[1] || (l[1] = (c) => e(r).addProjectToCompare(e(t)))
                        })
                      ]),
                      _: 1
                    })) : v("", !0),
                    typeof ((g = e(t)) == null ? void 0 : g.radarRing) == "number" ? (p(), _(u, {
                      key: 2,
                      effect: "light",
                      content: `技术雷达：${e($)[e(t).radarRing]}`,
                      placement: "bottom",
                      teleported: !1
                    }, {
                      default: s(() => {
                        var c;
                        return [
                          o("span", {
                            class: B(["toolbar-item", { "cursor-pointer": (c = e(r)) == null ? void 0 : c.toTechRadar }]),
                            "px-2px": "",
                            "font-600": "",
                            rounded: "",
                            "border-solid": "",
                            "border-size-2": "",
                            style: D({
                              "border-color": e(w)[e(t).radarRing],
                              color: e(w)[e(t).radarRing]
                            }),
                            onClick: l[2] || (l[2] = (ee) => {
                              var C, k;
                              return ((C = e(r)) == null ? void 0 : C.toTechRadar) && ((k = e(r)) == null ? void 0 : k.toTechRadar(e(t)));
                            })
                          }, a(e($)[e(t).radarRing]), 7)
                        ];
                      }),
                      _: 1
                    }, 8, ["content"])) : v("", !0)
                  ];
                }, !0),
                d(i.$slots, "toolbar-right", {}, void 0, !0)
              ])
            ]),
            m(h, { "line-clamp": "3" }, {
              default: s(() => [
                f(a(e(t).description), 1)
              ]),
              _: 1
            })
          ])
        ]),
        _: 3
      }, 16);
    };
  }
}), de = /* @__PURE__ */ A(Z, [["__scopeId", "data-v-343bd8ed"]]);
export {
  de as default
};
