(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-2d0cedd0"],
  {
    "60ee": function(t, e, a) {
      "use strict";
      a.r(e);
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "home-tag" },
            [a("RwvArticleList", { attrs: { tag: t.tag } })],
            1
          );
        },
        s = [],
        c = a("64e5"),
        r = {
          name: "RwvHomeTag",
          components: { RwvArticleList: c["a"] },
          computed: {
            tag: function() {
              return this.$route.params.tag;
            }
          }
        },
        i = r,
        o = a("2877"),
        u = Object(o["a"])(i, n, s, !1, null, null, null);
      e["default"] = u.exports;
    }
  }
]);
//# sourceMappingURL=chunk-2d0cedd0.ea949ae4.js.map
