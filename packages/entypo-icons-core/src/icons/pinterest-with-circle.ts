var paths =
  '<path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm.657 11.875c-.616-.047-.874-.352-1.356-.644-.265 1.391-.589 2.725-1.549 3.422-.297-2.104.434-3.682.774-5.359-.579-.975.069-2.936 1.291-2.454 1.503.596-1.302 3.625.581 4.004 1.966.394 2.769-3.412 1.55-4.648-1.762-1.787-5.127-.041-4.713 2.517.1.625.747.815.258 1.678-1.127-.25-1.464-1.139-1.42-2.324.069-1.94 1.743-3.299 3.421-3.486 2.123-.236 4.115.779 4.391 2.777.309 2.254-.959 4.693-3.228 4.517z"></path>';
export default {
  icon: "pinterest-with-circle",
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
    head += ' id="entypo-icon-pinterest-with-circle"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "pinterest-with-circle";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
