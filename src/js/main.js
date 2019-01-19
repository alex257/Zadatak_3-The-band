const track = document.querySelector(".about__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".about__button--right");
const prevButton = document.querySelector(".about__button--left");
const dotsNav = document.querySelector(".about__nav");
const dots = Array.from(dotsNav.children);

const memberList = document.querySelector(".about__member-table");
//console.log(memberList.rows[2].children[1].firstChild);

const memberDot = document.querySelector(".about__dot");

const memberText = document.querySelector(".about__member-text");

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

//arrange the slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

//move slides
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-' + targetSlide.style.left + ')";

  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

//move active member name and role in the table
const moveToMember = (currentMember, targetMember) => {
  currentMember.classList.remove("about__name-role--active");
  targetMember.classList.add("about__name-role--active");
};

//move active dot in the table
const moveMemberDot = (currentMemberDot, targetMemberDot) => {
  currentMemberDot.classList.remove("about__dot--active");
  targetMemberDot.classList.add("about__dot--active");
};

//move text description about each member
const moveText = (currentText, targetText) => {
  currentText.classList.remove("about__text--active");
  targetText.classList.add("about__text--active");
};

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.add("is-hidden");
  } else {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.remove("is-hidden");
  }
};

//when click left move slides to the left
prevButton.addEventListener("click", e => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);

  const currentMember = memberList.querySelector(".about__name-role--active");
  const prevMember = currentMember.previousElementSibling;

  //const currentMemberDot = memberList.querySelector(".about__dot--active");
  //const prevMemberDot = memberList.rows[4].children[1].firstChild;
  /*const prevMemberDot=[];
  for(let i=4; i>=2; i--){
     prevMemberDot = memberList.rows[i].children[1].firstChild;
    };
    console.log(prevMemberDot);*/

  const currentText = memberText.querySelector(".about__text--active");
  const prevText = currentText.previousElementSibling;

  moveToSlide(track, currentSlide, prevSlide);

  hideShowArrows(slides, prevButton, nextButton, prevIndex);

  moveToMember(currentMember, prevMember);

  //moveMemberDot(currentMemberDot, prevMemberDot);

  moveText(currentText, prevText);
});

//when click right move slides to the right

nextButton.addEventListener("click", e => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  //const amountToMove = nextSlide.style.left;
  //console.log(amountToMove);
  const nextIndex = slides.findIndex(slide => slide === nextSlide); //find index number for slide

  const currentMember = memberList.querySelector(".about__name-role--active");
  const nextMember = currentMember.nextElementSibling;

  const currentMemberDot = memberList.querySelector(".about__dot--active");
  /*const nextMemberDot=[];
    for(let i=2; i<=5; i++){
    nextMemberDot = memberList.rows[i].children[1].firstChild;
  };
  console.log(nextMemberDot);*/

  const currentText = memberText.querySelector(".about__text--active");
  const nextText = currentText.nextElementSibling;

 
  moveToSlide(track, currentSlide, nextSlide);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
  moveToMember(currentMember, nextMember);
  //moveMemberDot(currentMemberDot, nextMemberDot);
  moveText(currentText, nextText);
});

//when click indictors

dotsNav.addEventListener("click", e => {
  //what indicator was clicked on?
  const targetDot = e.target.closest("button");
  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".about__indicator--current-slide");
  const targetIndex = dots.findIndex(dot => dot === targetDot);

  const targetSlide = slides[targetIndex];

  currentDot.classList.remove("about__indicator--current-slide");
  targetDot.classList.add("about__indicator--current-slide");

  const currentText = memberText.querySelector(".about__text--active");
  const nextText = currentText.nextElementSibling;
  //const prevText = currentText.previousElementSibling;

  moveToSlide(track, currentSlide, targetSlide);
  moveText(currentText, nextText);
});
