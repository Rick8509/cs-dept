let env = "test";
if (env == "prod") {
  document.getElementById("styleSheetID").href = "./output.css";
} else {
  document.getElementById("styleSheetID").href = ".././css/output.css";
}
