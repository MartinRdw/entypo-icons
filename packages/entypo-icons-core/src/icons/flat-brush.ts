var paths =
  '<path d="M1.844 14.889c.498.376 1.594-1.178 1.942-.915s-.82 1.762-.528 1.982 1.513-1.239 1.852-.984c.338.255-.803 1.774-.437 2.051.367.277 1.562-1.202 1.852-.983.29.219-.773 1.797-.437 2.05.336.254 1.481-1.263 1.76-1.052.28.211-.844 1.743-.346 2.119.498.375 5.37-8.964 5.37-8.964L8.996 7.254s-7.65 7.26-7.152 7.635zM13.023.831L9.661 5.987l4.121 3.109 4.396-4.246c-.527-1.503-3.44-3.843-5.155-4.019z"></path>';
export default {
  icon: "flat-brush",
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
    head += ' id="entypo-icon-flat-brush"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "flat-brush";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
