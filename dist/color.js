function a(e) {
  return e && {
    A: "#21c45d",
    B: "#bbf7d0",
    C: "#fef08b",
    D: "#fcd44f",
    E: "#fca6a6"
  }[e] || "#61a6fa";
}
function n(e) {
  switch (e % 4) {
    case 0:
      return "primary";
    case 1:
      return "success";
    case 2:
      return "warning";
    case 3:
      return "danger";
  }
}
function t(e) {
  switch (e = e.toUpperCase(), e) {
    case "IOS":
      return "primary";
    case "HOS":
      return "success";
    case "AOSP":
      return "warning";
    default:
      return "primary";
  }
}
function c(e) {
  return e < 2 ? "#f43146" : e < 5 ? "#ec6f1a" : e < 8 ? "#eeba18" : "#2da769";
}
export {
  a as getLevelColor,
  t as getSystemTagType,
  n as getTagType,
  c as scorecardProgressColor
};
