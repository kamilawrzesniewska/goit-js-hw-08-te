function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return l.Date.now()};function p(e,t,n){var i,r,o,u,a,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function h(e){return c=e,a=setTimeout(j,t),l?y(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=o}function j(){var e=m();if(S(e))return w(e);a=setTimeout(j,function(e){var n=t-(e-f);return s?v(n,o-(e-c)):n}(e))}function w(e){return a=void 0,p&&i?y(e):(i=r=void 0,u)}function O(){var e=m(),n=S(e);if(i=arguments,r=this,f=e,n){if(void 0===a)return h(f);if(s)return a=setTimeout(j,t),y(f)}return void 0===a&&(a=setTimeout(j,t)),u}return t=g(t)||0,b(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(g(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=f=r=a=void 0},O.flush=function(){return void 0===a?u:w(m())},O}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:i,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),h=document.querySelector("input"),S=document.querySelector("textarea"),j={};y.addEventListener("submit",(function(e){if(e.preventDefault(),""===h.value||""===S.value)return alert("Please, fill in form fields and push the button «Submit»");console.log(j),e.target.reset(),localStorage.removeItem("feedback-form-state")})),y.addEventListener("input",e(t)((function(e){j[h.name]=h.value,j[S.name]=S.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);if(!t)return;h.value=t.email,S.value=t.message}();
//# sourceMappingURL=03-feedback.21e8fd8b.js.map
