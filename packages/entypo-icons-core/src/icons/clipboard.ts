var paths =
  '<path d="M15.6 2l-1.2 3H5.6L4.4 2C3.629 2 3 2.629 3 3.4v15.2c0 .77.629 1.4 1.399 1.4h11.2c.77 0 1.4-.631 1.4-1.4V3.4C17 2.629 16.369 2 15.6 2zm-2 2l.9-2h-2.181L11.6 0H8.4l-.72 2H5.5l.899 2H13.6z"></path>';
export default {
  icon: "clipboard",
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
    head += ' id="entypo-icon-clipboard"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "clipboard";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
