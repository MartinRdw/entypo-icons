var paths =
  '<path d="M2.763 13.563c-1.515 1.488-.235 3.016-2.247 5.279-.908 1.023 3.738.711 6.039-1.551.977-.961.701-2.359-.346-3.389-1.047-1.028-2.47-1.3-3.446-.339zM19.539.659C18.763-.105 10.16 6.788 7.6 9.305c-1.271 1.25-1.695 1.92-2.084 2.42-.17.219.055.285.154.336.504.258.856.496 1.311.943.456.447.699.793.959 1.289.053.098.121.318.342.152.51-.383 1.191-.801 2.462-2.049C13.305 9.88 20.317 1.422 19.539.659z"></path>';
export default {
  icon: "brush",
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
    head += ' id="entypo-icon-brush"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "brush";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
