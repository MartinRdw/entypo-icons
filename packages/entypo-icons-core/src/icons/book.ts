var paths =
  '<path d="M17 5.95v10.351c0 .522-.452.771-1 1.16-.44.313-1-.075-1-.587V6.76c0-.211-.074-.412-.314-.535-.24-.123-7.738-4.065-7.738-4.065-.121-.045-.649-.378-1.353-.016-.669.344-1.033.718-1.126.894l8.18 4.482c.217.114.351.29.351.516v10.802a.67.67 0 0 1-.369.585.746.746 0 0 1-.333.077.736.736 0 0 1-.386-.104c-.215-.131-7.774-4.766-8.273-5.067-.24-.144-.521-.439-.527-.658L3 3.385c0-.198-.023-.547.289-1.032C3.986 1.269 6.418.036 7.649.675l8.999 4.555c.217.112.352.336.352.72z"></path>';
export default {
  icon: "book",
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
    head += ' id="entypo-icon-book"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "book";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
