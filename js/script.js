document.getElementById("infoSurvey").addEventListener("submit", function (e) {
    e.preventDefault();
  
    var formData = new FormData(e.target);
    if (
      formData.get("full_name") === "" ||
      formData.get("date") === "" ||
      formData.get("cccd") === "" ||
      formData.get("phone_number") === "" ||
      formData.get("address") === ""
    ) {
      alert("Please fill out all the fields");
      return;
    }
    localStorage.setItem("formData", JSON.stringify(Object.fromEntries(formData)));
    window.location.href = "./pages/questions.html";
  });