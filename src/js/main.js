const track = document.querySelector(".about__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".about__button--right");
const prevButton = document.querySelector(".about__button--left");
const dotsNav = document.querySelector(".about__nav");
const dots = Array.from(dotsNav.children);

const memberList = document.querySelector(".about__member-table tbody");
const members = Array.from(memberList.children);

const memberDot = document.querySelector(".about__dot");

const memberText = document.querySelector(".about__member-text");

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

//arrange the slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-' + targetSlide.style.left + ')";

  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const moveToMember = (currentMember, targetMember) => {
  currentMember.classList.remove("about__name-role--active");
  targetMember.classList.add("about__name-role--active");
};

/*const moveMemberDot = (currentMemberDot, targetMemberDot) =>{

  currentMemberDot.classList.remove("about__dot--active");
  targetMemberDot.classList.add("about__dot--active");
}*/

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

  const currentMemberDot = memberList.querySelector(".about__dot--active");
  console.log(currentMemberDot);

  const currentText = memberText.firstElementChild;
  //const prevText = currentText.previousSibling.firstChild;

  moveToSlide(track, currentSlide, prevSlide);

  hideShowArrows(slides, prevButton, nextButton, prevIndex);

  moveToMember(currentMember, prevMember);

  //moveText(currentText, prevText);
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

  const currentText = memberText.firstElementChild.firstChild;
  //const nextText = currentText.nextSibling.firstChild;
  //console.log(currentText);
  //console.log(nextText);

  moveToSlide(track, currentSlide, nextSlide);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
  moveToMember(currentMember, nextMember);
  //moveText(currentText, nextText);
});

//when click indictors move to that slide

dotsNav.addEventListener("click", e => {
  //what indicator was clicked on?
  const targetDot = e.target.closest("button");
  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".about__indicator--current-slide");
  const targetIndex = dots.findIndex(dot => dot === targetDot);

  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);

  currentDot.classList.remove("about__indicator--current-slide");
  targetDot.classList.add("about__indicator--current-slide");

  console.log(targetMember);
});
