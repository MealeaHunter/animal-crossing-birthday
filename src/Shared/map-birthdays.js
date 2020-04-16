require("datejs");
const characterData = require("../data/villagers.json");
const todaysDate = new Date();

function villagersBirthday() {

  for (var i = 0; i < characterData.length; i++) {
    if (characterData[i].birthday) {
      if (
        Date.parse(characterData[i].birthday).toDateString() ===
        (todaysDate.toDateString())
      ) {
        return characterData[i];
      }
    } else {
      //TODO placeholder for no birthdays
      return "";
    }
  }
}

export default villagersBirthday;
