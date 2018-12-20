var paths =
  '<path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM8.063 11.5l-.153.309c-.071.138-.236.191-.347.191H6.149c-.25 0-.239-.191-.178-.316l.092-.184 1.125-2.25L6.563 8l-.092-.185c-.061-.125-.072-.315.178-.315h1.414c.111 0 .276.053.347.19l.153.31.625 1.25-1.125 2.25zm5.967-5.685L13.938 6l-2.5 5 1.5 3 .092.184c.062.125.072.316-.178.316h-1.414c-.112 0-.275-.053-.345-.191L10.938 14l-1.5-3 2.5-5 .155-.31c.069-.138.232-.19.345-.19h1.414c.25 0 .239.19.178.315z"></path>';
export default {
  icon: "xing-with-circle",
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
    head += ' id="entypo-icon-xing-with-circle"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "xing-with-circle";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
