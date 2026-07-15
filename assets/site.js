const langButton=document.querySelector('[data-lang-toggle]');
const mobileButton=document.querySelector('[data-mobile-toggle]');
const menu=document.querySelector('.menu');
function setLang(lang){document.documentElement.lang=lang==='zh'?'zh-CN':'en';document.querySelectorAll('[data-en]').forEach(el=>{el.textContent=lang==='zh'?el.dataset.zh:el.dataset.en});document.querySelectorAll('[data-placeholder-en]').forEach(el=>{el.placeholder=lang==='zh'?el.dataset.placeholderZh:el.dataset.placeholderEn});localStorage.setItem('ly-lang',lang);if(langButton)langButton.textContent=lang==='zh'?'EN':'中文'}
setLang(localStorage.getItem('ly-lang')||'en');
if(langButton)langButton.addEventListener('click',()=>setLang(document.documentElement.lang.startsWith('zh')?'en':'zh'));
if(mobileButton)mobileButton.addEventListener('click',()=>menu.classList.toggle('open'));
const form=document.querySelector('[data-rfq-form]');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const subject=encodeURIComponent(`Website RFQ - ${data.get('company')||'New Inquiry'}`);const body=encodeURIComponent(`Name: ${data.get('name')}\nCompany: ${data.get('company')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')}\nBusiness line: ${data.get('business')}\nApplication: ${data.get('application')}\nMessage:\n${data.get('message')}\n\nPlease attach drawings/BOM directly in the email if needed.`);window.location.href=`mailto:sales@lyglobaltech.com?subject=${subject}&body=${body}`})}
