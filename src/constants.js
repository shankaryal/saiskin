// ============================================================
// SINGLE SOURCE OF TRUTH — update here to affect entire site
// ============================================================

export const CLINIC = {
  name: "Sai Care",
  phone: "+44 131 123 4567",
  email: "contact@saicare.co.uk",
  address: {
    line1: "195 Queensferry Rd",
    line2: "Room 13, 1st Floor",
    city: "Rosyth, Dunfermline",
    postcode: "KY11 2JH",
    full: "195 Queensferry Rd, Room 13, 1st Floor, Rosyth, Dunfermline KY11 2JH",
    building: "This is Fusion – The Business Hub",
  },
  whatsapp: "+44 7278 743921", 
  booking: "https://facesconsent.com/clinics/sai-skin-and-hair-care-d4da38f233b9/sumi-bhandari?clinicName=sumhttps://facesconsent.com/clinics/sai-skin-and-hair-care-d4da38f233b9/sumi-bhandari?clinicName=sumi-bhandarii-bhandari",
  mapsEmbed: "https://www.google.com/maps/dir/51.4164134,-0.0726124/56.0431513,-3.4247112/@53.6992101,-4.3713645,7z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D",
  };

// Opening hours — canonical source used by Navbar, Home, Contact, Footer
export const HOURS = [
  { day: "Monday",    time: "Closed",      open: false },
  { day: "Tuesday",   time: "12:00–20:00", open: true  },
  { day: "Wednesday", time: "12:00–20:00", open: true  },
  { day: "Thursday",  time: "Closed",      open: false },
  { day: "Friday",    time: "11:00–19:00", open: true  },
  { day: "Saturday",  time: "09:30–16:00", open: true  },
  { day: "Sunday",    time: "Closed",      open: false },
];