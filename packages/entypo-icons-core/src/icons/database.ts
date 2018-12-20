var paths =
  '<path d="M16.726 12.641c-.843 1.363-3.535 2.361-6.726 2.361s-5.883-.998-6.727-2.361c-.178-.29-.273-.135-.273.007v2.002c0 1.94 3.134 3.95 7 3.95s7-2.01 7-3.949v-2.002c0-.143-.096-.298-.274-.008zm.011-5.116c-.83 1.205-3.532 2.09-6.737 2.09s-5.908-.885-6.738-2.09C3.091 7.277 3 7.412 3 7.523V9.88c0 1.762 3.134 3.189 7 3.189s7-1.428 7-3.189V7.523c0-.111-.092-.246-.263.002zM10 1C6.134 1 3 2.18 3 3.633v1.26c0 1.541 3.134 2.791 7 2.791s7-1.25 7-2.791v-1.26C17 2.18 13.866 1 10 1z"></path>';
export default {
  icon: "database",
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
    head += ' id="entypo-icon-database"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "database";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
