(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-52fabea2"],
  {
    "0e54": function(e, t, r) {
      (function(t) {
        (function(t) {
          "use strict";
          var r = {
            newline: /^\n+/,
            code: /^( {4}[^\n]+\n*)+/,
            fences: /^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
            hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
            heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
            blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
            list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
            html:
              "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",
            def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
            nptable: b,
            table: b,
            lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
            _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
            text: /^[^\n]+/
          };
          function n(e) {
            (this.tokens = []),
              (this.tokens.links = Object.create(null)),
              (this.options = e || w.defaults),
              (this.rules = r.normal),
              this.options.pedantic
                ? (this.rules = r.pedantic)
                : this.options.gfm && (this.rules = r.gfm);
          }
          (r._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/),
            (r._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/),
            (r.def = h(r.def)
              .replace("label", r._label)
              .replace("title", r._title)
              .getRegex()),
            (r.bullet = /(?:[*+-]|\d{1,9}\.)/),
            (r.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/),
            (r.item = h(r.item, "gm")
              .replace(/bull/g, r.bullet)
              .getRegex()),
            (r.list = h(r.list)
              .replace(/bull/g, r.bullet)
              .replace(
                "hr",
                "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
              )
              .replace("def", "\\n+(?=" + r.def.source + ")")
              .getRegex()),
            (r._tag =
              "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
            (r._comment = /<!--(?!-?>)[\s\S]*?-->/),
            (r.html = h(r.html, "i")
              .replace("comment", r._comment)
              .replace("tag", r._tag)
              .replace(
                "attribute",
                / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
              )
              .getRegex()),
            (r.paragraph = h(r._paragraph)
              .replace("hr", r.hr)
              .replace("heading", " {0,3}#{1,6} +")
              .replace("|lheading", "")
              .replace("blockquote", " {0,3}>")
              .replace("fences", " {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n")
              .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
              .replace(
                "html",
                "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)"
              )
              .replace("tag", r._tag)
              .getRegex()),
            (r.blockquote = h(r.blockquote)
              .replace("paragraph", r.paragraph)
              .getRegex()),
            (r.normal = k({}, r)),
            (r.gfm = k({}, r.normal, {
              nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
              table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
            })),
            (r.pedantic = k({}, r.normal, {
              html: h(
                "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
              )
                .replace("comment", r._comment)
                .replace(
                  /tag/g,
                  "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
                )
                .getRegex(),
              def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
              heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
              fences: b,
              paragraph: h(r.normal._paragraph)
                .replace("hr", r.hr)
                .replace("heading", " *#{1,6} *[^\n]")
                .replace("lheading", r.lheading)
                .replace("blockquote", " {0,3}>")
                .replace("|fences", "")
                .replace("|list", "")
                .replace("|html", "")
                .getRegex()
            })),
            (n.rules = r),
            (n.lex = function(e, t) {
              var r = new n(t);
              return r.lex(e);
            }),
            (n.prototype.lex = function(e) {
              return (
                (e = e
                  .replace(/\r\n|\r/g, "\n")
                  .replace(/\t/g, "    ")
                  .replace(/\u00a0/g, " ")
                  .replace(/\u2424/g, "\n")),
                this.token(e, !0)
              );
            }),
            (n.prototype.token = function(e, t) {
              var n, s, i, a, o, l, c, p, h, g, f, d, m, b, k, _;
              e = e.replace(/^ +$/gm, "");
              while (e)
                if (
                  ((i = this.rules.newline.exec(e)) &&
                    ((e = e.substring(i[0].length)),
                    i[0].length > 1 && this.tokens.push({ type: "space" })),
                  (i = this.rules.code.exec(e)))
                ) {
                  var x = this.tokens[this.tokens.length - 1];
                  (e = e.substring(i[0].length)),
                    x && "paragraph" === x.type
                      ? (x.text += "\n" + i[0].trimRight())
                      : ((i = i[0].replace(/^ {4}/gm, "")),
                        this.tokens.push({
                          type: "code",
                          codeBlockStyle: "indented",
                          text: this.options.pedantic ? i : v(i, "\n")
                        }));
                } else if ((i = this.rules.fences.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({
                      type: "code",
                      lang: i[2] ? i[2].trim() : i[2],
                      text: i[3] || ""
                    });
                else if ((i = this.rules.heading.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({
                      type: "heading",
                      depth: i[1].length,
                      text: i[2]
                    });
                else if (
                  (i = this.rules.nptable.exec(e)) &&
                  ((l = {
                    type: "table",
                    header: y(i[1].replace(/^ *| *\| *$/g, "")),
                    align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    cells: i[3] ? i[3].replace(/\n$/, "").split("\n") : []
                  }),
                  l.header.length === l.align.length)
                ) {
                  for (
                    e = e.substring(i[0].length), f = 0;
                    f < l.align.length;
                    f++
                  )
                    /^ *-+: *$/.test(l.align[f])
                      ? (l.align[f] = "right")
                      : /^ *:-+: *$/.test(l.align[f])
                      ? (l.align[f] = "center")
                      : /^ *:-+ *$/.test(l.align[f])
                      ? (l.align[f] = "left")
                      : (l.align[f] = null);
                  for (f = 0; f < l.cells.length; f++)
                    l.cells[f] = y(l.cells[f], l.header.length);
                  this.tokens.push(l);
                } else if ((i = this.rules.hr.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({ type: "hr" });
                else if ((i = this.rules.blockquote.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({ type: "blockquote_start" }),
                    (i = i[0].replace(/^ *> ?/gm, "")),
                    this.token(i, t),
                    this.tokens.push({ type: "blockquote_end" });
                else if ((i = this.rules.list.exec(e))) {
                  for (
                    e = e.substring(i[0].length),
                      a = i[2],
                      b = a.length > 1,
                      c = {
                        type: "list_start",
                        ordered: b,
                        start: b ? +a : "",
                        loose: !1
                      },
                      this.tokens.push(c),
                      i = i[0].match(this.rules.item),
                      p = [],
                      n = !1,
                      m = i.length,
                      f = 0;
                    f < m;
                    f++
                  )
                    (l = i[f]),
                      (g = l.length),
                      (l = l.replace(/^ *([*+-]|\d+\.) */, "")),
                      ~l.indexOf("\n ") &&
                        ((g -= l.length),
                        (l = this.options.pedantic
                          ? l.replace(/^ {1,4}/gm, "")
                          : l.replace(
                              new RegExp("^ {1," + g + "}", "gm"),
                              ""
                            ))),
                      f !== m - 1 &&
                        ((o = r.bullet.exec(i[f + 1])[0]),
                        (a.length > 1
                          ? 1 === o.length
                          : o.length > 1 ||
                            (this.options.smartLists && o !== a)) &&
                          ((e = i.slice(f + 1).join("\n") + e), (f = m - 1))),
                      (s = n || /\n\n(?!\s*$)/.test(l)),
                      f !== m - 1 &&
                        ((n = "\n" === l.charAt(l.length - 1)), s || (s = n)),
                      s && (c.loose = !0),
                      (k = /^\[[ xX]\] /.test(l)),
                      (_ = void 0),
                      k &&
                        ((_ = " " !== l[1]),
                        (l = l.replace(/^\[[ xX]\] +/, ""))),
                      (h = {
                        type: "list_item_start",
                        task: k,
                        checked: _,
                        loose: s
                      }),
                      p.push(h),
                      this.tokens.push(h),
                      this.token(l, !1),
                      this.tokens.push({ type: "list_item_end" });
                  if (c.loose)
                    for (m = p.length, f = 0; f < m; f++) p[f].loose = !0;
                  this.tokens.push({ type: "list_end" });
                } else if ((i = this.rules.html.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({
                      type: this.options.sanitize ? "paragraph" : "html",
                      pre:
                        !this.options.sanitizer &&
                        ("pre" === i[1] ||
                          "script" === i[1] ||
                          "style" === i[1]),
                      text: this.options.sanitize
                        ? this.options.sanitizer
                          ? this.options.sanitizer(i[0])
                          : u(i[0])
                        : i[0]
                    });
                else if (t && (i = this.rules.def.exec(e)))
                  (e = e.substring(i[0].length)),
                    i[3] && (i[3] = i[3].substring(1, i[3].length - 1)),
                    (d = i[1].toLowerCase().replace(/\s+/g, " ")),
                    this.tokens.links[d] ||
                      (this.tokens.links[d] = { href: i[2], title: i[3] });
                else if (
                  (i = this.rules.table.exec(e)) &&
                  ((l = {
                    type: "table",
                    header: y(i[1].replace(/^ *| *\| *$/g, "")),
                    align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    cells: i[3] ? i[3].replace(/\n$/, "").split("\n") : []
                  }),
                  l.header.length === l.align.length)
                ) {
                  for (
                    e = e.substring(i[0].length), f = 0;
                    f < l.align.length;
                    f++
                  )
                    /^ *-+: *$/.test(l.align[f])
                      ? (l.align[f] = "right")
                      : /^ *:-+: *$/.test(l.align[f])
                      ? (l.align[f] = "center")
                      : /^ *:-+ *$/.test(l.align[f])
                      ? (l.align[f] = "left")
                      : (l.align[f] = null);
                  for (f = 0; f < l.cells.length; f++)
                    l.cells[f] = y(
                      l.cells[f].replace(/^ *\| *| *\| *$/g, ""),
                      l.header.length
                    );
                  this.tokens.push(l);
                } else if ((i = this.rules.lheading.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({
                      type: "heading",
                      depth: "=" === i[2].charAt(0) ? 1 : 2,
                      text: i[1]
                    });
                else if (t && (i = this.rules.paragraph.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({
                      type: "paragraph",
                      text:
                        "\n" === i[1].charAt(i[1].length - 1)
                          ? i[1].slice(0, -1)
                          : i[1]
                    });
                else if ((i = this.rules.text.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({ type: "text", text: i[0] });
                else if (e)
                  throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
              return this.tokens;
            });
          var s = {
            escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
            autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
            url: b,
            tag:
              "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
            link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
            reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
            nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
            strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
            em: /^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
            code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
            br: /^( {2,}|\\)\n(?!\s*$)/,
            del: b,
            text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
          };
          function i(e, t) {
            if (
              ((this.options = t || w.defaults),
              (this.links = e),
              (this.rules = s.normal),
              (this.renderer = this.options.renderer || new a()),
              (this.renderer.options = this.options),
              !this.links)
            )
              throw new Error("Tokens array requires a `links` property.");
            this.options.pedantic
              ? (this.rules = s.pedantic)
              : this.options.gfm &&
                (this.options.breaks
                  ? (this.rules = s.breaks)
                  : (this.rules = s.gfm));
          }
          function a(e) {
            this.options = e || w.defaults;
          }
          function o() {}
          function l(e) {
            (this.tokens = []),
              (this.token = null),
              (this.options = e || w.defaults),
              (this.options.renderer = this.options.renderer || new a()),
              (this.renderer = this.options.renderer),
              (this.renderer.options = this.options),
              (this.slugger = new c());
          }
          function c() {
            this.seen = {};
          }
          function u(e, t) {
            if (t) {
              if (u.escapeTest.test(e))
                return e.replace(u.escapeReplace, function(e) {
                  return u.replacements[e];
                });
            } else if (u.escapeTestNoEncode.test(e))
              return e.replace(u.escapeReplaceNoEncode, function(e) {
                return u.replacements[e];
              });
            return e;
          }
          function p(e) {
            return e.replace(
              /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
              function(e, t) {
                return (
                  (t = t.toLowerCase()),
                  "colon" === t
                    ? ":"
                    : "#" === t.charAt(0)
                    ? "x" === t.charAt(1)
                      ? String.fromCharCode(parseInt(t.substring(2), 16))
                      : String.fromCharCode(+t.substring(1))
                    : ""
                );
              }
            );
          }
          function h(e, t) {
            return (
              (e = e.source || e),
              (t = t || ""),
              {
                replace: function(t, r) {
                  return (
                    (r = r.source || r),
                    (r = r.replace(/(^|[^\[])\^/g, "$1")),
                    (e = e.replace(t, r)),
                    this
                  );
                },
                getRegex: function() {
                  return new RegExp(e, t);
                }
              }
            );
          }
          function g(e, t, r) {
            if (e) {
              try {
                var n = decodeURIComponent(p(r))
                  .replace(/[^\w:]/g, "")
                  .toLowerCase();
              } catch (s) {
                return null;
              }
              if (
                0 === n.indexOf("javascript:") ||
                0 === n.indexOf("vbscript:") ||
                0 === n.indexOf("data:")
              )
                return null;
            }
            t && !m.test(r) && (r = f(t, r));
            try {
              r = encodeURI(r).replace(/%25/g, "%");
            } catch (s) {
              return null;
            }
            return r;
          }
          function f(e, t) {
            return (
              d[" " + e] ||
                (/^[^:]+:\/*[^/]*$/.test(e)
                  ? (d[" " + e] = e + "/")
                  : (d[" " + e] = v(e, "/", !0))),
              (e = d[" " + e]),
              "//" === t.slice(0, 2)
                ? e.replace(/:[\s\S]*/, ":") + t
                : "/" === t.charAt(0)
                ? e.replace(/(:\/*[^/]*)[\s\S]*/, "$1") + t
                : e + t
            );
          }
          (s._punctuation = "!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"),
            (s.em = h(s.em)
              .replace(/punctuation/g, s._punctuation)
              .getRegex()),
            (s._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
            (s._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
            (s._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
            (s.autolink = h(s.autolink)
              .replace("scheme", s._scheme)
              .replace("email", s._email)
              .getRegex()),
            (s._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
            (s.tag = h(s.tag)
              .replace("comment", r._comment)
              .replace("attribute", s._attribute)
              .getRegex()),
            (s._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
            (s._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/),
            (s._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
            (s.link = h(s.link)
              .replace("label", s._label)
              .replace("href", s._href)
              .replace("title", s._title)
              .getRegex()),
            (s.reflink = h(s.reflink)
              .replace("label", s._label)
              .getRegex()),
            (s.normal = k({}, s)),
            (s.pedantic = k({}, s.normal, {
              strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
              em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
              link: h(/^!?\[(label)\]\((.*?)\)/)
                .replace("label", s._label)
                .getRegex(),
              reflink: h(/^!?\[(label)\]\s*\[([^\]]*)\]/)
                .replace("label", s._label)
                .getRegex()
            })),
            (s.gfm = k({}, s.normal, {
              escape: h(s.escape)
                .replace("])", "~|])")
                .getRegex(),
              _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
              url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
              _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
              del: /^~+(?=\S)([\s\S]*?\S)~+/,
              text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
            })),
            (s.gfm.url = h(s.gfm.url, "i")
              .replace("email", s.gfm._extended_email)
              .getRegex()),
            (s.breaks = k({}, s.gfm, {
              br: h(s.br)
                .replace("{2,}", "*")
                .getRegex(),
              text: h(s.gfm.text)
                .replace("\\b_", "\\b_| {2,}\\n")
                .replace(/\{2,\}/g, "*")
                .getRegex()
            })),
            (i.rules = s),
            (i.output = function(e, t, r) {
              var n = new i(t, r);
              return n.output(e);
            }),
            (i.prototype.output = function(e) {
              var t,
                r,
                n,
                s,
                a,
                o,
                l = "";
              while (e)
                if ((a = this.rules.escape.exec(e)))
                  (e = e.substring(a[0].length)), (l += u(a[1]));
                else if ((a = this.rules.tag.exec(e)))
                  !this.inLink && /^<a /i.test(a[0])
                    ? (this.inLink = !0)
                    : this.inLink && /^<\/a>/i.test(a[0]) && (this.inLink = !1),
                    !this.inRawBlock &&
                    /^<(pre|code|kbd|script)(\s|>)/i.test(a[0])
                      ? (this.inRawBlock = !0)
                      : this.inRawBlock &&
                        /^<\/(pre|code|kbd|script)(\s|>)/i.test(a[0]) &&
                        (this.inRawBlock = !1),
                    (e = e.substring(a[0].length)),
                    (l += this.options.sanitize
                      ? this.options.sanitizer
                        ? this.options.sanitizer(a[0])
                        : u(a[0])
                      : a[0]);
                else if ((a = this.rules.link.exec(e))) {
                  var c = _(a[2], "()");
                  if (c > -1) {
                    var p = 4 + a[1].length + c;
                    (a[2] = a[2].substring(0, c)),
                      (a[0] = a[0].substring(0, p).trim()),
                      (a[3] = "");
                  }
                  (e = e.substring(a[0].length)),
                    (this.inLink = !0),
                    (n = a[2]),
                    this.options.pedantic
                      ? ((t = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n)),
                        t ? ((n = t[1]), (s = t[3])) : (s = ""))
                      : (s = a[3] ? a[3].slice(1, -1) : ""),
                    (n = n.trim().replace(/^<([\s\S]*)>$/, "$1")),
                    (l += this.outputLink(a, {
                      href: i.escapes(n),
                      title: i.escapes(s)
                    })),
                    (this.inLink = !1);
                } else if (
                  (a = this.rules.reflink.exec(e)) ||
                  (a = this.rules.nolink.exec(e))
                ) {
                  if (
                    ((e = e.substring(a[0].length)),
                    (t = (a[2] || a[1]).replace(/\s+/g, " ")),
                    (t = this.links[t.toLowerCase()]),
                    !t || !t.href)
                  ) {
                    (l += a[0].charAt(0)), (e = a[0].substring(1) + e);
                    continue;
                  }
                  (this.inLink = !0),
                    (l += this.outputLink(a, t)),
                    (this.inLink = !1);
                } else if ((a = this.rules.strong.exec(e)))
                  (e = e.substring(a[0].length)),
                    (l += this.renderer.strong(
                      this.output(a[4] || a[3] || a[2] || a[1])
                    ));
                else if ((a = this.rules.em.exec(e)))
                  (e = e.substring(a[0].length)),
                    (l += this.renderer.em(
                      this.output(a[6] || a[5] || a[4] || a[3] || a[2] || a[1])
                    ));
                else if ((a = this.rules.code.exec(e)))
                  (e = e.substring(a[0].length)),
                    (l += this.renderer.codespan(u(a[2].trim(), !0)));
                else if ((a = this.rules.br.exec(e)))
                  (e = e.substring(a[0].length)), (l += this.renderer.br());
                else if ((a = this.rules.del.exec(e)))
                  (e = e.substring(a[0].length)),
                    (l += this.renderer.del(this.output(a[1])));
                else if ((a = this.rules.autolink.exec(e)))
                  (e = e.substring(a[0].length)),
                    "@" === a[2]
                      ? ((r = u(this.mangle(a[1]))), (n = "mailto:" + r))
                      : ((r = u(a[1])), (n = r)),
                    (l += this.renderer.link(n, null, r));
                else if (this.inLink || !(a = this.rules.url.exec(e))) {
                  if ((a = this.rules.text.exec(e)))
                    (e = e.substring(a[0].length)),
                      this.inRawBlock
                        ? (l += this.renderer.text(
                            this.options.sanitize
                              ? this.options.sanitizer
                                ? this.options.sanitizer(a[0])
                                : u(a[0])
                              : a[0]
                          ))
                        : (l += this.renderer.text(u(this.smartypants(a[0]))));
                  else if (e)
                    throw new Error(
                      "Infinite loop on byte: " + e.charCodeAt(0)
                    );
                } else {
                  if ("@" === a[2]) (r = u(a[0])), (n = "mailto:" + r);
                  else {
                    do {
                      (o = a[0]), (a[0] = this.rules._backpedal.exec(a[0])[0]);
                    } while (o !== a[0]);
                    (r = u(a[0])), (n = "www." === a[1] ? "http://" + r : r);
                  }
                  (e = e.substring(a[0].length)),
                    (l += this.renderer.link(n, null, r));
                }
              return l;
            }),
            (i.escapes = function(e) {
              return e ? e.replace(i.rules._escapes, "$1") : e;
            }),
            (i.prototype.outputLink = function(e, t) {
              var r = t.href,
                n = t.title ? u(t.title) : null;
              return "!" !== e[0].charAt(0)
                ? this.renderer.link(r, n, this.output(e[1]))
                : this.renderer.image(r, n, u(e[1]));
            }),
            (i.prototype.smartypants = function(e) {
              return this.options.smartypants
                ? e
                    .replace(/---/g, "—")
                    .replace(/--/g, "–")
                    .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
                    .replace(/'/g, "’")
                    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
                    .replace(/"/g, "”")
                    .replace(/\.{3}/g, "…")
                : e;
            }),
            (i.prototype.mangle = function(e) {
              if (!this.options.mangle) return e;
              for (var t, r = "", n = e.length, s = 0; s < n; s++)
                (t = e.charCodeAt(s)),
                  Math.random() > 0.5 && (t = "x" + t.toString(16)),
                  (r += "&#" + t + ";");
              return r;
            }),
            (a.prototype.code = function(e, t, r) {
              var n = (t || "").match(/\S*/)[0];
              if (this.options.highlight) {
                var s = this.options.highlight(e, n);
                null != s && s !== e && ((r = !0), (e = s));
              }
              return n
                ? '<pre><code class="' +
                    this.options.langPrefix +
                    u(n, !0) +
                    '">' +
                    (r ? e : u(e, !0)) +
                    "</code></pre>\n"
                : "<pre><code>" + (r ? e : u(e, !0)) + "</code></pre>";
            }),
            (a.prototype.blockquote = function(e) {
              return "<blockquote>\n" + e + "</blockquote>\n";
            }),
            (a.prototype.html = function(e) {
              return e;
            }),
            (a.prototype.heading = function(e, t, r, n) {
              return this.options.headerIds
                ? "<h" +
                    t +
                    ' id="' +
                    this.options.headerPrefix +
                    n.slug(r) +
                    '">' +
                    e +
                    "</h" +
                    t +
                    ">\n"
                : "<h" + t + ">" + e + "</h" + t + ">\n";
            }),
            (a.prototype.hr = function() {
              return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
            }),
            (a.prototype.list = function(e, t, r) {
              var n = t ? "ol" : "ul",
                s = t && 1 !== r ? ' start="' + r + '"' : "";
              return "<" + n + s + ">\n" + e + "</" + n + ">\n";
            }),
            (a.prototype.listitem = function(e) {
              return "<li>" + e + "</li>\n";
            }),
            (a.prototype.checkbox = function(e) {
              return (
                "<input " +
                (e ? 'checked="" ' : "") +
                'disabled="" type="checkbox"' +
                (this.options.xhtml ? " /" : "") +
                "> "
              );
            }),
            (a.prototype.paragraph = function(e) {
              return "<p>" + e + "</p>\n";
            }),
            (a.prototype.table = function(e, t) {
              return (
                t && (t = "<tbody>" + t + "</tbody>"),
                "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
              );
            }),
            (a.prototype.tablerow = function(e) {
              return "<tr>\n" + e + "</tr>\n";
            }),
            (a.prototype.tablecell = function(e, t) {
              var r = t.header ? "th" : "td",
                n = t.align
                  ? "<" + r + ' align="' + t.align + '">'
                  : "<" + r + ">";
              return n + e + "</" + r + ">\n";
            }),
            (a.prototype.strong = function(e) {
              return "<strong>" + e + "</strong>";
            }),
            (a.prototype.em = function(e) {
              return "<em>" + e + "</em>";
            }),
            (a.prototype.codespan = function(e) {
              return "<code>" + e + "</code>";
            }),
            (a.prototype.br = function() {
              return this.options.xhtml ? "<br/>" : "<br>";
            }),
            (a.prototype.del = function(e) {
              return "<del>" + e + "</del>";
            }),
            (a.prototype.link = function(e, t, r) {
              if (
                ((e = g(this.options.sanitize, this.options.baseUrl, e)),
                null === e)
              )
                return r;
              var n = '<a href="' + u(e) + '"';
              return (
                t && (n += ' title="' + t + '"'), (n += ">" + r + "</a>"), n
              );
            }),
            (a.prototype.image = function(e, t, r) {
              if (
                ((e = g(this.options.sanitize, this.options.baseUrl, e)),
                null === e)
              )
                return r;
              var n = '<img src="' + e + '" alt="' + r + '"';
              return (
                t && (n += ' title="' + t + '"'),
                (n += this.options.xhtml ? "/>" : ">"),
                n
              );
            }),
            (a.prototype.text = function(e) {
              return e;
            }),
            (o.prototype.strong = o.prototype.em = o.prototype.codespan = o.prototype.del = o.prototype.text = function(
              e
            ) {
              return e;
            }),
            (o.prototype.link = o.prototype.image = function(e, t, r) {
              return "" + r;
            }),
            (o.prototype.br = function() {
              return "";
            }),
            (l.parse = function(e, t) {
              var r = new l(t);
              return r.parse(e);
            }),
            (l.prototype.parse = function(e) {
              (this.inline = new i(e.links, this.options)),
                (this.inlineText = new i(
                  e.links,
                  k({}, this.options, { renderer: new o() })
                )),
                (this.tokens = e.reverse());
              var t = "";
              while (this.next()) t += this.tok();
              return t;
            }),
            (l.prototype.next = function() {
              return (this.token = this.tokens.pop()), this.token;
            }),
            (l.prototype.peek = function() {
              return this.tokens[this.tokens.length - 1] || 0;
            }),
            (l.prototype.parseText = function() {
              var e = this.token.text;
              while ("text" === this.peek().type) e += "\n" + this.next().text;
              return this.inline.output(e);
            }),
            (l.prototype.tok = function() {
              switch (this.token.type) {
                case "space":
                  return "";
                case "hr":
                  return this.renderer.hr();
                case "heading":
                  return this.renderer.heading(
                    this.inline.output(this.token.text),
                    this.token.depth,
                    p(this.inlineText.output(this.token.text)),
                    this.slugger
                  );
                case "code":
                  return this.renderer.code(
                    this.token.text,
                    this.token.lang,
                    this.token.escaped
                  );
                case "table":
                  var e,
                    t,
                    r,
                    n,
                    s = "",
                    i = "";
                  for (r = "", e = 0; e < this.token.header.length; e++)
                    r += this.renderer.tablecell(
                      this.inline.output(this.token.header[e]),
                      { header: !0, align: this.token.align[e] }
                    );
                  for (
                    s += this.renderer.tablerow(r), e = 0;
                    e < this.token.cells.length;
                    e++
                  ) {
                    for (
                      t = this.token.cells[e], r = "", n = 0;
                      n < t.length;
                      n++
                    )
                      r += this.renderer.tablecell(this.inline.output(t[n]), {
                        header: !1,
                        align: this.token.align[n]
                      });
                    i += this.renderer.tablerow(r);
                  }
                  return this.renderer.table(s, i);
                case "blockquote_start":
                  i = "";
                  while ("blockquote_end" !== this.next().type) i += this.tok();
                  return this.renderer.blockquote(i);
                case "list_start":
                  i = "";
                  var a = this.token.ordered,
                    o = this.token.start;
                  while ("list_end" !== this.next().type) i += this.tok();
                  return this.renderer.list(i, a, o);
                case "list_item_start":
                  i = "";
                  var l = this.token.loose,
                    c = this.token.checked,
                    u = this.token.task;
                  this.token.task && (i += this.renderer.checkbox(c));
                  while ("list_item_end" !== this.next().type)
                    i +=
                      l || "text" !== this.token.type
                        ? this.tok()
                        : this.parseText();
                  return this.renderer.listitem(i, u, c);
                case "html":
                  return this.renderer.html(this.token.text);
                case "paragraph":
                  return this.renderer.paragraph(
                    this.inline.output(this.token.text)
                  );
                case "text":
                  return this.renderer.paragraph(this.parseText());
                default:
                  var h =
                    'Token with "' + this.token.type + '" type was not found.';
                  if (!this.options.silent) throw new Error(h);
                  console.log(h);
              }
            }),
            (c.prototype.slug = function(e) {
              var t = e
                .toLowerCase()
                .trim()
                .replace(
                  /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
                  ""
                )
                .replace(/\s/g, "-");
              if (this.seen.hasOwnProperty(t)) {
                var r = t;
                do {
                  this.seen[r]++, (t = r + "-" + this.seen[r]);
                } while (this.seen.hasOwnProperty(t));
              }
              return (this.seen[t] = 0), t;
            }),
            (u.escapeTest = /[&<>"']/),
            (u.escapeReplace = /[&<>"']/g),
            (u.replacements = {
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;"
            }),
            (u.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/),
            (u.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g);
          var d = {},
            m = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
          function b() {}
          function k(e) {
            for (var t, r, n = 1; n < arguments.length; n++)
              for (r in ((t = arguments[n]), t))
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e;
          }
          function y(e, t) {
            var r = e.replace(/\|/g, function(e, t, r) {
                var n = !1,
                  s = t;
                while (--s >= 0 && "\\" === r[s]) n = !n;
                return n ? "|" : " |";
              }),
              n = r.split(/ \|/),
              s = 0;
            if (n.length > t) n.splice(t);
            else while (n.length < t) n.push("");
            for (; s < n.length; s++) n[s] = n[s].trim().replace(/\\\|/g, "|");
            return n;
          }
          function v(e, t, r) {
            if (0 === e.length) return "";
            var n = 0;
            while (n < e.length) {
              var s = e.charAt(e.length - n - 1);
              if (s !== t || r) {
                if (s === t || !r) break;
                n++;
              } else n++;
            }
            return e.substr(0, e.length - n);
          }
          function _(e, t) {
            if (-1 === e.indexOf(t[1])) return -1;
            for (var r = 0, n = 0; n < e.length; n++)
              if ("\\" === e[n]) n++;
              else if (e[n] === t[0]) r++;
              else if (e[n] === t[1] && (r--, r < 0)) return n;
            return -1;
          }
          function x(e) {
            e &&
              e.sanitize &&
              !e.silent &&
              console.warn(
                "marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"
              );
          }
          function w(e, t, r) {
            if ("undefined" === typeof e || null === e)
              throw new Error("marked(): input parameter is undefined or null");
            if ("string" !== typeof e)
              throw new Error(
                "marked(): input parameter is of type " +
                  Object.prototype.toString.call(e) +
                  ", string expected"
              );
            if (r || "function" === typeof t) {
              r || ((r = t), (t = null)),
                (t = k({}, w.defaults, t || {})),
                x(t);
              var s,
                i,
                a = t.highlight,
                o = 0;
              try {
                s = n.lex(e, t);
              } catch (p) {
                return r(p);
              }
              i = s.length;
              var c = function(e) {
                if (e) return (t.highlight = a), r(e);
                var n;
                try {
                  n = l.parse(s, t);
                } catch (p) {
                  e = p;
                }
                return (t.highlight = a), e ? r(e) : r(null, n);
              };
              if (!a || a.length < 3) return c();
              if ((delete t.highlight, !i)) return c();
              for (; o < s.length; o++)
                (function(e) {
                  "code" !== e.type
                    ? --i || c()
                    : a(e.text, e.lang, function(t, r) {
                        return t
                          ? c(t)
                          : null == r || r === e.text
                          ? --i || c()
                          : ((e.text = r), (e.escaped = !0), void (--i || c()));
                      });
                })(s[o]);
            } else
              try {
                return (
                  t && (t = k({}, w.defaults, t)), x(t), l.parse(n.lex(e, t), t)
                );
              } catch (p) {
                if (
                  ((p.message +=
                    "\nPlease report this to https://github.com/markedjs/marked."),
                  (t || w.defaults).silent)
                )
                  return (
                    "<p>An error occurred:</p><pre>" +
                    u(p.message + "", !0) +
                    "</pre>"
                  );
                throw p;
              }
          }
          (b.exec = b),
            (w.options = w.setOptions = function(e) {
              return k(w.defaults, e), w;
            }),
            (w.getDefaults = function() {
              return {
                baseUrl: null,
                breaks: !1,
                gfm: !0,
                headerIds: !0,
                headerPrefix: "",
                highlight: null,
                langPrefix: "language-",
                mangle: !0,
                pedantic: !1,
                renderer: new a(),
                sanitize: !1,
                sanitizer: null,
                silent: !1,
                smartLists: !1,
                smartypants: !1,
                xhtml: !1
              };
            }),
            (w.defaults = w.getDefaults()),
            (w.Parser = l),
            (w.parser = l.parse),
            (w.Renderer = a),
            (w.TextRenderer = o),
            (w.Lexer = n),
            (w.lexer = n.lex),
            (w.InlineLexer = i),
            (w.inlineLexer = i.output),
            (w.Slugger = c),
            (w.parse = w),
            (e.exports = w);
        })(this || ("undefined" !== typeof window && window));
      }.call(this, r("c8ba")));
    },
    "3ad6": function(e, t, r) {
      "use strict";
      r.r(t);
      var n = function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("div", { staticClass: "article-page" }, [
            r("div", { staticClass: "banner" }, [
              r(
                "div",
                { staticClass: "container" },
                [
                  r("h1", [e._v(e._s(e.article.title))]),
                  r("RwvArticleMeta", {
                    attrs: { article: e.article, actions: !0 }
                  })
                ],
                1
              )
            ]),
            r("div", { staticClass: "container page" }, [
              r("div", { staticClass: "row article-content" }, [
                r("div", { staticClass: "col-xs-12" }, [
                  r("div", {
                    domProps: {
                      innerHTML: e._s(e.parseMarkdown(e.article.body))
                    }
                  }),
                  r(
                    "ul",
                    { staticClass: "tag-list" },
                    e._l(e.article.tagList, function(e, t) {
                      return r(
                        "li",
                        { key: e + t },
                        [
                          r("RwvTag", {
                            attrs: {
                              name: e,
                              className: "tag-default tag-pill tag-outline"
                            }
                          })
                        ],
                        1
                      );
                    }),
                    0
                  )
                ])
              ]),
              r("hr"),
              r("div", { staticClass: "row" }, [
                r(
                  "div",
                  { staticClass: "col-xs-12 col-md-12" },
                  [
                    e._l(e.comments, function(t, n) {
                      return r("RwvComment", {
                        key: n,
                        attrs: { slug: e.slug, comment: t }
                      });
                    }),
                    e.isAuthenticated
                      ? r("RwvCommentEditor", {
                          attrs: {
                            slug: e.slug,
                            userImage: e.currentUser.image
                          }
                        })
                      : r(
                          "p",
                          [
                            r(
                              "router-link",
                              { attrs: { to: { name: "login" } } },
                              [e._v("Sign in")]
                            ),
                            e._v("\n          or\n          "),
                            r(
                              "router-link",
                              { attrs: { to: { name: "register" } } },
                              [e._v("sign up")]
                            ),
                            e._v(
                              "\n          to add comments on this article.\n        "
                            )
                          ],
                          1
                        )
                  ],
                  2
                )
              ])
            ])
          ]);
        },
        s = [],
        i = (r("8e6e"), r("456d"), r("bd86")),
        a = (r("ac6a"), r("5df3"), r("2f62")),
        o = r("0e54"),
        l = r.n(o),
        c = r("4360"),
        u = r("f1f8"),
        p = function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("div", { staticClass: "card" }, [
            r("div", { staticClass: "card-block" }, [
              r("p", { staticClass: "card-text" }, [e._v(e._s(e.comment.body))])
            ]),
            r(
              "div",
              { staticClass: "card-footer" },
              [
                r("a", { staticClass: "comment-author", attrs: { href: "" } }, [
                  r("img", {
                    staticClass: "comment-author-img",
                    attrs: { src: e.comment.author.image }
                  })
                ]),
                r(
                  "router-link",
                  {
                    staticClass: "comment-author",
                    attrs: {
                      to: {
                        name: "profile",
                        params: { username: e.comment.author.username }
                      }
                    }
                  },
                  [
                    e._v(
                      "\n      " + e._s(e.comment.author.username) + "\n    "
                    )
                  ]
                ),
                r("span", { staticClass: "date-posted" }, [
                  e._v(e._s(e._f("date")(e.comment.createdAt)))
                ]),
                e.isCurrentUser
                  ? r("span", { staticClass: "mod-options" }, [
                      r("i", {
                        staticClass: "ion-trash-a",
                        on: {
                          click: function(t) {
                            return e.destroy(e.slug, e.comment.id);
                          }
                        }
                      })
                    ])
                  : e._e()
              ],
              1
            )
          ]);
        },
        h = [],
        g = r("6c33");
      function f(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(r, !0).forEach(function(t) {
                Object(i["a"])(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : f(r).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var m = {
          name: "RwvComment",
          props: {
            slug: { type: String, required: !0 },
            comment: { type: Object, required: !0 }
          },
          computed: d(
            {
              isCurrentUser: function() {
                return (
                  !(
                    !this.currentUser.username || !this.comment.author.username
                  ) &&
                  this.comment.author.username === this.currentUser.username
                );
              }
            },
            Object(a["b"])(["currentUser"])
          ),
          methods: {
            destroy: function(e, t) {
              this.$store.dispatch(g["i"], { slug: e, commentId: t });
            }
          }
        },
        b = m,
        k = r("2877"),
        y = Object(k["a"])(b, p, h, !1, null, null, null),
        v = y.exports,
        _ = function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r(
            "div",
            [
              r("RwvListErrors", { attrs: { errors: e.errors } }),
              r(
                "form",
                {
                  staticClass: "card comment-form",
                  on: {
                    submit: function(t) {
                      return t.preventDefault(), e.onSubmit(e.slug, e.comment);
                    }
                  }
                },
                [
                  r("div", { staticClass: "card-block" }, [
                    r("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.comment,
                          expression: "comment"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { placeholder: "Write a comment...", rows: "3" },
                      domProps: { value: e.comment },
                      on: {
                        input: function(t) {
                          t.target.composing || (e.comment = t.target.value);
                        }
                      }
                    })
                  ]),
                  e._m(0)
                ]
              )
            ],
            1
          );
        },
        x = [
          function() {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r("div", { staticClass: "card-footer" }, [
              r("button", { staticClass: "btn btn-sm btn-primary" }, [
                e._v("Post Comment")
              ])
            ]);
          }
        ],
        w = r("e98d"),
        O = {
          name: "RwvCommentEditor",
          components: { RwvListErrors: w["a"] },
          props: {
            slug: { type: String, required: !0 },
            content: { type: String, required: !1 },
            userImage: { type: String, required: !1 }
          },
          data: function() {
            return { comment: this.content || null, errors: {} };
          },
          methods: {
            onSubmit: function(e, t) {
              var r = this;
              this.$store
                .dispatch(g["h"], { slug: e, comment: t })
                .then(function() {
                  (r.comment = null), (r.errors = {});
                })
                .catch(function(e) {
                  var t = e.response;
                  r.errors = t.data.errors;
                });
            }
          }
        },
        $ = O,
        C = Object(k["a"])($, _, x, !1, null, null, null),
        A = C.exports,
        S = r("f53f");
      function j(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? j(r, !0).forEach(function(t) {
                Object(i["a"])(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : j(r).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var P = {
          name: "rwv-article",
          props: { slug: { type: String, required: !0 } },
          components: {
            RwvArticleMeta: u["a"],
            RwvComment: v,
            RwvCommentEditor: A,
            RwvTag: S["a"]
          },
          beforeRouteEnter: function(e, t, r) {
            Promise.all([
              c["a"].dispatch(g["l"], e.params.slug),
              c["a"].dispatch(g["n"], e.params.slug)
            ]).then(function() {
              r();
            });
          },
          computed: R(
            {},
            Object(a["b"])([
              "article",
              "currentUser",
              "comments",
              "isAuthenticated"
            ])
          ),
          methods: {
            parseMarkdown: function(e) {
              return l()(e);
            }
          }
        },
        z = P,
        E = Object(k["a"])(z, n, s, !1, null, null, null);
      t["default"] = E.exports;
    },
    e98d: function(e, t, r) {
      "use strict";
      var n = function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r(
            "ul",
            { staticClass: "error-messages" },
            e._l(e.errors, function(t, n) {
              return r(
                "li",
                { key: n },
                [
                  r("span", { domProps: { textContent: e._s(n) } }),
                  e._l(t, function(t) {
                    return r("span", {
                      key: t,
                      domProps: { textContent: e._s(t) }
                    });
                  })
                ],
                2
              );
            }),
            0
          );
        },
        s = [],
        i = {
          name: "RwvListErorrs",
          props: { errors: { type: Object, required: !0 } }
        },
        a = i,
        o = r("2877"),
        l = Object(o["a"])(a, n, s, !1, null, null, null);
      t["a"] = l.exports;
    },
    f1f8: function(e, t, r) {
      "use strict";
      var n = function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r(
            "div",
            { staticClass: "article-meta" },
            [
              r("div", { staticClass: "info" }, [
                r("span", { staticClass: "date" }, [
                  e._v(e._s(e._f("date")(e.article.createdAt)))
                ])
              ]),
              e.actions
                ? r("rwv-article-actions", {
                    attrs: { article: e.article, canModify: e.isCurrentUser() }
                  })
                : r(
                    "button",
                    {
                      staticClass: "btn btn-sm pull-xs-right",
                      class: {
                        "btn-primary": e.article.favorited,
                        "btn-outline-primary": !e.article.favorited
                      },
                      on: { click: e.toggleFavorite }
                    },
                    [
                      r("i", { staticClass: "ion-heart" }),
                      r("span", { staticClass: "counter" }, [
                        e._v(" " + e._s(e.article.favoritesCount) + " ")
                      ])
                    ]
                  )
            ],
            1
          );
        },
        s = [],
        i = (r("8e6e"), r("ac6a"), r("456d"), r("bd86")),
        a = r("2f62"),
        o = function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return e.canModify
            ? r(
                "span",
                [
                  r(
                    "router-link",
                    {
                      staticClass: "btn btn-sm btn-outline-secondary",
                      attrs: { to: e.editArticleLink }
                    },
                    [
                      r("i", { staticClass: "ion-edit" }),
                      r("span", [e._v(" Edit")])
                    ]
                  ),
                  r("span", [e._v("  ")]),
                  r(
                    "button",
                    {
                      staticClass: "btn btn-outline-danger btn-sm",
                      on: { click: e.deleteArticle }
                    },
                    [
                      r("i", { staticClass: "ion-trash-a" }),
                      r("span", [e._v(" Delete")])
                    ]
                  )
                ],
                1
              )
            : r("span", [
                r(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-outline-secondary",
                    on: { click: e.toggleFollow }
                  },
                  [
                    r("i", { staticClass: "ion-plus-round" }),
                    r("span", [e._v(" ")]),
                    r("span", {
                      domProps: { textContent: e._s(e.followUserLabel) }
                    })
                  ]
                ),
                r("span", [e._v("  ")]),
                r(
                  "button",
                  {
                    staticClass: "btn btn-sm",
                    class: e.toggleFavoriteButtonClasses,
                    on: { click: e.toggleFavorite }
                  },
                  [
                    r("i", { staticClass: "ion-heart" }),
                    r("span", [e._v(" ")]),
                    r("span", {
                      domProps: { textContent: e._s(e.favoriteArticleLabel) }
                    }),
                    r("span", [e._v(" ")]),
                    r("span", {
                      staticClass: "counter",
                      domProps: { textContent: e._s(e.favoriteCounter) }
                    })
                  ]
                )
              ]);
        },
        l = [],
        c = (r("96cf"), r("3b8d")),
        u = r("6c33");
      function p(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(r, !0).forEach(function(t) {
                Object(i["a"])(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(r).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var g = {
          name: "RwvArticleActions",
          props: {
            article: { type: Object, required: !0 },
            canModify: { type: Boolean, required: !0 }
          },
          computed: h({}, Object(a["b"])(["profile", "isAuthenticated"]), {
            editArticleLink: function() {
              return {
                name: "article-edit",
                params: { slug: this.article.slug }
              };
            },
            toggleFavoriteButtonClasses: function() {
              return {
                "btn-primary": this.article.favorited,
                "btn-outline-primary": !this.article.favorited
              };
            },
            followUserLabel: function() {
              return ""
                .concat(this.profile.following ? "Unfollow" : "Follow", " ")
                .concat(this.article.author.username);
            },
            favoriteArticleLabel: function() {
              return this.article.favorited
                ? "Unfavorite Article"
                : "Favorite Article";
            },
            favoriteCounter: function() {
              return "(".concat(this.article.favoritesCount, ")");
            }
          }),
          methods: {
            toggleFavorite: function() {
              if (this.isAuthenticated) {
                var e = this.article.favorited ? u["k"] : u["j"];
                this.$store.dispatch(e, this.article.slug);
              } else this.$router.push({ name: "login" });
            },
            toggleFollow: function() {
              if (this.isAuthenticated) {
                var e = this.article.following ? u["q"] : u["p"];
                this.$store.dispatch(e, { username: this.profile.username });
              } else this.$router.push({ name: "login" });
            },
            deleteArticle: (function() {
              var e = Object(c["a"])(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(
                    function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              this.$store.dispatch(u["a"], this.article.slug)
                            );
                          case 3:
                            this.$router.push("/"), (e.next = 9);
                            break;
                          case 6:
                            (e.prev = 6),
                              (e.t0 = e["catch"](0)),
                              console.error(e.t0);
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[0, 6]]
                  );
                })
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })()
          }
        },
        f = g,
        d = r("2877"),
        m = Object(d["a"])(f, o, l, !1, null, null, null),
        b = m.exports;
      function k(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? k(r, !0).forEach(function(t) {
                Object(i["a"])(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : k(r).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var v = {
          name: "RwvArticleMeta",
          components: { RwvArticleActions: b },
          props: {
            article: { type: Object, required: !0 },
            actions: { type: Boolean, required: !1, default: !1 }
          },
          computed: y({}, Object(a["b"])(["currentUser", "isAuthenticated"])),
          methods: {
            isCurrentUser: function() {
              return (
                !(
                  !this.currentUser.username || !this.article.author.username
                ) && this.currentUser.username === this.article.author.username
              );
            },
            toggleFavorite: function() {
              if (this.isAuthenticated) {
                var e = this.article.favorited ? u["k"] : u["j"];
                this.$store.dispatch(e, this.article.slug);
              } else this.$router.push({ name: "login" });
            }
          }
        },
        _ = v,
        x = Object(d["a"])(_, n, s, !1, null, null, null);
      t["a"] = x.exports;
    },
    f53f: function(e, t, r) {
      "use strict";
      var n = function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("router-link", {
            class: e.className,
            attrs: { to: e.homeRoute },
            domProps: { textContent: e._s(e.name) }
          });
        },
        s = [],
        i = {
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
        a = i,
        o = r("2877"),
        l = Object(o["a"])(a, n, s, !1, null, null, null);
      t["a"] = l.exports;
    }
  }
]);
//# sourceMappingURL=chunk-52fabea2.d079063a.js.map
