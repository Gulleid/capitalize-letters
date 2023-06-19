// Good Luck 💪🏾
function capitalize(words) {
    var sword = words.toLowerCase().split(' ');
    for (var i = 0; i < sword.length; i++) {
      sword[i] = sword[i].charAt(0).toUpperCase() +
      sword[i].substring(1);
    }
    return sword.join(' ');
  }
  console.log(capitalize("my name is ali"));
  console.log(capitalize("fikrcamp bootcamp"));
  console.log(capitalize("i live in paris"));