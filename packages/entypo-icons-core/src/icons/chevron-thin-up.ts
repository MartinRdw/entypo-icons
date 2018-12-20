var paths =
  '<path d="M2.582 13.891c-.272.268-.709.268-.979 0s-.271-.701 0-.969l7.908-7.83a.697.697 0 0 1 .979 0l7.908 7.83a.68.68 0 0 1 0 .969.695.695 0 0 1-.978 0L10 6.75l-7.418 7.141z"></path>';
export default {
  icon: "chevron-thin-up",
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
    head += ' id="entypo-icon-chevron-thin-up"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "chevron-thin-up";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
