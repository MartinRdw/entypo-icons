var paths =
  '<path d="M10 .4C4.698.4.4 4.698.4 10a9.6 9.6 0 1 0 19.2-.001C19.6 4.698 15.301.4 10 .4zm-.151 15.199h-.051c-.782-.023-1.334-.6-1.311-1.371.022-.758.587-1.309 1.343-1.309l.046.002c.804.023 1.35.594 1.327 1.387-.023.76-.578 1.291-1.354 1.291zm3.291-6.531c-.184.26-.588.586-1.098.983l-.562.387c-.308.24-.494.467-.563.688-.056.174-.082.221-.087.576v.09H8.685l.006-.182c.027-.744.045-1.184.354-1.547.485-.568 1.555-1.258 1.6-1.287a1.65 1.65 0 0 0 .379-.387c.225-.311.324-.555.324-.793 0-.334-.098-.643-.293-.916-.188-.266-.545-.398-1.061-.398-.512 0-.863.162-1.072.496-.216.341-.325.7-.325 1.067v.092H6.386l.004-.096c.057-1.353.541-2.328 1.435-2.897.563-.361 1.264-.544 2.081-.544 1.068 0 1.972.26 2.682.772.721.519 1.086 1.297 1.086 2.311-.001.567-.18 1.1-.534 1.585z"></path>';
export default {
  icon: "help-with-circle",
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
    head += ' id="entypo-icon-help-with-circle"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "help-with-circle";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
