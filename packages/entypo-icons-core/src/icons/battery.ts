var paths =
  '<path d="M15.408 10c0-2.766 1.277-4.32 2.277-4.32H19C18.332 4.621 17.779 4 15.342 4H5.334C1.6 4 0 7.441 0 10s1.6 6 5.334 6h10.008c2.438 0 2.99-.621 3.658-1.68h-1.315c-1 0-2.277-1.554-2.277-4.32zm-2.72 1.795c-.164.25-.676.016-.676.016l-2.957-1.338s-.264.67-.467 1.141c-.205.471-.361 1.004-1.209.408-.849-.598-3.581-3.25-3.581-3.25s-.345-.284-.173-.551c.163-.252.676-.016.676-.016l2.956 1.336s.265-.668.468-1.139c.205-.47.361-1.006 1.209-.408.849.596 3.58 3.25 3.58 3.25s.345.283.174.551zm6.186-3.867h-.749c-.559 0-1.105.754-1.105 1.979 0 1.227.547 1.98 1.105 1.98h.749c.56 0 1.126-.754 1.126-1.98 0-1.225-.566-1.979-1.126-1.979z"></path>';
export default {
  icon: "battery",
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
    head += ' id="entypo-icon-battery"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "battery";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
