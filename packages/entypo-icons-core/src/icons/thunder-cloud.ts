var paths =
  '<path d="M15.213 6.641c-.276 0-.546.023-.809.066C13.748 4.562 11.715 3 9.309 3c-2.939 0-5.32 2.328-5.32 5.199 0 .258.02.51.057.756a3.815 3.815 0 0 0-.429-.027C1.619 8.928 0 10.512 0 12.463 0 14.416 1.619 16 3.617 16h11.596C17.856 16 20 13.904 20 11.32c0-2.586-2.144-4.679-4.787-4.679zm-3.842 4.31c-.494.703-2.614 2.889-2.704 2.98-.104.129-.391.344-.663.166-.079-.051-.172-.152-.172-.354 0-.193.088-.391.098-.412l1.033-2.287c-.193-.078-.527-.211-.785-.324l-.068-.029c-.262-.111-.588-.25-.588-.607 0-.172.081-.373.249-.609.495-.705 2.614-2.889 2.705-2.982.103-.127.39-.342.663-.166.078.051.171.154.171.354 0 .193-.088.391-.098.414L10.178 9.38c.195.078.528.213.787.324l.068.029c.262.111.588.25.588.609 0 .172-.082.371-.25.609z"></path>';
export default {
  icon: "thunder-cloud",
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
    head += ' id="entypo-icon-thunder-cloud"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "thunder-cloud";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
