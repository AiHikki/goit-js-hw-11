import{i as m,S as f}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();function h(){m.show({close:!1,closeOnClick:!0,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",timeout:3e3,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",backgroundColor:"red",progressBar:!1})}let g=new f("#gallery a",{overlayOpacity:.5,showCounter:!1});const n=document.querySelector("#form"),v=document.querySelector("#searchInput"),c=document.querySelector("#gallery"),l=document.querySelector(".loader");n.addEventListener("submit",y);function y(a){l.classList.remove("hide"),c.innerHTML="",a.preventDefault();const r=new URL("https://pixabay.com/api/"),s=new URLSearchParams({key:"41474300-2fa05bee877be877b8dc1781f",q:v.value,orientation:"horizontal",image_type:"photo",safesearch:!0});fetch(`${r}?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{setTimeout(()=>{if(l.classList.add("hide"),t.hits.length===0)return h();p(t.hits)},2e3)}).catch(t=>console.log(t)).finally(()=>{n.reset()})}function p(a){c.innerHTML=a.reduce((r,{webformatURL:s,largeImageURL:t,tags:e,likes:i,views:o,comments:d,downloads:u})=>r+`
      <li class="gallery-item">
        <a href="${t}">
          <img src="${s}" alt="${e}" />
        </a>
        <div class="image-desc">
          <div class="image-desc-item">
            <div class="image-desc-label">Likes</div>
            <div>${i}</div>
          </div>
          <div class="image-desc-item">
             <div class="image-desc-label">Views</div>
             <div>${o}</div>
          </div>
          <div class="image-desc-item">
            <div class="image-desc-label">Comments</div>
            <div>${d}</div>
          </div>
          <div class="image-desc-item">
            <div class="image-desc-label">Downloads</div>
            <div>${u}</div>
          </div>
        </div>
      </li>
      `,""),g.refresh()}
//# sourceMappingURL=commonHelpers.js.map
