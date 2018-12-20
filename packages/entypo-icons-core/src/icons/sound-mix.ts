var paths =
  '<path d="M5 1.6c0-.553-.448-.6-1-.6-.553 0-1 .047-1 .6V10h2V1.6zM3 18.4c0 .551.447.6 1 .6.552 0 1-.049 1-.6V15H3v3.4zM6.399 11h-4.8C1.046 11 1 11.448 1 12v1c0 .553.046 1 .599 1H6.4c.55 0 .6-.447.6-1v-1c0-.552-.05-1-.601-1zm12 1h-4.801c-.552 0-.598.448-.598 1v1c0 .553.046 1 .599 1H18.4c.55 0 .6-.447.6-1v-1c0-.552-.05-1-.601-1zM13 7c0-.552-.05-1-.601-1h-4.8C7.046 6 7 6.448 7 7v1c0 .553.046 1 .599 1H12.4c.55 0 .6-.447.6-1V7zm-2-5.4c0-.553-.448-.6-1-.6-.553 0-1 .047-1 .6V5h2V1.6zM9 18.4c0 .551.447.6 1 .6.552 0 1-.049 1-.6V10H9v8.4zm8-16.8c0-.553-.448-.6-1-.6-.553 0-1 .047-1 .6V11h2V1.6zm-2 16.8c0 .551.447.6 1 .6.552 0 1-.049 1-.6V16h-2v2.4z"></path>';
export default {
  icon: "sound-mix",
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
    head += ' id="entypo-icon-sound-mix"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "sound-mix";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
