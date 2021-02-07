(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-2d0d6d35"],
  {
    "73cf": function(e, t, r) {
      "use strict";
      r.r(t);
      var s = function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("div", { staticClass: "auth-page" }, [
            r("div", { staticClass: "container page" }, [
              r("div", { staticClass: "row" }, [
                r("div", { staticClass: "col-md-6 offset-md-3 col-xs-12" }, [
                  r("h1", { staticClass: "text-xs-center" }, [
                    e._v("Register")
                  ]),
                  r(
                    "p",
                    { staticClass: "text-xs-center" },
                    [
                      r("router-link", { attrs: { to: { name: "login" } } }, [
                        e._v("\n            Have an account?\n          ")
                      ])
                    ],
                    1
                  ),
                  e.errors
                    ? r(
                        "ul",
                        { staticClass: "error-messages" },
                        e._l(e.errors, function(t, s) {
                          return r("li", { key: s }, [
                            e._v(e._s(s) + " " + e._s(e._f("error")(t)))
                          ]);
                        }),
                        0
                      )
                    : e._e(),
                  r(
                    "form",
                    {
                      on: {
                        submit: function(t) {
                          return t.preventDefault(), e.onSubmit(t);
                        }
                      }
                    },
                    [
                      r("fieldset", { staticClass: "form-group" }, [
                        r("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e.username,
                              expression: "username"
                            }
                          ],
                          staticClass: "form-control form-control-lg",
                          attrs: { type: "text", placeholder: "Username" },
                          domProps: { value: e.username },
                          on: {
                            input: function(t) {
                              t.target.composing ||
                                (e.username = t.target.value);
                            }
                          }
                        })
                      ]),
                      r("fieldset", { staticClass: "form-group" }, [
                        r("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e.email,
                              expression: "email"
                            }
                          ],
                          staticClass: "form-control form-control-lg",
                          attrs: { type: "text", placeholder: "Email" },
                          domProps: { value: e.email },
                          on: {
                            input: function(t) {
                              t.target.composing || (e.email = t.target.value);
                            }
                          }
                        })
                      ]),
                      r("fieldset", { staticClass: "form-group" }, [
                        r("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e.password,
                              expression: "password"
                            }
                          ],
                          staticClass: "form-control form-control-lg",
                          attrs: { type: "password", placeholder: "Password" },
                          domProps: { value: e.password },
                          on: {
                            input: function(t) {
                              t.target.composing ||
                                (e.password = t.target.value);
                            }
                          }
                        })
                      ]),
                      r(
                        "button",
                        { staticClass: "btn btn-lg btn-primary pull-xs-right" },
                        [e._v("\n            Create Account\n          ")]
                      )
                    ]
                  )
                ])
              ])
            ])
          ]);
        },
        o = [],
        a = (r("8e6e"), r("ac6a"), r("456d"), r("bd86")),
        n = r("2f62"),
        i = r("6c33");
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, s);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(r, !0).forEach(function(t) {
                Object(a["a"])(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : c(r).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var u = {
          name: "RwvRegister",
          data: function() {
            return { username: "", email: "", password: "" };
          },
          computed: l(
            {},
            Object(n["c"])({
              errors: function(e) {
                return e.auth.errors;
              }
            })
          ),
          methods: {
            onSubmit: function() {
              var e = this;
              this.$store
                .dispatch(i["u"], {
                  email: this.email,
                  password: this.password,
                  username: this.username
                })
                .then(function() {
                  return e.$router.push({ name: "home" });
                });
            }
          }
        },
        p = u,
        m = r("2877"),
        d = Object(m["a"])(p, s, o, !1, null, null, null);
      t["default"] = d.exports;
    }
  }
]);
//# sourceMappingURL=chunk-2d0d6d35.63dc8e57.js.map
