var state_list = document.querySelectorAll(".state_card");

state_list.forEach(state => {
    state.addEventListener('click', () => {
        state_mons = document.getElementById("mon_"+state.id)
        state_mons.style.display = "block"
        state_mons.scrollIntoView()
    });
});

var mons = document.querySelectorAll(".mon_card")
var mon_name
mons.forEach(mon => {
  mon.addEventListener('click', () => {
      mon_name = document.querySelector(".mon_card>h2").textContent
  });
})

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

