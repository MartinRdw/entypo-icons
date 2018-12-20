var paths =
  '<path d="M12.164 9.852a3.477 3.477 0 0 0-.841-.395 11.065 11.065 0 0 0-1.087-.293 16.093 16.093 0 0 1-.679-.172 2.031 2.031 0 0 1-.396-.158.89.89 0 0 1-.293-.229.46.46 0 0 1-.098-.295c0-.188.1-.346.305-.484.212-.143.499-.215.851-.215.38 0 .656.064.821.193.17.133.318.322.44.562.106.188.201.318.294.4.099.09.241.137.423.137.201 0 .37-.072.505-.217a.698.698 0 0 0 .202-.488c0-.188-.053-.383-.154-.576-.101-.193-.262-.379-.477-.553s-.487-.312-.811-.416a3.77 3.77 0 0 0-1.147-.156c-.55 0-1.035.078-1.443.234-.413.158-.734.388-.954.683a1.67 1.67 0 0 0-.334 1.023c0 .4.107.74.318 1.012.207.268.492.482.844.637.346.15.778.283 1.289.396.374.08.678.158.901.23.214.068.391.168.525.297a.632.632 0 0 1 .189.481c0 .252-.119.457-.363.631-.251.176-.584.264-.99.264-.296 0-.535-.043-.714-.131a1.097 1.097 0 0 1-.412-.326 2.564 2.564 0 0 1-.282-.516 1.163 1.163 0 0 0-.289-.434.63.63 0 0 0-.432-.154.716.716 0 0 0-.514.195.648.648 0 0 0-.205.479c0 .295.106.604.315.912.207.309.479.557.81.74.462.252 1.054.379 1.76.379.588 0 1.104-.094 1.536-.277.435-.186.771-.449.998-.779a1.96 1.96 0 0 0 .344-1.129c0-.348-.067-.648-.2-.891a1.716 1.716 0 0 0-.555-.601zM10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm2.301 14.975c-.487 0-.946-.125-1.348-.348a4.68 4.68 0 0 1-.9.086c-2.713 0-4.914-2.266-4.914-5.057 0-.35.035-.69.1-1.018a2.967 2.967 0 0 1-.392-1.481c0-1.619 1.276-2.934 2.851-2.934.557 0 1.076.166 1.516.451.272-.049.554-.074.839-.074 2.715 0 4.915 2.264 4.915 5.057 0 .371-.039.734-.113 1.084.189.393.296.834.296 1.303-.001 1.618-1.276 2.931-2.85 2.931z"></path>';
export default {
  icon: "skype-with-circle",
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
    head += ' id="entypo-icon-skype-with-circle"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "skype-with-circle";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
