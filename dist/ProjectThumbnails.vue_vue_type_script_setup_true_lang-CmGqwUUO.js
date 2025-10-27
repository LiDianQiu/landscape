import { ElImage as V } from "element-plus/es";
import "element-plus/es/components/base/style/css";
import "element-plus/es/components/image/style/css";
import { defineComponent as B, toRefs as E, computed as n, openBlock as C, createElementBlock as y, mergeProps as k, createElementVNode as R, createVNode as w, unref as v, withCtx as S, normalizeStyle as N, toDisplayString as P, createCommentVNode as A } from "vue";
import { _ as D } from "./GenerateProjectAvatar.vue_vue_type_script_setup_true_lang-DWSKltGY.js";
import { RadarRing as z, radarRingColors as I } from "./constant.js";
const T = { class: "w-full h-full flex flex-col items-center bg-white" }, U = /* @__PURE__ */ R("div", null, null, -1), L = /* @__PURE__ */ B({
  __name: "ProjectThumbnails",
  props: {
    project: {},
    options: {}
  },
  setup($) {
    var c;
    const t = $, { project: l } = E(t), e = n(() => {
      var r;
      return {
        ...(t == null ? void 0 : t.options) || {},
        boxSize: ((r = t.options) == null ? void 0 : r.boxSize) ?? 40
      };
    }), u = n(
      () => e.value.needBigSize && l.value.radarRing === z.Adopt
    ), o = n(() => {
      let r = e.value.boxSize;
      return u.value && (r *= 2), r;
    }), F = n(() => {
      var i, s, b, g, h, x, p;
      let r = "#016bccb3", a = !1;
      if (typeof ((i = e == null ? void 0 : e.value) == null ? void 0 : i.borderColor) == "string")
        r = e.value.borderColor, a = !0;
      else if (typeof ((s = e == null ? void 0 : e.value) == null ? void 0 : s.borderColor) == "object")
        (g = e == null ? void 0 : e.value) != null && g.borderColor[(b = l == null ? void 0 : l.value) == null ? void 0 : b.name] ? (r = (x = e == null ? void 0 : e.value) == null ? void 0 : x.borderColor[(h = l == null ? void 0 : l.value) == null ? void 0 : h.name], a = !0) : (p = e == null ? void 0 : e.value) != null && p.borderColor._default_ && (r = e.value.borderColor._default_, a = !0);
      else if (typeof e.value.borderColor == "function") {
        const _ = e.value.borderColor(l.value);
        _ && (r = _, a = !0);
      }
      if (typeof l.value.radarRing == "number" && l.value.radarRing in z && (r = I[l.value.radarRing], a = !0), u.value)
        return {
          width: `${o.value + 5}px`,
          height: `${o.value + 5}px`,
          gridColumnEnd: "span 2",
          gridRowEnd: "span 2",
          border: `2px solid ${r}`
        };
      const d = {
        width: `${o.value}px`,
        height: `${o.value}px`
      };
      return a && (d.border = `1px solid ${r}`), d;
    }), m = typeof ((c = e == null ? void 0 : e.value) == null ? void 0 : c.labelFormat) == "function", f = n(() => {
      var r, a;
      return u.value && !m ? (r = l == null ? void 0 : l.value) == null ? void 0 : r.name : (a = e == null ? void 0 : e.value) != null && a.labelFormat ? e.value.labelFormat(l.value) : "";
    });
    return (r, a) => {
      var i;
      const d = V;
      return C(), y("div", k(r.$attrs, {
        class: "project-logo relative bg-white",
        style: F.value
      }), [
        R("div", T, [
          w(d, {
            class: "w-full h-full flex flex-1 bg-white",
            loading: "lazy",
            src: (i = v(l)) == null ? void 0 : i.logo,
            fit: "fill"
          }, {
            error: S(() => [
              w(D, {
                modelValue: v(l).name,
                "onUpdate:modelValue": a[0] || (a[0] = (s) => v(l).name = s),
                width: o.value,
                height: o.value
              }, null, 8, ["modelValue", "width", "height"])
            ]),
            placeholder: S(() => [
              U
            ]),
            _: 1
          }, 8, ["src"])
        ]),
        f.value && (u.value || m) ? (C(), y("span", {
          key: 0,
          class: "truncate bg-gray-200 h-20px lh-20px text-10px absolute text-center",
          style: N({
            width: `${u.value ? o.value + 1 : e.value.boxSize - 2}px`,
            bottom: "0"
          })
        }, P(f.value), 5)) : A("", !0)
      ], 16);
    };
  }
});
export {
  L as _
};
