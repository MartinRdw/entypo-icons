var paths =
  '<path d="M18 1H2C.899 1 0 1.9 0 3v11c0 1.1.882 2.178 1.961 2.393l4.372.875S2.57 19 5 19h10c2.43 0-1.334-1.732-1.334-1.732l4.373-.875C19.117 16.178 20 15.1 20 14V3c0-1.1-.9-2-2-2zm0 13H2V3h16v11z"></path>';
export default {
  icon: "tv",
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
    head += ' id="entypo-icon-tv"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "tv";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
