var paths =
  '<path d="M14.6 1H5.398C4.629 1 4 1.629 4 2.4v15.2c0 .77.629 1.4 1.398 1.4H14.6c.769 0 1.4-.631 1.4-1.4V2.4c0-.771-.631-1.4-1.4-1.4zM7 12c.689 0 1.25.447 1.25 1S7.689 14 7 14c-.69 0-1.25-.447-1.25-1s.56-1 1.25-1zm-1.25-2c0-.553.56-1 1.25-1 .689 0 1.25.447 1.25 1 0 .553-.561 1-1.25 1-.69 0-1.25-.447-1.25-1zM7 15c.689 0 1.25.447 1.25 1 0 .553-.561 1-1.25 1-.69 0-1.25-.447-1.25-1s.56-1 1.25-1zm3-3c.689 0 1.25.447 1.25 1s-.561 1-1.25 1c-.69 0-1.25-.447-1.25-1s.56-1 1.25-1zm-1.25-2c0-.553.56-1 1.25-1 .689 0 1.25.447 1.25 1 0 .553-.561 1-1.25 1-.69 0-1.25-.447-1.25-1zM10 15c.689 0 1.25.447 1.25 1 0 .553-.561 1-1.25 1-.69 0-1.25-.447-1.25-1s.56-1 1.25-1zm3-3c.689 0 1.25.447 1.25 1s-.561 1-1.25 1c-.69 0-1.25-.447-1.25-1s.56-1 1.25-1zm-1.25-2c0-.553.56-1 1.25-1 .689 0 1.25.447 1.25 1 0 .553-.561 1-1.25 1-.69 0-1.25-.447-1.25-1zM13 15c.689 0 1.25.447 1.25 1 0 .553-.561 1-1.25 1-.69 0-1.25-.447-1.25-1s.56-1 1.25-1zM5 7V4h10v3H5z"></path>';
export default {
  icon: "calculator",
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
    head += ' id="entypo-icon-calculator"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "calculator";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
