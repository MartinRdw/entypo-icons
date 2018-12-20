var paths =
  '<path d="M17.691 4.725c-.503-2.977-3.22-4.967-6.069-4.441C8.772.809 6.366 3.1 6.869 6.079c.107.641.408 1.644.763 2.365l-5.175 7.723c-.191.285-.299.799-.242 1.141l.333 1.971a.612.612 0 0 0 .7.514l1.516-.281c.328-.059.744-.348.924-.639l2.047-3.311.018-.022 1.386-.256 2.39-3.879c.785.139 1.912.092 2.578-.031 2.848-.526 4.087-3.67 3.584-6.649zm-2.525 1.527c-.784 1.17-1.584.346-2.703-.475-1.119-.818-2.135-1.322-1.352-2.492.784-1.17 2.326-1.455 3.447-.635 1.12.819 1.391 2.432.608 3.602z"></path>';
export default {
  icon: "key",
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
    head += ' id="entypo-icon-key"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "key";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
