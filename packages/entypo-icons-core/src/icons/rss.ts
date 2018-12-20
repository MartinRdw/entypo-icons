var paths =
  '<path d="M2.4 2.4v2.367c7.086 0 12.83 5.746 12.83 12.832h2.369C17.599 9.205 10.794 2.4 2.4 2.4zm0 4.737v2.369a8.093 8.093 0 0 1 8.093 8.094h2.368c0-5.778-4.684-10.463-10.461-10.463zm2.269 5.922a2.271 2.271 0 0 0 0 4.541c1.254 0 2.269-1.016 2.269-2.27s-1.015-2.271-2.269-2.271z"></path>';
export default {
  icon: "rss",
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
    head += ' id="entypo-icon-rss"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "rss";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
