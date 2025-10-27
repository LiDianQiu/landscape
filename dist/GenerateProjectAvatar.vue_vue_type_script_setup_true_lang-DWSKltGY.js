import { defineComponent as m, mergeModels as u, useModel as h, ref as p, onMounted as f, watch as d, nextTick as g, openBlock as y, createElementBlock as x, normalizeStyle as v, createElementVNode as w, toDisplayString as _, unref as S } from "vue";
const A = /* @__PURE__ */ m({
  __name: "GenerateProjectAvatar",
  props: /* @__PURE__ */ u({
    width: {},
    height: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(a) {
    const o = h(a, "modelValue"), t = a, r = (e) => e ? e.replaceAll("-", `-
`).replaceAll("_", `_
`).replaceAll(":", `:
`).replaceAll("/", `/
`) : "", s = p(r(o.value)), l = p(), n = () => {
      const c = window.getComputedStyle(l.value).getPropertyValue("font-size"), i = (t.width - 10) / l.value.scrollWidth * parseInt(c);
      l.value.style.fontSize = `${i}px`, l.value.style.lineHeight = `${i + 1}px`;
    };
    return f(() => {
      n();
    }), d(o, async (e) => {
      s.value = r(e), g(() => {
        n();
      });
    }), d(() => [t.width, t.height], n), (e, c) => (y(), x("div", {
      style: v(`width:${t.width}px;height:${t.height}px;color:#4d97db;padding: 0px 5px;`),
      class: "landscape-generate-avatar",
      flex: "",
      "items-center": ""
    }, [
      w("span", {
        ref_key: "projectNameRef",
        ref: l,
        class: "landscape-generate-avatar-text",
        style: { "text-align": "center", "white-space": "pre-line" }
      }, _(S(s)), 513)
    ], 4));
  }
});
export {
  A as _
};
