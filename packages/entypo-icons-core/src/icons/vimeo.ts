var paths =
  '<path d="M18.91 5.84c-1.006 5.773-6.625 10.66-8.315 11.777-1.69 1.115-3.233-.447-3.792-1.631-.641-1.347-2.559-8.656-3.062-9.261-.503-.606-2.01.605-2.01.605L1 6.354s3.061-3.725 5.391-4.191c2.47-.493 2.466 3.864 3.06 6.282.574 2.342.961 3.68 1.463 3.68s1.462-1.305 2.512-3.305c1.053-2.004-.045-3.772-2.101-2.514.823-5.027 8.591-6.236 7.585-.466z"></path>';
export default {
  icon: "vimeo",
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
    head += ' id="entypo-icon-vimeo"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "vimeo";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
