window.tbConfig = {
  inFrame: false,
  enableLazyLoading: false,
  enableJsLazyLoading: false,
  enableDynamicGoods: true,
  isPreviewMode: false,
  hasPromocodes: false,
  enableSitesCheckoutIntegration: false,
  yandexMapsApiKey: "a9eba83c-b342-4dfe-ab11-2c7cbd6839cb",
  messengerLink:
    "https://w.tb.ru/open-messenger/widget?wId=W-6E065E45CC974D0B8AED8EF315ED112E",
  cartHash:
    "U2FsdGVkX19BP9l/HNJRPoyDjHtC21qWXFV11+//Q5I/OzhHJGtoFkxRlT7YQhbjVt14p5QYguTApaCVFpKGd0874/KYkAJ44zwhWtyVGBVC0jzTSBLaZlAdc4viuqx0",
  staticPath:
    "https://e26f86a1-a349-40e0-9864-90f0278f7cc5.selcdn.net/tb/0.1.493",
};
window.tbConfig.isExported = true;
window.tbConfig.exportedApiUrl = "https://a.tb.ru";
window.tbConfig.apiUrl = !window.tbConfig.isExported
  ? ""
  : window.tbConfig.exportedApiUrl;
window.tbConfig.isModern = "noModule" in HTMLScriptElement.prototype;
var n,
  o = "chrome" in window,
  e = "InstallTrigger" in window;
function t(n) {
  var o = document.createElement("script");
  return (
    (o.src = "".concat(window.tbConfig.staticPath, "/js/").concat(n)),
    window.tbConfig.isModern &&
      ((o.type = "module"), (o.src = o.src.replace(".js", ".modern.js"))),
    (o.defer = !0),
    o
  );
}
function d(n) {
  var o = t(n);
  document.head.appendChild(o);
}
window.tbConfig.enableLazyLoading && d("lazy-load.js"),
  "attachShadow" in Element.prototype || d("lit-polyfill-support.js"),
  d("webcomponents-loader.js"),
  o || e || d("smoothscroll.js"),
  (n = t("front.js")),
  document.addEventListener("DOMContentLoaded", function () {
    document.head.appendChild(n);
  });
