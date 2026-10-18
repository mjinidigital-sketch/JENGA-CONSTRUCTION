// Construction Services Data — JENGA LTD
// Used by: service cards on homepage, app/services/[slug]/page.tsx

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  kicker: string;
  tagline: string;
  intro: string;
  heroImage: string;
  gallery: string[];
  points: string[];
  features: ServiceFeature[];
  faqs: ServiceFAQ[];
  icon: string;
}

export const services: Service[] = [
  // ── 1 ─────────────────────────────────────────────────────────────
  {
    slug: 'commercial-construction',
    title: 'Commercial Construction',
    kicker: 'Spaces that move business forward',
    tagline: 'High-performance commercial buildings delivered on time, in budget.',
    intro:
      'From landmark office towers to sprawling retail parks and hospitality complexes, JENGA LTD delivers commercial construction with the rigour and certainty your business demands. We manage every phase in-house — design coordination, procurement, site supervision, and turnkey handover — so your project stays on programme and on budget.',
    heroImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1539269071019-8bc6d57b0205?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&w=900&q=85',
    ],
    points: [
      'Office towers & business parks',
      'Retail, hospitality & mixed-use developments',
      'Transparent cost planning & procurement',
      'Site safety & NCA compliance',
      'Phased delivery around operating businesses',
      'Defects liability & aftercare',
    ],
    features: [
      { title: 'Structural Engineering', description: 'Reinforced concrete and structural steel frames engineered for Nairobi seismic and load requirements.' },
      { title: 'MEP Coordination', description: 'Full mechanical, electrical, and plumbing coordination managed under one accountable team.' },
      { title: 'Facade & Envelope', description: 'Curtain-wall glazing, cladding systems, and weatherproofing specified and installed to international standards.' },
      { title: 'Interior Fit-out', description: 'Category A and B fit-outs delivered in sequence with the base build to reduce tenant move-in timelines.' },
    ],
    faqs: [
      { q: 'Can you work around an operating business?', a: 'Yes. Our team sequences phased works, access routes, noise controls, and stakeholder communication around your operational hours and lease obligations.' },
      { q: 'How do you control commercial project costs?', a: 'We establish a detailed cost plan at inception, package procurement strategically, and issue transparent monthly cost reports against a fixed baseline throughout the build.' },
      { q: 'What regions do you cover?', a: 'Our principal base is Nairobi, with proven delivery capability across Kenya — Mombasa, Kisumu, Nakuru, and remote upcountry sites — and the wider East African region.' },
    ],
    icon: 'Building2',
  },

  // ── 2 ─────────────────────────────────────────────────────────────
  {
    slug: 'residential-developments',
    title: 'Residential Developments',
    kicker: 'Homes built for Kenyan life',
    tagline: 'Thoughtful homes and estates with enduring materials and craftsmanship.',
    intro:
      'JENGA LTD builds residential developments that stand the test of time — from gated family estates and luxury villas to high-density apartment blocks and affordable housing projects. We work closely with architects, interior designers, and landscape consultants to create homes with genuine character and lasting quality.',
    heroImage: 'https://images.unsplash.com/photo-1787487623861-f21b1a29ed8b?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1778438387124-b304a43a710b?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1772617661437-8103db985d70?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1778438387226-73b14195c492?auto=format&fit=crop&w=900&q=85',
    ],
    points: [
      'New-build homes, villas & estates',
      'Apartment blocks & high-density housing',
      'Affordable housing developments',
      'Architectural & interior coordination',
      'Premium joinery, finishes & landscaping',
      'Defects period & homeowner aftercare',
    ],
    features: [
      { title: 'Structural Masonry & Concrete', description: 'Stone, brick, and reinforced-concrete structures built to NCA standards and engineered for Kenya climate.' },
      { title: 'Roofing Systems', description: 'Metal deck, clay tile, and membrane roofing systems with guaranteed weatherproofing and long-term warranties.' },
      { title: 'Kitchen & Joinery Fit-out', description: 'Custom kitchen cabinetry, built-in wardrobes, and bespoke joinery fabricated in our own workshop.' },
      { title: 'Landscaping & Perimeter Works', description: 'Driveway paving, boundary walls, perimeter fencing, and planted landscaping delivered as part of the main contract.' },
    ],
    faqs: [
      { q: 'Do you build one-off custom homes?', a: 'Absolutely. We work with private homeowners, family offices, and developers on bespoke homes of every scale, from modest maisonettes to landmark villas.' },
      { q: 'Can you help select finishes and materials?', a: 'Yes. Our project team provides a curated material and fixture selection service, ensuring every surface, fitting, and landscape element works together cohesively.' },
      { q: 'What happens after handover?', a: 'We provide a structured 12-month defects liability period and remain available for aftercare maintenance, additional works, and future improvement projects.' },
    ],
    icon: 'Home',
  },

  // ── 3 ─────────────────────────────────────────────────────────────
  {
    slug: 'civil-works-infrastructure',
    title: 'Civil Works & Infrastructure',
    kicker: 'Strong foundations for a growing nation',
    tagline: 'Roads, drainage, earthworks, and civil structures engineered to last.',
    intro:
      'Reliable infrastructure underpins everything we build. JENGA LTD delivers comprehensive civil engineering works — from bulk earthworks and road construction to storm-water drainage systems, retaining walls, and reinforced-concrete structures — with disciplined programme management and full NCA certification.',
    heroImage: 'https://images.unsplash.com/photo-1590479773265-7464e5d48118?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1523848309072-c199db53f137?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=85',
    ],
    points: [
      'Bulk earthworks & site preparation',
      'Road construction & paving',
      'Storm-water drainage & culverts',
      'Retaining walls & slope stabilisation',
      'Reinforced concrete & structural works',
      'Environmental impact management',
    ],
    features: [
      { title: 'Earthworks & Grading', description: 'Precision cut-and-fill operations using GPS-guided plant machinery for accurate levels and efficient material management.' },
      { title: 'Road Construction', description: 'Sub-base, base course, and asphalt surfacing for estate roads, access routes, and public carriageways to KeNHA standards.' },
      { title: 'Drainage Systems', description: 'Storm-water channels, culverts, soakaway pits, and retention ponds designed and constructed to prevent site flooding.' },
      { title: 'Concrete Structures', description: 'Bridges, underpasses, retaining walls, and drainage structures in reinforced concrete with full materials testing.' },
    ],
    faqs: [
      { q: 'Do you work with public-sector clients?', a: 'Yes. We are fully conversant with KeNHA, county government, and development-authority procurement processes, documentation requirements, and reporting protocols.' },
      { q: 'How do you manage environmental impact on site?', a: 'Every site has a documented environmental management plan covering erosion control, dust suppression, waste disposal, and community access from day one.' },
      { q: 'Can you mobilise to remote upcountry sites?', a: 'Our plant and logistics teams can mobilise anywhere in Kenya, with a pre-agreed supply chain strategy and site-based camp facilities where required.' },
    ],
    icon: 'Shovel',
  },

  // ── 4 ─────────────────────────────────────────────────────────────
  {
    slug: 'design-and-build',
    title: 'Design & Build',
    kicker: 'One accountable team, one seamless process',
    tagline: 'Integrated design and construction from concept to completion.',
    intro:
      "JENGA LTD's design-and-build delivery model puts architects, structural engineers, MEP consultants, and construction specialists under one contract and one clear leadership team. This single point of accountability eliminates design-construction gaps, accelerates programme, and gives you a fixed price at a far earlier stage.",
    heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1687530345626-629963abf6e3?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1762407785760-3e4c22aede86?auto=format&fit=crop&w=900&q=85',
    ],
    points: [
      "Employer's Requirements & feasibility",
      'Concept, schematic & detailed design',
      'Value engineering & cost planning',
      'Single-source procurement',
      'Construction management & QA',
      'Turnkey handover & O&M manuals',
    ],
    features: [
      { title: 'Early Contractor Involvement', description: 'We engage at brief stage to test feasibility, establish a realistic cost plan, and de-risk the programme before a single drawing is issued.' },
      { title: 'Integrated Design Team', description: 'Architects, civil, structural, and MEP engineers collaborate within a BIM-coordinated environment managed directly by JENGA LTD.' },
      { title: 'Value Engineering', description: 'Systematic review of specification, procurement, and construction methodology to achieve best value without compromising brief or quality.' },
      { title: 'Fixed-Price Delivery', description: 'We provide a Guaranteed Maximum Price at design-development stage, protecting your budget against uncontrolled change.' },
    ],
    faqs: [
      { q: 'Can JENGA work with our existing architect?', a: 'Yes. We regularly appoint your preferred architect as a sub-consultant within our design-and-build structure, preserving the design vision while we take contractual responsibility.' },
      { q: 'When do we get a fixed price?', a: 'Typically at the end of the schematic design stage — earlier than most traditional procurement routes — giving you budget certainty well before construction commences.' },
      { q: 'Do you manage statutory approvals?', a: 'We coordinate the full approval pathway — NCA, county planning, fire, and structural certification — as part of our scope, keeping your programme moving.' },
    ],
    icon: 'PenRuler',
  },

  // ── 5 ─────────────────────────────────────────────────────────────
  {
    slug: 'fit-out-and-renovation',
    title: 'Fit-out & Renovation',
    kicker: 'Transformation, thoughtfully delivered',
    tagline: 'Interior fit-outs, adaptive reuse, and renovation on occupied sites.',
    intro:
      'Whether you need a complete Category B fit-out of a shell-and-core floor plate, a full gut-and-rebuild renovation of an existing building, or a sympathetic refurbishment of a heritage property, JENGA LTD brings the same discipline and care to existing spaces as we do to new construction.',
    heroImage: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1678135487929-0153e7eaf6e8?auto=format&fit=crop&w=900&q=85',
    ],
    points: [
      'Category A & B office fit-outs',
      'Hotel, retail & hospitality renovations',
      'Adaptive reuse of existing structures',
      'Occupied-site delivery & phased works',
      'Safe strip-out & responsible waste disposal',
      'Heritage building refurbishment',
    ],
    features: [
      { title: 'Occupied-Site Management', description: 'Rigorous hoarding, dust control, noise scheduling, and dedicated access routes keep your people safe and your operations running.' },
      { title: 'Category A & B Fit-out', description: 'Raised flooring, suspended ceilings, partitioning, M&E fit-out, and full Category B interior finishes to your specification.' },
      { title: 'Structural Interventions', description: 'Column removal, slab penetrations, mezzanine additions, and load redistribution works managed with full structural engineering oversight.' },
      { title: 'M&E Upgrades', description: 'Full rewire, HVAC replacement, fire suppression upgrades, and BMS integration carried out with minimal disruption to building occupants.' },
    ],
    faqs: [
      { q: 'Can you renovate while a building is occupied?', a: 'Yes. We sequence works in phases, establish clear separation of construction and occupied zones, and agree noise windows to protect your people and operations.' },
      { q: 'Do you handle strip-out and waste removal?', a: 'We manage safe strip-out, asbestos surveys where applicable, responsible material disposal, salvage opportunities, and a clean, dust-free handover.' },
      { q: 'Can you deliver from an approved interior design?', a: 'Absolutely. We can build from your issued-for-construction drawings or provide our own trusted interior design partners where early input is needed.' },
    ],
    icon: 'Paintbrush',
  },

  // ── 6 ─────────────────────────────────────────────────────────────
  {
    slug: 'project-management',
    title: 'Project Management',
    kicker: 'Clarity and control from day one',
    tagline: 'Client-side project leadership across consultants, contractors, and programme.',
    intro:
      'When the brief is complex or the stakes are high, experienced project leadership makes the decisive difference. JENGA LTD provides client-side project management that gives owners a single, calm point of accountability across all consultants, contractors, cost, and programme — from inception through defects.',
    heroImage: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1574359411659-15573a27fd0c?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=85',
    ],
    points: [
      'Brief development & feasibility management',
      'Consultant team selection & management',
      'Tender preparation & contractor selection',
      'Programme & risk management',
      'Cost reporting & change control',
      'Commissioning & handover management',
    ],
    features: [
      { title: 'Programme Management', description: 'Master programme with critical-path analysis, lookahead schedules, and proactive delay mitigation.' },
      { title: 'Risk & Opportunity Register', description: 'Systematic identification, quantification, and management of project risks with live probability-impact matrices updated monthly.' },
      { title: 'Cost Reporting', description: 'Monthly cost reports covering approved budget, committed costs, anticipated final cost, and cash-flow forecast.' },
      { title: 'Quality Assurance', description: 'Inspection and test plans, site audits, NCR management, and materials testing coordinated on your behalf.' },
    ],
    faqs: [
      { q: 'Do you need to be the main contractor to manage a project?', a: 'No. We commonly act as pure client-side project manager — appointed independently from the main contractor — to represent your interests throughout delivery.' },
      { q: 'What reporting do clients receive?', a: 'Monthly executive dashboard reports covering programme status, cost position, key decisions required, risks, quality KPIs, and upcoming milestones, with weekly site-progress snapshots.' },
      { q: 'Can you take over a troubled project already in delivery?', a: 'Yes. Our senior team can conduct a rapid health-check, reset the baseline, and re-establish controls on projects that have lost programme, cost, or quality direction.' },
    ],
    icon: 'ClipboardList',
  },

  // ── 7 ─────────────────────────────────────────────────────────────
  {
    slug: 'structural-engineering',
    title: 'Structural Engineering',
    kicker: 'The bones that carry every building',
    tagline: 'In-house structural engineering from concept calculation to site supervision.',
    intro:
      "Sound structural engineering is the invisible backbone of every successful building. JENGA LTD's in-house structural team covers the full spectrum — from initial feasibility assessments through detailed reinforced-concrete and structural-steel design to site inspection, materials testing, and NCA certification.",
    heroImage: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1777104247068-ad8c489cd9e9?auto=format&fit=crop&w=900&q=85',
    ],
    points: [
      'Feasibility & peer-review assessments',
      'Reinforced-concrete frame design',
      'Structural steelwork design & detailing',
      'Foundation & geotechnical coordination',
      'Site inspections & materials testing',
      'NCA structural certification',
    ],
    features: [
      { title: 'Reinforced Concrete Design', description: 'Flat slabs, post-tensioned floors, shear walls, and transfer structures designed to Eurocode with full detailing for Kenyan construction practice.' },
      { title: 'Structural Steelwork', description: 'Portal frames, space frames, and long-span roof structures designed, detailed, and fabricated by our approved workshop partners.' },
      { title: 'Foundation Engineering', description: 'Shallow pad and strip foundations through to deep piled solutions, coordinated with geotechnical investigation and ground-improvement works.' },
      { title: 'Existing Structure Assessment', description: 'Condition surveys, load capacity assessments, and strengthening design for renovations, change-of-use projects, and structural repairs.' },
    ],
    faqs: [
      { q: 'Do you work alongside external architects?', a: 'Yes. Our structural team regularly integrates into multi-disciplinary consultant teams led by external architects or project managers, adapting to your preferred collaboration model.' },
      { q: 'Can you certify structures for NCA submission?', a: 'Our engineers are NCA-registered and provide the full suite of structural calculations, drawings, and signed certificates required for building approval.' },
      { q: 'Do you carry out ground investigations?', a: 'We coordinate soil investigation contracts on behalf of clients, interpret borehole and trial-pit data, and provide foundation recommendations accordingly.' },
    ],
    icon: 'Cog',
  },

  // ── 8 ─────────────────────────────────────────────────────────────
  {
    slug: 'road-and-paving-works',
    title: 'Road & Paving Works',
    kicker: 'Surfaces engineered to endure',
    tagline: 'Estate roads, commercial paving, and access infrastructure built to last.',
    intro:
      'From internal estate roads and car-park surfaces to commercial loading zones and access bridges, JENGA LTD delivers road and paving works with the same engineering rigour as our major civil projects. All works are designed to KeNHA or client specification and executed with company-owned plant.',
    heroImage: 'https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1523848309072-c199db53f137?auto=format&fit=crop&w=900&q=85',
    ],
    points: [
      'Sub-base preparation & compaction',
      'Asphalt & bituminous surfacing',
      'Interlocking concrete block paving',
      'Kerbing, channels & road furniture',
      'Car parks & loading bays',
      'Road markings & signage',
    ],
    features: [
      { title: 'Pavement Design', description: 'Structural pavement design using AASHTO or TRL methods, calibrated to local CBR, traffic loading, and subgrade conditions.' },
      { title: 'Asphalt Surfacing', description: 'Dense bitumen macadam base course and wearing course laid by GPS-controlled pavers with compaction monitored by nuclear density gauge.' },
      { title: 'Block Paving', description: 'Interlocking concrete block paving for estate roads, driveways, plazas, and pedestrian areas with full bedding and jointing specification.' },
      { title: 'Drainage Integration', description: 'Kerb drainage channels, catch pits, and piped outfalls integrated into the road design to prevent surface ponding and sub-base saturation.' },
    ],
    faqs: [
      { q: 'Can you resurface an existing road without full reconstruction?', a: 'Yes. We carry out condition surveys, mill-and-overlay works, crack sealing, and surface dressing where full reconstruction is not warranted.' },
      { q: 'Do you provide road-traffic management during works?', a: 'All our road works include a Traffic Management Plan prepared by a qualified engineer and implemented with trained banksmen and KeNHA-compliant signage.' },
      { q: 'Can you pave large industrial and logistics yards?', a: 'Absolutely. We have completed heavy-duty reinforced-concrete slab yards, aprons, and weighbridge pads for industrial, logistics, and aviation clients across Kenya.' },
    ],
    icon: 'Route',
  },

  // ── 9 ─────────────────────────────────────────────────────────────
  {
    slug: 'water-and-sanitation',
    title: 'Water & Sanitation Works',
    kicker: 'Clean water, reliable infrastructure',
    tagline: 'Water supply, sewerage, and sanitation systems for every project scale.',
    intro:
      'Access to clean water and sanitation is a fundamental requirement of every building and community we serve. JENGA LTD designs and constructs complete water-supply and sanitation systems — from borehole drilling and water-treatment plants to sewerage networks, pump stations, and packaged treatment units.',
    heroImage: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?auto=format&fit=crop&w=900&q=85',
    ],
    points: [
      'Borehole drilling & pump testing',
      'Water storage tanks & elevated towers',
      'Water treatment & purification systems',
      'Sewerage reticulation networks',
      'Pump stations & rising mains',
      'Packaged sewage treatment plants',
    ],
    features: [
      { title: 'Water Supply Systems', description: 'Complete water supply networks from source abstraction through treatment, storage, and reticulation designed to WASREB standards.' },
      { title: 'Borehole & Abstraction Works', description: 'Hydrogeological surveys, borehole drilling, casing, pump testing, and commissioning of reliable groundwater supplies.' },
      { title: 'Sewerage Networks', description: 'Gravity sewers, inspection chambers, and rising mains designed and laid to serve residential estates, commercial developments, and institutions.' },
      { title: 'Treatment Plants', description: 'Packaged activated-sludge and biofilm sewage-treatment units designed to NEMA effluent standards for off-grid and peri-urban sites.' },
    ],
    faqs: [
      { q: 'Do you handle NEMA environmental approvals for water projects?', a: 'Yes. Our environmental team prepares Environmental Impact Assessments, Water Abstraction Licences, and NEMA project registration documents as part of our scope.' },
      { q: 'Can you serve remote sites not connected to a municipal supply?', a: 'Absolutely. We design and construct self-contained water supply and sanitation systems for camps, institutions, and developments in areas with no existing utility infrastructure.' },
      { q: 'Do you provide operation and maintenance training?', a: 'We commission all systems with the client operating team present and provide comprehensive O&M manuals plus an agreed training programme for facility managers.' },
    ],
    icon: 'Droplets',
  },

  // ── 10 ────────────────────────────────────────────────────────────
  {
    slug: 'property-development',
    title: 'Property Development',
    kicker: 'From land to landmark',
    tagline: 'End-to-end property development — land, planning, finance, and construction.',
    intro:
      'JENGA LTD brings development-management expertise to complement our construction capability. We partner with landowners, investors, and institutions to originate, fund, design, and deliver residential, commercial, and mixed-use property developments across Kenya — managing risk and maximising value at every stage.',
    heroImage: 'https://images.unsplash.com/photo-1743819344477-3b67c19621e9?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1772617661103-747cd00f4a2f?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1535732820275-9ffd998cac22?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1772617662896-73eaa616c56b?auto=format&fit=crop&w=900&q=85',
    ],
    points: [
      'Land identification & due diligence',
      'Planning & development feasibility',
      'Architecture & master planning',
      'Development financing & JV structuring',
      'Full construction & project management',
      'Sales, marketing & handover management',
    ],
    features: [
      { title: 'Feasibility & Appraisal', description: 'Rigorous development appraisals covering land cost, planning risk, construction cost, finance, and projected sales revenue to guide investment decisions.' },
      { title: 'Master Planning', description: 'Concept master plans for multi-phase developments, estates, and mixed-use schemes developed in partnership with our design consultants.' },
      { title: 'Development Finance', description: 'Structuring of debt, equity, and joint-venture arrangements with our banking and institutional partners to fund projects from land through to sales.' },
      { title: 'Off-Plan Sales Management', description: 'Professional sales and marketing campaigns, show-unit construction, buyer management, and conveyancing coordination handled under one roof.' },
    ],
    faqs: [
      { q: 'Do you buy land outright or partner with landowners?', a: 'Both. We acquire land directly where our appraisal supports it, and we regularly structure joint-venture agreements with landowners who wish to participate in the development upside.' },
      { q: 'How do you manage development risk?', a: 'Risk is managed through thorough due diligence, phased construction starts aligned to pre-sales targets, fixed-price construction contracts, and conservative appraisal assumptions.' },
      { q: 'Can you develop and then manage the completed property?', a: 'Yes. We have an established facilities and property management arm able to take on long-term management of completed buildings on behalf of investors and asset owners.' },
    ],
    icon: 'Landmark',
  },
];

/** Convenience lookup by slug */
export const servicesBySlug = Object.fromEntries(
  services.map((s) => [s.slug, s])
) as Record<string, Service>;
