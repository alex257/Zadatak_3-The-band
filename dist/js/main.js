const track=document.querySelector(".about__track"),slides=Array.from(track.children),nextButton=document.querySelector(".about__button--right"),prevButton=document.querySelector(".about__button--left"),memberList=document.querySelector(".about__member-table"),memberDot=document.querySelector(".about__dot"),memberText=document.querySelector(".about__member-text"),slideSize=slides[0].getBoundingClientRect(),slideWidth=slideSize.width;let memberDotIndex=2;const setSlidePosition=(e,t)=>{e.style.left=slideWidth*t+"px"};slides.forEach(setSlidePosition);const moveToSlide=(e,t,o)=>{e.style.transform="translateX(-' + targetSlide.style.left + ')",t.classList.remove("current-slide"),o.classList.add("current-slide")},moveToMember=(e,t)=>{e.classList.remove("about__name-role--active"),t.classList.add("about__name-role--active")},moveMemberDot=(e,t)=>{e.classList.remove("about__dot--active"),t.classList.add("about__dot--active")},moveText=(e,t)=>{e.classList.remove("about__text--active"),t.classList.add("about__text--active")},hideShowArrows=(e,t,o,i)=>{0===i?(t.classList.add("is-hidden"),o.classList.remove("is-hidden")):i===e.length-1?(t.classList.remove("is-hidden"),o.classList.add("is-hidden")):(t.classList.remove("is-hidden"),o.classList.remove("is-hidden"))};nextButton.addEventListener("click",e=>{const t=track.querySelector(".current-slide"),o=t.nextElementSibling,i=slides.findIndex(e=>e===o),s=memberList.querySelector(".about__name-role--active"),r=s.nextElementSibling,l=memberText.querySelector(".about__text--active"),n=l.nextElementSibling;moveToSlide(track,t,o),hideShowArrows(slides,prevButton,nextButton,i),moveToMember(s,r),moveText(l,n)}),prevButton.addEventListener("click",e=>{const t=track.querySelector(".current-slide"),o=t.previousElementSibling,i=slides.findIndex(e=>e===o),s=memberList.querySelector(".about__name-role--active"),r=s.previousElementSibling,l=memberText.querySelector(".about__text--active"),n=l.previousElementSibling;moveToSlide(track,t,o),hideShowArrows(slides,prevButton,nextButton,i),moveToMember(s,r),moveText(l,n)});
//# sourceMappingURL=main.js.map
