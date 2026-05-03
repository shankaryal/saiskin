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
  whatsapp: "447311234567", // replace with real number
  booking: "https://facesconsent.com/clinics/sai-skin-and-hair-care-d4da38f233b9/sumi-bhandari?clinicName=sumhttps://facesconsent.com/clinics/sai-skin-and-hair-care-d4da38f233b9/sumi-bhandari?clinicName=sumi-bhandarii-bhandari",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2228.318214240327!2d-3.4357563!3d56.0353008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887d1887e1f4491%3A0x6a0c5c646b5a7b8e!2s195%20Queensferry%20Rd%2C%20Rosyth%2C%20Dunfermline%20KY11%202JH!5e0!3m2!1sen!2suk!4v1710000000000!5m2!1sen!2suk",
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