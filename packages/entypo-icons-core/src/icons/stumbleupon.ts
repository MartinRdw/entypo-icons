var paths =
  '<path d="M11.051 8.059l1.365.66 2.059-.66V6.865C14.475 4.402 12.467 2.4 10 2.4S5.525 4.402 5.525 6.865v6.27a1.052 1.052 0 0 1-2.102 0V10.51H0v2.625a4.475 4.475 0 0 0 8.949 0v-6.27a1.052 1.052 0 0 1 2.103 0l-.001 1.194zm5.525 2.451v2.625a1.051 1.051 0 0 1-2.102 0v-2.678l-2.059.658-1.365-.658v2.678a4.476 4.476 0 0 0 8.95 0V10.51h-3.424z"></path>';
export default {
  icon: "stumbleupon",
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
    head += ' id="entypo-icon-stumbleupon"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "stumbleupon";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
