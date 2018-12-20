var paths =
  '<path d="M10 .4C4.698.4.4 4.698.4 10a9.6 9.6 0 1 0 19.2-.001C19.6 4.698 15.301.4 10 .4zm0 17.199a7.6 7.6 0 1 1 0-15.2 7.6 7.6 0 0 1 0 15.2zm2.5-11.348c-.828 0-1.5.783-1.5 1.749s.672 1.75 1.5 1.75c.829 0 1.5-.783 1.5-1.75s-.671-1.749-1.5-1.749zM7.501 9.75C8.329 9.75 9 8.967 9 8s-.672-1.75-1.5-1.75S6 7.033 6 8s.672 1.75 1.501 1.75zM13 12.25H7a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"></path>';
export default {
  icon: "emoji-neutral",
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
    head += ' id="entypo-icon-emoji-neutral"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "emoji-neutral";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
