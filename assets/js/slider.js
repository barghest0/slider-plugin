(()=>{"use strict";const t=class{constructor(t={}){this.subscribers=t}subscribe(t,e){this.subscribers[t]=this.subscribers[t]||[],this.subscribers[t].push(e)}unsubscribe(t,e){this.subscribers[t]=this.subscribers[t].filter((t=>e!==t))}notify(t,...e){this.subscribers[t].forEach((t=>{t(...e)}))}getSubscribers(){return this.subscribers}},e=function(t){this.thumbs[t].style[this.view.offsetDirection]=`${this.getOffset()[t]}%`},i={min:0,max:100,step:10,value:[0],isRange:!1,direction:"horizontal",hasFill:!0,hasTips:!0,hasScale:!0,isDecimal:!1,decimalPlaces:0},s=100,a=function(t){const e=+!t,i=0===t,s=this.view.getValue()[0]>this.view.getValue()[1],a=this.view.getValue()[1]<this.view.getValue()[0];return s&&i||a&&!i?e:t};var l,r,h,n,c;!function(t){t.updateThumb="UpdateThumb",t.updateThumbAfterTrackClick="UpdateThumbAfterTrackClick",t.updateFill="UpdateFill",t.updateThumbView="UpdateThumbView",t.updateFillView="UpdateFillView",t.updateParams="UpdateParams",t.updatePanelValues="UpdatePanelValues"}(l||(l={})),function(t){t.horizontal="horizontal",t.vertical="vertical"}(r||(r={})),function(t){t.min="min",t.max="max",t.step="step",t.value="value",t.isRange="isRange",t.direction="direction",t.hasFill="hasFill",t.hasTips="hasTips",t.hasScale="hasScale",t.isDecimal="isDecimal",t.decimalPlaces="decimalPlaces",t.datafirstValue="firstValue",t.dataSecondValue="secondValue"}(h||(h={})),function(t){t.left="left",t.top="top"}(n||(n={})),function(t){t.width="width",t.height="height"}(c||(c={}));const d=function(t){const e=this.thumbs[t],i=e=>{!function(t,e,i){const{direction:s,isRange:a,hasFill:h}=e.view.getParams(),{DOMroot:n}=e.view,c=e.view.getSize(),d=s===r.horizontal?t.pageX:t.pageY,u=e.view.calculateCursorOffset(d,s,n,c),o=a?e.validateCollision(i):i;e.notify(l.updateThumb,o,u),h&&e.notify(l.updateFill)}(e,this,t)},s=t=>{t.preventDefault(),t.stopPropagation(),document.addEventListener("pointermove",i)};e.addEventListener("pointerdown",s),e.addEventListener("touchstart",s),document.addEventListener("pointerup",(()=>{document.removeEventListener("pointermove",i)}))},u="slider__thumb",o=class extends t{constructor(t){super(),this.view=t,this.offset=[],this.activeStance=0,this.thumbs=[],this.updateThumbStyle=e.bind(this),this.validateCollision=a.bind(this),this.dragAndDropThumb=d.bind(this)}setOffset(t,e){this.offset[t]=e}getOffset(){return this.offset}renderThumb(t){const e=document.createElement("div");e.classList.add(u),e.classList.add(`js-${u}-${t}`),e.classList.add(`${u}-${t}`),this.thumbs.push(e),this.view.DOMroot.appendChild(e),this.updateThumbStyle(t)}},m="slider__scale-mark",f=[3,5,7,11];function p(t,e){for(const i of e)if(t%i==0)return i;return p(t-1,e)}const b=function(t,e,i,a){const l=Math.round((e-t)/i+1),h=l-1,n=p(h,f);let c=Math.max(Math.floor(h/n),1);c=c<15?Math.min(c,n):c;const d=Math.abs(e-t),u=Math.ceil(l/c),o=u-1,m=Math.floor(d/i)>u?Math.round(Math.round(d/i)/o)*i:i;return{values:new Array(u).fill(null).map(((i,s)=>{let a=t+m*s;return a=Math.min(a,e),s===o&&(a=e),Number(a.toFixed(1))})),offsets:new Array(u).fill(null).map(((t,e)=>{let i=Math.abs(m/d)*e*s;return i=Math.min(s,i),e===o&&(i=s),a===r.vertical&&(i=Math.abs(s-i)),Number(i.toFixed(1))}))}},w=function(t,e,i,s){const a=b(i,e,t,s);for(let t=0;t<a.values.length;t+=1){const e=document.createElement("div");e.classList.add(m),e.classList.add(`${m}_${s}`),e.classList.add(`js-${m}_${s}`);const i=a.offsets[t];e.style[this.view.offsetDirection]=`${i}%`;const l=document.createElement("div");l.classList.add("slider__scale-number"),l.classList.add(`slider__scale-number_${s}`),l.classList.add(`js-slider__scale-number_${s}`),l.innerHTML=a.values[t].toString(),e.appendChild(l),this.scale.appendChild(e)}},v=function(){this.view.getParams().isRange?(this.fill.style[this.view.offsetDirection]=`${this.getState().fillOffset}%`,this.fill.style[this.view.fillDirection]=`${this.getState().fillSize}%`):this.fill.style[this.view.fillDirection]=`${this.getState().fillSize}%`},S=class extends t{constructor(t){super(),this.fill=document.querySelector(".slider__fill"),this.view=t,this.state={fillOffset:0,fillSize:0},this.updateFillStyle=v.bind(this)}setState({fillOffset:t,fillSize:e}){this.state.fillOffset=t,this.state.fillSize=e}getState(){return this.state}renderFill(t){const e=document.createElement("div");e.classList.add("slider__fill"),e.classList.add("js-slider__fill"),e.classList.add(`slider__fill_${t}`),this.fill=e,this.view.DOMroot.appendChild(e),this.updateFillStyle()}},g=class extends t{constructor(t){super(),this.view=t,this.track=document.querySelector(".slider__track")}renderTrack(t){const e=document.createElement("div");e.classList.add("slider__track"),e.classList.add("js-slider__track"),e.classList.add(`slider__track_${t}`),this.track=e,this.view.DOMroot.appendChild(e)}clickTrack(){this.view.DOMroot.addEventListener("pointerdown",(t=>function(t,e){const{direction:i,hasFill:s}=e.view.getParams(),{DOMroot:a}=e.view,h=e.view.getSize(),n=i===r.horizontal?t.pageX:t.pageY,c=e.view.calculateCursorOffset(n,i,a,h);e.notify(l.updateThumbAfterTrackClick,c),s&&e.notify(l.updateFill)}(t,this)))}},V=function(t){this.tips[t].style[this.view.offsetDirection]=`${this.getOffset()[t]}%`,this.tips[t].innerHTML=this.view.getValue()[t].toFixed(this.view.getParams().decimalPlaces)},T=class extends t{constructor(t){super(),this.view=t,this.offset=[],this.tips=[],this.updateTipStyle=V.bind(this)}setOffset(t,e){this.offset[t]=e}getOffset(){return this.offset}renderTip(t,e){const i=document.createElement("div");i.classList.add("slider__tip"),i.classList.add(`js-slider__tip-${t}`),i.classList.add(`slider__tip-${t}`),i.classList.add(`slider__tip_${e}`),this.tips.push(i),this.view.DOMroot.appendChild(i),this.updateTipStyle(t)}},O=function(t){this.offsetDirection=t===r.horizontal?n.left:n.top,this.fillDirection=t===r.horizontal?c.width:c.height},F=function(t,e,i,a){return e===r.horizontal?(t-i.offsetLeft)/a*s:(t-i.offsetTop)/a*s},M=class extends t{constructor(t){super(),this.DOMroot=t,this.thumbView=new o(this),this.trackView=new g(this),this.scaleView=new class{constructor(t){this.view=t,this.scale=document.querySelector(".slider__scale"),this.renderScaleMarks=w.bind(this)}renderScale(t){const e=document.createElement("div");e.classList.add("slider__scale"),e.classList.add("js-slider__scale"),e.classList.add(`slider__scale_${t}`),this.scale=e,this.view.DOMroot.appendChild(e)}}(this),this.fillView=new S(this),this.tipView=new T(this),this.params=i,this.size=0,this.offsetDirection=n.left,this.fillDirection=c.width,this.prepareDirectionForInteraction=O.bind(this),this.calculateCursorOffset=F.bind(this)}setParams(t){this.params=t}setParam(t,e){this.params[t]=e}setSize(t){this.size=t}getParams(){return this.params}getSize(){return this.size}setValue(t,e){this.params.value[t]=e}getValue(){return this.params.value}},D=function(t){const{direction:e}=this.getParams();return e===r.horizontal?t:100-t},P=function(t){const{min:e,max:i,direction:s}=this.getParams();this.getOffset()[t]>100&&(this.setOffset(t,100),this.setValue(t,s===r.horizontal?i:e)),this.getOffset()[t]<0&&(this.setOffset(t,0),this.setValue(t,s===r.horizontal?e:i))},_=function({min:t,max:e,value:i,decimalPlaces:s,step:a,isRange:l,direction:r,hasFill:h,hasTips:n,hasScale:c,isDecimal:d,panel:u}){const o=i,m=function(t,e,i){let s=Math.min(Math.abs(e-i),Math.abs(t));return 0===s&&(s=1),s}(a,t,e),f=function(t,e,i){return Math.min(e-i,t)}(t,e,m),p=function(t,e,i){const s=Math.min(t,e);return i?s:0}(s,3,d);return o[0]=function(t,e,i){const s=t;return s[0]=Math.max(e,s[0]),s[0]=Math.min(i,s[0]),s[0]}(o,t,e),l&&(o.length,o[1]=function(t,e,i){const s=t;return s[1]=Math.max(e,t[1]),s[1]=Math.min(i,t[1]),s[1]=Math.max(s[0],s[1]),s[1]}(o,t,e)),{min:f,max:e,step:m,value:o,decimalPlaces:p,isDecimal:d,isRange:l,direction:r,hasFill:h,hasTips:n,hasScale:c,panel:u}},L=class extends t{constructor(t){super(),this.DOMroot=t,this.params=i,this.thumbsOffset=[],this.fillState={fillOffset:0,fillSize:0},this.size=0,this.endsValidation=P.bind(this),this.prepareOffset=D.bind(this),this.validateParams=_.bind(this)}setParams(t){this.params=this.validateParams(t)}setParam(t,e){this.params[t]=e}getParams(){return this.params}setSize(t){this.size=t}getSize(){return this.size}setValue(t,e){const{decimalPlaces:i}=this.params;this.params.value[t]=Number(e.toFixed(i))}getValue(){const{value:t}=this.params;return t}setOffset(t,e){this.thumbsOffset[t]=e}getOffset(){return this.thumbsOffset}calculateOffset(t){const{min:e,max:i,value:a}=this.params;return this.prepareOffset((a[t]-e)/((i-e)/s))}updateThumb(t,e){const i=this.prepareOffset(e),s=this.calculateStepPercent(),a=Math.round(i/s)*s;this.setValue(t,this.calculateValue(a,s)),this.setOffset(t,this.calculateOffset(t)),this.endsValidation(t),this.notify(l.updateThumbView,t,this.getParams())}updateThumbAfterTrackClick(t){const{fillOffset:e,fillSize:i}=this.getFillState();let s=0;t>i/2+e&&(s=1),s=this.chooseCorrectStance(s),this.updateThumb(s,t)}updateFill(){this.setFillState(this.calculateFillState()),this.notify(l.updateFillView)}setFillState(t){this.fillState=t}getFillState(){return this.fillState}calculateFillState(){return{fillOffset:this.calculateFillOffset(),fillSize:this.calculateFillSize()}}chooseCorrectStance(t){const{isRange:e,direction:i}=this.getParams();return i===r.vertical?Number(!t):e?t:0}calculateFillSize(){const{isRange:t}=this.params;return t?this.calculateBasedOnDirection(this.thumbsOffset[0],this.thumbsOffset[1]):this.prepareOffset(this.thumbsOffset[0])}calculateBasedOnDirection(t,e){const{direction:i}=this.getParams();return i===r.horizontal?e-t:t-e}calculateFillOffset(){const{isRange:t,direction:e}=this.params;return t?e===r.horizontal?this.thumbsOffset[0]:this.thumbsOffset[1]:0}calculateStepPercent(){const{max:t,min:e,step:i}=this.params;return s/((t-e)/i)}calculateValue(t,e){const{step:i,min:s}=this.params;return t/e*i+s}},k=function(){const{direction:t}=this.model.getParams(),e=t===r.horizontal?r.vertical:r.horizontal;this.DOMroot.classList.remove(`slider_${e}`),this.DOMparent.classList.remove(`slider-parent_${e}`),this.DOMroot.innerHTML=""},z=function(){$(this.DOMroot.classList[0]).off()},x=function(){return this.view.thumbView.subscribe(l.updateThumb,this.updateThumb),this.view.trackView.subscribe(l.updateThumbAfterTrackClick,this.updateThumbAfterTrackClick),this.model.subscribe(l.updateThumbView,this.updateThumbView),this.model.getParams().hasFill&&(this.model.subscribe(l.updateFillView,this.updateFillView),this.view.thumbView.subscribe(l.updateFill,this.updateFill),this.view.trackView.subscribe(l.updateFill,this.updateFill)),this.model.getParams().hasTips&&this.model.subscribe(l.updateThumbView,this.updateTipView),this},y=function(t){const e=this.model.getOffset()[t];this.view.tipView.setOffset(t,e),this.view.tipView.updateTipStyle(t)},C=function(){const t=this.model.getFillState();this.view.fillView.setState(t),this.view.fillView.updateFillStyle()},R=function(){const{isRange:t}=this.model.getParams();return this.view.thumbView.dragAndDropThumb(0),this.view.trackView.clickTrack(),t&&this.view.thumbView.dragAndDropThumb(1),this},E=function(t){this.model.updateThumbAfterTrackClick(t)},A=function(t,e){this.model.updateThumb(t,e)},N=function(){this.model.updateFill()},j=function(t){const e=this.model.getOffset()[t];this.view.thumbView.setOffset(t,e),this.view.thumbView.updateThumbStyle(t),this.view.thumbView.activeStance=t},B=function(){return this.view.thumbView.unsubscribe(l.updateThumb,this.updateThumb),this.view.trackView.unsubscribe(l.updateThumbAfterTrackClick,this.updateThumbAfterTrackClick),this.model.unsubscribe(l.updateThumbView,this.updateThumbView),this.getParams().hasFill||(this.model.unsubscribe(l.updateFillView,this.updateFillView),this.view.thumbView.unsubscribe(l.updateFill,this.updateFill),this.view.trackView.unsubscribe(l.updateFill,this.updateFill)),this.getParams().hasTips||this.model.unsubscribe(l.updateThumbView,this.updateTipView),this};function U({min:t,max:e,value:s,decimalPlaces:a,step:l,isRange:r,direction:h,hasFill:n,hasTips:c,hasScale:d,isDecimal:u,panel:o}){const m=null!=t?t:i.min,f=null!=e?e:i.max,p=null!=a?a:i.decimalPlaces,b=null!=l?l:i.step,w=null!=r?r:i.isRange,v=null!=h?h:i.direction,S=null!=n?n:i.hasFill,g=null!=c?c:i.hasTips,V=null!=d?d:i.hasScale,T=null!=u?u:i.isDecimal,O=null!=o?o:i.panel;let F=null!=s?s:i.value;return Array.isArray(F)||(F=[F]),r&&1===F.length&&F.push(F[0]),{min:m,max:f,value:F,decimalPlaces:p,step:b,isRange:w,direction:v,hasFill:S,hasTips:g,hasScale:V,isDecimal:T,panel:O}}$.fn.extend({slider:function(t){const e=this[0],i=U(t||{}),s=function(t,e){let i;return i=t.data(h.datafirstValue)&&t.data(h.dataSecondValue)?[Number(t.data(h.datafirstValue)),Number(t.data(h.dataSecondValue))]:Number(t.data(h.datafirstValue))||Number(t.data(h.dataSecondValue))?[Number(t.data(h.datafirstValue))]||0:e.value,{min:Number(t.data(h.min))||e.min,max:Number(t.data(h.max))||e.max,value:i,decimalPlaces:Number(t.data(h.decimalPlaces))||e.decimalPlaces,step:Number(t.data(h.step))||e.step,isRange:Boolean(t.data(h.isRange))||e.isRange,direction:t.data(h.direction)||e.direction,hasFill:Boolean(t.data(h.hasFill))||e.hasFill,hasTips:Boolean(t.data(h.hasTips))||e.hasTips,hasScale:Boolean(t.data(h.hasScale))||e.hasScale,isDecimal:Boolean(t.data(h.isDecimal))||e.isDecimal}}($(e),i);return new class{constructor(t,e){this.params=e,this.DOMroot=t,this.DOMparent=t.parentElement,this.presenter=new class{constructor(t,e,i){this.DOMroot=e,this.DOMparent=i,this.model=new L(this.DOMroot),this.view=new M(this.DOMroot),this.params=t,this.clearHTML=k.bind(this),this.removeListeners=z.bind(this),this.subscribe=x.bind(this),this.unsubscribe=B.bind(this),this.updateThumbAfterTrackClick=E.bind(this),this.updateThumb=A.bind(this),this.updateFill=N.bind(this),this.updateThumbView=j.bind(this),this.updateTipView=y.bind(this),this.updateFillView=C.bind(this),this.addListeners=R.bind(this)}init(){this.setParams(this.params),this.createSlider(),this.subscribe(),this.addListeners()}rerender(t){this.setParams(t),this.view.thumbView.thumbs=[],this.view.tipView.tips=[],this.unsubscribe(),this.clearHTML(),this.removeListeners(),this.createSlider(),this.subscribe(),this.addListeners()}setParams(t){this.params=t}getParams(){return this.params}createSlider(){this.addSliderClasses(this.params.direction).setModelState().setViewState().setSubViewsState().renderSlider()}setModelState(){this.model.setParams(this.params);const t=this.model.getParams().direction===r.horizontal?this.DOMroot.offsetWidth:this.DOMroot.offsetHeight;return this.model.setSize(t),this.model.getParams().value.forEach(((t,e)=>{this.model.setOffset(e,this.model.calculateOffset(e))})),this.model.setFillState(this.model.calculateFillState()),this}addSliderClasses(t){return this.DOMroot.classList.add("slider"),this.DOMroot.classList.add("js-slider"),this.DOMroot.classList.add(`slider_${t}`),this.DOMroot.classList.add(`js-slider_${t}`),this.DOMparent.classList.add(`slider-parent_${t}`),this}setViewState(){return this.view.setParams(this.model.getParams()),this.view.setSize(this.model.getSize()),this.view.prepareDirectionForInteraction(this.model.getParams().direction),this}setSubViewsState(){const{hasTips:t,hasFill:e}=this.model.getParams(),i=this.model.getValue(),s=this.model.getFillState();return i.forEach(((e,i)=>{this.setThumbViewState(i),t&&this.setTipViewState(i)})),e&&this.setFillViewState(s),this}setThumbViewState(t){const e=this.model.getOffset()[t];this.view.thumbView.setOffset(t,e)}setFillViewState(t){this.view.fillView.setState(t)}setTipViewState(t){const e=this.model.getOffset()[t];this.view.tipView.setOffset(t,e)}renderSlider(){const{direction:t,hasFill:e,hasScale:i,hasTips:s,isRange:a}=this.model.getParams();this.renderTrack(t),this.renderThumb(0),s&&this.renderTip(0,t),i&&this.renderScale(t),e&&this.renderFill(t),a&&(this.renderThumb(1),s&&this.renderTip(1,t))}renderTrack(t){this.view.trackView.renderTrack(t)}renderThumb(t){this.view.thumbView.renderThumb(t)}renderTip(t,e){this.view.tipView.renderTip(t,e)}renderFill(t){this.view.fillView.renderFill(t)}renderScale(t){const{step:e,max:i,min:s}=this.model.getParams();this.view.scaleView.renderScale(t),this.view.scaleView.renderScaleMarks(e,i,s,t)}}(this.params,this.DOMroot,this.DOMparent),this.init()}getParams(){return this.params}getContainer(){return this.DOMroot}getParent(){return this.DOMparent}unsubscribe(){this.presenter.unsubscribe()}updateParams(t){this.presenter.rerender(U(t)),this.params=this.presenter.model.getParams()}subscribe(t){this.presenter.model.subscribe(l.updateThumbView,t)}init(){this.presenter.init(),this.attachResizeListener()}attachResizeListener(){window.addEventListener("resize",(()=>this.presenter.rerender(this.params)))}}(e,s)}}),document.querySelectorAll('[data-slider="true"]').forEach((t=>{$(t).slider()}))})();