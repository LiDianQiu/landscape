function i(t, { fractionDigits: n = 2, emptyValue: o = "-" } = {}) {
  if (t == null || t === "")
    return o;
  const r = typeof t == "string" ? parseFloat(t) : t;
  return r < 1e3 ? r.toString() : r < 1e5 ? (r / 1e3).toFixed(n) + " k" : Math.round(r / 1e3) + " k";
}
function f(t) {
  if (t == null || t === "")
    return "-";
  const n = typeof t == "string" ? parseFloat(t) : t;
  return parseFloat(n.toFixed(2));
}
function e(t) {
  return t == null || t === "" ? "-" : typeof t == "string" ? parseFloat(t) : t;
}
function s(t) {
  return t == null || t === "" ? "-" : t;
}
function d(t) {
  let n = 100;
  return t > 30 ? n = 500 : t > 20 ? n = 400 : t > 10 ? n = 350 : t > 5 ? n = 300 : t > 1 && (n = 200), n;
}
export {
  f as formatFloat,
  e as formatNumber,
  s as formatString,
  d as getBubbleChartHeightByCount,
  i as toKilo
};
