var paths =
  '<path d="M16.788 3.212c-3.749-3.749-9.827-3.749-13.575 0-3.75 3.75-3.75 9.828-.002 13.576A9.6 9.6 0 1 0 16.788 3.212zm-10.04 10.04a4.598 4.598 0 0 1 0-6.505 4.6 4.6 0 1 1 0 6.505zm8.599-.373a6.07 6.07 0 0 0 0-5.759l1.783-.96a8.111 8.111 0 0 1 .002 7.678l-1.785-.959zm-1.508-10.01l-.961 1.784a6.073 6.073 0 0 0-5.756 0L6.161 2.87a8.114 8.114 0 0 1 7.678-.001zM2.87 6.16l1.784.961a6.07 6.07 0 0 0-.001 5.756l-1.784.961A8.111 8.111 0 0 1 2.87 6.16zm3.289 10.969l.961-1.783a6.068 6.068 0 0 0 5.759 0l.961 1.785a8.117 8.117 0 0 1-7.681-.002z"></path>';
export default {
  icon: "lifebuoy",
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
    head += ' id="entypo-icon-lifebuoy"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "lifebuoy";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
