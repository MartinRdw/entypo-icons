var paths =
  '<path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm0 7.385a.53.53 0 0 0-.531.529v3.168a2.262 2.262 0 0 1-4.522 0v-1.326h1.729v1.326c0 .293.238.529.531.529s.531-.236.531-.529V8.314a2.262 2.262 0 0 1 4.523.001v.603l-1.04.334-.69-.334v-.604A.53.53 0 0 0 10 7.785zm5.053 3.697a2.262 2.262 0 0 1-4.523 0v-1.354l.69.334 1.04-.334v1.354a.53.53 0 0 0 1.061 0v-1.326h1.731v1.326h.001z"></path>';
export default {
  icon: "stumbleupon-with-circle",
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
    head += ' id="entypo-icon-stumbleupon-with-circle"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "stumbleupon-with-circle";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
