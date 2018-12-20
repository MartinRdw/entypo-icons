var paths =
  '<path d="M18 14.824V12.5A3.5 3.5 0 0 0 14.5 9h-2A1.5 1.5 0 0 1 11 7.5V5.176A2.395 2.395 0 0 0 12.4 3a2.4 2.4 0 1 0-4.8 0c0 .967.576 1.796 1.4 2.176V7.5A1.5 1.5 0 0 1 7.5 9h-2A3.5 3.5 0 0 0 2 12.5v2.324A2.396 2.396 0 0 0 3 19.4a2.397 2.397 0 1 0 1-4.576V12.5A1.5 1.5 0 0 1 5.5 11h2c.539 0 1.044-.132 1.5-.35v4.174a2.396 2.396 0 0 0 1 4.576 2.397 2.397 0 1 0 1-4.576V10.65c.456.218.961.35 1.5.35h2a1.5 1.5 0 0 1 1.5 1.5v2.324A2.395 2.395 0 0 0 14.6 17a2.4 2.4 0 1 0 4.8 0c0-.967-.575-1.796-1.4-2.176zM10 1.615a1.384 1.384 0 1 1 0 2.768 1.384 1.384 0 0 1 0-2.768zm-7 16.77a1.385 1.385 0 1 1 0-2.77 1.385 1.385 0 0 1 0 2.77zm7 0a1.385 1.385 0 1 1 0-2.77 1.385 1.385 0 0 1 0 2.77zm7 0a1.385 1.385 0 1 1 0-2.77 1.385 1.385 0 0 1 0 2.77z"></path>';
export default {
  icon: "flow-tree",
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
    head += ' id="entypo-icon-flow-tree"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "flow-tree";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
