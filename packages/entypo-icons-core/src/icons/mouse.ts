var paths =
  '<path d="M15.402 14.402l-2.627-7.535c-.722-2.073-2.966-3.22-5.092-2.653L5.707.379a.687.687 0 0 0-.938-.296.719.719 0 0 0-.289.961l1.929 3.742C4.872 5.806 4.073 7.74 4.58 9.56l2.139 7.696c.602 2.162 3.08 3.264 5.571 2.502 2.459-.863 3.85-3.237 3.112-5.356zM8.899 8.923a1.38 1.38 0 0 1-1.745-.921c-.235-.748.168-1.548.897-1.788.73-.24 1.512.172 1.746.92s-.168 1.549-.898 1.789z"></path>';
export default {
  icon: "mouse",
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
    head += ' id="entypo-icon-mouse"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "mouse";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
