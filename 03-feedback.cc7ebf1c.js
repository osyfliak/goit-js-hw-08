function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,c=l||f||Function("return this")(),s=Object.prototype.toString,v=Math.max,d=Math.min,m=function(){return c.Date.now()};function g(e,t,n){var o,i,r,a,u,l,f=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,f=t,a=e.apply(r,n)}function S(e){return f=e,u=setTimeout(E,t),c?y(e):a}function j(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-f>=r}function E(){var e=m();if(j(e))return h(e);u=setTimeout(E,function(e){var n=t-(e-l);return s?d(n,r-(e-f)):n}(e))}function h(e){return u=void 0,g&&o?y(e):(o=i=void 0,a)}function w(){var e=m(),n=j(e);if(o=arguments,i=this,l=e,n){if(void 0===u)return S(l);if(s)return u=setTimeout(E,t),y(l)}return void 0===u&&(u=setTimeout(E,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?v(b(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==u&&clearTimeout(u),f=0,o=l=i=u=void 0},w.flush=function(){return void 0===u?a:h(m())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};const y={form:document.querySelector(".feedback-form"),labelEmail:document.querySelector("input"),labelMessage:document.querySelector("textarea")};y.form.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem("email-value"),localStorage.removeItem("message-value")})),y.labelEmail.addEventListener("input",e(t)((function(e){const t=e.target.value;localStorage.setItem("email-value",t)}),500)),y.labelMessage.addEventListener("input",e(t)((function(e){const t=e.target.value;localStorage.setItem("message-value",t)}),500)),function(){const e=localStorage.getItem("email-value"),t=localStorage.getItem("message-value");(e||t)&&(y.labelEmail.value=e,y.labelMessage.value=t)}();
//# sourceMappingURL=03-feedback.cc7ebf1c.js.map