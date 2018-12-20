var paths =
  '<path d="M11.18 14.356c0-1.451 1.1-2.254 2.894-3.442C16.268 9.458 19 7.649 19 3.354a.703.703 0 0 0-.709-.699h-3.43C14.377 1.759 12.932.8 10 .8c-2.934 0-4.377.959-4.862 1.855H1.707A.703.703 0 0 0 1 3.354c0 4.295 2.73 6.104 4.926 7.559 1.794 1.188 2.894 1.991 2.894 3.442v1.311c-1.884.209-3.269.906-3.269 1.736 0 .994 1.992 1.799 4.449 1.799s4.449-.805 4.449-1.799c0-.83-1.385-1.527-3.269-1.736v-1.31zM13.957 9.3c.566-1.199 1.016-2.826 1.088-5.246h2.51c-.24 2.701-1.862 4.064-3.598 5.246zM10 2.026c2.732-.002 3.799 1.115 3.798 1.529 0 .418-1.066 1.533-3.798 1.535-2.732-.001-3.799-1.116-3.799-1.534C6.2 3.142 7.268 2.024 10 2.026zM2.445 4.054h2.509c.073 2.42.521 4.047 1.089 5.246-1.736-1.182-3.359-2.545-3.598-5.246z"></path>';
export default {
  icon: "trophy",
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
    head += ' id="entypo-icon-trophy"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "trophy";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
