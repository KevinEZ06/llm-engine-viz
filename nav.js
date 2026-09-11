(function () {
  if (document.getElementById("viz-nav")) return;

  var pages = [
    { href: "index.html", label: "总览" },
    { href: "journey.html", label: "全链路" },
    { href: "batching.html", label: "连续批" },
    { href: "radix.html", label: "Radix" },
    { href: "PagedAttention.html", label: "Paged KV" },
    { href: "cacheschedule.html", label: "KV 调度" },
    { href: "eagle3.html", label: "EAGLE-3" },
    { href: "kvpd.html", label: "PD 分离" },
    { href: "pipeline.html", label: "路由" },
    { href: "parallel.html", label: "DP/TP/EP/CP" },
    { href: "ring_attention.html", label: "Ring/CP" },
    { href: "k8s.html", label: "K8s" }
  ];

  var file = (location.pathname.split("/").pop() || "index.html");
  if (!file) file = "index.html";

  var style = document.createElement("style");
  style.textContent = [
    "#viz-nav{position:fixed;top:0;left:0;right:0;z-index:99999;display:flex;gap:6px;align-items:center;",
    "overflow-x:auto;padding:6px 10px;background:#070b14;border-bottom:1px solid #243044;",
    "font:12px/1.2 ui-sans-serif,system-ui,-apple-system,'PingFang SC','Noto Sans SC',sans-serif;}",
    "#viz-nav a{flex:0 0 auto;color:#8b9bb4;text-decoration:none;padding:5px 9px;border-radius:6px;border:1px solid transparent;}",
    "#viz-nav a:hover{color:#e8eef7;background:#152033;}",
    "#viz-nav a.on{color:#dbeafe;background:#1c3358;border-color:#3b6eb5;}",
    "body.viz-has-nav{padding-top:40px !important;box-sizing:border-box;}"
  ].join("");
  document.head.appendChild(style);

  var nav = document.createElement("nav");
  nav.id = "viz-nav";
  pages.forEach(function (p) {
    var a = document.createElement("a");
    a.href = p.href;
    a.textContent = p.label;
    if (p.href === file) a.className = "on";
    if (file === "eagle_3.html" && p.href === "eagle3.html") a.className = "on";
    nav.appendChild(a);
  });
  document.body.insertBefore(nav, document.body.firstChild);
  document.body.classList.add("viz-has-nav");
})();
