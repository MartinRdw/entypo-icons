var paths =
  '<path d="M4.902.25C3.498-.027 2.115.875 1.833 2.273c-1.105 5.455-1.105 9.997 0 15.454C2.08 18.952 3.17 19.8 4.388 19.8c.17 0 .342-.016.515-.05 1.412-.279 2.329-1.638 2.046-3.036-.978-4.832-.978-8.598 0-13.43C7.231 1.888 6.314.529 4.902.25zM17 2H8.436a4.08 4.08 0 0 1-.017 1.44c-.936 4.72-.936 8.398 0 13.12.098.49.09.973.017 1.44H17c1.1 0 2-.9 2-2V4c0-1.1-.899-2-2-2zm-5 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 14.5zM17 9h-7V5h7v4z"></path>';
export default {
  icon: "landline",
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
    head += ' id="entypo-icon-landline"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "landline";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
