/* Loading page timer */
function timer() {
  let zero_Timer = document.querySelector("#loader #line1-part1 h5");
  let grow = 0;
  setInterval(() => {
    if (grow < 100) {
      grow++;
      zero_Timer.innerHTML = grow++;
      // console.log("onwork");
    } else {
      zero_Timer.innerHTML = grow;
      // console.log("grow compelted");
    }
  }, 100);
}
/* GSAP Animation */
function Loader_GSAP() {
  const loaderTimeline = gsap.timeline();
  loaderTimeline
    .from(".line h1", {
      y: 200,
      opacity: 0,
      stagger: 0.35,
      duration: 1,
      ease: "expo.out",
    })
    .from("#line1-part1 , .line h2", {
      opacity: 0,
      duration: 1,
      x: -100,
      onStart: timer(),
    })
    .from(".line h1 , #line1-part1 , .line h2", {
      opacity: 0,
      y: 200,
      duration: 1.2,
      stagger: 0.3,
      delay: 3.4,
    })
    .to("#loader", {
      delay: -0.9,
      y: -1600,
      duration: 2,
      delay: 1,
      opacity: 0,
      display: "none",
    })
    .to("#page1", {});
}
Loader_GSAP();
