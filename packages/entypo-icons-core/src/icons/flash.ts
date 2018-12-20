var paths =
  '<path d="M6.803 18.998c-.194-.127 3.153-7.16 3.038-7.469-.116-.309-3.665-1.436-3.838-1.979-.174-.543 7.007-8.707 7.196-8.549.188.158-3.129 7.238-3.039 7.469.091.23 3.728 1.404 3.838 1.979.111.575-7.002 8.676-7.195 8.549z"></path>';
export default {
  icon: "flash",
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
    head += ' id="entypo-icon-flash"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "flash";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};