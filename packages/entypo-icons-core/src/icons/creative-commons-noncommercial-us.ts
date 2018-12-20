var paths =
  '<path d="M16.8 3.2C15 1.3 12.7.4 10 .4s-4.9.9-6.8 2.8C1.3 5.1.4 7.4.4 10s.9 4.9 2.8 6.8c1.9 1.9 4.1 2.8 6.8 2.8 2.6 0 4.9-1 6.9-2.9 1.8-1.8 2.7-4.1 2.7-6.7s-.9-5-2.8-6.8zm-1.2 12.3c-1.6 1.6-3.5 2.4-5.6 2.4-2.1 0-4-.8-5.6-2.3C2.9 14 2.1 12.1 2.1 10c0-.9.1-1.8.4-2.6l4.9 2.2c.5.2 1 .4 1.5.7l1.1.5.9.4c.2.1.3.3.3.6 0 .7-.6 1-1.2 1-.9 0-1.5-.3-2.1-.9l-1.3 1.3c.8.7 1.8 1.1 2.9 1.1v1.5h1.1v-1.5c1.3-.1 2.4-.9 2.6-2.1l3.6 1.6c-.2.6-.7 1.2-1.2 1.7zm-2.9-5.6c-.5-.2-1-.4-1.5-.7l-.8-.4-1.3-.5c0-.1-.1-.2-.1-.3 0-.6.7-.7 1.2-.7.6 0 1.2.2 1.6.6l1.3-1.3c-.8-.6-1.7-.8-2.4-.9V4.2H9.6v1.5c-1.2 0-2.2.6-2.5 1.7L3.4 5.7c.3-.5.7-.9 1.1-1.3C6 2.9 7.8 2.1 10 2.1s4 .8 5.6 2.3c1.5 1.5 2.3 3.4 2.3 5.6 0 .7-.1 1.4-.2 2.1l-5-2.2z"></path>';
export default {
  icon: "creative-commons-noncommercial-us",
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
    head += ' id="entypo-icon-creative-commons-noncommercial-us"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "creative-commons-noncommercial-us";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
