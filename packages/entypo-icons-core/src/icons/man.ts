var paths =
  '<path d="M10 4a2 2 0 1 0-.001-4.001A2 2 0 0 0 10 4zm5.978 7.583c-.385-1.775-1.058-4.688-2.042-5.894-.957-1.173-2.885-1.222-3.936-1.222-1.051 0-2.979.049-3.936 1.222-.984 1.206-1.657 4.119-2.042 5.894-.213.983 1.154 1.344 1.511.355.531-1.473.941-2.71 1.839-3.736C7.844 11.109 6.102 16.168 6 19a1 1 0 0 0 1.934.358C8.391 17.771 10 13.355 10 13.355s1.609 4.416 2.066 6.003A1 1 0 0 0 14 19c-.102-2.832-1.844-7.891-1.372-10.797.898 1.026 1.308 2.263 1.839 3.736.356.988 1.724.627 1.511-.356z"></path>';
export default {
  icon: "man",
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
    head += ' id="entypo-icon-man"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "man";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
