!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var r,o,a,u,l,f,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function S(e){return c=e,l=setTimeout(w,t),d?p(e):u}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=a}function w(){var e=g();if(h(e))return E(e);l=setTimeout(w,function(e){var n=t-(e-f);return s?b(n,a-(e-c)):n}(e))}function E(e){return l=void 0,v&&r?p(e):(r=o=void 0,u)}function T(){var e=g(),n=h(e);if(r=arguments,o=this,f=e,n){if(void 0===l)return S(f);if(s)return l=setTimeout(w,t),p(f)}return void 0===l&&(l=setTimeout(w,t)),u}return t=j(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=f=o=l=void 0},T.flush=function(){return void 0===l?u:E(g())},T}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||l.test(t)?f(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};var S={form:document.querySelector(".feedback-form"),labelEmail:document.querySelector("input"),labelMessage:document.querySelector("textarea")};S.form.addEventListener("submit",(function(e){e.preventDefault(),""===S.labelEmail.value||""===S.labelMessage.value?alert("Будь ласка, заповніть всі поля"):(e.target.reset(),localStorage.removeItem("email-value"),localStorage.removeItem("message-value"))})),S.labelEmail.addEventListener("input",e(t)((function(e){var t=e.target.value;localStorage.setItem("email-value",t)}),500)),S.labelMessage.addEventListener("input",e(t)((function(e){var t=e.target.value;localStorage.setItem("message-value",t)}),500))}();
//# sourceMappingURL=03-feedback.ace1a858.js.map