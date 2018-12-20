var paths =
  '<path d="M16.399 7.643V10.4c0 2.236-1.643 4.629-5.399 4.959V18h2.6c.22 0 .4.18.4.4v1.2c0 .221-.181.4-.4.4H6.4c-.22 0-.4-.18-.4-.4v-1.2c0-.22.18-.4.399-.4H9v-2.641c-3.758-.33-5.4-2.723-5.4-4.959V7.643a.4.4 0 0 1 .4-.4h.6c.22 0 .4.18.4.4V10.4c0 1.336 1.053 3.6 5 3.6 3.946 0 5-2.264 5-3.6V7.643a.4.4 0 0 1 .399-.4H16a.399.399 0 0 1 .399.4zM10 12c2.346 0 3-.965 3-1.6V7.242H7V10.4c0 .635.652 1.6 3 1.6zm3-10.4c0-.637-.654-1.6-3-1.6-2.348 0-3 .963-3 1.6v4.242h6V1.6z"></path>';
export default {
  icon: "mic",
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
    head += ' id="entypo-icon-mic"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "mic";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
