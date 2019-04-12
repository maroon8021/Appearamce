/**
 * Smooth Scroll method
 * Refferd : https://www.mitsue.co.jp/knowledge/blog/frontend/201801/18_1027.html
 *
 * @param {boolean} toUpSide
 * @param {Number} scrollTo
 */
const moveTo = (toDownSide, scrollTo = document.documentElement.scrollTop) => {
  const speed = 50; // this can be scroll speed
  let progress = toDownSide ? 1 : speed; // this can be scroll speed
  let position = 0;
  let easeOut = p => p * (2 - p);
  let move = () => {
    toDownSide ? progress++ : progress--;
    position = scrollTo * easeOut(progress / speed);
    window.scrollTo(0, position);
    if (position < scrollTo && progress > 0) {
      requestAnimationFrame(move);
    }
  };
  requestAnimationFrame(move);
};

export { moveTo };
