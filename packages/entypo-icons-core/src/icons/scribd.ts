var paths =
  '<path d="M4.643 18.284c0 .224-.072.492-.148.716h5.737c.328-.377.513-.831.513-1.342 0-1.385-1.644-2.154-5.241-3.842l-.506-.236C3.225 12.737 1.912 11.995 1 11.111v4.398a4.07 4.07 0 0 1 .558-.042c3.001.001 3.085 2.789 3.085 2.817zM17 1h-3.738c1.748 1.178 2.467 2.842 2.467 4.142 0 2.194-1.836 2.905-2.727 2.905l-.271.002c-2.046 0-3.09-1.247-3.104-3.707-.121-.096-.688-.453-2.347-.453-1.96 0-2.773 1.543-2.773 2.369 0 .973.543 2.055 4.484 3.382 6.736 2.254 6.736 5.255 6.736 7.903v.026c0 .437-.031.924-.117 1.431H17c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2z"></path>';
export default {
  icon: "scribd",
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
    head += ' id="entypo-icon-scribd"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "scribd";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
