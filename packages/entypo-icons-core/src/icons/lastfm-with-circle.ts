var paths =
  '<path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm2.644 12.43c-2.002 0-2.697-.91-3.066-2.043l-.371-1.166c-.277-.851-.501-1.467-1.519-1.467-.706 0-1.626.463-1.626 1.898 0 1.119.77 1.82 1.568 1.82.677 0 1.084-.381 1.296-.572l.354 1.012c-.241.174-.734.517-1.707.517-1.346 0-2.625-.957-2.625-2.73 0-1.844 1.333-2.93 2.705-2.93 1.54 0 2.113.56 2.6 2.078l.382 1.166c.278.852.865 1.471 2.034 1.471.787 0 1.204-.176 1.204-.607 0-.338-.197-.584-.787-.723l-.787-.188c-.961-.232-1.343-.734-1.343-1.529 0-1.271 1.018-1.668 2.061-1.668 1.181 0 1.898.432 1.99 1.482l-1.157.139c-.046-.5-.347-.711-.903-.711-.509 0-.821.234-.821.631 0 .35.15.559.66.676l.74.164c.995.233 1.528.723 1.528 1.668-.001 1.169-.974 1.612-2.41 1.612z"></path>';
export default {
  icon: "lastfm-with-circle",
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
    head += ' id="entypo-icon-lastfm-with-circle"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "lastfm-with-circle";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
