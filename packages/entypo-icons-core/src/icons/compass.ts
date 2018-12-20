var paths =
  '<path d="M5.454 14.548s4.568-.627 6.518-2.576 2.576-6.518 2.576-6.518-4.569.627-6.518 2.576-2.576 6.518-2.576 6.518zm3.563-5.533c.818-.818 2.385-1.4 3.729-1.762-.361 1.342-.945 2.92-1.76 3.732a1.39 1.39 0 0 1-1.969 0 1.391 1.391 0 0 1 0-1.97zM10.001.4C4.698.4.4 4.698.4 10a9.6 9.6 0 0 0 9.601 9.601c5.301 0 9.6-4.298 9.6-9.601 0-5.302-4.299-9.6-9.6-9.6zM10 17.6a7.6 7.6 0 1 1 0-15.2 7.6 7.6 0 1 1 0 15.2z"></path>';
export default {
  icon: "compass",
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
    head += ' id="entypo-icon-compass"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "compass";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
