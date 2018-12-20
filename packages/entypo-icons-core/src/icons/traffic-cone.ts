var paths =
  '<path d="M10 12.078c2.39 0 4.392-.812 4.513-1.873l-1.125-3.152c-.264.761-1.725 1.301-3.388 1.301s-3.124-.54-3.388-1.301l-1.124 3.152c.121 1.061 2.122 1.873 4.512 1.873zm0-6.705c1.124 0 2.167-.348 2.473-.889-.421-1.182-.782-2.197-1.011-2.836C11.31 1.221 10.621 1 10 1s-1.31.221-1.462.648L7.527 4.484c.306.541 1.35.889 2.473.889zm8.78 7.693l-3.755-1.514.433 1.207c-.022 1.279-2.504 2.299-5.458 2.299-2.953 0-5.437-1.019-5.458-2.299l.433-1.207-3.755 1.514c-1.053.424-1.098 1.209-.098 1.744l7.062 3.787c.998.535 2.633.535 3.632 0l7.063-3.787c.999-.535.954-1.32-.099-1.744z"></path>';
export default {
  icon: "traffic-cone",
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
    head += ' id="entypo-icon-traffic-cone"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "traffic-cone";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
