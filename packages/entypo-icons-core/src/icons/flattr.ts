var paths =
  '<path d="M5.598 8.541c0-1.637.434-2.678 1.889-2.912.508-.1 1.566-.064 2.239-.064v2.5c0 .024.003.064.009.084a.236.236 0 0 0 .228.175c.061 0 .118-.031.178-.09L16.377 2H7.548C3.874 2 2 4.115 2 8.066v8.287l3.598-3.602v-4.21zM14.4 7.248v4.209c0 1.637-.434 2.68-1.889 2.912-.508.1-1.566.065-2.238.065v-2.5a.48.48 0 0 0-.009-.084.242.242 0 0 0-.228-.176c-.062 0-.118.033-.179.092l-6.235 6.232L7.809 18h4.643C16.125 18 18 15.885 18 11.934V3.647l-3.6 3.601z"></path>';
export default {
  icon: "flattr",
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
    head += ' id="entypo-icon-flattr"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "flattr";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
