var paths =
  '<path d="M18.399 7h-5.007L11.58 8.812a2.384 2.384 0 0 1-1.696.702c-.642 0-1.244-.25-1.698-.703a2.387 2.387 0 0 1-.703-1.695c0-.039.01-.077.011-.116H1.6a.6.6 0 0 0-.6.6V10h18V7.6a.6.6 0 0 0-.601-.6zm-7.631.999l5.055-5.055a.6.6 0 0 0 .002-.849l-.92-.92a.603.603 0 0 0-.85 0L9 6.231a1.25 1.25 0 0 0 1.768 1.768zm-6.945 9.272c.097.401.515.729.927.729h10.5c.412 0 .83-.328.927-.729L17.7 11H2.3l1.523 6.271z"></path>';
export default {
  icon: "shopping-basket",
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
    head += ' id="entypo-icon-shopping-basket"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "shopping-basket";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
