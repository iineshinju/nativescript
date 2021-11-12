var HomeViewModel = require("./home-view-model");
var homeViewModel = new HomeViewModel();

function pageLoaded(args) {
  var page = args.object;
  page.bindingContext = homeViewModel;
}
exports.pageLoaded = pageLoaded;

function showStartDialog() {

  const confirmOptions = {
    title: "C'est partie !!!",
    message: "Bienvenue dans ce TP\nVous aurez à changer des lignes de code.\nÊtes-vous prêts ? ",
    okButtonText: "Prêt",
    cancelButtonText: "Au revoir"
  };
  confirm(confirmOptions)
    .then((result) => {
      if (result) {
        console.log("Ton enthousiasme fait plaisir à voir.");
      }
      else {
        console.log("Ne t'inquiète pas, ça ira.");
      }
    });

}
exports.showStartDialog = showStartDialog;

function onSwitchLoaded(argsloaded) {
  const mySwitch = argsloaded.object;
  mySwitch.on("checkedChange", (args) => {
    const sw = args.object;
    const isChecked = sw.checked;
    if (isChecked) {
      console.log(`Vous avez accepter, la valeur du switch est ${isChecked}`);
    } else {
      console.log(`Vous avez refuser, la valeur du switch est ${isChecked}`)
    }
  });
}
exports.onSwitchLoaded = onSwitchLoaded;

function changeDatePicker(args) {
  const datePicker = args.object;
  datePicker.on("dateChange", (args) => {
    console.dir(args);
  });
}
exports.changeDatePicker = changeDatePicker;

function onTap(args) {
  const button = args.object;
  alert("Button pressed !!")
  // Étape 7 à effectuer ici
}

exports.onTap = onTap;