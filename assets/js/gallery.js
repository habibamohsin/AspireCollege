/*Gallery Section*/
document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll(".gallery-item");
  const buttons = document.querySelectorAll(".filter-buttons button");

  /* ================= COUNT SETUP ================= */
  const counts = {
    all: items.length,
    sports: document.querySelectorAll(".sports").length,
    convocation: document.querySelectorAll(".convocation").length,
    tours: document.querySelectorAll(".tours").length,
    functions: document.querySelectorAll(".functions").length,
  };

  document.getElementById("count-all").innerText = `(${counts.all})`;
  document.getElementById("count-sports").innerText = `(${counts.sports})`;
  document.getElementById("count-convocation").innerText = `(${counts.convocation})`;
  document.getElementById("count-tours").innerText = `(${counts.tours})`;
  document.getElementById("count-functions").innerText = `(${counts.functions})`;

  /* ================= FILTER ================= */
  buttons.forEach(btn => {

    btn.addEventListener("click", () => {

      document.querySelector(".filter-buttons .active").classList.remove("active");
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      items.forEach(item => {

        if (filter === "all") {
          item.style.display = "block";
        }

        else if (item.classList.contains(filter)) {
          item.style.display = "block";
        }

        else {
          item.style.display = "none";
        }

      });

    });

  });

});