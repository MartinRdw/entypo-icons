var paths =
  '<path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm4.2 7.267h-.117s-.35 0-.35.35v3.966s0 .35.35.35h.117v.934h-2.8v-.934h.467v-4.34h-.047l-1.43 5.274H9.13L7.713 7.993h-.046v4.34h.466v.934H5.8v-.934h.117s.35 0 .35-.35V8.016s0-.35-.35-.35H5.8v-.933h3.096l1.086 4.041h.036l1.095-4.04H14.2v.933z"></path>';
export default {
  icon: "medium-with-circle",
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
    head += ' id="entypo-icon-medium-with-circle"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "medium-with-circle";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
