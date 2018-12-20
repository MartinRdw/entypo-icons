var paths =
  '<path d="M16.8 3.2C15 1.3 12.7.4 10 .4s-4.9.9-6.8 2.8C1.3 5.1.4 7.4.4 10s.9 4.9 2.8 6.8c1.9 1.9 4.1 2.8 6.8 2.8 2.6 0 4.9-1 6.9-2.9 1.8-1.8 2.7-4.1 2.7-6.7s-.9-5-2.8-6.8zm-1.2 12.3c-1.6 1.6-3.5 2.4-5.6 2.4-2.1 0-4-.8-5.6-2.3C2.9 14 2.1 12.1 2.1 10s.8-4 2.4-5.6C6 2.9 7.8 2.1 10 2.1s4 .8 5.6 2.3c1.5 1.5 2.3 3.4 2.3 5.6 0 2.2-.8 4-2.3 5.5zm-.7-5.4c0 2.9-2 5.1-5 5.1-2.1 0-3.9-1.3-4.2-3.8h2.4c.1 1.3.9 1.7 2.1 1.7 1.4 0 2.3-1.3 2.3-3.2 0-2-.8-3.1-2.2-3.1-1.1 0-2 .4-2.2 1.7h.7l-1.9 1.9L5 8.6h.8c.4-2.4 2.1-3.7 4.2-3.7 3 0 4.9 2.3 4.9 5.2z"></path>';
export default {
  icon: "creative-commons-sharealike",
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
    head += ' id="entypo-icon-creative-commons-sharealike"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "creative-commons-sharealike";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
