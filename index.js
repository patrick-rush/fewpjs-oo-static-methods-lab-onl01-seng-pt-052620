class Formatter {

  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^\-\'\ A-Za-z0-9]/g, '')
  }

  static titleize(string) {
    const ignoreWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    return this.capitalize(string).split(' ').map(function(word) {
      if (ignoreWords.includes(word)) {
        return word;
      } else {
        return Formatter.capitalize(word);
      }
    }).join(' ');
  }

}