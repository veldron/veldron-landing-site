const G=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}};G();function c(){}function O(t){return t()}function N(){return Object.create(null)}function g(t){t.forEach(O)}function U(t){return typeof t=="function"}function z(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function V(t){return Object.keys(t).length===0}function D(t,e,i){t.insertBefore(e,i||null)}function j(t){t.parentNode.removeChild(t)}function Y(t){return document.createElement(t)}function B(t){return document.createTextNode(t)}function R(){return B(" ")}function H(t,e,i){i==null?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function q(t){return Array.from(t.childNodes)}let $;function x(t){$=t}const p=[],P=[],u=[],A=[],K=Promise.resolve();let b=!1;function J(){b||(b=!0,K.then(W))}function v(t){u.push(t)}const h=new Set;let m=0;function W(){const t=$;do{for(;m<p.length;){const e=p[m];m++,x(e),Q(e.$$)}for(x(null),p.length=0,m=0;P.length;)P.pop()();for(let e=0;e<u.length;e+=1){const i=u[e];h.has(i)||(h.add(i),i())}u.length=0}while(p.length);for(;A.length;)A.pop()();b=!1,h.clear(),x(t)}function Q(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}const f=new Set;let X;function y(t,e){t&&t.i&&(f.delete(t),t.i(e))}function M(t,e,i,s){if(t&&t.o){if(f.has(t))return;f.add(t),X.c.push(()=>{f.delete(t),s&&(i&&t.d(1),s())}),t.o(e)}}function F(t){t&&t.c()}function k(t,e,i,s){const{fragment:r,on_mount:o,on_destroy:a,after_update:w}=t.$$;r&&r.m(e,i),s||v(()=>{const d=o.map(O).filter(U);a?a.push(...d):g(d),t.$$.on_mount=[]}),w.forEach(v)}function _(t,e){const i=t.$$;i.fragment!==null&&(g(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function Z(t,e){t.$$.dirty[0]===-1&&(p.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(t,e,i,s,r,o,a,w=[-1]){const d=$;x(t);const l=t.$$={fragment:null,ctx:null,props:o,update:c,not_equal:r,bound:N(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:N(),dirty:w,skip_bound:!1,root:e.target||d.$$.root};a&&a(l.root);let T=!1;if(l.ctx=i?i(t,e.props||{},(n,L,...C)=>{const I=C.length?C[0]:L;return l.ctx&&r(l.ctx[n],l.ctx[n]=I)&&(!l.skip_bound&&l.bound[n]&&l.bound[n](I),T&&Z(t,n)),L}):[],l.update(),T=!0,g(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const n=q(e.target);l.fragment&&l.fragment.l(n),n.forEach(j)}else l.fragment&&l.fragment.c();e.intro&&y(t.$$.fragment),k(t,e.target,e.anchor,e.customElement),W()}x(d)}class E{$destroy(){_(this,1),this.$destroy=c}$on(e,i){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(i),()=>{const r=s.indexOf(i);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!V(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function tt(t){let e;return{c(){e=Y("div"),e.innerHTML=`<nav class="flex sticky top-0 bg-gray-100 shadow-lg w-full z-10 items-center justify-between px-24 py-8 "><p class="text-4xl font-bold tracking-wide mt-3">Veldron</p> 
  <div></div> 
    <ul class="flex items-center font-bold text-2xl md:flex-row space-x-8"><li class="hover:text-purple-500 hover:underline hover:underline-offset-8 cursor-pointer">Home</li> 
      <li class="hover:text-purple-500 hover:underline hover:underline-offset-8 cursor-pointer">Feature</li> 
      <li class="hover:text-purple-500 hover:underline hover:underline-offset-8 cursor-pointer">Client</li> 
      <li class="hover:text-purple-500 hover:underline hover:underline-offset-8 cursor-pointer">Price</li> 
      <li class="hover:text-purple-500 hover:underline hover:underline-offset-8 cursor-pointer">Contact</li></ul></nav> 
  <div class="w-full"><div class="bg-purple-100"><div class="flex flex-col items-center py-32 px-52"><button class="bg-purple-500 hover:bg-purple-700 items-center text-white font-bold md:py-3 md:px-14 py-2 px-4 rounded-full">Get Started</button> 
            <h1 class="text-black-500 md:text-6xl text-5xl font-bold mt-16 text-center">Powerfull Analytics Tools For Your Business.</h1> 
            <span class="text-center text-slate-500 text-xl mt-2">It is a long established fact that a reader by the readable content of a page when looking at its layout.</span> 
            <div><div class=""><div class="container flex justify-center mt-20 items-center"><div class="relative"><div class="absolute top-4 left-3"><i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i></div> 
                      <input type="text" class="h-14 w-96 pl-10 pr-20 rounded-full shadow-xl border-gray-900 z-0 focus:shadow focus:outline-none" placeholder="Email......."/> 
                        <div class="absolute top-2 right-2"><button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-5 rounded-full">Subcribe</button></div></div></div></div></div></div></div> 
  
  
      
      <div class="py-40 items-center justify-center"><h1 class="text-black-500 py-12 px-10 md:text-5xl text-4xl font-bold text-center">Explore About Our Awesome Features</h1> 
        <p class="text-slate-500 text-xl text-center ml-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum modi, adipisci facilis.</p></div> 
      <div class="flex flex-col md:flex-row w-40 mt-5 ml-20 py-5 md:space-x-56"><img class="" src="https://oliver-tailwind.netlify.app/assets/images/clients/1.png" alt=""/> 
        <img class="" src="https://oliver-tailwind.netlify.app/assets/images/clients/2.png" alt=""/> 
        <img class="" src="https://oliver-tailwind.netlify.app/assets/images/clients/3.png" alt=""/> 
        <img class="" src="https://oliver-tailwind.netlify.app/assets/images/clients/4.png" alt=""/></div> 
  
  
      <div class="flex flex-col pl-10 md:flex-row "><div><h2 class="text-black-500 text-2xl py-12 text-left">PERFECT DESIGN</h2> 
            <h1 class="text-black-500 py-12 px-10 font-bold text-4xl text-center">It\u2019s Everything You\u2019ll Ever Need.</h1> 
            <p class="text-slate-500 text-left text-xl ">Create custom landing pages with Landik that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</p> 
  
  
            <div class="flex flex-row items-center justify-center mt-8"><button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full">Explore</button></div></div> 
        <div><img src="https://oliver-tailwind.netlify.app/assets/images/features-one.png" alt=""/></div></div> 
      <div><div><div class="flex flex-col md:flex-row py-16"><div class=""><img src="https://oliver-tailwind.netlify.app/assets/images/features-two.png" alt=""/></div> 
         <div class="mt-5 p-10"><h3 class="text-black-500 text-xl font-bold py-12 text-left">USER INTERFACE</h3> 
           <h1 class="text-black-500 md:text-4xl text-3xl font-bold py-4 text-center">Unlimited Features Awaiting For You.</h1> 
             <span class="mt-7 text-zinc-500 py-4 text-xl md:text-2xl ">Create custom landing pages with Landik that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding</span> 
               <div class="flex flex-row items-center justify-center mt-8"><button class="flex flex-row bg-purple-500 hover:bg-purple-700 items-center text-white font-bold py-4 px-10 rounded-full">Explore</button></div></div></div></div></div> 
      <div class="bg-purple-500 p-12 rounded-lg"><h1 class="text-white text-6xl md:text-7xl text-center ">What We Do</h1> 
      <p class="text-white text-xl text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum modi, adipisci facilis.</p> 
      <div class="grid grid-cols-2 gap-2 bg-white py-2 px-3 mt-12"><div class="flex flex-col items-center"><div class="flex flex-row justify-center w-full"><img src="https://oliver-tailwind.netlify.app/assets/images/icon/pen&amp;ruller.svg" alt=""/> 
            <h2 class="text-black-500 font-bold text-xl text-center">Well Documented</h2></div> 
          <p class="text-black-500 text-zinc-500 text-xl text-center">Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p></div> 
        <div><div class="flex flex-row justify-center w-full"><img src="https://oliver-tailwind.netlify.app/assets/images/icon/code.svg" alt=""/> 
            <h2 class="text-black-500 font-bold text-xl text-center">Highly Customizable</h2></div> 
          <p class="text-black-500 text-zinc-500 text-xl text-center">The point of using Lorem Ipsum is has a normal distribution of letters, as opposed to using.</p></div> 
  
        <div><div class="flex flex-row justify-center w-full"><img src="https://oliver-tailwind.netlify.app/assets/images/icon/headphones.svg" alt=""/>           
            <h2 class="text-black-500 font-bold text-xl text-center">24/7 Support</h2></div> 
          <span class="text-black-500 text-zinc-500 text-xl text-center">There are many variations of but the majority have suffered alteration in some form.</span></div> 
        <div class=""><div class="flex flex-row justify-center w-full"><img src="https://oliver-tailwind.netlify.app/assets/images/icon/groupchat.svg" alt=""/> 
            <h1 class="text-black-500 font-bold text-xl text-center">Community</h1></div> 

          <span class="text-black-500 text-zinc-500 text-xl text-center">If you are going to use a Ipsum, you need to be sure there isn&#39;t anything in the middle of text.</span></div></div></div> 
      <div class="items-center m-10 md:py-44 md:px-52"><div class="flex flex-row justify-center w-full"></div> 
        <h1 class="text-black-500 font-bold text-5xl mt-8 text-center">Hosts Like You, Worldwide</h1> 
        <p class="text-xl text-zinc-500 mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum modi, adipisci facilis.</p> 
        
        <div class="flex flex-col py-8 md:flex-row items-center justify-center space-x-16 "><div class="max-w-sm rounded ml-16 md:mt-8 overflow-hidden shadow-lg"><div class="border-2 p-12"><div class="font-bold text-xl mb-2">4.92/5</div> 
              <p class="text-gray-700 text-base">Average ratings</p></div></div> 
          <div class="max-w-sm rounded mt-8 overflow-hidden shadow-lg"><div class="border-2 p-12"><div class="font-bold text-xl mb-2">260K+</div> 
              <p class="text-gray-700 text-base">Monthly Installs</p></div></div> 
          <div class="max-w-sm rounded overflow-hidden mt-8 shadow-lg"><div class="flex flex-col items-center justify-center border-2 p-12"><div class="font-bold text-xl mb-2">40K+</div> 
              <p class="text-gray-700 text-base">Weekly Downloads</p></div></div> 
          <div class="max-w-sm rounded overflow-hidden mt-8 shadow-lg"><div class="flex flex-col items-center justify-center border-2 p-12"><div class="font-bold text-xl mb-2">4.9M</div> 
              <p class="text-gray-700 text-base">Total Downloads</p></div></div></div></div> 
      <div class="bg-purple-500 py-40 rounded-lg"><h1 class="text-white text-5xl md:text-7xl font-bold text-center">We\u2019re Ready for a Challenging Project</h1> 
          <p class="text-white text-black-500 py-10 m-7 text-xl text-center">The point of using Lorem Ipsum is that opposed to using &#39;Content here, content here&#39;, making it look like readable English.</p> 
          <div class="flex flex-row w-full items-center justify-center"><button class="max-w-sm bg-white font-bold text-black-500 py-2 px-4 rounded-full">start trial free</button></div></div> 
      <div class="py-20 ml-8 "><h1 class="font-bold text-5xl text-center">How Easy Is It To Get Started?</h1> 
        <p class="text-slate-500 py-10 text-xl text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum modi, adipisci facilis.</p> 
   
          <div class="flex md:flex-row flex-col ml-20 space-x-10"><div class="ml-10"><button class="bg-purple-500 hover:bg-purple-700 items-center text-white font-bold py-3 px-14 rounded-full">Step1</button> 
              <h1 class="font-bold text-2xl py-3">Design &amp; Devloping</h1> 
              <p class="text-slate-500 md:text-xl ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div> 
            <div><button class="bg-purple-500 hover:bg-purple-700 items-center text-white font-bold py-3 px-14 rounded-full">Step2</button> 
              <h1 class="font-bold text-2xl py-3">Testing Project</h1> 
              <p class="text-slate-500 md:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div> 
            <div><button class="bg-purple-500 hover:bg-purple-700 items-center text-white font-bold py-3 px-14 rounded-full">Step3</button> 
              <h1 class="font-bold text-2xl py-3">Publisher Project</h1> 
              <p class="text-slate-500 md:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div></div></div> 
      <div class="py-56 ml-8"><h1 class="font-bold text-5xl text-center">Oliver Is Loved By Users</h1> 
        <p class="text-slate-500 text-black-500 py-10 text-2xl text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum modi, adipisci facilis.</p></div> 
      <div class="ml-8"><h1 class="font-bold text-5xl text-center">Find A Plan That Works For You</h1> 
        <p class="text-slate-500 py-10 text-xl text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum modi, adipisci facilis.</p> 
        <div class="space-x-8 mt-16 "><div class="flex flex-col md:flex-row md:items-between md:justify-between"><div class="max-w-sm rounded overflow-hidden shadow-2xl"><div class="px-20 py-20"><div class="font-bold text-3xl mb-2">Basic</div> 
                <p class="text-gray-700 py-16 text-xl ">Start building beautiful websites.</p> 
                <button class="bg-purple-500 hover:bg-purple-700 items-center text-white font-bold py-3 px-14 rounded-full">Choose Now</button> 
                <div class="py-6 "><h1 class="font-bold text-4xl mb-2">$/199</h1> 
                 <p class="text-gray-700 text-2xl">Price Includes GST.</p></div></div></div> 
            <div class="mt-6"><div class="max-w-sm rounded overflow-hidden shadow-2xl"><div class="px-20 py-20"><div class="font-bold text-3xl mb-2">Professional</div> 
                  <p class="text-gray-700 py-16 text-xl">Start building beautiful websites.</p> 
                  <button class="bg-purple-500 hover:bg-purple-700 items-center text-white font-bold py-3 px-14 rounded-full">Choose Now</button> 
                  <div class="py-6 "><h1 class="font-bold text-4xl mb-2">$/299</h1> 
                   <p class="text-gray-700 text-2xl">Price Includes GST.</p></div></div></div></div> 
            <div class="mt-6"><div class="max-w-sm rounded overflow-hidden shadow-2xl"><div class="px-20 py-20"><div class="font-bold text-3xl mb-2">Ultimate</div> 
                  <p class="text-gray-700 md:py-16 py-10 text-xl">Start building beautiful websites.</p> 
                  <button class="bg-purple-500 hover:bg-purple-700 items-center text-white font-bold py-3 px-14 rounded-full">Choose Now</button> 
                  <div class="py-6 "><h1 class="font-bold md:text-4xl mb-2">$/399</h1> 
                   <p class="text-gray-700 text-2xl">Price Includes GST.</p></div></div></div></div></div></div></div> 
      <div class="bg-purple-500 mt-10 rounded-lg "><h1 class="font-bold text-white py-20 text-5xl text-center ">Contact Our Sales Team</h1> 
  
          <p class="text-white text-xl text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum modi, adipisci facilis.</p> 
      
  
          <div class="flex flex-row items-center mt-10 justify-center"><form action="" class="bg-white rounded-lg outline-double outline-stone-400 "><div class="mt-4"><div class="flex flex-row space-x-10"><div><label class="block" for="Name">Name<label><input type="text" placeholder="Your Name" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/></label></label></div> 
                <div class="mt-4"><label class="block" for="email">Email<label><input type="text" placeholder="Your Email" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/></label></label></div></div> 
                <div class="mt-4"><label class="block">Subject<label><input type="subject" placeholder="Your Subject" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/></label></label></div> 
                <div class="mt-4"><label class="block">Message<label><input type="message" placeholder="Your Message" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/></label></label></div></div></form></div></div> 
          <div class="flex flex-row w-full items-center justify-center"><button class="max-w-sm bg-purple-500 hover:bg-purple-600 text-white font-bold text-black-500 py-2 px-4 rounded-lg ">Send Message</button></div> 
  
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
                <span class="text-slate-500 text-black-500 text-xl text-center">Changelog</span></div></div></div></div></div>`,H(e,"class","font-serif")},m(i,s){D(i,e,s)},p:c,i:c,o:c,d(i){i&&j(e)}}}class et extends E{constructor(e){super(),S(this,e,null,tt,z,{})}}class it extends E{constructor(e){super(),S(this,e,null,null,z,{})}}function rt(t){let e,i,s,r;return e=new it({}),s=new et({}),{c(){F(e.$$.fragment),i=R(),F(s.$$.fragment)},m(o,a){k(e,o,a),D(o,i,a),k(s,o,a),r=!0},p:c,i(o){r||(y(e.$$.fragment,o),y(s.$$.fragment,o),r=!0)},o(o){M(e.$$.fragment,o),M(s.$$.fragment,o),r=!1},d(o){_(e,o),o&&j(i),_(s,o)}}}class ot extends E{constructor(e){super(),S(this,e,null,rt,z,{})}}new ot({target:document.getElementById("app")});
