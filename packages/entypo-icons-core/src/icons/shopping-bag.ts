var paths =
  '<path d="M18.121 3.271c-.295-.256-1.906-1.731-2.207-1.991-.299-.259-.756-.28-1.102-.28H5.188c-.345 0-.802.021-1.102.28-.301.26-1.912 1.736-2.207 1.991-.297.256-.543.643-.464 1.192.079.551 1.89 13.661 1.937 13.973A.67.67 0 0 0 4 19h12a.67.67 0 0 0 .648-.565c.047-.311 1.858-13.422 1.938-13.973.078-.548-.168-.935-.465-1.191zM10 11.973c-3.248 0-3.943-4.596-4.087-5.543H7.75c.276 1.381.904 3.744 2.25 3.744s1.975-2.363 2.25-3.744h1.838c-.145.947-.84 5.543-4.088 5.543zM3.17 4.006L5 2h10l1.83 2.006H3.17z"></path>';
export default {
  icon: "shopping-bag",
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
    head += ' id="entypo-icon-shopping-bag"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "shopping-bag";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
