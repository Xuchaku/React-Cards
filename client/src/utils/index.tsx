function debounce(fn: any, ms: number) {
  let starting = false;
  let startTime = new Date().getTime();
  return function (...args: any[]) {
    if (!starting) {
      console.log("start");
      fn(...args);
    } else {
      let now = new Date().getTime();
      if (now - startTime > ms) {
        fn(...args);
      }
    }
  };
}
export default debounce;
