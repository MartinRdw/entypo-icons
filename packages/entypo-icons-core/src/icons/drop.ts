var paths =
  '<path d="M10.203.561c-.027-.215-.38-.215-.406 0-.883 7.107-5.398 8.572-5.398 13.512 0 3.053 2.564 5.527 5.601 5.527 3.036 0 5.6-2.475 5.6-5.527 0-4.94-4.514-6.405-5.397-13.512zM9.35 8.418c-.059.219-.123.444-.189.678-.401 1.424-.856 3.039-.856 4.906 0 1.012-.598 1.371-1.156 1.371a1.161 1.161 0 0 1-1.156-1.166c0-2.207 1.062-3.649 2-4.92.295-.398.572-.775.797-1.15.103-.172.38-.164.506.006.059.08.079.182.054.275z"></path>';
export default {
  icon: "drop",
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
    head += ' id="entypo-icon-drop"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "drop";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
