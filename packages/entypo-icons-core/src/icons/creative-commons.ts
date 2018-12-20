var paths =
  '<path d="M8.8 10.8l1.1.6c-.2.4-.6.8-1 1.1-.4.3-.9.4-1.4.4-.8 0-1.5-.2-2-.8-.5-.5-.7-1.2-.7-2.1 0-.9.3-1.6.8-2.1.4-.5 1.1-.8 1.9-.8 1.1 0 2 .4 2.4 1.3l-1.2.7c-.2-.3-.3-.5-.5-.6s-.4-.1-.5-.1c-.8 0-1.2.5-1.2 1.6 0 .5.1.9.3 1.2.2.3.5.4.9.4.5 0 .9-.2 1.1-.8zm10.8-.8c0 2.7-.9 4.9-2.7 6.7-1.9 1.9-4.2 2.9-6.9 2.9-2.6 0-4.9-.9-6.8-2.8C1.3 14.9.4 12.7.4 10c0-2.6.9-4.9 2.8-6.8C5.1 1.3 7.3.4 10 .4s5 .9 6.8 2.8c1.9 1.8 2.8 4.1 2.8 6.8zm-1.7 0c0-2.2-.8-4-2.3-5.6C14 2.9 12.2 2.1 10 2.1c-2.2 0-4 .8-5.5 2.3C2.9 6 2.1 7.9 2.1 10c0 2.1.8 4 2.3 5.5 1.6 1.6 3.4 2.3 5.6 2.3 2.1 0 4-.8 5.6-2.4 1.5-1.4 2.3-3.2 2.3-5.4zM13 11.6c-.4 0-.7-.1-.9-.4-.2-.3-.3-.7-.3-1.2 0-1.1.4-1.6 1.2-1.6.2 0 .4.1.5.2.2.1.4.3.5.6l1.2-.6c-.5-.9-1.3-1.3-2.4-1.3-.8 0-1.4.3-1.9.8s-.8 1.2-.8 2.1c0 .9.2 1.6.7 2.1.5.5 1.2.8 2 .8.5 0 1-.1 1.4-.4.4-.3.8-.6 1-1.1L14 11c-.1.4-.5.6-1 .6z"></path>';
export default {
  icon: "creative-commons",
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
    head += ' id="entypo-icon-creative-commons"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "creative-commons";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
