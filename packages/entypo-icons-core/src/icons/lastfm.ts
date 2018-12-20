var paths =
  '<path d="M8.574 14.576c-.477.348-1.455 1.024-3.381 1.024C2.532 15.6 0 13.707 0 10.195 0 6.547 2.637 4.4 5.354 4.4c3.047 0 4.183 1.108 5.144 4.109l.756 2.309c.551 1.688 1.713 2.91 4.026 2.91 1.558 0 2.382-.346 2.382-1.199 0-.67-.389-1.156-1.557-1.434l-1.559-.369c-1.9-.461-2.656-1.455-2.656-3.025 0-2.516 2.016-3.301 4.077-3.301 2.337 0 3.757.854 3.94 2.932l-2.291.277c-.092-.992-.688-1.408-1.787-1.408-1.008 0-1.627.461-1.627 1.246 0 .693.299 1.109 1.307 1.34l1.466.324c1.97.461 3.025 1.432 3.025 3.303 0 2.309-1.924 3.186-4.766 3.186-3.963 0-5.338-1.801-6.07-4.041L8.43 9.25c-.549-1.687-.99-2.902-3.006-2.902-1.398 0-3.219.916-3.219 3.756 0 2.217 1.523 3.604 3.104 3.604 1.34 0 2.146-.754 2.564-1.131l.701 1.999z"></path>';
export default {
  icon: "lastfm",
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
    head += ' id="entypo-icon-lastfm"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "lastfm";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
