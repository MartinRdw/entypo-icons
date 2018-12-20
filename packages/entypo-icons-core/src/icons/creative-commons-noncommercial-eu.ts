var paths =
  '<path d="M16.8 3.2C15 1.3 12.7.4 10 .4s-4.9.9-6.8 2.8C1.3 5.1.4 7.4.4 10c0 2.6.9 4.9 2.8 6.8 1.9 1.9 4.1 2.8 6.8 2.8 2.6 0 4.9-1 6.9-2.9 1.8-1.8 2.7-4.1 2.7-6.7 0-2.7-.9-5-2.8-6.8zm-1.2 12.3c-1.6 1.6-3.5 2.4-5.6 2.4-2.1 0-4-.8-5.6-2.3C2.9 14 2.1 12.1 2.1 10c0-.9.1-1.8.4-2.6L5 8.5h-.1v1.1h.9v.8h-.9v1.1h1c.1.9.5 1.5.9 2.1.9 1.2 2.3 1.8 3.9 1.8 1 0 2-.3 2.5-.6l-.4-1.8c-.3.2-1.1.4-1.8.4-.8 0-1.6-.2-2.1-.8-.2-.3-.4-.6-.5-1.1H12l5 2.2c-.4.7-.9 1.3-1.4 1.8zm-6.3-5zm3.1-.8h.1V8.6H9.8l-1.1-.5.3-.6c.5-.6 1.2-.9 2-.9.7 0 1.4.2 1.8.4l.5-1.8c-.6-.3-1.4-.5-2.4-.5-1.6 0-2.9.6-3.8 1.7-.2.2-.4.5-.5.7L3.4 5.8c.3-.5.7-.9 1.1-1.3C6 2.9 7.8 2.1 10 2.1s4 .8 5.6 2.3c1.5 1.5 2.3 3.4 2.3 5.6 0 .7-.1 1.4-.2 2l-5.3-2.3z"></path>';
export default {
  icon: "creative-commons-noncommercial-eu",
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
    head += ' id="entypo-icon-creative-commons-noncommercial-eu"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "creative-commons-noncommercial-eu";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
