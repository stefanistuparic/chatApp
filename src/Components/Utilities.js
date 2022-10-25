export function getDarkColor() {
    var randomCol = '#';
    for (var i = 0; i < 6; i++) {
      randomCol += Math.floor(Math.random() * 10);
    }
    return randomCol;
  }