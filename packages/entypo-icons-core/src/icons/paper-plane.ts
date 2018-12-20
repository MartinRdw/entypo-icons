var paths =
  '<path d="M18.64 2.634L.984 8.856c-.284.1-.347.345-.01.479l3.796 1.521 2.25.901 10.984-8.066c.148-.108.318.095.211.211l-7.871 8.513v.002l-.452.503.599.322 4.982 2.682c.291.156.668.027.752-.334l2.906-12.525c.079-.343-.148-.552-.491-.431zM7 17.162c0 .246.139.315.331.141.251-.229 2.85-2.561 2.85-2.561L7 13.098v4.064z"></path>';
export default {
  icon: "paper-plane",
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
    head += ' id="entypo-icon-paper-plane"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "paper-plane";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
