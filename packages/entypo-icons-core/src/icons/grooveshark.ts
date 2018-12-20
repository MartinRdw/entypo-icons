var paths =
  '<path d="M10 1.199a8.801 8.801 0 1 0 .002 17.602A8.801 8.801 0 0 0 10 1.199zm3.538 9.139a26.815 26.815 0 0 0-1.497-1.939 15.769 15.769 0 0 0-1.614-1.645c-.578-.504-1.208-.982-1.9-1.316a9.018 9.018 0 0 0-1.439-.536c-.056-.015-.208-.084-.252-.015-.028.043-.006.123-.002.17l.039.308c.148 1.228.204 2.525-.178 3.719A3.9 3.9 0 0 1 5.62 10.77c-.413.379-1.002.76-1.587.732a1.141 1.141 0 0 1-.324-.059c-.626-.211-.663-.886-.667-1.443a6.992 6.992 0 0 1 .216-1.775 7.033 7.033 0 0 1 4.419-4.834A6.954 6.954 0 0 1 10 2.994a7.011 7.011 0 0 1 5.817 3.137c.32.488.577 1.016.766 1.566h-.003c.061.174.117.35.163.527.146.58.22 1.178.216 1.775-.008 1.125-.37 2.367-1.783 1.771-.667-.282-1.224-.852-1.638-1.432z"></path>';
export default {
  icon: "grooveshark",
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
    head += ' id="entypo-icon-grooveshark"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "grooveshark";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
