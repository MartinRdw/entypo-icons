var paths =
  '<path d="M18.81 17.406L2.597 1.192a.498.498 0 0 0-.704 0l-.704.704a.498.498 0 0 0 0 .703l16.214 16.214c.194.194.51.194.704 0l.703-.704a.497.497 0 0 0 0-.703z"></path><path d="M15 8.38v3.8l2 2v-5.8c-.322.073-.655.12-1 .12s-.678-.047-1-.12zM16 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM5 15V7.824l-2-2V15c0 1.1.9 2 2 2h9.176l-2-2H5zm6.62-10a4.5 4.5 0 0 1-.12-1 4.5 4.5 0 0 1 .12-1H5.818l2 2h3.802z"></path>';
export default {
  icon: "notifications-off",
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
    head += ' id="entypo-icon-notifications-off"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "notifications-off";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
