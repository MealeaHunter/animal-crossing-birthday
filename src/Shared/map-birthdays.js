require("datejs");
const characterData = require("../data/villagers.json");
const todaysDate = new Date();

function villagersBirthday() {
  for (var i = 0; i < characterData.length; i++) {
    if (characterData[i].birthday != null) {
      if (
        Date.parse(characterData[i].birthday).toDateString() ===
        todaysDate.toDateString()
      ) {
        return characterData[i];
      }
    }
  }
}

export default villagersBirthday;
