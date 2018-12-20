var paths =
  '<path d="M18.174 1.826c-1.102-1.102-2.082-.777-2.082-.777L7.453 9.681 6 14l4.317-1.454 8.634-8.638s.324-.98-.777-2.082zm-7.569 9.779l-.471.47-1.473.5a2.216 2.216 0 0 0-.498-.74 2.226 2.226 0 0 0-.74-.498l.5-1.473.471-.47s.776-.089 1.537.673c.762.761.674 1.538.674 1.538zM16 17H3V4h5l2-2H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-7l-2 2v5z"></path>';
export default {
  icon: "new-message",
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
    head += ' id="entypo-icon-new-message"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "new-message";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
