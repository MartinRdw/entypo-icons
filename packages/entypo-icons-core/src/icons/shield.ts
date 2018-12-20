var paths =
  '<path d="M17.604 3.332C12.99 4 12.075 2.833 10 1 7.925 2.833 7.01 4 2.396 3.332-.063 15.58 10 19 10 19s10.063-3.42 7.604-15.668zm-5.131 9.977L10 12.009l-2.472 1.3L8 10.556l-2-1.95 2.764-.401L10 5.7l1.236 2.505L14 8.606l-2 1.949.473 2.754z"></path>';
export default {
  icon: "shield",
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
    head += ' id="entypo-icon-shield"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "shield";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
