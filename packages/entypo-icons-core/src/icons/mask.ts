var paths =
  '<path d="M19.581 5.84a.802.802 0 0 0-.92-.73C16.919 5.388 12.835 7 10 7S3.081 5.388 1.339 5.11a.801.801 0 0 0-.92.729C.277 7.371 0 11.45 0 12.068c0 .83 3.472 2.732 6 2.732 2.452 0 2.95-2.732 4-2.732s1.548 2.732 4 2.732c2.528 0 6-1.902 6-2.732 0-.618-.277-4.697-.419-6.228zM7.66 10.72c-.353.318-1.335 1.07-2.531.835S3.21 10.232 2.963 9.797a.259.259 0 0 1 .044-.317c.353-.318 1.335-1.07 2.532-.835 1.196.235 1.919 1.323 2.166 1.758a.26.26 0 0 1-.045.317zm9.377-.923c-.246.436-.969 1.523-2.166 1.758-1.196.235-2.179-.517-2.531-.835a.26.26 0 0 1-.045-.317c.246-.436.969-1.523 2.166-1.758 1.196-.235 2.179.517 2.531.835a.258.258 0 0 1 .045.317z"></path>';
export default {
  icon: "mask",
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
    head += ' id="entypo-icon-mask"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "mask";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
