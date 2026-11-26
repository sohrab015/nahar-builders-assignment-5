// All company data comes from https://www.naharbuilders.com/ (see RESEARCH.md)
const imgBase = "https://www.naharbuilders.com/img/projects/";

const services = [
  { icon: "apartment", title: "Residential Construction", text: "High-end residential construction focused on structural longevity, modern layout and BNBC code compliance.", points: ["Multi-storied apartment towers", "Duplexes and private residences", "Reinforced concrete structural erection"] },
  { icon: "business", title: "Commercial Complexes", text: "Commercial towers, shopping centres and corporate offices designed for footfall, safety and business operations.", points: ["Commercial malls and retail outlets", "Corporate office towers", "Mixed-use developments"] },
  { icon: "chair", title: "Interior Design & Finishing", text: "Interior architecture and finishing that unites spatial efficiency with quality craftsmanship and materials.", points: ["Apartment and corporate interiors", "Custom ceilings and joinery", "Marble and flooring work"] },
  { icon: "construction", title: "Renovation & Remodeling", text: "Structural retrofitting, facade transformation and modernising existing properties for value and safety.", points: ["Structural retrofitting and reinforcement", "Facade modernisation", "Space reconfiguration"] },
  { icon: "engineering", title: "Project Planning & Supervision", text: "Turnkey project management, scheduling, quality assurance, safety audit and transparent progress reporting.", points: ["Quality control and material testing audit", "On-site senior engineer supervision", "HSE safety compliance"] },
  { icon: "description", title: "Design & CDA Approvals", text: "Architectural drafting, structural calculations, plumbing blueprints, soil testing and CDA approvals.", points: ["Architectural and structural drawings", "Geotechnical soil analysis", "CDA and local government clearances"] }
];

const supply = [
  { title: "High-speed elevators", text: "Imported passenger and cargo systems for residential and commercial towers." },
  { title: "Centralized cooling", text: "VRF and centralized AC for corporate towers and healthcare centres." },
  { title: "Stone chips & tiles", text: "Imported stone chips, marble and porcelain tiles for heavy structures." },
  { title: "Certified steel & cement", text: "Laboratory-tested high-yield steel rebar and cement for seismic resistance." }
];

const why = [
  { icon: "precision_manufacturing", title: "Company-owned machinery", text: "Excavators, concrete pumps, hoists, scaffolding and generators are owned, not rented, which gives timeline control and removes third-party rental bottlenecks." },
  { icon: "verified", title: "Registered and credentialed", text: "Holds a municipal trade license (TRAD/DSCC/011158/2020) and an NBR TIN certificate. Engineering credentials include IEB fellowship and CDA enlistment." },
  { icon: "health_and_safety", title: "BNBC-compliant engineering", text: "Residential and government work follows BNBC standards, with senior engineers supervising on site and HSE safety compliance." },
  { icon: "draw", title: "From drawings to handover", text: "Architectural and structural drawings, soil analysis and CDA approvals sit alongside construction and finishing." },
  { icon: "train", title: "Trusted on national projects", text: "Contributed as a key sub-contractor to the Dhaka Metro Rail and Airport 3rd Terminal projects." },
  { icon: "handshake", title: "Public and private clients", text: "Works with government bodies, private land owners, developers and commercial entities." }
];

const fleet = ["Excavators & earthmovers", "Batching & concrete pumps", "Vibrators & compactors", "Steel scaffolding & props", "Soundproof generators", "Hoisting & material lifts"];

const projects = [
  { id: 1, name: "Nakeeb Heights", status: "Completed", group: "Completed", type: "Residential", location: "Chandgaon R/A, Chattogram", stories: 14, img: imgBase + "completed/8.png", desc: "14-storied luxury residential building with double basement." },
  { id: 2, name: "Akil Tower", status: "Completed", group: "Completed", type: "Residential", location: "Mozaffor Nagar, Chattogram", stories: 10, img: imgBase + "completed/1.png", desc: "10-storied residential apartment building crafted with modern engineering." },
  { id: 3, name: "Hotel Tower Inn", status: "Completed", group: "Completed", type: "Hospitality / Commercial", location: "Jubilee Road, Chattogram", stories: 10, img: imgBase + "completed/6.png", desc: "10-storied 3-star hotel building comprising approximately 110 rooms." },
  { id: 4, name: "Alhaj SA Tower", status: "Completed", group: "Completed", type: "Residential", location: "Hillview R/A, Chattogram", stories: 9, img: imgBase + "completed/5.png", desc: "9-storied residential apartment building crafted with high structural standards." },
  { id: 5, name: "Supreme Subhan", status: "Completed", group: "Completed", type: "Residential", location: "Asadgonj, Chattogram", stories: 10, img: imgBase + "completed/4.png", desc: "10-storied residential apartment building with spacious floor plans." },
  { id: 6, name: "Frank Mariada", status: "Completed", group: "Completed", type: "Residential", location: "War Cemetery Road, Chattogram", stories: 12, img: imgBase + "completed/3.png", desc: "12-storied residential apartment building with modern exterior architecture." },
  { id: 7, name: "Mismark Nur", status: "Completed", group: "Completed", type: "Residential", location: "Hillview, Chattogram", stories: 8, img: imgBase + "completed/2.png", desc: "8-storied residential apartment building located in a prime neighbourhood." },
  { id: 8, name: "Patiya Nahar Park & Resort", status: "Resort", group: "Infrastructure", type: "Hospitality / Recreation", location: "Patiya", stories: 0, img: imgBase + "completed/9.png", desc: "Recreational resort development featuring a swimming pool, Platinum hall and landscaping." },
  { id: 9, name: "Dhaka Metro Rail & Airport 3rd Terminal", status: "Infrastructure", group: "Infrastructure", type: "Sub-contractor partner", location: "Dhaka", stories: 0, img: imgBase + "completed/7.png", desc: "Nahar Builders contributed as a key sub-contractor to Bangladesh's flagship MRT and Airport Terminal projects." },
  { id: 10, name: "Lohagara Trade Centre", status: "Ongoing", group: "Ongoing", type: "Commercial market", location: "Lohagara", stories: 7, img: imgBase + "on%20going/Lohagara%20Trade%20Centre.png", desc: "7-storied commercial market with retail shops, wide entrances and fire safety systems." },
  { id: 11, name: "Nahar Specialized Hospital", status: "Ongoing", group: "Ongoing", type: "Healthcare infrastructure", location: "Chattogram", stories: 19, img: imgBase + "on%20going/Nahar%20Specialized%20Hospital.png", desc: "19-storied landmark healthcare facility with double basement parking and clinical units.", page: "hospital.html" },
  { id: 12, name: "Nahar School Market", status: "Ongoing", group: "Ongoing", type: "Commercial market", location: "Lohagara", stories: 0, img: imgBase + "on%20going/Nahar%20School%20Market.png", desc: "Modern commercial development with wide shop frontages, dedicated parking, lift and fire safety." }
];
