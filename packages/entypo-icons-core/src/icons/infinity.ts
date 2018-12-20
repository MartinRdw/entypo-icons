var paths =
  '<path d="M15.902 5.6c-2.079 0-4.358 1.158-5.902 2.916C8.455 6.758 6.175 5.6 4.096 5.6 2.116 5.6 0 6.756 0 10s2.116 4.398 4.096 4.4c2.079 0 4.358-1.158 5.903-2.916 1.544 1.758 3.823 2.916 5.902 2.916C17.882 14.4 20 13.244 20 10s-2.118-4.4-4.098-4.4zM4.096 12.641C2.584 12.641 1.8 11.752 1.8 10s.784-2.641 2.296-2.641c1.673 0 3.614 1.086 4.807 2.641-1.193 1.555-3.134 2.641-4.807 2.641zm11.806 0c-1.673 0-3.614-1.086-4.807-2.641 1.192-1.555 3.135-2.641 4.807-2.641 1.512 0 2.298.889 2.298 2.641s-.786 2.641-2.298 2.641z"></path>';
export default {
  icon: "infinity",
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
    head += ' id="entypo-icon-infinity"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "infinity";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
