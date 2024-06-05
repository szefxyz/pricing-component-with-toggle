const yearPrice = document.querySelectorAll(".year");
const monthlyPrice = document.querySelectorAll(".month");
const toggleSwitch = document.getElementById("toggleSwitch");

toggleSwitch.addEventListener("change", function () {
  yearPrice.forEach((price) => {
    price.style.display = toggleSwitch.checked ? "none" : "inline-block";
  });

  monthlyPrice.forEach((monthly) => {
    monthly.style.display = toggleSwitch.checked ? "inline-block" : "none";
  });
});
