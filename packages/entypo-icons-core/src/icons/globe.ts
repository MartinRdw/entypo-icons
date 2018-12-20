var paths =
  '<path d="M10 .4C4.705.4.399 4.707.399 10S4.705 19.6 10 19.6c5.293 0 9.6-4.307 9.6-9.6S15.293.4 10 .4zm8.188 9.6c0 1.873-.636 3.6-1.696 4.98-.3-.234-.619-.867-.319-1.523.303-.66.382-2.188.312-2.783-.066-.594-.375-2.025-1.214-2.039-.838-.012-1.413-.289-1.911-1.283-1.033-2.068 1.939-2.465.906-3.609-.289-.322-1.783 1.322-2.002-.869-.014-.157.135-.392.336-.636 3.244 1.09 5.588 4.157 5.588 7.762zM8.875 1.893c-.196.382-.713.537-1.027.824-.684.619-.978.533-1.346 1.127-.371.594-1.567 1.449-1.567 1.879s.604.936.906.838c.302-.1 1.099-.094 1.567.07.469.166 3.914.332 2.816 3.244-.348.926-1.873.77-2.279 2.303-.061.225-.272 1.186-.285 1.5-.025.486.344 2.318-.125 2.318-.471 0-1.738-1.639-1.738-1.936s-.328-1.338-.328-2.23c0-.891-1.518-.877-1.518-2.062 0-1.068.823-1.6.638-2.113-.181-.51-1.627-.527-2.23-.59a8.213 8.213 0 0 1 6.516-5.172zM7.424 17.77c.492-.26.542-.596.988-.613.51-.023.925-.199 1.5-.326.51-.111 1.423-.629 2.226-.695.678-.055 2.015.035 2.375.689a8.159 8.159 0 0 1-7.089.945z"></path>';
export default {
  icon: "globe",
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
    head += ' id="entypo-icon-globe"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "globe";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
