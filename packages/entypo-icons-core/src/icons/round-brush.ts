var paths =
  '<path d="M12.135 9.304c-2.558-1.879-6.7 1.17-7.632 5.284-.718 3.17-4.043 3.04-3.996 3.464.046.424 7.473 1.103 10.156-1.123 2.506-2.08 4.277-5.564 1.472-7.625zm2.203-7.796l-3.363 5.156c1.102.179 3.635 1.885 4.121 3.109l4.396-4.246c-.526-1.503-3.438-3.844-5.154-4.019z"></path>';
export default {
  icon: "round-brush",
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
    head += ' id="entypo-icon-round-brush"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "round-brush";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
