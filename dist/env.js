let env = "deploy";
if (env == "deploy") {
  document.getElementById("styleSheetID").href = "./output.css";
} else {
  document.getElementById("styleSheetID").href = ".././css/output.css";
}
