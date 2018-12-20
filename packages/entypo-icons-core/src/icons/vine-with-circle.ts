var paths =
  '<path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm1.908 6.451c-.37 0-.632.352-.632 1.028 0 1.378.875 2.171 2.011 2.171.201 0 .427-.024.658-.077v1.072a5.1 5.1 0 0 1-1.074.123c-.755 1.591-2.113 2.951-2.565 3.208-.29.163-.561.172-.878-.018-.559-.333-2.668-2.065-3.373-7.508h1.53c.387 3.268 1.325 4.941 2.363 6.196a8.575 8.575 0 0 0 1.552-2.193c-1.025-.522-1.648-1.663-1.648-2.992 0-1.345.775-2.362 2.102-2.362 1.287 0 1.991.802 1.991 2.181 0 .514-.109 1.098-.314 1.548-.957.188-1.305-.423-1.305-.423.07-.236.168-.635.168-.998.001-.64-.234-.956-.586-.956z"></path>';
export default {
  icon: "vine-with-circle",
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
    head += ' id="entypo-icon-vine-with-circle"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "vine-with-circle";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
