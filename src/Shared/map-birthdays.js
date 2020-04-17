require("datejs");
const characterData = require("../data/villagers.json");
const todaysDate = new Date();

function villagersBirthday() {
    let todaysBirthday = null;

  for (var i = 0; i < characterData.length; i++) {
    if (characterData[i].birthday) {
      if (
        Date.parse(characterData[i].birthday).toDateString() ===
        todaysDate.toDateString()
      ) {
        todaysBirthday = characterData[i];
        return todaysBirthday;
      }
    }
  }

  if (!todaysBirthday) {
      return null;
  }
}

export default villagersBirthday;
