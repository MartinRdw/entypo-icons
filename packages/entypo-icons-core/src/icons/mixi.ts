var paths =
  '<path d="M9.546 17.258h.955v2.143c6.51-.684 9.982-7.143 9.421-11.691C19.358 3.16 14.471.018 8.978.69 3.486 1.364-.49 5.598.072 10.149c.513 4.138 4.602 7.113 9.474 7.109zm6.148-4.398h-1.831V7.907a2.78 2.78 0 0 0-.053-.557.926.926 0 0 0-.164-.381.808.808 0 0 0-.33-.244c-.152-.066-.363-.1-.623-.1-.537 0-.957.141-1.251.416-.291.273-.433.633-.433 1.1v4.719h-1.83V7.907c0-.205-.019-.395-.059-.564a1.006 1.006 0 0 0-.173-.387.757.757 0 0 0-.314-.237 1.5 1.5 0 0 0-.58-.094c-.312 0-.58.059-.795.174-.223.117-.405.26-.541.422a1.627 1.627 0 0 0-.299.506c-.062.172-.092.31-.092.414v4.719H4.494V5.164h1.758v.6c.574-.508 1.306-.766 2.181-.766.51 0 .981.103 1.399.305.306.147.554.365.738.652.231-.248.504-.451.814-.609a3.271 3.271 0 0 1 1.499-.348c.402 0 .773.043 1.102.127.343.086.644.225.895.412.258.193.46.445.602.75.141.301.212.66.212 1.07v5.503z"></path>';
export default {
  icon: "mixi",
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
    head += ' id="entypo-icon-mixi"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "mixi";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
