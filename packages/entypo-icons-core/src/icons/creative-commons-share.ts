var paths =
  '<path d="M16.8 3.2C15 1.3 12.7.4 10 .4s-4.9.9-6.8 2.8C1.3 5.1.4 7.4.4 10c0 2.6.9 4.9 2.8 6.8 1.9 1.9 4.1 2.8 6.8 2.8 2.6 0 4.9-1 6.9-2.9 1.8-1.8 2.7-4.1 2.7-6.7 0-2.7-.9-5-2.8-6.8zm-1.2 12.3c-1.6 1.6-3.5 2.4-5.6 2.4-2.1 0-4-.8-5.6-2.3C2.9 14 2.1 12.1 2.1 10c0-2.1.8-4 2.4-5.6C6 2.9 7.8 2.1 10 2.1s4 .8 5.6 2.3c1.5 1.5 2.3 3.4 2.3 5.6 0 2.2-.8 4-2.3 5.5zm-1.7-8.3h-2.1v-2c0-.3-.2-.5-.5-.5H6.1c-.3 0-.5.3-.5.5v7.1c0 .3.2.5.5.5h2.1v2.1c0 .3.2.5.5.5h5.2c.3 0 .5-.2.5-.5V7.8c.1-.3-.2-.6-.5-.6zm-5.3 0c-.3 0-.5.3-.5.5v3.9H6.6v-6h4.2v1.6H8.6c.1 0 .1 0 0 0zm4.8 7.1H9.2v-6h4.2v6z"></path>';
export default {
  icon: "creative-commons-share",
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
    head += ' id="entypo-icon-creative-commons-share"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "creative-commons-share";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
