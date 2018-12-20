var paths =
  '<path d="M5 14c-2.188 0-3.96-1.789-3.96-4S2.812 6 5 6c2.187 0 3.96 1.789 3.96 4S7.187 14 5 14z"></path><path d="M15 14c-2.188 0-3.96-1.789-3.96-4S12.812 6 15 6c2.187 0 3.96 1.789 3.96 4s-1.773 4-3.96 4z"></path>';
export default {
  icon: "flickr",
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
    head += ' id="entypo-icon-flickr"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "flickr";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
