(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-704fe663"],
  {
    bb51: function(t, e, r) {
      "use strict";
      r.r(e);
      var a = function() {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r("div", { staticClass: "home-page" }, [
            r("div", { staticClass: "container page" }, [
              r("div", { staticClass: "row" }, [
                r(
                  "div",
                  { staticClass: "col-md-9" },
                  [r("div", { staticClass: "feed-toggle" }), r("router-view")],
                  1
                ),
                r("div", { staticClass: "col-md-3" }, [
                  t.tags.length > 0
                    ? r("div", { staticClass: "sidebar" }, [
                        r(
                          "div",
                          { staticClass: "tag-list" },
                          t._l(t.tags, function(t, e) {
                            return r("RwvTag", { key: e, attrs: { name: t } });
                          }),
                          1
                        )
                      ])
                    : t._e()
                ])
              ])
            ])
          ]);
        },
        n = [],
        s = (r("8e6e"), r("ac6a"), r("456d"), r("bd86")),
        c = r("2f62"),
        o = r("f53f"),
        i = r("6c33");
      function l(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          e &&
            (a = a.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, a);
        }
        return r;
      }
      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(r, !0).forEach(function(e) {
                Object(s["a"])(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : l(r).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var p = {
          name: "home",
          components: { RwvTag: o["a"] },
          mounted: function() {
            this.$store.dispatch(i["r"]);
          },
          computed: u({}, Object(c["b"])(["isAuthenticated", "tags"]), {
            tag: function() {
              return this.$route.params.tag;
            }
          })
        },
        f = p,
        d = r("2877"),
        m = Object(d["a"])(f, a, n, !1, null, null, null);
      e["default"] = m.exports;
    },
    f53f: function(t, e, r) {
      "use strict";
      var a = function() {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r("router-link", {
            class: t.className,
            attrs: { to: t.homeRoute },
            domProps: { textContent: t._s(t.name) }
          });
        },
        n = [],
        s = {
          name: "RwvTag",
          props: {
            name: { type: String, required: !0 },
            className: { type: String, default: "tag-pill tag-default" }
          },
          computed: {
            homeRoute: function() {
              return { name: "home-tag", params: { tag: name } };
            }
          }
        },
        c = s,
        o = r("2877"),
        i = Object(o["a"])(c, a, n, !1, null, null, null);
      e["a"] = i.exports;
    }
  }
]);
//# sourceMappingURL=chunk-704fe663.998c9bbc.js.map
