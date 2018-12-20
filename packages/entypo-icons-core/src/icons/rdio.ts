var paths =
  '<path d="M16.203 10.001c0 4.307-3.448 7.799-7.701 7.799S.8 14.308.8 10.001C.8 5.692 4.248 2.2 8.501 2.2c.611 0 1.204.076 1.774.213v4.441c-.902-.33-2.01-.281-3.053.223-1.885.91-2.841 2.957-2.135 4.57.705 1.615 2.807 2.188 4.691 1.277 1.299-.627 2.443-2.137 2.443-4.029V3.171c.162.09.32.188.475.289 1.464.92 3.638 2.152 6.178 2.281.99.049-.389 2.541-2.738 3.236.044.334.067.676.067 1.024z"></path>';
export default {
  icon: "rdio",
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
    head += ' id="entypo-icon-rdio"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "rdio";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
