var paths =
  '<path d="M19 2H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 14H2V4h16v12zm-3.685-5.123l-3.231 1.605-3.77-6.101L4 14h12l-1.685-3.123zM13.25 9a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z"></path>';
export default {
  icon: "image",
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
    head += ' id="entypo-icon-image"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "image";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
