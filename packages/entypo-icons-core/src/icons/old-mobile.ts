var paths =
  '<path d="M13.6 3H7V0H5v18.6c0 .77.629 1.4 1.398 1.4H13.6c.769 0 1.4-.631 1.4-1.4V4.401C15 3.629 14.369 3 13.6 3zM8 15c-.691 0-1.25-.447-1.25-1s.559-1 1.25-1 1.25.447 1.25 1-.559 1-1.25 1zm1.25 2c0 .553-.559 1-1.25 1s-1.25-.447-1.25-1 .559-1 1.25-1 1.25.447 1.25 1zM7 11V5h6v6H7zm5 4c-.691 0-1.25-.447-1.25-1s.559-1 1.25-1 1.25.447 1.25 1-.559 1-1.25 1zm1.25 2c0 .553-.559 1-1.25 1s-1.25-.447-1.25-1 .559-1 1.25-1 1.25.447 1.25 1z"></path>';
export default {
  icon: "old-mobile",
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
    head += ' id="entypo-icon-old-mobile"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "old-mobile";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
