function openBooking(){
  document.getElementById("booking").scrollIntoView({behavior:"smooth"});
}

/* Fake startup backend system (demo version) */
function submitBooking(){
  let data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    from: document.getElementById("from").value,
    to: document.getElementById("to").value
  };

  if(!data.name || !data.phone){
    alert("Please fill required fields");
    return;
  }

  // WhatsApp automation (REAL BUSINESS TOOL)
  let msg = `New Booking 🚛%0AName: ${data.name}%0APhone: ${data.phone}%0AFrom: ${data.from}%0ATo: ${data.to}`;

  let url = "https://wa.me/919999999999?text=" + msg;
  window.open(url, "_blank");

  alert("Booking sent to HimTruck System 🚛");
}