var paths =
  '<path d="M8.38 5.59a3.69 3.69 0 1 0-3.69 3.69 3.67 3.67 0 0 0 2.483-.976L9 9.991l.012.009-.004.003-1.836 1.693a3.665 3.665 0 0 0-2.482-.976 3.69 3.69 0 1 0 3.69 3.69c0-.297-.044-.582-.111-.858l2.844-1.991 4.127 3.065c2.212 1.549 3.76-.663 3.76-.663L8.269 6.448c.066-.276.111-.561.111-.858zm-3.69 1.8a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm0 8.82a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zM19 6.038s-1.548-2.212-3.76-.663L12.035 7.61l2.354 1.648L19 6.038z"></path>';
export default {
  icon: "scissors",
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
    head += ' id="entypo-icon-scissors"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "scissors";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
