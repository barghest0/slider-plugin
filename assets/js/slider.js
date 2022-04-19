(()=>{"use strict";const t={min:0,max:100,step:10,value:[0],isRange:!1,direction:"horizontal",hasFill:!0,hasTips:!0,hasScale:!0,isDecimal:!1,decimalPlaces:0},e=100;var s,i,a,r;!function(t){t.horizontal="horizontal",t.vertical="vertical"}(s||(s={})),function(t){t.min="min",t.max="max",t.step="step",t.value="value",t.isRange="isRange",t.direction="direction",t.hasFill="hasFill",t.hasTips="hasTips",t.hasScale="hasScale",t.isDecimal="isDecimal",t.decimalPlaces="decimalPlaces",t.dataFirstValue="firstValue",t.dataSecondValue="secondValue"}(i||(i={})),function(t){t.left="left",t.top="top"}(a||(a={})),function(t){t.width="width",t.height="height"}(r||(r={}));const l=function(){const{direction:t}=this.model.getParams(),e=t===s.horizontal?s.vertical:s.horizontal;this.DOMroot.classList.remove(`slider_${e}`),this.DOMparent.classList.remove(`slider-parent_${e}`),this.DOMroot.innerHTML=""},h=function(){$(this.DOMroot.classList[0]).off()};var n,c;!function(t){t.updateThumbView="UpdateThumbView",t.updateFillView="UpdateFillView",t.updateParams="UpdateParams",t.updatePanelValues="UpdatePanelValues",t.getSliderParams="GetSliderParams"}(n||(n={})),function(t){t.updateThumb="UpdateThumb",t.updateThumbAfterTrackClick="UpdateThumbAfterTrackClick"}(c||(c={}));const d=function(){return this.view.thumbView.subscribe(c.updateThumb,this.updateThumb),this.view.trackView.subscribe(c.updateThumbAfterTrackClick,this.updateThumbAfterTrackClick),this.model.subscribe(n.getSliderParams,this.getSliderParams),this.model.subscribe(n.updateThumbView,this.updateThumbView),this.model.getParams().hasFill&&this.model.subscribe(n.updateFillView,this.updateFillView),this.model.getParams().hasTips&&this.model.subscribe(n.updateThumbView,this.updateTipView),this},u=function(){const t=this.model.getActiveStance(),e=this.model.getOffset()[t];this.view.tipView.setOffset(t,e),this.view.tipView.updateTipStyle(t)},o=function(){const t=this.model.getFillState();this.view.fillView.setState(t),this.view.fillView.updateFillStyle()},m=function(){const{isRange:t}=this.model.getParams();return this.view.thumbView.dragAndDropThumb(0),this.view.trackView.clickTrack(),t&&this.view.thumbView.dragAndDropThumb(1),this},f=function(){const t=this.view.trackView.getCursorOffset();this.model.updateThumbAfterTrackClick(t)},p=function(){const t=this.view.thumbView.getActiveStance(),e=this.view.thumbView.getCursorOffset();this.model.updateThumb(t,e)},b=function(){const t=this.model.getActiveStance(),e=this.model.getOffset()[t];this.view.thumbView.setOffset(t,e),this.view.thumbView.setActiveStance(t),this.view.thumbView.updateThumbStyle(t)},w=function(){return this.view.thumbView.unsubscribe(c.updateThumb,this.updateThumb),this.view.trackView.unsubscribe(c.updateThumbAfterTrackClick,this.updateThumbAfterTrackClick),this.model.unsubscribe(n.getSliderParams,this.getSliderParams),this.model.unsubscribe(n.updateThumbView,this.updateThumbView),this.getParams().hasFill||this.model.unsubscribe(n.updateFillView,this.updateFillView),this.getParams().hasTips||this.model.unsubscribe(n.updateThumbView,this.updateTipView),this},v=function(t){return t},S=function(t){this.thumbs[t].style[this.view.offsetDirection]=`${this.getOffset()[t]}%`},g=function(t){const e=Number(!t),s=0===t,i=this.view.getValue()[0]>this.view.getValue()[1],a=this.view.getValue()[1]<this.view.getValue()[0];return i&&s||a&&!s?e:t},T=function(t){const e=this.thumbs[t],s=e=>{this.handleThumbDrag(e,t)},i=t=>{t.preventDefault(),t.stopPropagation(),document.addEventListener("pointermove",s)};e.addEventListener("pointerdown",i),e.addEventListener("touchstart",i),document.addEventListener("pointerup",(()=>{document.removeEventListener("pointermove",s)}))},O=function(t,e){const{direction:i,isRange:a}=this.view.getParams(),{DOMroot:r}=this.view,l=this.view.getSize(),h=i===s.horizontal?t.pageX:t.pageY,n=this.view.calculateCursorOffset(h,i,r,l),d=a?this.validateCollision(e):e;this.setCursorOffset(n),this.setActiveStance(d),this.notify(c.updateThumb)},V="slider__thumb",P=class{constructor(t={}){this.subscribers=t}subscribe(t,e){this.subscribers[t]=this.subscribers[t]||[],this.subscribers[t].push(e)}unsubscribe(t,e){this.subscribers[t]=this.subscribers[t].filter((t=>e!==t))}notify(e,s=t){this.subscribers[e].forEach((t=>{t(s)}))}getSubscribers(){return this.subscribers}},M=class extends P{constructor(t){super(),this.view=t,this.offset=[],this.activeStance=0,this.cursorOffset=0,this.thumbs=[],this.updateThumbStyle=S.bind(this),this.validateCollision=g.bind(this),this.dragAndDropThumb=T.bind(this),this.handleThumbDrag=O.bind(this)}setOffset(t,e){this.offset[t]=e}getOffset(){return this.offset}setCursorOffset(t){this.cursorOffset=t}getCursorOffset(){return this.cursorOffset}setActiveStance(t){this.activeStance=t}getActiveStance(){return this.activeStance}renderThumb(t){const e=document.createElement("div");e.classList.add(V),e.classList.add(`js-${V}-${t}`),e.classList.add(`${V}-${t}`),this.thumbs.push(e),this.view.DOMroot.appendChild(e),this.updateThumbStyle(t)}},D="slider__scale-mark",F=[3,5,7,11];function L(t,e){for(const s of e)if(t%s==0)return s;return L(t-1,e)}const _=function(t,i,a,r){const l=Math.round((i-t)/a+1),h=l-1,n=L(h,F);let c=Math.max(Math.floor(h/n),1);c=c<15?Math.min(c,n):c;const d=Math.abs(i-t),u=Math.ceil(l/c),o=u-1,m=Math.floor(d/a)>u?Math.round(Math.round(d/a)/o)*a:a;return{values:new Array(u).fill(null).map(((e,s)=>{let a=t+m*s;return a=Math.min(a,i),s===o&&(a=i),Number(a.toFixed(1))})),offsets:new Array(u).fill(null).map(((t,i)=>{let a=Math.abs(m/d)*i*e;return a=Math.min(e,a),i===o&&(a=e),r===s.vertical&&(a=Math.abs(e-a)),Number(a.toFixed(1))}))}},z=function(t,e,s,i){const a=_(s,e,t,i);for(let t=0;t<a.values.length;t+=1){const e=document.createElement("div");e.classList.add(D),e.classList.add(`${D}_${i}`),e.classList.add(`js-${D}_${i}`);const s=a.offsets[t];e.style[this.view.offsetDirection]=`${s}%`;const r=document.createElement("div");r.classList.add("slider__scale-number"),r.classList.add(`slider__scale-number_${i}`),r.classList.add(`js-slider__scale-number_${i}`),r.innerHTML=a.values[t].toString(),e.appendChild(r),this.scale.appendChild(e)}},k=function(){this.view.getParams().isRange?(this.fill.style[this.view.offsetDirection]=`${this.getState().fillOffset}%`,this.fill.style[this.view.fillDirection]=`${this.getState().fillSize}%`):this.fill.style[this.view.fillDirection]=`${this.getState().fillSize}%`},C=function(){this.view.DOMroot.addEventListener("pointerdown",this.handleTrackClick)},A=function(t){const{direction:e}=this.view.getParams(),{DOMroot:i}=this.view,a=this.view.getSize(),r=e===s.horizontal?t.pageX:t.pageY,l=this.view.calculateCursorOffset(r,e,i,a);this.setCursorOffset(l),this.notify(c.updateThumbAfterTrackClick)},x=class extends P{constructor(t){super(),this.view=t,this.cursorOffset=0,this.clickTrack=C.bind(this),this.handleTrackClick=A.bind(this)}setCursorOffset(t){this.cursorOffset=t}getCursorOffset(){return this.cursorOffset}renderTrack(t){const e=document.createElement("div");e.classList.add("slider__track"),e.classList.add("js-slider__track"),e.classList.add(`slider__track_${t}`),this.track=e,this.view.DOMroot.appendChild(e)}},y=function(t){this.tips[t].style[this.view.offsetDirection]=`${this.getOffset()[t]}%`,this.tips[t].innerHTML=this.view.getValue()[t].toFixed(this.view.getParams().decimalPlaces)},R=function(t){this.offsetDirection=t===s.horizontal?a.left:a.top,this.fillDirection=t===s.horizontal?r.width:r.height},E=function(t,i,a,r){return i===s.horizontal?(t-a.offsetLeft)/r*e:(t-a.offsetTop)/r*e},N=function(t){const{direction:e}=this.getParams();return e===s.horizontal?t:100-t},j=function(t){const{min:e,max:i,direction:a}=this.getParams();this.getOffset()[t]>100&&(this.setOffset(t,100),this.setValue(t,a===s.horizontal?i:e)),this.getOffset()[t]<0&&(this.setOffset(t,0),this.setValue(t,a===s.horizontal?e:i))},B=function({min:t,max:e,value:s,decimalPlaces:i,step:a,isRange:r,direction:l,hasFill:h,hasTips:n,hasScale:c,isDecimal:d,panel:u}){const o=s,m=function(t,e,s){let i=Math.min(Math.abs(e-s),Math.abs(t));return 0===i&&(i=1),i}(a,t,e),f=function(t,e,s){return Math.min(e-s,t)}(t,e,m),p=function(t,e,s){const i=Math.min(t,e);return s?i:0}(i,3,d);return o[0]=function(t,e,s){const i=t;return i[0]=Math.max(e,i[0]),i[0]=Math.min(s,i[0]),i[0]}(o,t,e),r&&(o[1]=function(t,e,s){const i=t;return i[1]=Math.max(e,t[1]),i[1]=Math.min(s,t[1]),i[1]=Math.max(i[0],i[1]),i[1]}(o,t,e)),{min:f,max:e,step:m,value:o,decimalPlaces:p,isDecimal:d,isRange:r,direction:l,hasFill:h,hasTips:n,hasScale:c,panel:u}},H=class extends P{constructor(e){super(),this.DOMroot=e,this.params=t,this.thumbsOffset=[],this.fillState={fillOffset:0,fillSize:0},this.size=0,this.activeStance=0,this.endsValidation=j.bind(this),this.prepareOffset=N.bind(this),this.validateParams=B.bind(this)}setParams(t){this.params=this.validateParams(t)}setParam(t,e){this.params[t]=e}getParams(){return this.params}setSize(t){this.size=t}getSize(){return this.size}setValue(t,e){const{decimalPlaces:s}=this.params;this.params.value[t]=Number(e.toFixed(s))}getValue(){const{value:t}=this.params;return t}setOffset(t,e){this.thumbsOffset[t]=e}getOffset(){return this.thumbsOffset}setActiveStance(t){this.activeStance=t}getActiveStance(){return this.activeStance}calculateOffset(t){const{min:s,max:i,value:a}=this.params;return this.prepareOffset((a[t]-s)/((i-s)/e))}updateThumb(t,e){const s=this.prepareOffset(e),i=this.calculateStepPercent(),a=Math.round(s/i)*i;this.setValue(t,this.calculateValue(a,i)),this.setOffset(t,this.calculateOffset(t)),this.endsValidation(t),this.setActiveStance(t),this.notify(n.updateThumbView),this.params.hasFill&&this.updateFill(),this.notify(n.getSliderParams,this.getParams())}updateThumbAfterTrackClick(t){const{fillOffset:e,fillSize:s}=this.getFillState();let i=0;t>s/2+e&&(i=1),i=this.chooseCorrectStance(i),this.updateThumb(i,t)}updateFill(){this.setFillState(this.calculateFillState()),this.notify(n.updateFillView)}setFillState(t){this.fillState=t}getFillState(){return this.fillState}calculateFillState(){return{fillOffset:this.calculateFillOffset(),fillSize:this.calculateFillSize()}}chooseCorrectStance(t){const{isRange:e,direction:i}=this.getParams();return i===s.vertical?Number(!t):e?t:0}calculateFillSize(){const{isRange:t}=this.params;return t?this.calculateBasedOnDirection(this.thumbsOffset[0],this.thumbsOffset[1]):this.prepareOffset(this.thumbsOffset[0])}calculateBasedOnDirection(t,e){const{direction:i}=this.getParams();return i===s.horizontal?e-t:t-e}calculateFillOffset(){const{isRange:t,direction:e}=this.params;return t?e===s.horizontal?this.thumbsOffset[0]:this.thumbsOffset[1]:0}calculateStepPercent(){const{max:t,min:s,step:i}=this.params;return e/((t-s)/i)}calculateValue(t,e){const{step:s,min:i}=this.params;return t/e*s+i}};function U({min:e,max:s,value:i,decimalPlaces:a,step:r,isRange:l,direction:h,hasFill:n,hasTips:c,hasScale:d,isDecimal:u,panel:o}){const m=null!=e?e:t.min,f=null!=s?s:t.max,p=null!=a?a:t.decimalPlaces,b=null!=r?r:t.step,w=null!=l?l:t.isRange,v=null!=h?h:t.direction,S=null!=n?n:t.hasFill,g=null!=c?c:t.hasTips,T=null!=d?d:t.hasScale,O=null!=u?u:t.isDecimal,V=null!=o?o:t.panel;let P=null!=i?i:t.value;return Array.isArray(P)||(P=[P]),l&&1===P.length&&P.push(P[0]),{min:m,max:f,value:P,decimalPlaces:p,step:b,isRange:w,direction:v,hasFill:S,hasTips:g,hasScale:T,isDecimal:O,panel:V}}$.fn.extend({slider:function(e){const c=this[0],S=U(e||{}),g=function(t,e){let s;const a=t.data(i.dataFirstValue)&&t.data(i.dataSecondValue),r=t.data(i.dataFirstValue)||t.data(i.dataSecondValue);return s=a?[Number(t.data(i.dataFirstValue)),Number(t.data(i.dataSecondValue))]:r?[Number(t.data(i.dataFirstValue))]||0:e.value,{min:Number(t.data(i.min))||e.min,max:Number(t.data(i.max))||e.max,value:s,decimalPlaces:Number(t.data(i.decimalPlaces))||e.decimalPlaces,step:Number(t.data(i.step))||e.step,isRange:Boolean(t.data(i.isRange))||e.isRange,direction:t.data(i.direction)||e.direction,hasFill:Boolean(t.data(i.hasFill))||e.hasFill,hasTips:Boolean(t.data(i.hasTips))||e.hasTips,hasScale:Boolean(t.data(i.hasScale))||e.hasScale,isDecimal:Boolean(t.data(i.isDecimal))||e.isDecimal}}($(c),S);return new class{constructor(e,i){this.params=i,this.DOMroot=e,this.DOMparent=e.parentElement,this.presenter=new class{constructor(e,s,i){this.DOMroot=s,this.DOMparent=i,this.model=new H(this.DOMroot),this.view=new class{constructor(e){this.DOMroot=e,this.thumbView=new M(this),this.trackView=new x(this),this.scaleView=new class{constructor(t){this.view=t,this.renderScaleMarks=z.bind(this)}renderScale(t){const e=document.createElement("div");e.classList.add("slider__scale"),e.classList.add("js-slider__scale"),e.classList.add(`slider__scale_${t}`),this.scale=e,this.view.DOMroot.appendChild(e)}}(this),this.fillView=new class{constructor(t){this.view=t,this.state={fillOffset:0,fillSize:0},this.updateFillStyle=k.bind(this)}setState({fillOffset:t,fillSize:e}){this.state.fillOffset=t,this.state.fillSize=e}getState(){return this.state}renderFill(t){const e=document.createElement("div");e.classList.add("slider__fill"),e.classList.add("js-slider__fill"),e.classList.add(`slider__fill_${t}`),this.fill=e,this.view.DOMroot.appendChild(e),this.updateFillStyle()}}(this),this.tipView=new class{constructor(t){this.view=t,this.offset=[],this.tips=[],this.updateTipStyle=y.bind(this)}setOffset(t,e){this.offset[t]=e}getOffset(){return this.offset}renderTip(t,e){const s=document.createElement("div");s.classList.add("slider__tip"),s.classList.add(`js-slider__tip-${t}`),s.classList.add(`slider__tip-${t}`),s.classList.add(`slider__tip_${e}`),this.tips.push(s),this.view.DOMroot.appendChild(s),this.updateTipStyle(t)}}(this),this.params=t,this.size=0,this.offsetDirection=a.left,this.fillDirection=r.width,this.prepareDirectionForInteraction=R.bind(this),this.calculateCursorOffset=E.bind(this)}setParams(t){this.params=t}setParam(t,e){this.params[t]=e}setSize(t){this.size=t}getParams(){return this.params}getSize(){return this.size}setValue(t,e){this.params.value[t]=e}getValue(){return this.params.value}}(this.DOMroot),this.params=e,this.clearHTML=l.bind(this),this.removeListeners=h.bind(this),this.subscribe=d.bind(this),this.unsubscribe=w.bind(this),this.updateThumbAfterTrackClick=f.bind(this),this.updateThumb=p.bind(this),this.updateThumbView=b.bind(this),this.updateTipView=u.bind(this),this.updateFillView=o.bind(this),this.addListeners=m.bind(this),this.getSliderParams=v.bind(this)}init(){this.setParams(this.params),this.createSlider(),this.subscribe(),this.addListeners()}rerender(t){this.setParams(t),this.view.thumbView.thumbs=[],this.view.tipView.tips=[],this.unsubscribe(),this.clearHTML(),this.removeListeners(),this.createSlider(),this.subscribe(),this.addListeners()}setParams(t){this.params=t}getParams(){return this.params}createSlider(){this.addSliderClasses(this.params.direction).setModelState().setViewState().setSubViewsState().renderSlider()}setModelState(){this.model.setParams(this.params);const t=this.model.getParams().direction===s.horizontal?this.DOMroot.offsetWidth:this.DOMroot.offsetHeight;return this.model.setSize(t),this.model.getParams().value.forEach(((t,e)=>{this.model.setOffset(e,this.model.calculateOffset(e))})),this.model.setFillState(this.model.calculateFillState()),this}addSliderClasses(t){return this.DOMroot.classList.add("slider"),this.DOMroot.classList.add("js-slider"),this.DOMroot.classList.add(`slider_${t}`),this.DOMroot.classList.add(`js-slider_${t}`),this.DOMparent.classList.add(`slider-parent_${t}`),this}setViewState(){return this.view.setParams(this.model.getParams()),this.view.setSize(this.model.getSize()),this.view.prepareDirectionForInteraction(this.model.getParams().direction),this}setSubViewsState(){const{hasTips:t,hasFill:e}=this.model.getParams(),s=this.model.getValue(),i=this.model.getFillState();return s.forEach(((e,s)=>{this.setThumbViewState(s),t&&this.setTipViewState(s)})),e&&this.setFillViewState(i),this}setThumbViewState(t){const e=this.model.getOffset()[t];this.view.thumbView.setOffset(t,e)}setFillViewState(t){this.view.fillView.setState(t)}setTipViewState(t){const e=this.model.getOffset()[t];this.view.tipView.setOffset(t,e)}renderSlider(){const{direction:t,hasFill:e,hasScale:s,hasTips:i,isRange:a}=this.model.getParams();this.renderTrack(t),this.renderThumb(0),i&&this.renderTip(0,t),s&&this.renderScale(t),e&&this.renderFill(t),a&&(this.renderThumb(1),i&&this.renderTip(1,t))}renderTrack(t){this.view.trackView.renderTrack(t)}renderThumb(t){this.view.thumbView.renderThumb(t)}renderTip(t,e){this.view.tipView.renderTip(t,e)}renderFill(t){this.view.fillView.renderFill(t)}renderScale(t){const{step:e,max:s,min:i}=this.model.getParams();this.view.scaleView.renderScale(t),this.view.scaleView.renderScaleMarks(e,s,i,t)}}(this.params,this.DOMroot,this.DOMparent),this.init()}getParams(){return this.params}getContainer(){return this.DOMroot}getParent(){return this.DOMparent}unsubscribe(){this.presenter.unsubscribe()}updateParams(t){this.presenter.rerender(U(t)),this.params=this.presenter.model.getParams()}subscribe(t){this.presenter.model.subscribe(n.getSliderParams,t)}init(){this.presenter.init(),this.attachResizeListener()}handleWindowResize(){this.presenter.rerender(this.params)}attachResizeListener(){window.addEventListener("resize",this.handleWindowResize.bind(this))}}(c,g)}}),document.querySelectorAll('[data-slider="true"]').forEach((t=>{$(t).slider()}))})();