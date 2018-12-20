var paths =
  '<path d="M10.909 5c1.884 0 3.417 1.598 3.417 3.561 0 .136-.012.29-.037.484l-.206 1.594c-.043.332.186.65.528.653l1.65.01c.958.006 1.739.835 1.739 1.848 0 1.02-.785 1.85-1.75 1.85H4.167C2.972 15 2 13.978 2 12.722c0-.913.519-1.735 1.323-2.095l.651-.291c.23-.103.508-.431.516-.775l.016-.714c.012-.535.421-.97.91-.97.032 0 .094.006.207.035l1.039.264c.265.067.606-.066.73-.309l.503-.981C8.493 5.723 9.648 5 10.909 5m0-2C8.828 3 7.023 4.207 6.116 5.974a2.834 2.834 0 0 0-.699-.096c-1.587 0-2.873 1.304-2.91 2.924A4.28 4.28 0 0 0 0 12.722C0 15.085 1.865 17 4.167 17H16.25c2.071 0 3.75-1.724 3.75-3.85 0-2.118-1.667-3.835-3.728-3.848.031-.243.053-.489.053-.741C16.326 5.49 13.901 3 10.909 3z"></path>';
export default {
  icon: "icloud",
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
    head += ' id="entypo-icon-icloud"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "icloud";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};