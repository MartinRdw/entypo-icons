var paths =
  '<path d="M7.914 10.677h1.659c3.604 0 5.649-1.623 6.3-4.96.021-.11.04-.216.056-.322.036-.226.054-.429.062-.624.006-.134.01-.213.009-.287a2.643 2.643 0 0 0-.216-1.039c-.129-.296-.324-.587-.613-.918C14.318 1.557 12.832 1 11.057 1H5.404a.81.81 0 0 0-.799.683l-1.02 6.571-1.269 8.185a.486.486 0 0 0 .48.561h2.772l.849-5.043a1.51 1.51 0 0 1 1.497-1.28zm9.103-4.587c-.792 3.771-3.357 5.772-7.445 5.772H7.914a.331.331 0 0 0-.328.282L6.481 19h2.907a.707.707 0 0 0 .699-.597l.029-.15.555-3.514.036-.194a.707.707 0 0 1 .699-.597h.44c2.85 0 5.081-1.158 5.733-4.506.268-1.38.132-2.534-.562-3.352z"></path>';
export default {
  icon: "paypal",
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
    head += ' id="entypo-icon-paypal"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "paypal";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
