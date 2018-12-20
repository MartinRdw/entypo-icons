var paths =
  '<path d="M16 1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-3.205 10.519c-.185.382-.373.402-.291 0C12.715 10.48 12.572 8.248 11 8v4.75c0 .973-.448 1.82-1.639 2.203-1.156.369-2.449-.016-2.752-.846s.377-1.84 1.518-2.256c.637-.232 1.375-.292 1.873-.101V5h1c0 2.355 4.065 1.839 1.795 6.519z"></path>';
export default {
  icon: "music",
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
    head += ' id="entypo-icon-music"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "music";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
