var paths =
  '<path d="M10 .4C4.697.4.399 4.698.399 10A9.6 9.6 0 0 0 10 19.601c5.301 0 9.6-4.298 9.6-9.601 0-5.302-4.299-9.6-9.6-9.6zm-.001 17.2a7.6 7.6 0 1 1 0-15.2 7.6 7.6 0 1 1 0 15.2zM10 5.5L5.5 10l4.5 4.5V12h4V8h-4V5.5z"></path>';
export default {
  icon: "arrow-with-circle-left",
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
    head += ' id="entypo-icon-arrow-with-circle-left"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "arrow-with-circle-left";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
