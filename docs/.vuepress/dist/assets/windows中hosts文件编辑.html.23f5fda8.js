import{_ as s,o as e,c as n,e as a}from"./app.8bf42852.js";const t="/Tips/assets/1580716905891.f8e8b005.png",i="/Tips/assets/1580716879177.4a504d86.png",o="/Tips/assets/1580716858740.3221bfd0.png",c={},p=a('<h1 id="windows\u4E2Dhosts\u6587\u4EF6\u7F16\u8F91" tabindex="-1"><a class="header-anchor" href="#windows\u4E2Dhosts\u6587\u4EF6\u7F16\u8F91" aria-hidden="true">#</a> windows\u4E2Dhosts\u6587\u4EF6\u7F16\u8F91</h1><h5 id="\u8BA9\u5F53\u524D\u7528\u6237\u53EF\u4EE5\u76F4\u63A5\u7F16\u8F91" tabindex="-1"><a class="header-anchor" href="#\u8BA9\u5F53\u524D\u7528\u6237\u53EF\u4EE5\u76F4\u63A5\u7F16\u8F91" aria-hidden="true">#</a> \u8BA9\u5F53\u524D\u7528\u6237\u53EF\u4EE5\u76F4\u63A5\u7F16\u8F91</h5><p>\u8FDB\u5165\u76EE\u5F55 <code>C:\\Windows\\System32\\drivers\\etc</code></p><p>\u7F16\u8F91 <code>hosts</code> \u7684\u5C5E\u6027</p><p><img src="'+t+'" alt="1580716905891"></p><p>\u6DFB\u52A0\u4F7F\u7528\u7684\u8D26\u6237</p><p><img src="'+i+'" alt="1580716879177"></p><p>\u7ED9\u6307\u5B9A\u8D26\u6237\u6DFB\u52A0\u6743\u9650</p><p><img src="'+o+`" alt="1580716858740"></p><h5 id="\u5728windows\u4E2D\u7528vbs\u811A\u672C\u5FEB\u901F\u7528\u7F16\u8F91\u5668\u6253\u5F00hosts\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5728windows\u4E2D\u7528vbs\u811A\u672C\u5FEB\u901F\u7528\u7F16\u8F91\u5668\u6253\u5F00hosts\u6587\u4EF6" aria-hidden="true">#</a> \u5728windows\u4E2D\u7528vbs\u811A\u672C\u5FEB\u901F\u7528\u7F16\u8F91\u5668\u6253\u5F00hosts\u6587\u4EF6</h5><p>\u539F\u7406, notepad \u548C sublime \u90FD\u652F\u6301\u4F20\u5165\u6587\u4EF6\u8DEF\u5F84\u4F5C\u4E3A\u53C2\u6570\u542F\u52A8</p><ul><li>notepad <code>notepad C:\\Windows\\System32\\drivers\\etc\\hosts</code></li><li>sublime <code>sublime\xA0C:\\Windows\\System32\\drivers\\etc\\hosts</code></li></ul><p>openByNotepad.vbs</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Dim ws
Set ws <span class="token operator">=</span> CreateObject<span class="token punctuation">(</span><span class="token string">&quot;WScript.Shell&quot;</span><span class="token punctuation">)</span>
ws.Exec<span class="token punctuation">(</span><span class="token string">&quot;notepad C:\\Windows\\System32\\drivers<span class="token entity" title="\\e">\\e</span>tc\\hosts&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>openBySublime.vbs</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Dim ws
Set ws <span class="token operator">=</span> CreateObject<span class="token punctuation">(</span><span class="token string">&quot;WScript.Shell&quot;</span><span class="token punctuation">)</span>
ws.Exec<span class="token punctuation">(</span><span class="token string">&quot;C:\\APP\\Sublime Text 3\\sublime_text.exe C:\\Windows\\System32\\drivers<span class="token entity" title="\\e">\\e</span>tc\\hosts&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),d=[p];function l(r,u){return e(),n("div",null,d)}const m=s(c,[["render",l],["__file","windows\u4E2Dhosts\u6587\u4EF6\u7F16\u8F91.html.vue"]]);export{m as default};
