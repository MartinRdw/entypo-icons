var paths =
  '<path d="M4.254 19.567c.307-.982.77-2.364 1.391-4.362 2.707-.429 3.827.341 5.546-2.729-1.395.427-3.077-.792-2.987-1.321.091-.528 3.913.381 6.416-3.173-3.155.696-4.164-.836-3.757-1.067.939-.534 3.726-.222 5.212-1.669.766-.745 1.125-2.556.813-3.202-.374-.781-2.656-1.946-3.914-1.836-1.258.109-3.231 4.79-3.817 4.754-.584-.037-.703-2.098.319-4.013-1.077.477-3.051 1.959-3.67 3.226-1.153 2.357.108 7.766-.296 7.958-.405.193-1.766-2.481-2.172-3.694-.555 1.859-.568 3.721 1.053 6.194-.611 1.623-.945 3.491-.996 4.441-.024.759.724.922.859.493z"></path>';
export default {
  icon: "feather",
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
    head += ' id="entypo-icon-feather"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "feather";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
