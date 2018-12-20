var paths =
  '<path d="M12.6 3c-1.966 0-3.74.813-5.012 2.119A6 6 0 1 0 6.4 17h6.2a7 7 0 1 0 0-14zM6.4 15.728a4.7 4.7 0 0 1-3.344-1.385C2.164 13.45 1.672 12.262 1.672 11s.492-2.45 1.385-3.343S5.137 6.272 6.4 6.272s2.45.492 3.344 1.385l1.874 1.875a.7.7 0 0 1-.99.99L8.754 8.646c-1.258-1.256-3.449-1.256-4.707 0-.629.63-.975 1.465-.975 2.354s.346 1.724.975 2.354c.785.784 1.933 1.078 2.991.884.324.424.689.815 1.1 1.155a4.723 4.723 0 0 1-1.738.335zm10.289-1.639a5.748 5.748 0 0 1-4.089 1.694 5.749 5.749 0 0 1-4.09-1.694L5.801 11.38a.7.7 0 0 1 .99-.99L9.5 13.099c.828.828 1.929 1.284 3.1 1.284s2.271-.456 3.099-1.284S16.983 11.17 16.983 10s-.456-2.271-1.284-3.099-1.928-1.284-3.099-1.284c-.873 0-1.707.255-2.418.727a6.056 6.056 0 0 0-1.251-.779c1.035-.858 2.309-1.349 3.67-1.349 1.544 0 2.996.602 4.089 1.694 1.093 1.093 1.694 2.545 1.694 4.089s-.602 2.998-1.695 4.09z"></path>';
export default {
  icon: "creative-cloud",
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
    head += ' id="entypo-icon-creative-cloud"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "creative-cloud";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
