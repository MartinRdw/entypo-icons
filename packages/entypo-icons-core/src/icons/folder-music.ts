var paths =
  '<path d="M18.405 2.799c-.112-.44-.656-.799-1.21-.799H2.805c-.555 0-1.099.359-1.21.799L1.394 4h17.211l-.2-1.201zM19.412 5H.587a.58.58 0 0 0-.577.635l.923 11.669a.77.77 0 0 0 .766.696H18.3a.77.77 0 0 0 .766-.696l.923-11.669A.58.58 0 0 0 19.412 5zm-7.47 7.521c-.128.265-.258.279-.202 0 .146-.721.047-2.269-1.043-2.441v3.294c0 .674-.311 1.262-1.136 1.528-.802.256-1.699-.011-1.908-.586-.21-.576.261-1.276 1.052-1.564.442-.161.954-.203 1.299-.07V8h.694c-.001 1.633 2.818 1.275 1.244 4.521z"></path>';
export default {
  icon: "folder-music",
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
    head += ' id="entypo-icon-folder-music"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "folder-music";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
