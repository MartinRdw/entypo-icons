var paths =
  '<path d="M17.452 9.951a5.587 5.587 0 0 1-1.244.145c-2.145 0-3.797-1.496-3.797-4.102 0-1.277.493-1.941 1.192-1.941.664 0 1.107.596 1.107 1.805 0 .688-.184 1.44-.32 1.887 0 0 .66 1.152 2.469.799.385-.852.593-1.956.593-2.924 0-2.605-1.33-4.119-3.763-4.119-2.504 0-3.968 1.922-3.968 4.461 0 2.512 1.175 4.668 3.113 5.651-.815 1.629-1.852 3.065-2.933 4.146-1.961-2.371-3.734-5.534-4.463-11.706h-2.89c1.335 10.279 5.319 13.553 6.373 14.181.596.358 1.108.341 1.654.034.855-.485 3.422-3.054 4.847-6.061a9.565 9.565 0 0 0 2.03-.231V9.951z"></path>';
export default {
  icon: "vine",
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
    head += ' id="entypo-icon-vine"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "vine";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
