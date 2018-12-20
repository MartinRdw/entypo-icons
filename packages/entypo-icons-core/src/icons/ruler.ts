var paths =
  '<path d="M14.249.438L.438 14.251a1.505 1.505 0 0 0 .002 2.124l3.185 3.187a1.506 1.506 0 0 0 2.124.002L19.562 5.751a1.508 1.508 0 0 0 0-2.125L16.376.438a1.51 1.51 0 0 0-2.127 0zM3.929 15.312l-.759.759-1.896-1.897.759-.759 1.896 1.897zm3.036 0l-.759.759-3.415-3.415.759-.76 3.415 3.416zm0-3.036l-.759.759-1.898-1.896.76-.76 1.897 1.897zm1.518-1.518l-.759.759-1.896-1.896.759-.76 1.896 1.897zm3.035 0l-.759.759-3.414-3.414.759-.759 3.414 3.414zm0-3.035l-.759.759-1.896-1.896.759-.759 1.896 1.896zm1.518-1.517l-.759.759-1.897-1.897.759-.759 1.897 1.897zm3.036 0l-.76.759-3.414-3.415.759-.76 3.415 3.416zm-.001-3.035l-.759.759-1.896-1.898.759-.758 1.896 1.897z"></path>';
export default {
  icon: "ruler",
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
    head += ' id="entypo-icon-ruler"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "ruler";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
