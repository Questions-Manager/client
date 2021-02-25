(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-2d217357"],
  {
    c66d: function(t, e, s) {
      "use strict";
      s.r(e);
      var n = function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "profile-page" }, [
            s("div", { staticClass: "user-info" }, [
              s("div", { staticClass: "container" }, [
                s("div", { staticClass: "row" }, [
                  s("div", { staticClass: "col-xs-12 col-md-10 offset-md-1" }, [
                    s("img", {
                      staticClass: "user-img",
                      attrs: { src: t.profile.image }
                    }),
                    s("h4", [t._v(t._s(t.profile.username))]),
                    s("p", [t._v(t._s(t.profile.bio))]),
                    t.isCurrentUser()
                      ? s(
                          "div",
                          { staticStyle: { "text-align": "center" } },
                          [
                            s(
                              "button",
                              {
                                staticClass:
                                  "btn btn-sm btn-outline-secondary action-btn",
                                staticStyle: { "margin-left": "10px" },
                                on: { click: t.logout }
                              },
                              [t._v("\n              Log out\n            ")]
                            ),
                            s(
                              "router-link",
                              {
                                staticClass:
                                  "btn btn-sm btn-outline-secondary action-btn",
                                attrs: { to: { name: "settings" } }
                              },
                              [
                                s("i", { staticClass: "ion-gear-a" }),
                                t._v(" Edit\n            ")
                              ]
                            )
                          ],
                          1
                        )
                      : s("div", [
                          t.profile.following
                            ? s(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-sm btn-secondary action-btn",
                                  on: {
                                    click: function(e) {
                                      return e.preventDefault(), t.unfollow();
                                    }
                                  }
                                },
                                [
                                  s("i", { staticClass: "ion-plus-round" }),
                                  t._v(
                                    "  Unfollow\n              " +
                                      t._s(t.profile.username) +
                                      "\n            "
                                  )
                                ]
                              )
                            : t._e(),
                          t.profile.following
                            ? t._e()
                            : s(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-sm btn-outline-secondary action-btn",
                                  on: {
                                    click: function(e) {
                                      return e.preventDefault(), t.follow();
                                    }
                                  }
                                },
                                [
                                  s("i", { staticClass: "ion-plus-round" }),
                                  t._v(
                                    "  Follow\n              " +
                                      t._s(t.profile.username) +
                                      "\n            "
                                  )
                                ]
                              )
                        ])
                  ])
                ])
              ])
            ]),
            s("div", { staticClass: "container" }, [
              s("div", { staticClass: "row" }, [
                s(
                  "div",
                  { staticClass: "col-xs-12 col-md-10 offset-md-1" },
                  [
                    s("div", { staticClass: "questions-toggle" }),
                    s("router-view")
                  ],
                  1
                )
              ])
            ])
          ]);
        },
        r = [],
        i = (s("8e6e"), s("ac6a"), s("456d"), s("bd86")),
        o = s("2f62"),
        a = s("6c33");
      function c(t, e) {
        var s = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            s.push.apply(s, n);
        }
        return s;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var s = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(s, !0).forEach(function(e) {
                Object(i["a"])(t, e, s[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : c(s).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e)
                );
              });
        }
        return t;
      }
      var u = {
          name: "RwvProfile",
          mounted: function() {
            this.$store.dispatch(a["o"], this.$route.params);
          },
          computed: l(
            {},
            Object(o["b"])(["currentUser", "profile", "isAuthenticated"])
          ),
          methods: {
            isCurrentUser: function() {
              return (
                !(!this.currentUser.username || !this.profile.username) &&
                this.currentUser.username === this.profile.username
              );
            },
            follow: function() {
              this.isAuthenticated &&
                this.$store.dispatch(a["p"], this.$route.params);
            },
            unfollow: function() {
              this.$store.dispatch(a["q"], this.$route.params);
            },
            logout: function() {
              var t = this;
              this.$store.dispatch(a["t"]).then(function() {
                t.$router.push({ name: "home" });
              });
            }
          },
          watch: {
            $route: function(t) {
              this.$store.dispatch(a["o"], t.params);
            }
          }
        },
        f = u,
        p = s("2877"),
        d = Object(p["a"])(f, n, r, !1, null, null, null);
      e["default"] = d.exports;
    }
  }
]);
//# sourceMappingURL=chunk-2d217357.cb3f4e13.js.map
