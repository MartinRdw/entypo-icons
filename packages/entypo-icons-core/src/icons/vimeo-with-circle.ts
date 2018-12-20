var paths =
  '<path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm4.401 7.75c-.508 2.916-3.348 5.387-4.201 5.951-.854.562-1.634-.227-1.916-.824-.324-.682-1.293-4.373-1.547-4.68-.254-.306-1.016.307-1.016.307l-.369-.494s1.547-1.883 2.724-2.117c1.248-.25 1.246 1.951 1.546 3.174.291 1.183.486 1.859.739 1.859.254 0 .739-.658 1.269-1.67.532-1.012-.022-1.906-1.061-1.27.415-2.54 4.34-3.152 3.832-.236z"></path>';
export default {
  icon: "vimeo-with-circle",
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
    head += ' id="entypo-icon-vimeo-with-circle"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "vimeo-with-circle";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
