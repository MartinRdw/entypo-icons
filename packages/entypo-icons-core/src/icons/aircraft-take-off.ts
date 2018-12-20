var paths =
  '<path d="M19.87 6.453c.119.257.127 1.29-4.884 3.642l-4.913 2.306c-1.71.803-4.191 1.859-5.285 2.151-.766.204-1.497-.316-1.497-.316S1.085 12.261.499 11.817c-.585-.444-.535-.67.215-.91.467-.149 3.13.493 4.265.78A91.697 91.697 0 0 1 8.12 9.889c-1.396-1.033-4.008-2.962-4.841-3.55-.799-.565.01-.768.01-.768.368-.099 1.162-.228 1.562-.144 2.721.569 7.263 2.071 7.611 2.186a90.641 90.641 0 0 1 2.922-1.465c2.075-.974 4.327-.037 4.486.305z"></path>';
export default {
  icon: "aircraft-take-off",
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
    head += ' id="entypo-icon-aircraft-take-off"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "aircraft-take-off";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
