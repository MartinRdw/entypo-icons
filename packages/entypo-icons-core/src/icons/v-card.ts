var paths =
  '<path d="M19 3H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-6 4h4v1h-4V7zm-2 7.803a2.31 2.31 0 0 0-.529-.303c-1.18-.508-2.961-1.26-2.961-2.176 0-.551.359-.371.518-1.379.066-.418.385-.007.445-.961 0-.38-.174-.475-.174-.475s.088-.562.123-.996c.036-.453-.221-1.8-1.277-2.097-.186-.188-.311-.111.258-.412-1.244-.059-1.534.592-2.196 1.071-.564.42-.717 1.085-.689 1.439.037.433.125.996.125.996s-.175.094-.175.474c.061.954.38.543.445.961.158 1.008.519.828.519 1.379 0 .916-1.781 1.668-2.961 2.176a2.503 2.503 0 0 0-.471.26V5h9v9.803zM18 11h-5v-1h5v1z"></path>';
export default {
  icon: "v-card",
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
    head += ' id="entypo-icon-v-card"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "v-card";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
