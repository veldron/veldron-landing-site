const F=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}};F();function c(){}function W(t){return t()}function P(){return Object.create(null)}function f(t){t.forEach(W)}function H(t){return typeof t=="function"}function z(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function O(t){return Object.keys(t).length===0}function B(t,e,r){t.insertBefore(e,r||null)}function L(t){t.parentNode.removeChild(t)}function Y(t){return document.createElement(t)}function G(t){return document.createTextNode(t)}function R(){return G(" ")}function U(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function q(t){return Array.from(t.childNodes)}let _;function m(t){_=t}const p=[],N=[],g=[],I=[],Z=Promise.resolve();let b=!1;function K(){b||(b=!0,Z.then(D))}function v(t){g.push(t)}const w=new Set;let x=0;function D(){const t=_;do{for(;x<p.length;){const e=p[x];x++,m(e),J(e.$$)}for(m(null),p.length=0,x=0;N.length;)N.pop()();for(let e=0;e<g.length;e+=1){const r=g[e];w.has(r)||(w.add(r),r())}g.length=0}while(p.length);for(;I.length;)I.pop()();b=!1,w.clear(),m(t)}function J(t){if(t.fragment!==null){t.update(),f(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}const h=new Set;let Q;function y(t,e){t&&t.i&&(h.delete(t),t.i(e))}function V(t,e,r,o){if(t&&t.o){if(h.has(t))return;h.add(t),Q.c.push(()=>{h.delete(t),o&&(r&&t.d(1),o())}),t.o(e)}}function A(t){t&&t.c()}function k(t,e,r,o){const{fragment:a,on_mount:i,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,r),o||v(()=>{const d=i.map(W).filter(H);l?l.push(...d):f(d),t.$$.on_mount=[]}),u.forEach(v)}function C(t,e){const r=t.$$;r.fragment!==null&&(f(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function X(t,e){t.$$.dirty[0]===-1&&(p.push(t),K(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(t,e,r,o,a,i,l,u=[-1]){const d=_;m(t);const s=t.$$={fragment:null,ctx:null,props:i,update:c,not_equal:a,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:P(),dirty:u,skip_bound:!1,root:e.target||d.$$.root};l&&l(s.root);let $=!1;if(s.ctx=r?r(t,e.props||{},(n,S,...E)=>{const T=E.length?E[0]:S;return s.ctx&&a(s.ctx[n],s.ctx[n]=T)&&(!s.skip_bound&&s.bound[n]&&s.bound[n](T),$&&X(t,n)),S}):[],s.update(),$=!0,f(s.before_update),s.fragment=o?o(s.ctx):!1,e.target){if(e.hydrate){const n=q(e.target);s.fragment&&s.fragment.l(n),n.forEach(L)}else s.fragment&&s.fragment.c();e.intro&&y(t.$$.fragment),k(t,e.target,e.anchor,e.customElement),D()}m(d)}class M{$destroy(){C(this,1),this.$destroy=c}$on(e,r){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(r),()=>{const a=o.indexOf(r);a!==-1&&o.splice(a,1)}}$set(e){this.$$set&&!O(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function tt(t){let e;return{c(){e=Y("div"),e.innerHTML=`<nav class="flex flex-col md:flex-row sticky top-0 bg-gray-100 shadow-lg w-full z-10 items-center justify-between px-24 py-8 "><p class="text-4xl font-bold tracking-wide mt-3">Veldron</p> 
    <div></div> 
    <ul class="flex mt-10 md:mt-0 items-center justify-center font-bold text-2xl flex-col md:flex-row md:space-x-8"><li class="hover:text-primary-dark hover:underline hover:underline-offset-8 cursor-pointer">Home</li> 
      <li class="hover:text-primary-dark hover:underline hover:underline-offset-8 cursor-pointer">Feature</li> 
      <li class="hover:text-primary-dark hover:underline hover:underline-offset-8 cursor-pointer">Client</li> 
      <li class="hover:text-primary-dark hover:underline hover:underline-offset-8 cursor-pointer">Price</li> 
      <li class="hover:text-primary-dark hover:underline hover:underline-offset-8 cursor-pointer">Contact</li></ul></nav> 
  <div class="w-full"><div class="bg-gray-300"><div class="flex flex-col items-center py-32 px-52"><h1 class="text-black-500 md:text-6xl text-5xl font-bold mt-16 text-center">Get your
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
                <div class="absolute top-2 right-2"><button class="bg-primary-dark hover:bg-primary text-white font-bold py-2 px-5 rounded-full">Contact me</button></div></div></div></div></div></div></div> 

    
    <div class="mt-2 items-center justify-center"><section class="bg-white dark:bg-gray-900"><div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"><div class="max-w-screen-md mb-8 lg:mb-16"><h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for startups, like yours</h2> 
            <p class="text-gray-500 sm:text-xl dark:text-gray-400">Here at Veldron we focus on startup markets where we can use
              technology, innovation and marketing to unlock full potential</p></div> 
          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"><div><div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary lg:h-12 lg:w-12 dark:bg-primary-dark"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002
                    2h10a2 2 0 002-2V8m-9 4h4"></path></svg></div> 
              <h3 class="mb-2 text-xl font-bold dark:text-white">Product</h3> 
              <p class="text-gray-500 dark:text-gray-400">Plan it, get it, launch it. Collaborate seamlessly with all the
                organization and hit your marketing goals every month with our
                marketing plan.</p></div> 
            <div><div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary lg:h-12 lg:w-12 dark:bg-primary-dark"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343
                    2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0
                    0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0
                    0118 0z"></path></svg></div> 
              <h3 class="mb-2 text-xl font-bold dark:text-white">Affordable</h3> 
              <p class="text-gray-500 dark:text-gray-400">With Veldron, you don&#39;t have to pay to development, programming,
                or product design. You don&#39;t pay for developer management or
                product owner. We take care of those things. You only pay for
                the infrastructure like site hosting, domain name, email and
                cloud storage.</p></div> 
            <div><div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary lg:h-12 lg:w-12 dark:bg-primary-dark"><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path d="M12.8345 3.16228C12.8911 3.11941 12.9406 3.06928 12.9821
                    3.01371L15.5437 3.01371C15.5556 3.01371 15.5674 3.01343
                    15.5793 3.01287C15.7492 3.0048 15.9191 3.00485 16.0884
                    3.01287C16.1002 3.01343 16.1121 3.01371 16.1239
                    3.01371H16.1622C16.7372 3.01371 17.2807 3.13977 17.7684
                    3.36505C17.7813 3.37102 17.7944 3.37661 17.8076
                    3.38184C18.7252 3.74393 19.5443 4.36082 20.1474
                    5.20428C21.0565 6.4756 21.34 8.06951 20.9522 9.55242L17.6706
                    6.31483C17.5303 6.17636 17.3411 6.09873 17.1439
                    6.09873L12.3991 6.09873C12.3889 6.09873 12.3787 6.09894
                    12.3685 6.09935C12.2158 6.10558 12.0684 6.15834 11.9462
                    6.25093L10.0616 7.67873C10.0085 7.71898 9.95251 7.75291
                    9.89456 7.78064C9.48892 7.97478 8.98739 7.86539 8.70382
                    7.49495C8.66353 7.44232 8.62954 7.38691 8.60174
                    7.3296C8.40712 6.92844 8.51546 6.43454 8.88527
                    6.15436L12.8345 3.16228Z" fill="white"></path><path d="M7.89848 14.2357L7.88524 14.2487L6.91116 15.2166L6.89837
                    15.2294C6.54534 15.5663 5.98426 15.562 5.63654
                    15.2165C5.28444 14.8667 5.28444 14.2995 5.63654
                    13.9496L6.61062 12.9818C6.96272 12.6319 7.53358 12.6319
                    7.88568 12.9818C8.23346 13.3273 8.23772 13.885 7.89848
                    14.2357Z" fill="white"></path><path d="M7.60772 15.9344C7.26849 16.2852 7.27276 16.8428 7.62053
                    17.1883C7.97263 17.5382 8.5435 17.5382 8.8956
                    17.1883L9.86967 16.2205C10.2218 15.8706 10.2218 15.3034
                    9.86967 14.9536C9.82621 14.9104 9.77941 14.8725 9.7301
                    14.84C9.38493 14.6123 8.91673 14.6459 8.60783
                    14.9407L8.59505 14.9535L7.62097 15.9214L7.60772 15.9344Z" fill="white"></path><path d="M5.50058 11.4079C5.85268 11.7578 5.85268 12.325 5.50058
                    12.6748L4.5265 13.6427C4.1744 13.9925 3.60354 13.9925
                    3.25144 13.6427C2.89934 13.2928 2.89934 12.7256 3.25144
                    12.3758L4.22552 11.4079C4.57761 11.0581 5.14848 11.0581
                    5.50058 11.4079Z" fill="white"></path><path d="M11.8542 16.9253C12.2063 17.2752 12.2063 17.8424 11.8542
                    18.1922L10.8801 19.1601C10.8078 19.2318 10.7264 19.2889
                    10.6395 19.3312C10.303 19.4952 9.88489 19.4381 9.60502
                    19.1601C9.32515 18.882 9.26774 18.4666 9.43277
                    18.1322L9.43404 18.1296C9.4765 18.0443 9.5335 17.9642
                    9.60502 17.8932L10.5791 16.9253C10.9312 16.5755 11.5021
                    16.5755 11.8542 16.9253Z" fill="white"></path><path d="M5.3439 4.83107C6.73954 3.44435 8.63783 2.86145 10.456
                    3.08238L7.97943 4.95876C6.89415 5.78101 6.68509 7.32557
                    7.51275 8.40674C8.33862 9.48558 9.88451 9.69482 10.9675
                    8.87433L12.6511 7.59873L16.8362 7.59873L20.3426
                    11.0581C20.3538 11.0719 20.3658 11.0853 20.3786
                    11.0981L21.5285 12.2481C22.0903 12.8099 22.0903 13.7207
                    21.5285 14.2825C20.9987 14.8123 20.1585 14.8425 19.5934
                    14.3731L19.4971 14.2768C19.4781 14.2578 19.458 14.2407
                    19.437 14.2254L18.3441 13.1326C18.1488 12.9373 17.8323
                    12.9373 17.637 13.1326C17.4417 13.3278 17.4417 13.6444
                    17.637 13.8397L18.787 14.9896C18.8286 15.0312 18.8713 15.071
                    18.915 15.109L18.9589 15.1528C19.3568 15.5508 19.3568 16.196
                    18.9589 16.594C18.5609 16.992 17.9156 16.992 17.5177
                    16.594L17.3488 16.4251C17.1535 16.2298 16.8369 16.2298
                    16.6417 16.4251C16.5415 16.5252 16.4928 16.6572 16.4953
                    16.7884C16.4924 16.9201 16.5411 17.0527 16.6416
                    17.1532L16.8646 17.3762C17.2327 17.7443 17.2327 18.3411
                    16.8646 18.7092C16.4965 19.0773 15.8997 19.0773 15.5316
                    18.7092L15.5305 18.7081L15.5188 18.6962L15.3087
                    18.4862C15.2363 18.4137 15.1471 18.3681 15.0536
                    18.3495C14.8951 18.3178 14.7243 18.3633 14.6015
                    18.4862C14.4063 18.6814 14.4063 18.998 14.6015
                    19.1933L14.8199 19.4117C15.1869 19.7876 15.1842 20.3898
                    14.8117 20.7623C14.4431 21.1308 13.848 21.1384 13.4702
                    20.7793L12.0386 19.4187L12.5635 18.8971C13.3074 18.1579
                    13.3074 16.9596 12.5635 16.2205C12.1709 15.8303 11.6495
                    15.6461 11.1352 15.6679C11.1571 15.1569 10.9717 14.6389
                    10.579 14.2487C10.1865 13.8587 9.66531 13.6745 9.15123
                    13.6961C9.17308 13.1852 8.98769 12.6671 8.59505
                    12.277C8.09544 11.7805 7.38733 11.6175 6.7508
                    11.7879C6.69714 11.3912 6.51686 11.008 6.20995
                    10.7031C5.52351 10.021 4.44351 9.96838 3.6963
                    10.5451C3.23454 8.55553 3.78374 6.38124 5.3439 4.83107Z" fill="white"></path></svg></div> 
              <h3 class="mb-2 text-xl font-bold dark:text-white">Continous Collaboration</h3> 
              <p class="text-gray-500 dark:text-gray-400">We collaborate with our clients to ensure that we deliver the MVP that they need. We have regular meetings, deployments, and code reviews to ensure that we are always on the same page with our clients.</p></div> 
            <div><div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary lg:h-12 lg:w-12 dark:bg-primary-dark"><svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305
                    2.305 0 01-.567-.267C8.07 8.34 8 8.114 8
                    8c0-.114.07-.34.433-.582zM11
                    12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582
                    0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2
                    0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0
                    .99.602 1.765 1.324 2.246.48.32 1.054.545
                    1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51
                    1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102
                    0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991
                    14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011
                    9.092V7.151c.391.127.68.317.843.504a1 1 0
                    101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg></div> 
              <h3 class="mb-2 text-xl font-bold dark:text-white">Finance</h3> 
              <p class="text-gray-500 dark:text-gray-400">Audit-proof software built for critical financial operations
                like month-end close and quarterly budgeting.</p></div> 
            <div><div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary lg:h-12 lg:w-12 dark:bg-primary-dark"><svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1
                    0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2
                    2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg></div> 
              <h3 class="mb-2 text-xl font-bold dark:text-white">Enterprise Design</h3> 
              <p class="text-gray-500 dark:text-gray-400">Craft beautiful, delightful experiences for both marketing and
                product with real cross-company collaboration.</p></div> 
            <div><div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary lg:h-12 lg:w-12 dark:bg-primary-dark"><svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0
                    01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061
                    2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0
                    01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0
                    012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0
                    012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0
                    01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0
                    01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532
                    0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg></div> 
              <h3 class="mb-2 text-xl font-bold dark:text-white">Operations</h3> 
              <p class="text-gray-500 dark:text-gray-400">Keep your company\u2019s lights on with customizable, iterative, and
                structured workflows built for all efficient teams and
                individual.</p></div></div></div></section></div> 
    <div class="flex flex-col md:flex-row w-40 mt-5 ml-20 py-5 md:space-x-56"><img class="" src="https://oliver-tailwind.netlify.app/assets/images/clients/1.png" alt=""/> 
      <img class="" src="https://oliver-tailwind.netlify.app/assets/images/clients/2.png" alt=""/> 
      <img class="" src="https://oliver-tailwind.netlify.app/assets/images/clients/3.png" alt=""/> 
      <img class="" src="https://oliver-tailwind.netlify.app/assets/images/clients/4.png" alt=""/></div> 

    <div class="flex flex-col pl-10 md:flex-row "><div><h2 class="text-black-500 text-2xl py-12 text-left">PERFECT DESIGN</h2> 
        <h1 class="text-black-500 py-12 px-10 font-bold text-4xl text-center">It\u2019s Everything You\u2019ll Ever Need.</h1> 
        <p class="text-slate-500 text-left text-xl ">Create custom landing pages with Landik that converts more visitors
          than any website. With lots of unique blocks, you can easily build a
          page without coding.</p> 

        <div class="flex flex-row items-center justify-center mt-8"><button class="bg-primary-dark hover:bg-primary text-white font-bold py-4 px-10 rounded-full">Explore</button></div></div> 
      <div><img src="https://oliver-tailwind.netlify.app/assets/images/features-one.png" alt=""/></div></div> 
    <div><div><div class="flex flex-col md:flex-row py-16"><div class=""><img src="https://oliver-tailwind.netlify.app/assets/images/features-two.png" alt=""/></div> 
          <div class="mt-5 p-10"><h3 class="text-black-500 text-xl font-bold py-12 text-left">USER INTERFACE</h3> 
            <h1 class="text-black-500 md:text-4xl text-3xl font-bold py-4 text-center">Unlimited Features Awaiting For You.</h1> 
            <span class="mt-7 text-zinc-500 py-4 text-xl md:text-2xl ">Create custom landing pages with Landik that converts more
              visitors than any website. With lots of unique blocks, you can
              easily build a page without coding</span> 
            <div class="flex flex-row items-center justify-center mt-8"><button class="flex flex-row bg-primary-dark hover:bg-primary items-center text-white font-bold py-4 px-10 rounded-full">Explore</button></div></div></div></div></div> 
    <div class="bg-primary-dark p-12 rounded-lg"><h1 class="text-white text-6xl md:text-7xl text-center ">What We Do</h1> 
      <p class="text-white text-xl text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum
        modi, adipisci facilis.</p> 
      <div class="grid grid-cols-2 gap-2 bg-white py-2 px-3 mt-12"><div class="flex flex-col items-center"><div class="flex flex-row justify-center w-full"><img src="https://oliver-tailwind.netlify.app/assets/images/icon/pen&amp;ruller.svg" alt=""/> 
            <h2 class="text-black-500 font-bold text-xl text-center">Well Documented</h2></div> 
          <p class="text-black-500 text-zinc-500 text-xl text-center">Ned ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque.</p></div> 
        <div><div class="flex flex-row justify-center w-full"><img src="https://oliver-tailwind.netlify.app/assets/images/icon/code.svg" alt=""/> 
            <h2 class="text-black-500 font-bold text-xl text-center">Highly Customizable</h2></div> 
          <p class="text-black-500 text-zinc-500 text-xl text-center">The point of using Lorem Ipsum is has a normal distribution of
            letters, as opposed to using.</p></div> 

        <div><div class="flex flex-row justify-center w-full"><img src="https://oliver-tailwind.netlify.app/assets/images/icon/headphones.svg" alt=""/> 
            <h2 class="text-black-500 font-bold text-xl text-center">24/7 Support</h2></div> 
          <span class="text-black-500 text-zinc-500 text-xl text-center">There are many variations of but the majority have suffered
            alteration in some form.</span></div> 
        <div class=""><div class="flex flex-row justify-center w-full"><img src="https://oliver-tailwind.netlify.app/assets/images/icon/groupchat.svg" alt=""/> 
            <h1 class="text-black-500 font-bold text-xl text-center">Community</h1></div> 

          <span class="text-black-500 text-zinc-500 text-xl text-center">If you are going to use a Ipsum, you need to be sure there isn&#39;t
            anything in the middle of text.</span></div></div></div> 
    <div class="items-center m-10 md:py-44 md:px-52"><div class="flex flex-row justify-center w-full"></div> 
      <h1 class="text-black-500 font-bold text-5xl mt-8 text-center">Hosts Like You, Worldwide</h1> 
      <p class="text-xl text-zinc-500 mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum
        modi, adipisci facilis.</p> 
      
      <div class="flex flex-col py-8 md:flex-row items-center justify-center space-x-16 "><div class="max-w-sm rounded ml-16 md:mt-8 overflow-hidden shadow-lg"><div class="border-2 p-12"><div class="font-bold text-xl mb-2">4.92/5</div> 
            <p class="text-gray-700 text-base">Average ratings</p></div></div> 
        <div class="max-w-sm rounded mt-8 overflow-hidden shadow-lg"><div class="border-2 p-12"><div class="font-bold text-xl mb-2">260K+</div> 
            <p class="text-gray-700 text-base">Monthly Installs</p></div></div> 
        <div class="max-w-sm rounded overflow-hidden mt-8 shadow-lg"><div class="flex flex-col items-center justify-center border-2 p-12"><div class="font-bold text-xl mb-2">40K+</div> 
            <p class="text-gray-700 text-base">Weekly Downloads</p></div></div> 
        <div class="max-w-sm rounded overflow-hidden mt-8 shadow-lg"><div class="flex flex-col items-center justify-center border-2 p-12"><div class="font-bold text-xl mb-2">4.9M</div> 
            <p class="text-gray-700 text-base">Total Downloads</p></div></div></div></div> 
    <div class="bg-primary-dark py-40 rounded-lg"><h1 class="text-white text-5xl md:text-7xl font-bold text-center">We\u2019re Ready for a Challenging Project</h1> 
      <p class="text-white text-black-500 py-10 m-7 text-xl text-center">The point of using Lorem Ipsum is that opposed to using &#39;Content here,
        content here&#39;, making it look like readable English.</p> 
      <div class="flex flex-row w-full items-center justify-center"><button class="max-w-sm bg-white font-bold text-black-500 py-2 px-4 rounded-full">start trial free</button></div></div> 
    <div class="py-20 ml-8 "><h1 class="font-bold text-5xl text-center">How Easy Is It To Get Started?</h1> 
      <p class="text-slate-500 py-10 text-xl text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum
        modi, adipisci facilis.</p> 

      <div class="flex md:flex-row flex-col ml-20 space-x-10"><div class="ml-10"><button class="bg-primary-dark hover:bg-primary items-center text-white font-bold py-3 px-14 rounded-full">Step1</button> 
          <h1 class="font-bold text-2xl py-3">Design &amp; Devloping</h1> 
          <p class="text-slate-500 md:text-xl ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div> 
        <div><button class="bg-primary-dark hover:bg-primary items-center text-white font-bold py-3 px-14 rounded-full">Step2</button> 
          <h1 class="font-bold text-2xl py-3">Testing Project</h1> 
          <p class="text-slate-500 md:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div> 
        <div><button class="bg-primary-dark hover:bg-primary items-center text-white font-bold py-3 px-14 rounded-full">Step3</button> 
          <h1 class="font-bold text-2xl py-3">Publisher Project</h1> 
          <p class="text-slate-500 md:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div></div></div> 
    <div class="py-56 ml-8"><h1 class="font-bold text-5xl text-center">Oliver Is Loved By Users</h1> 
      <p class="text-slate-500 text-black-500 py-10 text-2xl text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum
        modi, adipisci facilis.</p></div> 
    <div class="ml-8"><h1 class="font-bold text-5xl text-center">Find A Plan That Works For You</h1> 
      <p class="text-slate-500 py-10 text-xl text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum
        modi, adipisci facilis.</p> 
      <div class="space-x-8 mt-16 "><div class="flex flex-col md:flex-row md:items-between md:justify-between"><div class="max-w-sm rounded overflow-hidden shadow-2xl"><div class="px-20 py-20"><div class="font-bold text-3xl mb-2">Basic</div> 
              <p class="text-gray-700 py-16 text-xl ">Start building beautiful websites.</p> 
              <button class="bg-primary-dark hover:bg-primary items-center text-white font-bold py-3 px-14 rounded-full">Choose Now</button> 
              <div class="py-6 "><h1 class="font-bold text-4xl mb-2">$/199</h1> 
                <p class="text-gray-700 text-2xl">Price Includes GST.</p></div></div></div> 
          <div class="mt-6"><div class="max-w-sm rounded overflow-hidden shadow-2xl"><div class="px-20 py-20"><div class="font-bold text-3xl mb-2">Professional</div> 
                <p class="text-gray-700 py-16 text-xl">Start building beautiful websites.</p> 
                <button class="bg-primary-dark hover:bg-primary items-center text-white font-bold py-3 px-14 rounded-full">Choose Now</button> 
                <div class="py-6 "><h1 class="font-bold text-4xl mb-2">$/299</h1> 
                  <p class="text-gray-700 text-2xl">Price Includes GST.</p></div></div></div></div> 
          <div class="mt-6"><div class="max-w-sm rounded overflow-hidden shadow-2xl"><div class="px-20 py-20"><div class="font-bold text-3xl mb-2">Ultimate</div> 
                <p class="text-gray-700 md:py-16 py-10 text-xl">Start building beautiful websites.</p> 
                <button class="bg-primary-dark hover:bg-primary items-center text-white font-bold py-3 px-14 rounded-full">Choose Now</button> 
                <div class="py-6 "><h1 class="font-bold md:text-4xl mb-2">$/399</h1> 
                  <p class="text-gray-700 text-2xl">Price Includes GST.</p></div></div></div></div></div></div></div> 
    <div class="bg-primary-dark mt-10 rounded-lg "><h1 class="font-bold text-white py-20 text-5xl text-center ">Contact Our Sales Team</h1> 

      <p class="text-white text-xl text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum
        modi, adipisci facilis.</p> 
      

      <div class="flex flex-row items-center mt-10 justify-center"><form action="" class="bg-white rounded-lg outline-double outline-stone-400 "><div class="mt-4"><div class="flex flex-row space-x-10"><div><label class="block" for="Name">Name
                  <label><input type="text" placeholder="Your Name" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/></label></label></div> 
              <div class="mt-4"><label class="block" for="email">Email
                  <label><input type="text" placeholder="Your Email" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/></label></label></div></div> 
            <div class="mt-4"><label class="block">Subject
                <label><input type="subject" placeholder="Your Subject" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/></label></label></div> 
            <div class="mt-4"><label class="block">Message
                <label><input type="message" placeholder="Your Message" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/></label></label></div></div></form></div></div> 
    <div class="flex flex-row w-full items-center justify-center"><button class="max-w-sm bg-primary-dark hover:bg-purple-600 text-white font-bold text-black-500 py-2 px-4 rounded-lg ">Send Message</button></div> 

    <div class="flex flex-col ml-20 md:flex-row items-between justify-between py-40 px-6 pl-9 space-x-10"><div class=""><h1 class="font-bold text-2xl md:mt-10 ml-10 py-3">Email</h1> 
        <p class="text-slate-500 ml-10 text-xl ">information@gmail.com</p></div> 
      <div class="mt-7"><h1 class="font-bold text-2xl py-3">Telephone</h1> 
        <p class="text-slate-500 text-xl">+(485) 874 249 23</p></div> 
      <div class="mt-7"><h1 class="font-bold text-2xl py-3">Business Hours</h1> 
        <p class="text-slate-500 text-xl">Monday To Friday</p> 
        <p class="text-slate-500 text-xl">9:00am To 6:00pm (GMT)</p></div></div> 

    <div class="flex "><div class="flex flex-col md:flex-row items-center justify-center space-x-16 "><div class="ml-48 md:ml-10"><h1 class="font-bold text-4xl ">Veldron</h1> 
          <p class="text-2xl text-slate-500">2022 \xA9 Oliver. Design by ThemeBoss.</p> 
          <p class="font-bold text-3xl">Follow Us</p></div> 
        <div><h1 class="font-bold text-3xl mt-5 py-5">Our_Product</h1> 
          <div class="flex flex-col"><span class="text-slate-500 py-2 text-black-500 text-2xl text-center">Getbootstrap</span> 
            <span class="text-slate-500 py-2 text-xl text-center">Wordpress</span> 
            <span class="text-slate-500 py-2 text-xl text-center">Shopify</span> 
            <span class="text-slate-500 py-2 text-xl text-center">React</span></div></div> 
        <div><h1 class="font-bold text-3xl py-3">Company</h1> 
          <div class="flex flex-col"><span class="text-slate-500 py-2 text-xl text-center">About</span> 
            <span class="text-slate-500 text-black-500 py-2 text-xl text-center">Terms</span> 
            <span class="text-slate-500 text-black-500 py-2 text-xl text-center">Privacy_Policy</span> 
            <span class="text-slate-500 text-black-500 py-2 text-xl text-center">Careers</span></div></div> 
        <div><h1 class="font-bold text-3xl -mt-4 py-3">Services</h1> 
          <div class="flex flex-col"><span class="text-slate-500 text-black-500 py-2 text-xl text-center">Documentation</span> 
            <span class="text-slate-500 text-black-500 text-xl text-center">Design</span> 
            <span class="text-slate-500 text-black-500 text-xl text-center">Themes</span> 
            <span class="text-slate-500 text-black-500 text-xl text-center">Illustrations</span> 
            <span class="text-slate-500 text-black-500 text-xl text-center">UI Kit</span></div></div> 
        <div class="text-center"><h1 class="font-bold text-3xl mt-2 md:-mt-20 md:py-10 ">More</h1> 
          <div class="flex flex-col "><span class="text-slate-500 text-black-500 py-2 text-xl text-center">Documentation</span> 
            <span class="text-slate-500 text-black-500 text-xl text-center">License</span> 
            <span class="text-slate-500 text-black-500 text-xl text-center">Changelog</span></div></div></div></div></div>`,U(e,"class","font-serif")},m(r,o){B(r,e,o)},p:c,i:c,o:c,d(r){r&&L(e)}}}class et extends M{constructor(e){super(),j(this,e,null,tt,z,{})}}class rt extends M{constructor(e){super(),j(this,e,null,null,z,{})}}function at(t){let e,r,o,a;return e=new rt({}),o=new et({}),{c(){A(e.$$.fragment),r=R(),A(o.$$.fragment)},m(i,l){k(e,i,l),B(i,r,l),k(o,i,l),a=!0},p:c,i(i){a||(y(e.$$.fragment,i),y(o.$$.fragment,i),a=!0)},o(i){V(e.$$.fragment,i),V(o.$$.fragment,i),a=!1},d(i){C(e,i),i&&L(r),C(o,i)}}}class it extends M{constructor(e){super(),j(this,e,null,at,z,{})}}new it({target:document.getElementById("app")});
