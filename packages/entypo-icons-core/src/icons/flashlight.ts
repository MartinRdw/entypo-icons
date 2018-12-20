var paths =
  '<path d="M17.115 2.884c-1.676-1.676-3.779-2.288-4.449-1.618L9.97 3.962c-.409.41-.766 1.779-.602 3.164l-8.161 8.161c-.484.484-.092 1.66.876 2.629s2.146 1.359 2.629.877l8.161-8.162c1.386.164 2.755-.193 3.164-.601l2.696-2.697c.67-.67.058-2.774-1.618-4.449zm-8.974 8.155c-.373-.372-.251-1.096.269-1.617.521-.521 1.246-.643 1.618-.27.372.371.251 1.097-.27 1.617-.521.522-1.245.643-1.617.27zm6.75-5.931c-1.298-1.297-1.623-3.01-1.508-3.125.115-.116 1.76.277 3.059 1.575 1.298 1.298 1.688 2.946 1.575 3.059-.112.112-1.829-.21-3.126-1.509z"></path>';
export default {
  icon: "flashlight",
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
    head += ' id="entypo-icon-flashlight"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "flashlight";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
