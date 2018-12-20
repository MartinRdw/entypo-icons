var paths =
  '<path d="M19.059 10.898l-3.171-7.927A1.543 1.543 0 0 0 14.454 2H5.546c-.632 0-1.2.384-1.434.971L.941 10.898a4.25 4.25 0 0 0-.246 2.272l.59 3.539A1.544 1.544 0 0 0 2.808 18h14.383c.755 0 1.399-.546 1.523-1.291l.59-3.539a4.22 4.22 0 0 0-.245-2.272zM5.52 4.786l1.639-1.132 2.868 2.011 2.868-2.011 1.639 1.132-2.869 2.033 2.928 2.06-1.639 1.171-2.927-2.076L7.1 10.05 5.461 8.879l2.928-2.06L5.52 4.786zm11.439 10.459a.902.902 0 0 1-.891.755H3.932a.902.902 0 0 1-.891-.755l-.365-2.193A.902.902 0 0 1 3.567 12h12.867c.558 0 .983.501.891 1.052l-.366 2.193z"></path>';
export default {
  icon: "uninstall",
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
    head += ' id="entypo-icon-uninstall"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "uninstall";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
