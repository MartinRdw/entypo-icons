var paths =
  '<path d="M7.376 6.745c-.447.275 1.197 4.242 1.598 4.888a1.206 1.206 0 0 0 2.053-1.266c-.397-.648-3.205-3.898-3.651-3.622zm-.335-4.343a8.98 8.98 0 0 1 5.918 0c.329.114.765-.115.572-.611-.141-.36-.277-.712-.332-.855-.131-.339-.6-.619-.804-.665C11.623.097 10.823 0 10 0S8.377.097 7.604.271c-.204.046-.672.326-.803.665l-.332.855c-.193.496.243.726.572.611zm12.057.784a10.132 10.132 0 0 0-1.283-1.285c-.153-.129-.603-.234-.888.051l-1.648 1.647a9.27 9.27 0 0 1 1.155.966c.362.361.677.752.966 1.155l1.647-1.647c.286-.286.181-.735.051-.887zM10 2.9A8.1 8.1 0 0 0 1.899 11 8.1 8.1 0 0 0 10 19.101 8.1 8.1 0 0 0 10 2.9zm0 14.201A6.1 6.1 0 1 1 10.001 4.9 6.1 6.1 0 0 1 10 17.1z"></path>';
export default {
  icon: "stopwatch",
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
    head += ' id="entypo-icon-stopwatch"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "stopwatch";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
