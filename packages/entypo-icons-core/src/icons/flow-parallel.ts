var paths =
  '<path d="M8.4 4a2.4 2.4 0 1 0-4.8 0c0 .967.576 1.796 1.4 2.176v7.649A2.393 2.393 0 0 0 3.6 16a2.4 2.4 0 1 0 4.8 0c0-.967-.576-1.796-1.4-2.176V6.176A2.396 2.396 0 0 0 8.4 4zM7.384 16a1.385 1.385 0 1 1-2.77 0 1.385 1.385 0 0 1 2.77 0zM6 5.385a1.385 1.385 0 1 1 .001-2.77A1.385 1.385 0 0 1 6 5.386zm9 8.439V6.176A2.395 2.395 0 0 0 16.4 4a2.4 2.4 0 1 0-4.8 0c0 .967.576 1.796 1.4 2.176v7.649a2.395 2.395 0 0 0-1.4 2.176 2.4 2.4 0 1 0 4.8 0c0-.968-.575-1.797-1.4-2.177zM12.616 4a1.384 1.384 0 1 1 2.769 0 1.385 1.385 0 0 1-2.769 0zM14 17.385a1.385 1.385 0 1 1 0-2.77 1.385 1.385 0 0 1 0 2.77z"></path>';
export default {
  icon: "flow-parallel",
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
    head += ' id="entypo-icon-flow-parallel"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "flow-parallel";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
