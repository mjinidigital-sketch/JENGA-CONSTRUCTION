// Construction Projects Data — JENGA LTD
// Used by: /projects (listing page), /projects/[slug] (dynamic project page), homepage showcases

export interface ProjectStat {
  label: string;
  value: string;
}

export interface ProjectFAQ {
  q: string;
  a: string;
}

export interface ProjectGalleryImage {
  src: string;
  caption: string;
  stage?: string;
}

export interface ProjectHighlight {
  title: string;
  description: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export type ProjectCategory =
  | "Commercial"
  | "Residential"
  | "Civil & Infrastructure"
  | "Industrial & Logistics"
  | "Healthcare & Institutional";

export interface Project {
  slug: string;
  title: string;
  kicker: string;
  category: ProjectCategory;
  client: string;
  location: string;
  year: string;
  duration: string;
  value: string;
  status: "Completed" | "Under Construction" | "Phased Delivery";
  builtArea: string;
  tagline: string;
  intro: string;
  overview: string;
  challenge: string;
  solution: string;
  impact: string;
  heroImage: string;
  gallery: ProjectGalleryImage[];
  stats: ProjectStat[];
  scope: string[];
  keyHighlights: ProjectHighlight[];
  faqs: ProjectFAQ[];
  testimonial?: ProjectTestimonial;
}

export const projects: Project[] = [
  // ── 1. Nairobi Financial Centre ──────────────────────────────────
  {
    slug: "nairobi-financial-centre",
    title: "Nairobi Financial Centre Twin Towers",
    kicker: "Upper Hill Landmark Commercial Hub",
    category: "Commercial",
    client: "East African Financial Consortium",
    location: "Upper Hill, Nairobi, Kenya",
    year: "Completed 2024",
    duration: "30 Months",
    value: "KES 4.8 Billion",
    status: "Completed",
    builtArea: "52,000 m²",
    tagline:
      "A 28-storey twin tower commercial development engineered for zero downtime and LEED Gold sustainability.",
    intro:
      "JENGA LTD served as the principal EPC contractor for the Nairobi Financial Centre, delivering a flagship 28-storey twin-tower development with 4 basement parking levels, double-glazed unitized curtain walling, and Grade-A smart office infrastructure in Nairobi's premier financial district.",
    overview:
      "Commissioned to meet the growing demand for world-class institutional grade commercial real estate in East Africa, the Nairobi Financial Centre stands as an engineering feat in deep basement excavation, seismic-resistant reinforced concrete, and high-performance energy envelopes. JENGA LTD managed all multidisciplinary trades from deep shoring through structural topping-out and final category-A fit-out.",
    challenge:
      "The site featured challenging weathered volcanic tuff strata alongside high water table levels in Upper Hill, flanked by active neighbouring commercial towers. Deep excavation for four subterranean basement levels required vibration-free shoring and meticulous structural monitoring to guarantee zero settlement to surrounding properties.",
    solution:
      "Our geotechnical team deployed contiguous secant bored piles and multi-strand ground anchors, combined with an automated dewatering and recharge filtration system. A tower-crane layout with 3D BIM clash-detection accelerated structural concrete cycles to an industry-leading 11 days per floor slab.",
    impact:
      "Achieved LEED Gold pre-certification, 38% energy reduction through solar-responsive low-E glass facade, and provided office space for over 4,500 financial and corporate professionals with 1.8 million safe work hours achieved without lost-time incidents.",
    heroImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1200&q=85",
        caption: "Senior structural engineers inspecting rebar placement on the 18th floor transfer slab.",
        stage: "Superstructure Construction",
      },
      {
        src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",
        caption: "Tower crane operations and synchronized high-strength concrete pumping.",
        stage: "Core Wall Casting",
      },
      {
        src: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=85",
        caption: "Precision installation of double-glazed acoustic curtain wall units.",
        stage: "Facade Glazing",
      },
      {
        src: "https://images.unsplash.com/photo-1539269071019-8bc6d57b0205?auto=format&fit=crop&w=1200&q=85",
        caption: "Completed triple-height entrance atrium with natural stone finishes.",
        stage: "Interior Handover",
      },
    ],
    stats: [
      { label: "Built Area", value: "52,000 m²" },
      { label: "Building Height", value: "28 Storeys" },
      { label: "Concrete Poured", value: "24,800 m³" },
      { label: "Safe Man-Hours", value: "1.8M Hours" },
    ],
    scope: [
      "4-Level subterranean basement excavation and contiguous piling",
      "Reinforced concrete core walls and post-tensioned floor slabs",
      "Unitized structural silicone glazed curtain walling",
      "Full MEP coordination: HVAC, BMS, 8 high-speed destination elevators",
      "Solar PV array and rainwater harvesting retention system",
      "Statutory approvals, NEMA compliance and NCA 1 certification",
    ],
    keyHighlights: [
      {
        title: "Seismic & Wind Engineering",
        description:
          "Engineered with coupled shear core walls and outrigger trusses to resist seismic forces and East African Rift Valley wind load harmonics.",
      },
      {
        title: "LEED Gold Certified",
        description:
          "High thermal performance low-E glazing combined with variable refrigerant flow (VRF) climate control cuts operational carbon by 32%.",
      },
      {
        title: "Fast-Track Concrete Slab Cycle",
        description:
          "Utilized self-compacting concrete and hydraulic climbing formwork to achieve a rapid 11-day cycle per floor without compromising quality.",
      },
      {
        title: "Integrated Smart BMS",
        description:
          "Central automated Building Management System controlling lighting, ventilation, access control, and emergency fire-suppression systems.",
      },
    ],
    faqs: [
      {
        q: "What safety standard was enforced during deep basement excavation?",
        a: "We deployed laser geotechnical inclinometers and optical prisms on adjacent structures, carrying out twice-daily settlement checks under strict BS 5930 and NCA guidelines with zero ground movement recorded.",
      },
      {
        q: "How was material delivery managed in busy Upper Hill?",
        a: "JENGA LTD implemented night-time concrete pours and timed logistics marshaling between 8:00 PM and 5:00 AM, minimizing impact on urban traffic and ensuring uninterrupted material flow.",
      },
      {
        q: "What warranty was provided upon project handover?",
        a: "We provided a full 12-month defects liability warranty backed by institutional retention bonds, alongside 15-year structural waterproofing and facade warranties.",
      },
    ],
    testimonial: {
      quote:
        "JENGA LTD brought unmatched engineering discipline and safety standards to Upper Hill. Delivering a project of this magnitude on time and within budget has established a new benchmark for commercial development in Nairobi.",
      author: "Eng. David K. Mwaura",
      role: "Project Director",
      company: "East African Financial Consortium",
    },
  },

  // ── 2. Kilimani Crest Luxury Residences ──────────────────────────
  {
    slug: "kilimani-crest-residences",
    title: "Kilimani Crest Luxury Residences",
    kicker: "High-End Urban Residential Living",
    category: "Residential",
    client: "Crestpoint Properties Kenya",
    location: "Kilimani, Nairobi, Kenya",
    year: "Completed 2023",
    duration: "22 Months",
    value: "KES 2.3 Billion",
    status: "Completed",
    builtArea: "28,500 m²",
    tagline:
      "A 16-storey contemporary luxury residential development blending artisanal craftsmanship with modern engineering.",
    intro:
      "Kilimani Crest Residences comprises 120 high-specification apartments, penthouses, a heated rooftop infinity pool, and biophilic landscaped courtyards. Handed over seamlessly to homeowners with zero post-handover snags.",
    overview:
      "Designed to elevate urban apartment living in Nairobi, Kilimani Crest demanded an uncompromising finish: custom timber acoustic paneling, imported porcelain tiling, heavy-duty powder-coated aluminum joinery, and expansive cantilevered balconies offering panoramic views of the Ngong Hills and city skyline.",
    challenge:
      "Working within a dense residential neighborhood required strict noise abatements, restricted working hours, and tight perimeter clearances for material handling and crane swings.",
    solution:
      "We engineered precast concrete balcony balustrades off-site in our manufacturing yard, reducing on-site wet trades and scaffolding duration by 35%. Acoustic barriers and silent hydraulic equipment were deployed throughout the construction period.",
    impact:
      "Achieved 100% off-plan sales before topping out; praised by Nairobi City County as a model private residential development for compliance, drainage integration, and tree conservation.",
    heroImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
        caption: "Architectural facade featuring expansive cantilevered balconies and solar shading louvers.",
        stage: "Completed Facade",
      },
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
        caption: "Bespoke hardwood joinery and European imported sanitaryware in show penthouses.",
        stage: "Interior Finishing",
      },
      {
        src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
        caption: "Structural reinforcement checks prior to pouring the 16th floor cantilever pool basin.",
        stage: "Structural Pouring",
      },
      {
        src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85",
        caption: "Site logistics coordination during evening concrete batch delivery.",
        stage: "Concrete Operations",
      },
    ],
    stats: [
      { label: "Residential Units", value: "120 Units" },
      { label: "Gross Floor Area", value: "28,500 m²" },
      { label: "Basement Parking", value: "185 Bays" },
      { label: "Handover Record", value: "On Schedule" },
    ],
    scope: [
      "Substructure excavation, retaining walls, and 2-level basement parking",
      "Reinforced concrete frame with post-tensioned long-span floor plates",
      "Rooftop infinity swimming pool with specialised structural waterproofing",
      "Full MEP: backup synchronized generators, water treatment & booster pumps",
      "Custom joinery, fitted Italian kitchens, and designer sanitaryware",
      "CCTV surveillance, biometric access, and fibre-to-the-home infrastructure",
    ],
    keyHighlights: [
      {
        title: "Rooftop Hydrotherapy & Pool",
        description:
          "Engineered cantilevered swimming pool featuring dual elastomeric waterproofing membranes and vibration isolation mounts.",
      },
      {
        title: "Acoustic Insulation",
        description:
          "Sound-damped party walls and floating floor screeds designed to achieve less than 45dB inter-residence acoustic transmission.",
      },
      {
        title: "Off-Grid Water Resilience",
        description:
          "Incorporated high-yield licensed borehole with reverse-osmosis filtration and 300,000-litre underground water storage.",
      },
      {
        title: "Turnkey Interior Packages",
        description:
          "Delivered turnkey interior fit-outs with custom fitted wardrobes and vanity joinery manufactured in our Nairobi joinery facility.",
      },
    ],
    faqs: [
      {
        q: "Were custom homeowner floorplan modifications accommodated?",
        a: "Yes. During early superstructure works, our architectural team coordinated with individual off-plan buyers to customize interior partitions and finish specifications without disrupting main timeline milestones.",
      },
      {
        q: "What waterproofing warranty protects the rooftop pool and terrace?",
        a: "The pool installation is covered by a 10-year comprehensive waterproofing warranty backed by manufacturer-certified elastomeric membranes and flood testing.",
      },
      {
        q: "What post-handover aftercare was provided?",
        a: "A dedicated on-site defects rectification engineer was stationed at Kilimani Crest for 12 months post-handover to handle any maintenance requests within 24 hours.",
      },
    ],
    testimonial: {
      quote:
        "The attention to detail and finishing craft displayed by JENGA LTD exceeded our highest expectations. Our buyers were thrilled upon handover, and the building has maintained peak market value.",
      author: "Sarah W. Gitau",
      role: "Managing Director",
      company: "Crestpoint Properties Kenya",
    },
  },

  // ── 3. Rift Valley Expressway Interchange & Dualing ─────────────
  {
    slug: "rift-valley-expressway-phase-2",
    title: "Rift Valley Expressway Interchange & Dualing",
    kicker: "Major Civil Highway Infrastructure",
    category: "Civil & Infrastructure",
    client: "Kenya National Highways Authority (KeNHA)",
    location: "Nakuru - Eldoret Corridor, Kenya",
    year: "Completed 2024",
    duration: "24 Months",
    value: "KES 6.5 Billion",
    status: "Completed",
    builtArea: "34 km Dual Carriageway",
    tagline:
      "A 34-kilometer dual-carriageway expansion featuring 3 grade-separated interchanges, 14 box culverts, and heavy-duty asphalt concrete.",
    intro:
      "JENGA LTD executed Section 2 of the Northern Corridor Highway Upgrade, expanding the overloaded single-lane highway into a modern four-lane dual carriageway engineered for high-density heavy freight transport across the Great Rift Valley.",
    overview:
      "The Northern Corridor is East Africa's busiest transit artery. The project entailed heavy earthworks cuts through steep volcanic terrain, stabilized sub-base construction, modern stormwater drainage infrastructure, pedestrian overpasses, and high-performance asphalt concrete designed for 25-year structural design life under axle loads up to 12 tonnes.",
    challenge:
      "Managing live traffic flow of more than 16,000 heavy commercial vehicles per day with zero disruption to regional logistics, while performing massive cut-and-fill excavations on unstable rift valley soils prone to erosion.",
    solution:
      "We instituted a multi-stage traffic diversion scheme with illuminated signage and temporary bypass lanes. Soil stabilization using cement-treated crushed stone bases, combined with geosynthetic soil reinforcement and bio-engineered slope terracing, resolved geological ground instability.",
    impact:
      "Reduced transit travel time through the corridor by 45%, eliminated notorious accident blackspots, and boosted regional trade mobility connecting the Port of Mombasa with Uganda, Rwanda, and South Sudan.",
    heroImage:
      "https://images.unsplash.com/photo-1590479773265-7464e5d48118?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&q=85",
        caption: "Asphalt paving train laying polymer-modified bitumen wearing course.",
        stage: "Pavement Construction",
      },
      {
        src: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=85",
        caption: "Heavy excavators cutting through volcanic rock for the central grade-separated interchange.",
        stage: "Earthworks & Cuts",
      },
      {
        src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=85",
        caption: "Reinforced concrete bridge pier shuttering for the overpass bridge deck.",
        stage: "Civil Structures",
      },
      {
        src: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?auto=format&fit=crop&w=1200&q=85",
        caption: "Final road markings, retro-reflective cat-eyes, and crash barrier installation.",
        stage: "Highway Commissioning",
      },
    ],
    stats: [
      { label: "Highway Length", value: "34.2 km" },
      { label: "Earthworks Moved", value: "1.4M m³" },
      { label: "Interchanges", value: "3 Grade Separated" },
      { label: "Design Life", value: "25 Years" },
    ],
    scope: [
      "Bulk earthworks, volcanic rock blasting, and embankment formation",
      "Cement-improved sub-grade (CIB) and graded crushed stone base (GCS)",
      "High-modulus Asphalt Concrete (Superpave) binder and wearing courses",
      "3 Post-tensioned concrete flyover bridges and 14 precast box culverts",
      "Road furniture, galvanized W-beam guardrails, LED solar streetlights",
      "Hydraulic culvert drainage and bio-engineered rip-rap slope stabilization",
    ],
    keyHighlights: [
      {
        title: "Superpave Mix Design",
        description:
          "Formulated with polymer-modified bitumen (PMB) to prevent rutting and deformation under heavy commercial freight temperatures.",
      },
      {
        title: "Active Traffic Management",
        description:
          "Maintained continuous dual-direction freight transit through rigorous 24/7 traffic control marshals and automated detour signage.",
      },
      {
        title: "Bridge Deck Engineering",
        description:
          "Prestressed concrete I-girders manufactured in on-site casting yards and launched using synchronized hydraulic gantry cranes.",
      },
      {
        title: "Environmental Remediation",
        description:
          "Planted over 45,000 indigenous trees along borrow pits and roadside reserves to offset ecological footprint and arrest soil erosion.",
      },
    ],
    faqs: [
      {
        q: "What testing protocol validated asphalt density and compaction?",
        a: "Continuous nuclear density gauge testing and laboratory Marshall stability core tests were conducted every 250 meters under the continuous oversight of resident KeNHA materials engineers.",
      },
      {
        q: "How were environmental concerns during rock blasting handled?",
        a: "Controlled electronic micro-delay blasting prevented air-blast overpressure, with seismographs positioned at community boundaries to ensure vibration levels stayed safely below 5mm/sec.",
      },
      {
        q: "What safety features protect pedestrians crossing the expressway?",
        a: "The project incorporated 4 grade-separated reinforced concrete pedestrian footbridges equipped with gentle ramp gradients for wheelchairs and handcarts.",
      },
    ],
    testimonial: {
      quote:
        "JENGA LTD executed this critical arterial highway with exemplary technical proficiency. Their ability to manage intense live traffic while achieving exceptional pavement ride-quality is commendable.",
      author: "Eng. Samuel K. Ruto",
      role: "Chief Engineer (Roads)",
      company: "Kenya National Highways Authority",
    },
  },

  // ── 4. Mombasa Port Logistics & Cold-Chain Hub ────────────────────
  {
    slug: "mombasa-port-logistics-hub",
    title: "Mombasa Port Logistics & Cold-Chain Hub",
    kicker: "State-of-the-Art Maritime Warehousing",
    category: "Industrial & Logistics",
    client: "Coastal Freight & Logistics Ltd",
    location: "Miritini, Mombasa, Kenya",
    year: "Completed 2023",
    duration: "18 Months",
    value: "KES 1.9 Billion",
    status: "Completed",
    builtArea: "35,000 m²",
    tagline:
      "A 35,000 m² logistics warehouse complex featuring jointless laser-screed floor slabs and pharmaceutical cold storage.",
    intro:
      "Constructed adjacent to the Mombasa Port SGR freight terminal, this modern distribution center provides 35,000 m² of covered high-bay warehousing, 18 automated hydraulic dock levelers, temperature-controlled cold rooms (-25°C to +4°C), and 15,000 m² of heavy-duty concrete truck marshalling yards.",
    overview:
      "With international shippers demanding modern port-side consolidation hubs, JENGA LTD engineered and delivered this pre-engineered steel structure with ultra-flat FM2-specification industrial flooring, fire-suppression sprinklers, and off-grid solar micro-grids.",
    challenge:
      "Coastal marine clay soils with very low California Bearing Ratio (CBR) values, combined with extreme maritime humidity causing steel corrosion risks.",
    solution:
      "We executed stone column ground improvement down to 14 meters depth, combined with hot-dip galvanized structural steel frames and marine-grade protective PVDF coating systems. Laser-guided vibratory screeds delivered crack-free jointless post-tensioned floors.",
    impact:
      "Tripled perishable agricultural export capacity for Kenyan fresh produce to European and Middle Eastern markets, lowering logistics transit storage losses by 90%.",
    heroImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=85",
        caption: "Erection of high-tensile 42-meter clear span pre-engineered steel portal frames.",
        stage: "Structural Steel Frame",
      },
      {
        src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",
        caption: "Laser-guided floor screeding for FM2 tolerance high-rack forklift operations.",
        stage: "Industrial Floor Slab",
      },
      {
        src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85",
        caption: "Heavy duty 250mm reinforced concrete apron for 40-tonne container reach stackers.",
        stage: "External Paving",
      },
      {
        src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
        caption: "Automated dock leveller installations and cold room insulated sandwich panels.",
        stage: "Mechanical Fit-Out",
      },
    ],
    stats: [
      { label: "Warehouse Area", value: "35,000 m²" },
      { label: "Clear Span Height", value: "14.5 Metres" },
      { label: "Floor Slab Rating", value: "80 kN/m²" },
      { label: "Docking Bays", value: "18 Hydraulic Bays" },
    ],
    scope: [
      "Stone-column deep vibro-compaction ground improvement",
      "Heavy industrial post-tensioned floor slab engineered to FM2 tolerance",
      "Structural steel portal frame manufacturing, sandblasting & erection",
      "PIR insulated wall and roof cladding with C4 marine durability rating",
      "Cold-chain refrigeration installation (-25°C to +4°C temperature zones)",
      "NFPA 13 early suppression fast response (ESFR) fire sprinkler system",
    ],
    keyHighlights: [
      {
        title: "Jointless FM2 Superflat Floors",
        description:
          "Allows high-density turret trucks and automated reach forklifts to operate safely at elevations up to 14 meters without rack deflection.",
      },
      {
        title: "Marine Environmental Protection",
        description:
          "All steelwork hot-dip galvanized and finished with 300-micron epoxy polyurethane coating to counter corrosive coastal saline air.",
      },
      {
        title: "Cold-Chain Thermal Isolation",
        description:
          "200mm high-density polyisocyanurate (PIR) insulated paneling with heated sub-floor ventilation to eliminate frost-heave.",
      },
      {
        title: "Rooftop 1.2MW Solar Array",
        description:
          "Engineered lightweight standing-seam roof capable of hosting 1.2MW of photovoltaic panels for sustainable green warehouse operations.",
      },
    ],
    faqs: [
      {
        q: "Can the floor handle heavy 40-foot shipping containers?",
        a: "Yes. The external heavy-duty concrete aprons and internal floor slabs are reinforced with steel fibers and double rebar meshes engineered for 80 kN/m² uniform distributed load and 120 kN point loads.",
      },
      {
        q: "What fire safety standards are installed?",
        a: "The facility features a complete NFPA-compliant ESFR fire sprinkler system connected to a 600,000-litre dedicated water reservoir and diesel booster fire pumps.",
      },
      {
        q: "Is the logistics park linked to the Standard Gauge Railway (SGR)?",
        a: "Yes. The facility features direct dedicated internal rail-siding spur connections for container flatbed wagons, enabling direct transfer from ship to warehouse.",
      },
    ],
    testimonial: {
      quote:
        "JENGA LTD gave us a facility that rivals the best port logistics hubs in Dubai and Singapore. Their engineering speed and floor precision are unmatched in East Africa.",
      author: "Capt. Rashid Omar",
      role: "Chief Operations Officer",
      company: "Coastal Freight & Logistics Ltd",
    },
  },

  // ── 5. Aga Khan Specialized Pediatric Wing ───────────────────────
  {
    slug: "aga-khan-pediatric-wing",
    title: "Aga Khan Specialized Pediatric Wing",
    kicker: "Critical Healthcare Engineering & Fit-Out",
    category: "Healthcare & Institutional",
    client: "Aga Khan Health Services Kenya",
    location: "Parklands, Nairobi, Kenya",
    year: "Completed 2024",
    duration: "20 Months",
    value: "KES 3.2 Billion",
    status: "Completed",
    builtArea: "18,200 m²",
    tagline:
      "A 6-storey clinical healthcare facility featuring laminar flow surgical theatres, positive pressure isolation suites, and medical gas networks.",
    intro:
      "Delivered within an active hospital campus, this 6-storey specialized pediatric healthcare center includes 80 inpatient beds, 4 ultra-clean laminar flow operating suites, pediatric intensive care units (PICU), and advanced neonatal diagnostic imaging facilities.",
    overview:
      "Healthcare construction is the most technically demanding sector in civil engineering. The project required seamless MEP integration, medical gas vacuum networks, radiation shielding for X-ray suites, zero-vibration construction methods near active ICU units, and specialized anti-microbial cleanroom finishes.",
    challenge:
      "Constructing immediately adjacent to functioning hospital emergency wards and intensive care units with strict zero-dust, zero-noise, and zero-vibration constraints.",
    solution:
      "We engineered pressurized airtight barrier hoardings with HEPA dust filtration, deployed electric equipment, and scheduled all structural drilling during hospital-approved surgical changeover windows with continuous acoustic monitoring.",
    impact:
      "Expanded specialized pediatric and neonatal surgery capacity for over 25,000 children annually across East and Central Africa, achieving Joint Commission International (JCI) hospital accreditation.",
    heroImage:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=85",
        caption: "Clinical cleanliness safety gear worn by fit-out technicians during cleanroom air duct installation.",
        stage: "MEP Cleanroom Fit-Out",
      },
      {
        src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85",
        caption: "Structural concrete framing completed within quiet operational hours.",
        stage: "Superstructure Frame",
      },
      {
        src: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=85",
        caption: "Architectural exterior with high-efficiency sun-shading fins and acoustic glazing.",
        stage: "Exterior Envelope",
      },
      {
        src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
        caption: "Lead-lined partition walls inspected for diagnostic radiology X-ray safety.",
        stage: "Medical Fit-Out",
      },
    ],
    stats: [
      { label: "Inpatient Beds", value: "80 Clinical Beds" },
      { label: "Surgical Suites", value: "4 Laminar Theatres" },
      { label: "Cleanroom Standard", value: "ISO Class 5" },
      { label: "Safety Rating", value: "Zero Contamination" },
    ],
    scope: [
      "Vibration-damped reinforced concrete foundation and framing",
      "Medical Gas Pipeline Systems (Oxygen, Nitrous Oxide, Vacuum, Medical Air)",
      "HTM 03-01 compliant specialized HVAC with HEPA filtration and pressure regimes",
      "Radiation lead shielding for CT and fluoroscopy diagnostic rooms",
      "Seamless anti-static, anti-microbial vinyl flooring and seamless wall claddings",
      "Uninterruptible Power Supply (UPS) with N+1 diesel generator redundancy",
    ],
    keyHighlights: [
      {
        title: "Laminar Flow Theatres",
        description:
          "Ultra-clean air delivery systems achieving ISO Class 5 air purity to minimize airborne surgical infection risks.",
      },
      {
        title: "Zero-Infection Construction Protocols",
        description:
          "Maintained negative pressure air locks at all site entry points to ensure zero dust migration into patient wards.",
      },
      {
        title: "Medical Gas Integration",
        description:
          "Over 6,000 meters of degreased medical-grade copper piping tested to 1.5x operating pressures under HTM 02-01 specifications.",
      },
      {
        title: "Lead-Lined Radiation Enclosures",
        description:
          "High-density lead-sheet lining in radiation suites certified by the Kenya Nuclear Regulatory Authority (KNRA).",
      },
    ],
    faqs: [
      {
        q: "How was hospital continuity guaranteed during construction?",
        a: "We held daily coordination meetings with the hospital clinical directorship, utilizing acoustic monitoring sensors that automatically alerted site managers if decibels approached threshold limits.",
      },
      {
        q: "What certifications were achieved upon handover?",
        a: "The project achieved full Kenya National Construction Authority, NEMA, KNRA, and Joint Commission International (JCI) clinical infrastructure certifications.",
      },
      {
        q: "What power backup ensures life-support equipment never fails?",
        a: "Dual isolated bus-bars connected to dual 500kVA Cummins generator sets and static flywheel UPS systems guarantee transfer times under 5 milliseconds.",
      },
    ],
    testimonial: {
      quote:
        "Building a sterile pediatric wing within an active hospital is an extraordinary logistical test. JENGA LTD proved themselves to be true healthcare construction specialists.",
      author: "Dr. Amina Hassan",
      role: "Director of Clinical Services",
      company: "Aga Khan Health Services Kenya",
    },
  },

  // ── 6. Lake Basin Bulk Water Treatment & Pipeline Network ────────
  {
    slug: "lake-basin-water-treatment-plant",
    title: "Lake Basin Bulk Water & Pipeline Network",
    kicker: "Regional Municipal Civil Engineering",
    category: "Civil & Infrastructure",
    client: "Lake Victoria South Water Works Development Agency",
    location: "Kisumu County, Kenya",
    year: "Completed 2024",
    duration: "26 Months",
    value: "KES 3.7 Billion",
    status: "Completed",
    builtArea: "45,000 m³/day Capacity",
    tagline:
      "A 45,000 m³/day reinforced concrete water treatment plant, 62km ductile iron distribution pipeline, and high-lift pump stations.",
    intro:
      "This landmark municipal infrastructure project delivers potable drinking water to over 350,000 residents in Kisumu County. The project encompassed a water intake tower in Lake Victoria, rapid sand filtration clarifiers, chlorination facilities, and 62 kilometers of high-pressure distribution pipeline.",
    overview:
      "Water infrastructure demands the highest grade of concrete mix design for water-retaining structures, rigorous pressure testing of expansive pipelines, and high-voltage electrical pump commissioning. JENGA LTD completed all intake structures, chemical dosing buildings, clear water tanks, and municipal reticulation on schedule.",
    challenge:
      "Constructing deep underwater cofferdams for the lake intake structure during seasonal flooding, combined with rocky trench excavation along 62km of rural and urban rights-of-way.",
    solution:
      "We engineered steel sheet-pile cofferdams with underwater tremie concrete seals, allowing safe dewatering and dry construction of intake sumps. Trenching crews operated specialized mechanical rock wheel cutters to avoid blasting damage in populated areas.",
    impact:
      "Directly eliminated waterborne illnesses for communities, providing reliable 24/7 piped clean water and spurring industrial manufacturing across western Kenya.",
    heroImage:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1523848309072-c199db53f137?auto=format&fit=crop&w=1200&q=85",
        caption: "Hydrostatic testing of 800mm diameter ductile iron bulk transmission mains.",
        stage: "Pipeline Pressure Testing",
      },
      {
        src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85",
        caption: "Reinforced concrete water-retaining walls for the 15,000 m³ clear water reservoir.",
        stage: "Reservoir Construction",
      },
      {
        src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",
        caption: "Sheet pile cofferdam dewatering for the intake pump well installation.",
        stage: "Intake Works",
      },
      {
        src: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?auto=format&fit=crop&w=1200&q=85",
        caption: "Trench reinstatement and asphalt resurfacing following municipal pipe laying.",
        stage: "Site Reinstatement",
      },
    ],
    stats: [
      { label: "Daily Capacity", value: "45,000 m³/day" },
      { label: "Pipeline Laid", value: "62.4 km" },
      { label: "Population Served", value: "350,000+ People" },
      { label: "Concrete Testing", value: "Zero Leakage" },
    ],
    scope: [
      "Underwater steel sheet-pile cofferdams and intake pumping station",
      "Reinforced concrete clariflocculators, rapid gravity sand filters, and backwash tanks",
      "15,000 m³ capacity water-retaining clear water storage reservoir",
      "62km DN200 to DN800 ductile iron and HDPE pipeline transmission network",
      "Chemical dosing building, chlorine gas injection, and supervisory SCADA system",
      "High-lift pumping stations powered by dedicated 33kV substation transformers",
    ],
    keyHighlights: [
      {
        title: "BS 8007 Water-Retaining Concrete",
        description:
          "Formulated with waterproofing admixtures, crystalline surface treatments, and swellable PVC waterstops tested to 100% watertightness.",
      },
      {
        title: "Automated SCADA Telemetry",
        description:
          "Integrated solar-powered remote telemetry units (RTUs) across the 62km pipeline network monitoring flow, pressure, and leakage in real time.",
      },
      {
        title: "High-Pressure Hydrostatic Testing",
        description:
          "Every pipeline section subjected to 1.5x working pressure (up to 24 bar) with zero pressure drop over 24-hour testing intervals.",
      },
      {
        title: "Community Social Impact",
        description:
          "Constructed 18 public water kiosks providing free clean drinking water to schools and clinics along the pipeline route.",
      },
    ],
    faqs: [
      {
        q: "What water quality standards does the treated water meet?",
        a: "The finished water meets both Kenya Bureau of Standards (KEBS KS 05-459) and World Health Organization (WHO) international drinking water guidelines.",
      },
      {
        q: "How does the treatment plant handle high turbidity during rainy seasons?",
        a: "The system features multi-stage chemical coagulant dosing and rapid lamella tube settlers capable of treating raw lake water with turbidity exceeding 1,200 NTU.",
      },
      {
        q: "What training was provided to municipal operators?",
        a: "JENGA LTD conducted a 6-month hands-on operational training program for 24 municipal engineers covering SCADA automation, valve maintenance, and water quality testing.",
      },
    ],
    testimonial: {
      quote:
        "The delivery of the Lake Basin Water Treatment Plant has transformed health and commerce in Kisumu. JENGA LTD proved their engineering mastery in both heavy civil and water process works.",
      author: "Eng. George O. Ochieng",
      role: "Chief Executive Officer",
      company: "Lake Victoria South Water Works Development Agency",
    },
  },

  // ── 7. Karen Waterfront Mixed-Use Marina & Retail Park ────────────
  {
    slug: "karen-waterfront-retail-park",
    title: "Karen Waterfront Mixed-Use & Retail Park",
    kicker: "Master-Planned Commercial & Lifestyle Destination",
    category: "Commercial",
    client: "Karen Waterfront Development Group",
    location: "Karen, Nairobi, Kenya",
    year: "Completed 2023",
    duration: "24 Months",
    value: "KES 2.8 Billion",
    status: "Completed",
    builtArea: "42,000 m²",
    tagline:
      "A 42,000 m² open-air retail promenade, artificial lake civil works, and exposed structural timber & steel architecture.",
    intro:
      "Set amidst 50 acres of pristine greenery in Karen, this luxury mixed-use retail and leisure center features a 3.5-acre man-made lake, open-air pedestrian boulevards, anchor supermarket facilities, boutique shopping galleries, and lakeside fine dining pavilions.",
    overview:
      "The Waterfront Karen presented an artistic fusion of civil earthworks, water reservoir engineering, and complex architectural finishes. JENGA LTD managed the extensive civil cut-and-fill operations, water retention lining, curved structural steel portal framing, and exposed timber facades.",
    challenge:
      "Creating an artificial lake with permanent water balance and zero seepage on volcanic porous soils, combined with preserving mature indigenous trees throughout the 50-acre property.",
    solution:
      "We engineered a composite geosynthetic clay liner (GCL) with 2mm high-density polyethylene (HDPE) geomembrane, protected by geotextile cushions and natural river-stone bedding. Buildings were surveyed and oriented around existing ancient acacia and cedar trees.",
    impact:
      "Created Nairobi's premier eco-friendly retail and recreational destination, attracting 150,000+ monthly visitors while achieving an award for environmental sustainability and wetland preservation.",
    heroImage:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85",
        caption: "Erection of curved glue-laminated timber arches and high-tensile structural steel roof framing.",
        stage: "Structural Framework",
      },
      {
        src: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?auto=format&fit=crop&w=1200&q=85",
        caption: "Geomembrane liner welding and water quality aeration civil works for the 3.5-acre lake.",
        stage: "Lake Civil Engineering",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
        caption: "Pedestrian promenade paved with natural volcanic stone and decorative landscaping.",
        stage: "Exterior Finishing",
      },
      {
        src: "https://images.unsplash.com/photo-1539269071019-8bc6d57b0205?auto=format&fit=crop&w=1200&q=85",
        caption: "Lakeside dining pavilions with floor-to-ceiling glass facades and timber decking.",
        stage: "Commercial Handover",
      },
    ],
    stats: [
      { label: "Retail Gross Area", value: "42,000 m²" },
      { label: "Man-Made Lake", value: "3.5 Acres" },
      { label: "Commercial Outlets", value: "85 Brands" },
      { label: "Parking Capacity", value: "1,200 Vehicles" },
    ],
    scope: [
      "Master earthworks, lake excavation, and geosynthetic membrane lining",
      "Curved structural steel framing and glue-laminated timber roof trusses",
      "Extensive external civil works: 1,200-car paved parking, roads, and storm drainage",
      "Full MEP: automated lake aeration fountains, backup power, water recycling plant",
      "Category-A fit-out for 85 commercial retail tenants and anchor supermarket",
      "Pedestrian bridges, boardwalks, perimeter security, and landscaped plazas",
    ],
    keyHighlights: [
      {
        title: "Impervious Geomembrane Sealing",
        description:
          "Hot-wedge extrusion welded HDPE liner with dual-track air pressure seam testing guaranteed zero subterranean water seepage.",
      },
      {
        title: "Glulam & Steel Hybrid Architecture",
        description:
          "Blended heavy structural steel portals with certified sustainable glue-laminated timber to match Karen's scenic green aesthetics.",
      },
      {
        title: "Sustainable Stormwater Cycling",
        description:
          "All rainwater runoff from 42,000 m² of roofing is filtered through bioswales directly into the lake for irrigation re-use.",
      },
      {
        title: "Tenant Phased Handover",
        description:
          "Successfully coordinated phased handover allowing anchor tenants to complete Category-B fit-outs 4 months ahead of public opening.",
      },
    ],
    faqs: [
      {
        q: "How is water clarity and ecological health maintained in the artificial lake?",
        a: "Submerged biological aeration diffusers and solar circulation fountains prevent stagnation, supported by natural reed-bed bio-filtration zones.",
      },
      {
        q: "What accessibility accommodations were integrated?",
        a: "The entire development features barrier-free pedestrian boardwalks, wheelchair ramps at maximum 1:12 gradients, and tactile paving throughout.",
      },
      {
        q: "Were existing mature trees saved during construction?",
        a: "Over 94% of mature indigenous trees were preserved through customized footing designs and hand-excavated root protection zones.",
      },
    ],
    testimonial: {
      quote:
        "JENGA LTD brought creative problem solving to our vision. Creating an authentic lake and world-class retail promenade in Karen required an agile, master builder.",
      author: "Patrick N. Kimani",
      role: "Development Director",
      company: "Karen Waterfront Development Group",
    },
  },

  // ── 8. Konza Technopolis Tier-IV Data Centre & Substation ─────────
  {
    slug: "konza-technopolis-data-hub",
    title: "Konza Technopolis Tier-IV Data Centre",
    kicker: "Mission-Critical Smart City Infrastructure",
    category: "Industrial & Logistics",
    client: "Konza Technopolis Development Authority (KoTDA)",
    location: "Konza Smart City, Machakos, Kenya",
    year: "Ongoing / Q4 2025",
    duration: "24 Months",
    value: "KES 4.5 Billion",
    status: "Under Construction",
    builtArea: "15,000 m²",
    tagline:
      "A mission-critical Tier-IV data bunker facility featuring blast-resistant reinforced concrete, 66kV substation, and dual-power ring redundancy.",
    intro:
      "As Kenya's Silicon Savannah takes shape, JENGA LTD is building the primary national Tier-IV cloud computing data center at Konza Technopolis. The facility features hardened reinforced concrete bunker architecture, 2N power redundancy, adiabatic chilling infrastructure, and an on-site 66kV electrical substation.",
    overview:
      "Mission-critical data center construction demands 99.995% uptime engineering. The project incorporates blast-mitigation perimeter walls, seismic base-isolation, electromagnetic shielding (EMP), gas-based fire suppression, and precision server room thermal management.",
    challenge:
      "Remote location with high ambient thermal fluctuations and expansive black cotton soils requiring deep pile foundations down to sound basement bedrock.",
    solution:
      "We installed 280 large-diameter bored cast-in-place concrete piles anchored into granite bedrock. For the superstructure, high-density blast-resistant concrete mix was cast with integrated seismic dampers and insulated fly-ash thermal mass.",
    impact:
      "Will power government e-services, regional financial cloud infrastructure, and international tech hyperscalers, positioning Kenya as Africa's premier cloud computing hub.",
    heroImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85",
        caption: "Bored pile drilling and heavy rebar cage placement reaching 18 meters into bedrock.",
        stage: "Deep Foundations",
      },
      {
        src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=85",
        caption: "Installation of dedicated 66kV step-down transformers and gas-insulated switchgear.",
        stage: "High-Voltage Substation",
      },
      {
        src: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=85",
        caption: "Reinforced concrete core walls cast with blast-mitigation high-tensile steel rebars.",
        stage: "Bunker Structure",
      },
      {
        src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=85",
        caption: "Quality assurance inspection of seismic isolation bearings under structural columns.",
        stage: "Structural Testing",
      },
    ],
    stats: [
      { label: "Data Hall Capacity", value: "800 Server Racks" },
      { label: "Power Redundancy", value: "2N+1 Architecture" },
      { label: "Uptime Rating", value: "99.995% Tier IV" },
      { label: "Bored Piles", value: "280 Piles (18m Depth)" },
    ],
    scope: [
      "280 Large-diameter bored concrete piles through black cotton soil into rock",
      "Blast-resistant high-density concrete shell and seismic base-isolation pads",
      "Turnkey 66kV step-down electrical substation with dual feeder lines",
      "Inergen clean-agent fire suppression system with aspirating smoke detection (VESDA)",
      "High-efficiency adiabatic chilled-water cooling with containment cold aisles",
      "Military-grade physical perimeter defense, ballistic glazing, and anti-ram barriers",
    ],
    keyHighlights: [
      {
        title: "Tier-IV Fault Tolerant Design",
        description:
          "Complete electrical and mechanical 2(N+1) redundancy ensuring zero operational downtime even during simultaneous maintenance and utility failure.",
      },
      {
        title: "Blast & EMP Hardening",
        description:
          "Exterior reinforced concrete shell engineered to withstand external blast pressure waves and electromagnetic wave interference.",
      },
      {
        title: "Seismic Base Isolation",
        description:
          "Lead-rubber elastomeric bearings decouple the structure from ground motion, protecting delicate server hard drives and optical networks.",
      },
      {
        title: "Target PUE 1.25",
        description:
          "Adiabatic cooling and hot-aisle containment deliver an exceptionally low Power Usage Effectiveness (PUE) in Kenya's sunny climate.",
      },
    ],
    faqs: [
      {
        q: "What uptime availability will the completed Tier-IV data center deliver?",
        a: "The Tier-IV design provides 99.995% uptime availability, which equates to less than 26 minutes of potential interruption per calendar year.",
      },
      {
        q: "How is seismic activity along the Gregory Rift accommodated?",
        a: "The foundation features elastomeric seismic bearings that absorb shear waves, accompanied by flexible MEP pipe couplings engineered for zone 4 earthquakes.",
      },
      {
        q: "When is the facility targeted for commercial commissioning?",
        a: "Commissioning and Uptime Institute Tier IV certification testing is scheduled for Q4 2025, with structural topping-out already completed.",
      },
    ],
    testimonial: {
      quote:
        "Building mission-critical Tier-IV data infrastructure requires mathematical precision and unwavering quality. JENGA LTD has demonstrated world-class capability right here at Konza.",
      author: "Eng. John K. Tanui",
      role: "Infrastructure Lead",
      company: "Konza Technopolis Development Authority",
    },
  },
];

/** Convenience lookup by slug */
export const projectsBySlug: Record<string, Project> = Object.fromEntries(
  projects.map((p) => [p.slug, p])
);

/** Helper to get project by slug */
export function getProjectBySlug(slug: string): Project | undefined {
  return projectsBySlug[slug];
}

/** Helper to get related projects excluding current */
export function getRelatedProjects(slug: string, limit: number = 3): Project[] {
  const current = projectsBySlug[slug];
  if (!current) return projects.slice(0, limit);

  // First pick same category, then others
  const sameCategory = projects.filter(
    (p) => p.slug !== slug && p.category === current.category
  );
  const otherCategory = projects.filter(
    (p) => p.slug !== slug && p.category !== current.category
  );

  return [...sameCategory, ...otherCategory].slice(0, limit);
}

/** List of all project categories */
export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Commercial",
  "Residential",
  "Civil & Infrastructure",
  "Industrial & Logistics",
  "Healthcare & Institutional",
];
