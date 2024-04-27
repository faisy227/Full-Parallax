











// smooth scroll code for lenis to work
const lenis = new Lenis()
function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
