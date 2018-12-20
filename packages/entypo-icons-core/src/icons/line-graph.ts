var paths =
  '<path d="M.69 11.331l1.363.338 1.026-1.611-1.95-.482a.904.904 0 1 0-.439 1.755zm17.791.261l-4.463 4.016-5.247-4.061a.905.905 0 0 0-.338-.162l-.698-.174-1.027 1.611 1.1.273 5.697 4.408a.915.915 0 0 0 1.168-.043l5.028-4.527a.9.9 0 0 0 .064-1.277.912.912 0 0 0-1.284-.064zM8.684 7.18l4.887 3.129a.913.913 0 0 0 1.24-.246l5.027-7.242a.902.902 0 0 0-.231-1.26.91.91 0 0 0-1.265.23l-4.528 6.521-4.916-3.147a.915.915 0 0 0-.688-.123.914.914 0 0 0-.571.4L.142 17.209A.903.903 0 0 0 .908 18.6a.908.908 0 0 0 .768-.42l7.008-11z"></path>';
export default {
  icon: "line-graph",
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
    head += ' id="entypo-icon-line-graph"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "line-graph";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
