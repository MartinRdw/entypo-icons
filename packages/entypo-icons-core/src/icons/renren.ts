var paths =
  '<path d="M8.468.865C4.117 1.594.8 5.377.8 9.936c0 2.266.82 4.338 2.179 5.941 3.221-1.559 5.472-5.086 5.489-9.191V.865zm1.534 11.393c-.573 2.373-2.285 4.4-4.418 5.748A9.154 9.154 0 0 0 10 19.135c1.602 0 3.108-.41 4.418-1.129-2.133-1.348-3.844-3.375-4.416-5.748zm1.533-5.615c0 4.123 2.256 7.668 5.487 9.234A9.16 9.16 0 0 0 19.2 9.936c0-4.559-3.315-8.34-7.665-9.07v5.777z"></path>';
export default {
  icon: "renren",
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
    head += ' id="entypo-icon-renren"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "renren";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
