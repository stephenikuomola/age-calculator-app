!function(){class e{startDate=1;constructor(e){this.endDate=e}}let t=new e(31),a=new e(28),n=new e(31),s=new e(30),i=new e(31),r=new e(30),l=new e(31),u=new e(31),h=new e(30),o=new e(31),d=new e(30),p=new e(31),g=[t,a,n,s,i,r,l,u,h,o,d,p];class m{#e=document.getElementById("day");#t=document.getElementById("month");#a=document.getElementById("year");#n=document.querySelector(".btn-submit");constructor(){this.#n?.addEventListener("click",this.#s.bind(this))}#s(e){e?.preventDefault(),this.#i(this.#e),this.#i(this.#t),this.#i(this.#a);let t=this.#i(this.#e)||this.#i(this.#t)||this.#i(this.#a);if(t)return;let a=Number(this.#a.value),n=Number(this.#t.value),s=Number(this.#e.value),i=this.#r(a,n,s);if(!i)return;let[r,l]=this.#l(n,s),u=new Date(`${a}-${r}-${l}T00:00:00Z`),h=this.#u(u);this.#h(h)}#l(e,t){let a=e<10?`0${e}`:`${e}`,n=t<10?`0${t}`:`${t}`;return[a,n]}#h({years:e,months:t,days:a}){let n=document.querySelector("div[class~='display-age-component']");n.classList.add("show"),n.innerHTML=`
    <p class="display-age-component__year"><span>${e} </span> years</p>
    <p class="display-age-component__month"><span>${t} </span> months</p>
    <p class="display-age-component__days"><span>${a} </span> days</p>
    `}#u(e){let t=new Date,a=t.getFullYear()-e.getFullYear(),n=t.getMonth()-e.getMonth(),s=t.getDate()-e.getDate();if((n<0||0===n&&s<0)&&(a--,n+=12),s<0){n--;let e=t.getFullYear(),a=t.getMonth(),i=new Date(e,a,0),r=i.getDate();s+=r}if(1===e.getMonth()&&29===e.getDate()){let i=t.getFullYear();for(;!(i%4==0&&i%100!=0||i%400==0);)i--;if(a=i-e.getFullYear(),(n<0||0===n&&s<0)&&(a--,n+=12),s<0){n--;let e=t.getFullYear(),a=t.getMonth(),i=new Date(e,a,0),r=i.getDate();s+=r}}return{years:a,months:n,days:s}}#r(e,t,n){let s=new Date,i=new Date(1e3),r=t-1,[l,u]=this.#l(t,n),h=new Date(`${e}-${l}-${u}T00:00:00Z`),o=s.getFullYear(),d=i.getFullYear(),p=29===new Date(e,1,29).getDate();a.endDate=p?29:28;let m=r<0||r>11,y=e>o,c=e<d,w=n<g[r]?.startDate,v=n>g[r]?.endDate,b=h>s;return!m&&!y&&!c&&!w&&!v&&!b||(m&&this.#o(this.#t,"Must be a valid month"),y||b?this.#o(this.#a,"Must be in the past"):c&&this.#o(this.#a,"Must be more than 1970"),w||v?this.#o(this.#e,"Must be a valid date"):(n<1||n>31)&&this.#o(this.#e,"Must be a valid day"),!1)}#i(e){return e?.value.trim()===""?(this.#o(e,"This field is required"),!0):isNaN(Number(e?.value))?(this.#o(e,"Must be a valid number"),!0):void this.#d(e,"")}#o(e,t){e.setAttribute("aria-invalid","true");let a=e.nextElementSibling;a.innerText=t,a.removeAttribute("hidden");let n=e.previousElementSibling;n.style.color="#FF5959"}#d(e,t){e.setAttribute("aria-invalid","false");let a=e.nextElementSibling;a.innerText=t,a.setAttribute("hidden","hidden");let n=e.previousElementSibling;n.style.color="#716f6f"}}new m}();
//# sourceMappingURL=index.bd3df8db.js.map