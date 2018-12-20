var paths =
  '<path d="M17.004 5h-5.008A1.996 1.996 0 0 0 10 6.996v11.008c0 1.102.894 1.996 1.996 1.996h5.008A1.996 1.996 0 0 0 19 18.004V6.996A1.996 1.996 0 0 0 17.004 5zM14.5 19c-.69 0-1.25-.447-1.25-1 0-.553.56-1 1.25-1s1.25.447 1.25 1c0 .553-.56 1-1.25 1zm2.5-3h-5V7h5v9zm-9 0H3V2h12v1h2V2c0-1.101-.9-2-2-2H3C1.9 0 1 .899 1 2v16c0 1.1.9 2 2 2h5.555A3.95 3.95 0 0 1 8 18.003V16z"></path>';
export default {
  icon: "tablet-mobile-combo",
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
    head += ' id="entypo-icon-tablet-mobile-combo"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "tablet-mobile-combo";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
