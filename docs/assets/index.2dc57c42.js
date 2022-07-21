const dt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const b of n.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&a(b)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}};dt();function o(){}function nt(e){return e()}function it(){return Object.create(null)}function R(e){e.forEach(nt)}function ct(e){return typeof e=="function"}function u(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function pt(e){return Object.keys(e).length===0}function _(e,t){e.appendChild(t)}function c(e,t,r){e.insertBefore(t,r||null)}function d(e){e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function mt(e){return document.createTextNode(e)}function k(){return mt(" ")}function m(e,t,r){r==null?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function xt(e){return Array.from(e.childNodes)}let q;function W(e){q=e}const A=[],at=[],O=[],ot=[],gt=Promise.resolve();let U=!1;function ft(){U||(U=!0,gt.then(st))}function Z(e){O.push(e)}const G=new Set;let Y=0;function st(){const e=q;do{for(;Y<A.length;){const t=A[Y];Y++,W(t),ut(t.$$)}for(W(null),A.length=0,Y=0;at.length;)at.pop()();for(let t=0;t<O.length;t+=1){const r=O[t];G.has(r)||(G.add(r),r())}O.length=0}while(A.length);for(;ot.length;)ot.pop()();U=!1,G.clear(),W(e)}function ut(e){if(e.fragment!==null){e.update(),R(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Z)}}const D=new Set;let wt;function x(e,t){e&&e.i&&(D.delete(e),e.i(t))}function v(e,t,r,a){if(e&&e.o){if(D.has(e))return;D.add(e),wt.c.push(()=>{D.delete(e),a&&(r&&e.d(1),a())}),e.o(t)}}function y(e){e&&e.c()}function g(e,t,r,a){const{fragment:i,on_mount:n,on_destroy:b,after_update:C}=e.$$;i&&i.m(t,r),a||Z(()=>{const L=n.map(nt).filter(ct);b?b.push(...L):R(L),e.$$.on_mount=[]}),C.forEach(Z)}function f(e,t){const r=e.$$;r.fragment!==null&&(R(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function ht(e,t){e.$$.dirty[0]===-1&&(A.push(e),ft(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function w(e,t,r,a,i,n,b,C=[-1]){const L=q;W(e);const l=e.$$={fragment:null,ctx:null,props:n,update:o,not_equal:i,bound:it(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(L?L.$$.context:[])),callbacks:it(),dirty:C,skip_bound:!1,root:t.target||L.$$.root};b&&b(l.root);let N=!1;if(l.ctx=r?r(e,t.props||{},($,I,...z)=>{const F=z.length?z[0]:I;return l.ctx&&i(l.ctx[$],l.ctx[$]=F)&&(!l.skip_bound&&l.bound[$]&&l.bound[$](F),N&&ht(e,$)),I}):[],l.update(),N=!0,R(l.before_update),l.fragment=a?a(l.ctx):!1,t.target){if(t.hydrate){const $=xt(t.target);l.fragment&&l.fragment.l($),$.forEach(d)}else l.fragment&&l.fragment.c();t.intro&&x(e.$$.fragment),g(e,t.target,t.anchor,t.customElement),st()}W(L)}class h{$destroy(){f(this,1),this.$destroy=o}$on(t,r){const a=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return a.push(r),()=>{const i=a.indexOf(r);i!==-1&&a.splice(i,1)}}$set(t){this.$$set&&!pt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function bt(e){let t,r,a;return{c(){t=p("footer"),t.innerHTML=`<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">\xA9 2022
    <a href="https://veldron.com/" class="hover:underline">Veldron</a>
    . All Rights Reserved.</span> 
  <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"><li><a href="/#" class="mr-4 hover:underline md:mr-6 ">About</a></li> 
    <li><a href="/#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a></li> 
    <li><a href="/#" class="mr-4 hover:underline md:mr-6">Licensing</a></li> 
    <li><a href="/#" class="hover:underline">Contact</a></li></ul>`,r=k(),a=p("div"),a.innerHTML=`<span>Image Credits</span> 
  <a href="https://www.freepik.com/vectors/dreamer">Dreamer vector created by goonerua - www.freepik.com</a>`,m(t,"class","max-w-screen-xl p-4 w-full m-auto bg-white rounded-lg shadow flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between md:p-6 dark:bg-gray-800"),m(a,"class","max-w-screen-xl w-full p-4 md:p-6 m-auto bg-white flex flex-col md:flex-row text-xs items-center md:justify-between")},m(i,n){c(i,t,n),c(i,r,n),c(i,a,n)},p:o,i:o,o,d(i){i&&d(t),i&&d(r),i&&d(a)}}}class vt extends h{constructor(t){super(),w(this,t,null,bt,u,{})}}function yt(e){let t;return{c(){t=p("div"),t.innerHTML=`<div class="flex flex-col md:flex-row items-start justify-start "><div><h1 class="px-10 py-16 md:mt-20 text-4xl font-bold capitalize text-center text-black-500">Bring your dream, get your digital Product</h1> 
      <p class="text-xl px-10 m-auto text-center text-slate-500">You have a product in mind. You know how it should look, feel and work. You&#39;re welcome to manifest it to reality with us.</p> 

      <div class="flex flex-row items-center justify-center mt-8"><button class="px-10 flex flex-row gap-3 py-4 font-bold text-white rounded-full bg-primary-dark hover:bg-primary">Schedule a meeting <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></button></div></div> 
    <div class="w-full"><img src="./dream_castle.jpg" alt=""/></div></div> 

  <div class="flex flex-col py-16 md:flex-row"><div class=""><img src="https://oliver-tailwind.netlify.app/assets/images/features-two.png" alt=""/></div> 
    <div class="p-10 mt-5"><h3 class="py-12 text-xl font-bold text-left text-black-500">USER INTERFACE</h3> 
      <h1 class="py-4 text-3xl font-bold text-center text-black-500 md:text-4xl">Unlimited Features Awaiting For You.</h1> 
      <span class="py-4 text-xl mt-7 text-zinc-500 md:text-2xl">Create custom landing pages with Landik that converts more visitors than
        any website. With lots of unique blocks, you can easily build a page
        without coding</span> 
      <div class="flex flex-row items-center justify-center mt-8"><button class="flex flex-row items-center px-10 py-4 font-bold text-white rounded-full bg-primary-dark hover:bg-primary">Explore</button></div></div></div>`,m(t,"class","flex flex-col max-w-screen-2xl m-auto w-full")},m(r,a){c(r,t,a)},p:o,i:o,o,d(r){r&&d(t)}}}class kt extends h{constructor(t){super(),w(this,t,null,yt,u,{})}}function $t(e){let t;return{c(){t=p("div"),t.innerHTML=`<span class="font-black text-4xl">Our Clients</span> 
  <div class="flex flex-col gap-y-10 md:flex-row items-center justify-center m-auto md:gap-x-10"><a href="/"><img src="https://oliver-tailwind.netlify.app/assets/images/clients/1.png" alt=""/></a> 
    <a href="/"><img src="https://oliver-tailwind.netlify.app/assets/images/clients/2.png" alt=""/></a> 
    <a href="/"><img src="https://oliver-tailwind.netlify.app/assets/images/clients/3.png" alt=""/></a> 
    <a href="/"><img src="https://oliver-tailwind.netlify.app/assets/images/clients/4.png" alt=""/></a></div>`,m(t,"class","flex flex-col items-center justify-center gap-12")},m(r,a){c(r,t,a)},p:o,i:o,o,d(r){r&&d(t)}}}class _t extends h{constructor(t){super(),w(this,t,null,$t,u,{})}}function Ct(e){let t;return{c(){t=p("div"),t.innerHTML=`<section class="bg-white dark:bg-gray-900"><div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6"><div class="flex flex-col items-center justify-center max-w-screen-md m-auto mb-8 lg:mb-16"><h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Designed for startups, like yours</h2> 
        <p class="text-center text-gray-500 sm:text-xl dark:text-gray-400"><span>Here at Veldron we focus on startup markets where we can use
            technology, innovation and marketing to unlock full potential</span></p></div> 
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"><div><div class="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary lg:h-12 lg:w-12 dark:bg-primary-dark"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002
                2h10a2 2 0 002-2V8m-9 4h4"></path></svg></div> 
          <h3 class="mb-2 text-xl font-bold dark:text-white">Product</h3> 
          <p class="text-gray-500 dark:text-gray-400">Plan it, get it, launch it. Collaborate seamlessly with all the
            organization and hit your marketing goals every month with our
            marketing plan.</p></div> 
        <div><div class="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary lg:h-12 lg:w-12 dark:bg-primary-dark"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3
                2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11
                0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> 
          <h3 class="mb-2 text-xl font-bold dark:text-white">Affordable</h3> 
          <p class="text-gray-500 dark:text-gray-400">With Veldron, you don&#39;t have to pay to development, programming, or
            product design. You don&#39;t pay for developer management or product
            owner. We take care of those things. You only pay for the
            infrastructure like site hosting, domain name, email and cloud
            storage.</p></div> 
        <div><div class="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary lg:h-12 lg:w-12 dark:bg-primary-dark"><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path d="M12.8345 3.16228C12.8911 3.11941 12.9406 3.06928 12.9821
                3.01371L15.5437 3.01371C15.5556 3.01371 15.5674 3.01343 15.5793
                3.01287C15.7492 3.0048 15.9191 3.00485 16.0884 3.01287C16.1002
                3.01343 16.1121 3.01371 16.1239 3.01371H16.1622C16.7372 3.01371
                17.2807 3.13977 17.7684 3.36505C17.7813 3.37102 17.7944 3.37661
                17.8076 3.38184C18.7252 3.74393 19.5443 4.36082 20.1474
                5.20428C21.0565 6.4756 21.34 8.06951 20.9522 9.55242L17.6706
                6.31483C17.5303 6.17636 17.3411 6.09873 17.1439 6.09873L12.3991
                6.09873C12.3889 6.09873 12.3787 6.09894 12.3685 6.09935C12.2158
                6.10558 12.0684 6.15834 11.9462 6.25093L10.0616 7.67873C10.0085
                7.71898 9.95251 7.75291 9.89456 7.78064C9.48892 7.97478 8.98739
                7.86539 8.70382 7.49495C8.66353 7.44232 8.62954 7.38691 8.60174
                7.3296C8.40712 6.92844 8.51546 6.43454 8.88527 6.15436L12.8345
                3.16228Z" fill="white"></path><path d="M7.89848 14.2357L7.88524 14.2487L6.91116 15.2166L6.89837
                15.2294C6.54534 15.5663 5.98426 15.562 5.63654 15.2165C5.28444
                14.8667 5.28444 14.2995 5.63654 13.9496L6.61062 12.9818C6.96272
                12.6319 7.53358 12.6319 7.88568 12.9818C8.23346 13.3273 8.23772
                13.885 7.89848 14.2357Z" fill="white"></path><path d="M7.60772 15.9344C7.26849 16.2852 7.27276 16.8428 7.62053
                17.1883C7.97263 17.5382 8.5435 17.5382 8.8956 17.1883L9.86967
                16.2205C10.2218 15.8706 10.2218 15.3034 9.86967 14.9536C9.82621
                14.9104 9.77941 14.8725 9.7301 14.84C9.38493 14.6123 8.91673
                14.6459 8.60783 14.9407L8.59505 14.9535L7.62097 15.9214L7.60772
                15.9344Z" fill="white"></path><path d="M5.50058 11.4079C5.85268 11.7578 5.85268 12.325 5.50058
                12.6748L4.5265 13.6427C4.1744 13.9925 3.60354 13.9925 3.25144
                13.6427C2.89934 13.2928 2.89934 12.7256 3.25144 12.3758L4.22552
                11.4079C4.57761 11.0581 5.14848 11.0581 5.50058 11.4079Z" fill="white"></path><path d="M11.8542 16.9253C12.2063 17.2752 12.2063 17.8424 11.8542
                18.1922L10.8801 19.1601C10.8078 19.2318 10.7264 19.2889 10.6395
                19.3312C10.303 19.4952 9.88489 19.4381 9.60502 19.1601C9.32515
                18.882 9.26774 18.4666 9.43277 18.1322L9.43404 18.1296C9.4765
                18.0443 9.5335 17.9642 9.60502 17.8932L10.5791 16.9253C10.9312
                16.5755 11.5021 16.5755 11.8542 16.9253Z" fill="white"></path><path d="M5.3439 4.83107C6.73954 3.44435 8.63783 2.86145 10.456
                3.08238L7.97943 4.95876C6.89415 5.78101 6.68509 7.32557 7.51275
                8.40674C8.33862 9.48558 9.88451 9.69482 10.9675 8.87433L12.6511
                7.59873L16.8362 7.59873L20.3426 11.0581C20.3538 11.0719 20.3658
                11.0853 20.3786 11.0981L21.5285 12.2481C22.0903 12.8099 22.0903
                13.7207 21.5285 14.2825C20.9987 14.8123 20.1585 14.8425 19.5934
                14.3731L19.4971 14.2768C19.4781 14.2578 19.458 14.2407 19.437
                14.2254L18.3441 13.1326C18.1488 12.9373 17.8323 12.9373 17.637
                13.1326C17.4417 13.3278 17.4417 13.6444 17.637 13.8397L18.787
                14.9896C18.8286 15.0312 18.8713 15.071 18.915 15.109L18.9589
                15.1528C19.3568 15.5508 19.3568 16.196 18.9589 16.594C18.5609
                16.992 17.9156 16.992 17.5177 16.594L17.3488 16.4251C17.1535
                16.2298 16.8369 16.2298 16.6417 16.4251C16.5415 16.5252 16.4928
                16.6572 16.4953 16.7884C16.4924 16.9201 16.5411 17.0527 16.6416
                17.1532L16.8646 17.3762C17.2327 17.7443 17.2327 18.3411 16.8646
                18.7092C16.4965 19.0773 15.8997 19.0773 15.5316 18.7092L15.5305
                18.7081L15.5188 18.6962L15.3087 18.4862C15.2363 18.4137 15.1471
                18.3681 15.0536 18.3495C14.8951 18.3178 14.7243 18.3633 14.6015
                18.4862C14.4063 18.6814 14.4063 18.998 14.6015 19.1933L14.8199
                19.4117C15.1869 19.7876 15.1842 20.3898 14.8117 20.7623C14.4431
                21.1308 13.848 21.1384 13.4702 20.7793L12.0386 19.4187L12.5635
                18.8971C13.3074 18.1579 13.3074 16.9596 12.5635 16.2205C12.1709
                15.8303 11.6495 15.6461 11.1352 15.6679C11.1571 15.1569 10.9717
                14.6389 10.579 14.2487C10.1865 13.8587 9.66531 13.6745 9.15123
                13.6961C9.17308 13.1852 8.98769 12.6671 8.59505 12.277C8.09544
                11.7805 7.38733 11.6175 6.7508 11.7879C6.69714 11.3912 6.51686
                11.008 6.20995 10.7031C5.52351 10.021 4.44351 9.96838 3.6963
                10.5451C3.23454 8.55553 3.78374 6.38124 5.3439 4.83107Z" fill="white"></path></svg></div> 
          <h3 class="mb-2 text-xl font-bold dark:text-white">Continous Collaboration</h3> 
          <p class="text-gray-500 dark:text-gray-400">We collaborate with our clients to ensure that we deliver the MVP
            that they need. We have regular meetings, deployments, and code
            reviews to ensure that we are always on the same page with our
            clients.</p></div> 
        <div><div class="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary lg:h-12 lg:w-12 dark:bg-primary-dark"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div> 
          <h3 class="mb-2 text-xl font-bold dark:text-white">Speed</h3> 
          <p class="text-gray-500 dark:text-gray-400">We believe, an MVP delayed is an MVP lost. If you don&#39;t reach market
            in time, you probably never will. That&#39;s why we built Veldron to
            focus and prioritise speed delivery of MVP to our clients.</p></div> 
        <div><div class="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary lg:h-12 lg:w-12 dark:bg-primary-dark"><svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0
                110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0
                01-2 2H4a2 2 0 01-2-2v-4z"></path></svg></div> 
          <h3 class="mb-2 text-xl font-bold dark:text-white">Enterprise Design</h3> 
          <p class="text-gray-500 dark:text-gray-400">Craft beautiful, delightful experiences for both marketing and
            product with real cross-company collaboration.</p></div> 
        <div><div class="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary lg:h-12 lg:w-12 dark:bg-primary-dark"><svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0
                01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061
                2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0
                01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0
                012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0
                012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0
                01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0
                01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0
                01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg></div> 
          <h3 class="mb-2 text-xl font-bold dark:text-white">Operations</h3> 
          <p class="text-gray-500 dark:text-gray-400">Keep your company\u2019s lights on with customizable, iterative, and
            structured workflows built for all efficient teams and individual.</p></div></div></div></section>`,m(t,"class","items-center justify-center px-8 mt-2")},m(r,a){c(r,t,a)},p:o,i:o,o,d(r){r&&d(t)}}}class Lt extends h{constructor(t){super(),w(this,t,null,Ct,u,{})}}function zt(e){let t;return{c(){t=p("div"),t.innerHTML=`<div class="flex flex-col items-center p-12 md:py-32 md:px-52"><h1 class="text-black-500 md:text-6xl text-5xl font-bold mt-16 text-center">Get your
          <span class="text-primary-dark">MVP</span>
          to
          <span class="text-primary-dark text-bold">Market</span>
          in Record Time \u26A1\u26A1</h1> 
        <span class="text-center text-slate-700 text-xl mt-2">Entrepreneurs and startups spend months and years to deliver their
          Minimum Viable Product (MVP) to the market. They have no reliable and
          fast consultancy to get their MVP ready. We provide you with the best
          and fastest consultancy to get your MVP ready in record time for a
          fraction of equity in your startup. We believe in you as much as you
          believe in your startup.</span> 
        <div><div class=""><div class="container flex flex-row justify-center mt-20 items-center space-x-5"><div class="relative"><div class="absolute top-4 left-3"><i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i></div> 
                <input type="text" class="h-14 w-96 pl-10 pr-20 rounded-full shadow-xl border-gray-900 z-0 focus:shadow focus:outline-none" placeholder="Email......."/> 
                <div class="absolute top-2 right-2"><button class="bg-primary-dark hover:bg-primary text-white font-bold py-2 px-5 rounded-full">Contact me</button></div></div></div></div></div></div>`,m(t,"class","bg-gray-300")},m(r,a){c(r,t,a)},p:o,i:o,o,d(r){r&&d(t)}}}class jt extends h{constructor(t){super(),w(this,t,null,zt,u,{})}}function Mt(e){let t;return{c(){t=p("nav"),t.innerHTML=`<a href="/" class="sticky top-0 mt-3 text-4xl font-bold tracking-wide">Veldron</a> 
  <ul class="flex flex-col items-center justify-center mt-10 text-2xl font-bold md:mt-0 md:flex-row md:space-x-8"><li class="cursor-pointer hover:text-primary-dark hover:underline hover:underline-offset-8">Home</li> 
    <li class="cursor-pointer hover:text-primary-dark hover:underline hover:underline-offset-8">Feature</li> 
    <li class="cursor-pointer hover:text-primary-dark hover:underline hover:underline-offset-8">Client</li> 
    <li class="cursor-pointer hover:text-primary-dark hover:underline hover:underline-offset-8">Price</li> 
    <li class="cursor-pointer hover:text-primary-dark hover:underline hover:underline-offset-8">Contact</li></ul>`,m(t,"class","z-10 flex flex-col items-center justify-between w-full px-24 py-8 bg-gray-100 shadow-lg md:flex-row ")},m(r,a){c(r,t,a)},p:o,i:o,o,d(r){r&&d(t)}}}class Tt extends h{constructor(t){super(),w(this,t,null,Mt,u,{})}}function Ht(e){let t;return{c(){t=p("div"),t.innerHTML=`<h1 class="text-6xl text-center text-white md:text-7xl ">What We Do</h1> 
      <p class="text-xl text-center text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum
        modi, adipisci facilis.</p> 
      <div class="grid grid-cols-2 gap-2 px-3 py-2 mt-12 bg-white"><div class="flex flex-col items-center"><div class="flex flex-row justify-center w-full"><img src="https://oliver-tailwind.netlify.app/assets/images/icon/pen&amp;ruller.svg" alt=""/> 
            <h2 class="text-xl font-bold text-center text-black-500">Well Documented</h2></div> 
          <p class="text-xl text-center text-black-500 text-zinc-500">Ned ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque.</p></div> 
        <div><div class="flex flex-row justify-center w-full"><img src="https://oliver-tailwind.netlify.app/assets/images/icon/code.svg" alt=""/> 
            <h2 class="text-xl font-bold text-center text-black-500">Highly Customizable</h2></div> 
          <p class="text-xl text-center text-black-500 text-zinc-500">The point of using Lorem Ipsum is has a normal distribution of
            letters, as opposed to using.</p></div> 

        <div><div class="flex flex-row justify-center w-full"><img src="https://oliver-tailwind.netlify.app/assets/images/icon/headphones.svg" alt=""/> 
            <h2 class="text-xl font-bold text-center text-black-500">24/7 Support</h2></div> 
          <span class="text-xl text-center text-black-500 text-zinc-500">There are many variations of but the majority have suffered
            alteration in some form.</span></div> 
        <div class=""><div class="flex flex-row justify-center w-full"><img src="https://oliver-tailwind.netlify.app/assets/images/icon/groupchat.svg" alt=""/> 
            <h1 class="text-xl font-bold text-center text-black-500">Community</h1></div> 

          <span class="text-xl text-center text-black-500 text-zinc-500">If you are going to use a Ipsum, you need to be sure there isn&#39;t
            anything in the middle of text.</span></div></div>`,m(t,"class","p-12 rounded-lg bg-primary-dark")},m(r,a){c(r,t,a)},p:o,i:o,o,d(r){r&&d(t)}}}class St extends h{constructor(t){super(),w(this,t,null,Ht,u,{})}}function Pt(e){let t;return{c(){t=p("div"),t.innerHTML=`<div class="flex flex-row justify-center w-full"></div> 
      <h1 class="mt-8 text-5xl font-bold text-center text-black-500">Hosts Like You, Worldwide</h1> 
      <p class="mt-5 text-xl text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum
        modi, adipisci facilis.</p> 
      
      <div class="flex flex-col items-center justify-center py-8 space-x-16 md:flex-row "><div class="max-w-sm ml-16 overflow-hidden rounded shadow-lg md:mt-8"><div class="p-12 border-2 "><div class="mb-2 text-xl font-bold">4.92/5</div> 
            <p class="text-base text-gray-700">Average ratings</p></div></div> 
        <div class="max-w-sm mt-8 overflow-hidden rounded shadow-lg"><div class="p-12 border-2"><div class="mb-2 text-xl font-bold">260K+</div> 
            <p class="text-base text-gray-700">Monthly Installs</p></div></div> 
        <div class="max-w-sm mt-8 overflow-hidden rounded shadow-lg"><div class="flex flex-col items-center justify-center p-12 border-2"><div class="mb-2 text-xl font-bold">40K+</div> 
            <p class="text-base text-gray-700">Weekly Downloads</p></div></div> 
        <div class="max-w-sm mt-8 overflow-hidden rounded shadow-lg"><div class="flex flex-col items-center justify-center p-12 border-2"><div class="mb-2 text-xl font-bold">4.9M</div> 
            <p class="text-base text-gray-700">Total Downloads</p></div></div></div>`,m(t,"class","items-center m-10 md:py-44 md:px-52")},m(r,a){c(r,t,a)},p:o,i:o,o,d(r){r&&d(t)}}}class Et extends h{constructor(t){super(),w(this,t,null,Pt,u,{})}}function Vt(e){let t;return{c(){t=p("div"),t.innerHTML=`<h1 class="text-5xl font-bold text-center text-white md:text-7xl">We\u2019re Ready for a Challenging Project</h1> 
      <p class="py-10 text-xl text-center text-white text-black-500 m-7">The point of using Lorem Ipsum is that opposed to using &#39;Content here,
        content here&#39;, making it look like readable English.</p> 
      <div class="flex flex-row items-center justify-center w-full"><button class="max-w-sm px-4 py-2 font-bold bg-white rounded-full text-black-500">start trial free</button></div>`,m(t,"class","py-40 rounded-lg bg-primary-dark")},m(r,a){c(r,t,a)},p:o,i:o,o,d(r){r&&d(t)}}}class Nt extends h{constructor(t){super(),w(this,t,null,Vt,u,{})}}function It(e){let t;return{c(){t=p("div"),t.innerHTML=`<h1 class="text-5xl font-bold text-center">How Easy Is It To Get Started?</h1> 
      <p class="py-10 text-xl text-center text-slate-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum
        modi, adipisci facilis.</p> 

      <div class="flex flex-col ml-20 space-x-10 md:flex-row"><div class="ml-10"><button class="items-center py-3 font-bold text-white rounded-full bg-primary-dark hover:bg-primary px-14">Step1</button> 
          <h1 class="py-3 text-2xl font-bold">Design &amp; Devloping</h1> 
          <p class="text-slate-500 md:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div> 
        <div><button class="items-center py-3 font-bold text-white rounded-full bg-primary-dark hover:bg-primary px-14">Step2</button> 
          <h1 class="py-3 text-2xl font-bold">Testing Project</h1> 
          <p class="text-slate-500 md:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div> 
        <div><button class="items-center py-3 font-bold text-white rounded-full bg-primary-dark hover:bg-primary px-14">Step3</button> 
          <h1 class="py-3 text-2xl font-bold">Publisher Project</h1> 
          <p class="text-slate-500 md:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div></div>`,m(t,"class","py-20 ml-8 ")},m(r,a){c(r,t,a)},p:o,i:o,o,d(r){r&&d(t)}}}class Ft extends h{constructor(t){super(),w(this,t,null,It,u,{})}}function At(e){let t;return{c(){t=p("div"),t.innerHTML=`<h1 class="text-5xl font-bold text-center">Oliver Is Loved By Users</h1> 
      <p class="py-10 text-2xl text-center text-slate-500 text-black-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum
        modi, adipisci facilis.</p>`,m(t,"class","py-56 ml-8")},m(r,a){c(r,t,a)},p:o,i:o,o,d(r){r&&d(t)}}}class Wt extends h{constructor(t){super(),w(this,t,null,At,u,{})}}function Bt(e){let t;return{c(){t=p("div"),t.innerHTML=`<h1 class="text-5xl font-bold text-center">Find A Plan That Works For You</h1> 
      <p class="py-10 text-xl text-center text-slate-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum
        modi, adipisci facilis.</p> 
      <div class="mt-16 space-x-8 "><div class="flex flex-col md:flex-row md:items-between md:justify-between"><div class="max-w-sm overflow-hidden rounded shadow-2xl"><div class="px-20 py-20"><div class="mb-2 text-3xl font-bold">Basic</div> 
              <p class="py-16 text-xl text-gray-700 ">Start building beautiful websites.</p> 
              <button class="items-center py-3 font-bold text-white rounded-full bg-primary-dark hover:bg-primary px-14">Choose Now</button> 
              <div class="py-6 "><h1 class="mb-2 text-4xl font-bold">$/199</h1> 
                <p class="text-2xl text-gray-700">Price Includes GST.</p></div></div></div> 
          <div class="mt-6"><div class="max-w-sm overflow-hidden rounded shadow-2xl"><div class="px-20 py-20"><div class="mb-2 text-3xl font-bold">Professional</div> 
                <p class="py-16 text-xl text-gray-700">Start building beautiful websites.</p> 
                <button class="items-center py-3 font-bold text-white rounded-full bg-primary-dark hover:bg-primary px-14">Choose Now</button> 
                <div class="py-6 "><h1 class="mb-2 text-4xl font-bold">$/299</h1> 
                  <p class="text-2xl text-gray-700">Price Includes GST.</p></div></div></div></div> 
          <div class="mt-6"><div class="max-w-sm overflow-hidden rounded shadow-2xl"><div class="px-20 py-20"><div class="mb-2 text-3xl font-bold">Ultimate</div> 
                <p class="py-10 text-xl text-gray-700 md:py-16">Start building beautiful websites.</p> 
                <button class="items-center py-3 font-bold text-white rounded-full bg-primary-dark hover:bg-primary px-14">Choose Now</button> 
                <div class="py-6 "><h1 class="mb-2 font-bold md:text-4xl">$/399</h1> 
                  <p class="text-2xl text-gray-700">Price Includes GST.</p></div></div></div></div></div></div>`,m(t,"class","ml-8")},m(r,a){c(r,t,a)},p:o,i:o,o,d(r){r&&d(t)}}}class Yt extends h{constructor(t){super(),w(this,t,null,Bt,u,{})}}function Ot(e){let t,r,a;return{c(){t=p("div"),t.innerHTML=`<h1 class="py-20 text-5xl font-bold text-center text-white ">Contact Our Sales Team</h1> 

      <p class="text-xl text-center text-white ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum
        modi, adipisci facilis.</p> 
      

      <div class="flex flex-row items-center justify-center mt-10 "><form action="" class="bg-white p-20 text-xl rounded-lg outline-double outline-stone-400"><div class="mt-4"><div class="flex flex-row space-x-10"><div><label class="block" for="Name">Name
                  <label><input type="text" placeholder="Your Name" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/></label></label></div> 
              <div><label class="block" for="email">Email
                  <label><input type="text" placeholder="Your Email" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/></label></label></div></div> 
            <div class="mt-4"><label class="block">Subject
                <label><input type="subject" placeholder="Your Subject" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/></label></label></div> 
            <div class="mt-4"><label class="block">Message
                <label><input type="message" placeholder="Your Message" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/></label></label></div></div></form></div>`,r=k(),a=p("div"),a.innerHTML='<button class="max-w-sm px-4 py-2 font-bold text-white rounded-lg bg-primary-dark hover:bg-blue-600 text-black-500">Send Message</button>',m(t,"class","mt-10 rounded-lg bg-primary-dark"),m(a,"class","flex flex-row items-center mt-6 justify-center w-full")},m(i,n){c(i,t,n),c(i,r,n),c(i,a,n)},p:o,i:o,o,d(i){i&&d(t),i&&d(r),i&&d(a)}}}class Dt extends h{constructor(t){super(),w(this,t,null,Ot,u,{})}}function Rt(e){let t;return{c(){t=p("div"),t.innerHTML=`<div class=""><h1 class="py-3 ml-10 text-2xl font-bold md:mt-10">Email</h1> 
        <p class="ml-10 text-xl text-slate-500">information@gmail.com</p></div> 
      <div class="mt-7"><h1 class="py-3 text-2xl font-bold">Telephone</h1> 
        <p class="text-xl text-slate-500">+(485) 874 249 23</p></div> 
      <div class="mt-7"><h1 class="py-3 text-2xl font-bold">Business Hours</h1> 
        <p class="text-xl text-slate-500">Monday To Friday</p> 
        <p class="text-xl text-slate-500">9:00am To 6:00pm (GMT)</p></div>`,m(t,"class","flex flex-col justify-between px-6 py-40 ml-20 space-x-10 md:flex-row items-between pl-9")},m(r,a){c(r,t,a)},p:o,i:o,o,d(r){r&&d(t)}}}class Gt extends h{constructor(t){super(),w(this,t,null,Rt,u,{})}}function Ut(e){let t,r,a,i,n,b,C,L,l,N,$,I,z,F,j,K,M,J,T,Q,H,X,S,tt,P,et,E,rt,V,B;return r=new Tt({}),n=new jt({}),C=new kt({}),l=new Lt({}),$=new _t({}),z=new St({}),j=new Et({}),M=new Nt({}),T=new Ft({}),H=new Wt({}),S=new Yt({}),P=new Dt({}),E=new Gt({}),V=new vt({}),{c(){t=p("div"),y(r.$$.fragment),a=k(),i=p("div"),y(n.$$.fragment),b=k(),y(C.$$.fragment),L=k(),y(l.$$.fragment),N=k(),y($.$$.fragment),I=k(),y(z.$$.fragment),F=k(),y(j.$$.fragment),K=k(),y(M.$$.fragment),J=k(),y(T.$$.fragment),Q=k(),y(H.$$.fragment),X=k(),y(S.$$.fragment),tt=k(),y(P.$$.fragment),et=k(),y(E.$$.fragment),rt=k(),y(V.$$.fragment),m(i,"class","w-full "),m(t,"class","font-serif")},m(s,lt){c(s,t,lt),g(r,t,null),_(t,a),_(t,i),g(n,i,null),_(i,b),g(C,i,null),_(i,L),g(l,i,null),_(i,N),g($,i,null),_(i,I),g(z,i,null),_(i,F),g(j,i,null),_(i,K),g(M,i,null),_(i,J),g(T,i,null),_(i,Q),g(H,i,null),_(i,X),g(S,i,null),_(i,tt),g(P,i,null),_(i,et),g(E,i,null),_(i,rt),g(V,i,null),B=!0},p:o,i(s){B||(x(r.$$.fragment,s),x(n.$$.fragment,s),x(C.$$.fragment,s),x(l.$$.fragment,s),x($.$$.fragment,s),x(z.$$.fragment,s),x(j.$$.fragment,s),x(M.$$.fragment,s),x(T.$$.fragment,s),x(H.$$.fragment,s),x(S.$$.fragment,s),x(P.$$.fragment,s),x(E.$$.fragment,s),x(V.$$.fragment,s),B=!0)},o(s){v(r.$$.fragment,s),v(n.$$.fragment,s),v(C.$$.fragment,s),v(l.$$.fragment,s),v($.$$.fragment,s),v(z.$$.fragment,s),v(j.$$.fragment,s),v(M.$$.fragment,s),v(T.$$.fragment,s),v(H.$$.fragment,s),v(S.$$.fragment,s),v(P.$$.fragment,s),v(E.$$.fragment,s),v(V.$$.fragment,s),B=!1},d(s){s&&d(t),f(r),f(n),f(C),f(l),f($),f(z),f(j),f(M),f(T),f(H),f(S),f(P),f(E),f(V)}}}class Zt extends h{constructor(t){super(),w(this,t,null,Ut,u,{})}}class qt extends h{constructor(t){super(),w(this,t,null,null,u,{})}}function Kt(e){let t,r,a,i;return t=new qt({}),a=new Zt({}),{c(){y(t.$$.fragment),r=k(),y(a.$$.fragment)},m(n,b){g(t,n,b),c(n,r,b),g(a,n,b),i=!0},p:o,i(n){i||(x(t.$$.fragment,n),x(a.$$.fragment,n),i=!0)},o(n){v(t.$$.fragment,n),v(a.$$.fragment,n),i=!1},d(n){f(t,n),n&&d(r),f(a,n)}}}class Jt extends h{constructor(t){super(),w(this,t,null,Kt,u,{})}}new Jt({target:document.getElementById("app")});
