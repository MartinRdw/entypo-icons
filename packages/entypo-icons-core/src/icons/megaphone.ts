var paths =
  '<path d="M17.223 7.03c-1.584-3.686-4.132-6.49-5.421-5.967-2.189.891 1.304 5.164-9.447 9.533-.929.379-1.164 1.888-.775 2.792.388.902 1.658 1.801 2.587 1.424.161-.066.751-.256.751-.256.663.891 1.357.363 1.604.928l1.158 2.66c.219.502.715.967 1.075.83l2.05-.779c.468-.178.579-.596.436-.924-.154-.355-.786-.459-.967-.873-.18-.412-.769-1.738-.938-2.156-.23-.568.259-1.031.97-1.104 4.894-.512 5.809 2.512 7.475 1.834 1.287-.525 1.025-4.259-.558-7.942zm-.551 5.976c-.287.115-2.213-1.402-3.443-4.267-1.231-2.863-1.076-5.48-.79-5.597.286-.115 2.165 1.717 3.395 4.58 1.231 2.863 1.124 5.167.838 5.284z"></path>';
export default {
  icon: "megaphone",
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
    head += ' id="entypo-icon-megaphone"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "megaphone";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
