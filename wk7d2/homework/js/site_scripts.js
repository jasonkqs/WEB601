const partners = [
    { name: "Partner Bus Tour", imageSrc: "images/partner-bustour.png" },
    { name: "Partner Cabin Rental", imageSrc: "images/partner-cabinrental.png" },
    { name: "Partner Camping Adventure", imageSrc: "images/partner-campingadv.png" },
    { name: "Partner College Tour", imageSrc: "images/partner-collegetours.png" },
    { name: "Partner Bike Rentals", imageSrc:"images/partner-rentalbike.png" },
    { name: "Partner Tour Group", imageSrc:"images/partner-tourgroup.png" }
  ];
  
  function createPartnerList() {
    const partnersContainer = document.getElementById("partners");
  
    const partnerList = document.createElement("ul");
  
    partners.forEach((partner) => {
      const listItem = document.createElement("li");
      listItem.classList.add("partner");
  
      const img = document.createElement("img");
      img.src = partner.imageSrc;
      img.alt = partner.name;
  
      listItem.appendChild(img);
      partnerList.appendChild(listItem);
    });
  
    partnersContainer.appendChild(partnerList);
  }
  
  window.addEventListener("load", createPartnerList);
  
document.querySelector('.navbar-toggler').addEventListener('click', function() {
  document.querySelector('.navbar-links').classList.toggle('active');
});