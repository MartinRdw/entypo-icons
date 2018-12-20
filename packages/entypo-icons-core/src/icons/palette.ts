var paths =
  '<path d="M15.74 2.608c-3.528-1.186-7.066-.961-10.72 1.274C2.167 5.625.302 9.958.917 13.064c.728 3.671 4.351 5.995 9.243 4.651 5.275-1.449 6.549-4.546 6.379-5.334s-2.665-1.652-1.718-3.498c1.188-2.313 3.129-1.149 3.982-1.622.855-.472.539-3.442-3.063-4.653zm-3.646 10.706a1.504 1.504 0 0 1-1.843-1.059 1.5 1.5 0 0 1 1.046-1.849 1.503 1.503 0 0 1 1.843 1.059 1.501 1.501 0 0 1-1.046 1.849z"></path>';
export default {
  icon: "palette",
  paths: paths,
  getSvg: function() {
    var head = '<svg xmlns="http://www.w3.org/2000/svg"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</svg>";
    return head + paths + tail;
  },
  getSprite: function() {
    var head = '<svg xmlns="http://www.w3.org/2000/svg">';
    head += "<symbol";
    head += ' id="entypo-icon-palette"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "palette";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
