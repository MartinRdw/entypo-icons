var paths =
  '<path d="M19.754 15.631L18 13V4c0-1.102-.9-2-2-2H4c-1.101 0-2 .898-2 2v9L.246 15.631C0 16 0 16.213 0 16.5v.5c0 .5.5 1 .999 1h18.002c.499 0 .999-.5.999-1v-.5c0-.287 0-.5-.246-.869zM7 16l.6-1h4.8l.6 1H7zm9-4H4V4h12v8z"></path>';
export default {
  icon: "laptop",
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
    head += ' id="entypo-icon-laptop"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "laptop";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
