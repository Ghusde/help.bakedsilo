// =====================================================================
// CATEGORIES — matches sidebar module list exactly (order + icon intent)
// =====================================================================
export const CATEGORIES = [
  { slug:"dashboard-overview",       label:"Dashboard & Overview",        icon:"megaphone" },
  { slug:"financial-assets",         label:"Financial & Assets",          icon:"financial" },
  { slug:"project-management",       label:"Project Management",          icon:"doc" },
  { slug:"operations-management",    label:"Operations Management",       icon:"pencil" },
  { slug:"procurement-management",   label:"Procurement Management",      icon:"delivery" },
  { slug:"tspoonbaked",              label:"TspoonBaked",                 icon:"gear" },
  { slug:"customer-sales",           label:"Customer & Sales",            icon:"crm" },
  { slug:"human-resources",          label:"Human Resources",             icon:"binoculars" },
  { slug:"documents-communication",  label:"Documents & Communication",   icon:"cloud" },
  { slug:"system-tools",             label:"System & Tools",              icon:"people" },
];

// =====================================================================
// SUBMENUS — sections per category. A section with no "header" renders
// as a flat list; a section with "header" renders with a bold group title,
// mirroring the flyout menus in the dashboard screenshots.
// =====================================================================
export const SUBMENUS = {
  "dashboard-overview":[
    { items:[
      {l:"Silo Your Work", i:"megaphone"},
      {l:"Executive Overview", i:"trend"},
      {l:"Outlet Dashboard", i:"grid"},
      {l:"Sales By Period", i:"trend"},
      {l:"Sales Early Warning", i:"trend"},
      {l:"Franchise Feasibility", i:"globe"},
      {l:"Order Forecasting", i:"bulb"},
      {l:"Discussion Room", i:"chat"},
    ]}
  ],
  "financial-assets":[
    { header:"Baked Bali Collective", items:[
      {l:"Sales Performance", i:"trend"}, {l:"Profit & Loss", i:"cash"},
      {l:"Balance Sheet", i:"scale"}, {l:"Cash Flow", i:"cash"},
    ]},
    { header:"Adhya Baked Corp", items:[
      {l:"Sales Performance", i:"trend"}, {l:"Profit & Loss", i:"cash"}, {l:"Balance Sheet", i:"scale"},
    ]},
    { header:"Japan", items:[
      {l:"Sales Performance", i:"trend"}, {l:"Sales Detail", i:"doc"},
    ]},
    { header:"Sales Budget", items:[
      {l:"Budget per Outlet", i:"trend"},
    ]},
    { header:"Assets & Opname", items:[
      {l:"Dashboard", i:"grid"}, {l:"Asset Management", i:"box"}, {l:"Sub Categories", i:"folder"},
    ]},
  ],
  "project-management":[
    { items:[
      {l:"PM Dashboard", i:"grid"}, {l:"All Projects", i:"folder"}, {l:"My Tasks", i:"user"},
      {l:"Inbox", i:"mail"}, {l:"Portfolios", i:"box"}, {l:"Goals", i:"dot"},
      {l:"Forms", i:"doc"}, {l:"Search", i:"search"}, {l:"Reports", i:"doc"},
    ]}
  ],
  "operations-management":[
    { header:"Ticketing", items:[
      {l:"Dashboard", i:"grid"}, {l:"My Tickets", i:"doc"}, {l:"Exception Report", i:"alert"}, {l:"Settings", i:"gear"},
    ]},
    { header:"Task List", items:[
      {l:"Dashboard", i:"grid"}, {l:"Schedules", i:"calendar"}, {l:"Templates", i:"doc"},
      {l:"Reports", i:"doc"}, {l:"Settings", i:"gear"},
    ]},
    { header:"Outlet Audit", items:[
      {l:"Dashboard", i:"grid"}, {l:"New Audit", i:"plus"}, {l:"Questions", i:"doc"}, {l:"Auditors", i:"user"},
    ]},
    { header:"WIP Labeling", items:[
      {l:"WIP List", i:"apps"},
    ]},
  ],
  "procurement-management":[
    { header:"Warehouse", items:[
      {l:"Warehouse Dashboard", i:"grid"}, {l:"Inventory Items", i:"box"}, {l:"Storage Racks", i:"box"},
      {l:"Storage Pallet", i:"box"}, {l:"Generate QR Codes", i:"qr"}, {l:"Inbound Scan QR", i:"qr"},
      {l:"Outbound PR", i:"cart"},
    ]}
  ],
  "tspoonbaked":[
    { header:"Food Cost", items:[
      {l:"Dashboard", i:"grid"}, {l:"All Recipes", i:"doc"}, {l:"New Recipe", i:"plus"},
      {l:"Ingredient Library", i:"folder"}, {l:"Menu Engineering", i:"apps"}, {l:"Reports", i:"doc"}, {l:"Cost Variance", i:"trend"},
    ]},
    { header:"Production Display", items:[
      {l:"Production Dashboard", i:"grid"},
    ]},
  ],
  "customer-sales":[
    { header:"Baked. CRM", items:[
      {l:"CRM Dashboard", i:"grid"}, {l:"Analytics & Insights", i:"trend"}, {l:"Customer Management", i:"user"},
      {l:"Customer Segments", i:"apps"}, {l:"AI Win-Back", i:"bulb"}, {l:"Talk to Your Data", i:"chat"},
      {l:"Next-Best-Product", i:"apps"}, {l:"CX Intelligence", i:"heart"}, {l:"Voice of Customer", i:"chat"},
      {l:"Voucher Management", i:"ticket"}, {l:"Transaction History", i:"cart"}, {l:"Reports", i:"doc"},
    ]}
  ],
  "human-resources":[
    { header:"Baked. Academy", items:[
      {l:"Baked. Academy", i:"cap"},
    ]},
    { header:"Organization", items:[
      {l:"Organization Chart", i:"grid"}, {l:"Manage Org Chart", i:"gear"}, {l:"Link Form", i:"link"}, {l:"Talent Document", i:"doc"},
    ]},
    { header:"People", items:[
      {l:"Employee Directory", i:"user"}, {l:"User Request", i:"key"},
    ]},
    { header:"Compensation", items:[
      {l:"MPP Budget", i:"user"},
    ]},
    { header:"Recruitments", items:[
      {l:"Career Opportunities", i:"box"}, {l:"Employee Referral", i:"userplus"}, {l:"Employee Requisition Form", i:"doc"},
      {l:"Job Description Files", i:"folder"}, {l:"ATS Dashboard", i:"telescope"},
    ]},
  ],
  "documents-communication":[
    { header:"Drive & Storage", items:[
      {l:"Record Management", i:"drive"},
    ]},
    { header:"E-Signature", items:[
      {l:"Dashboard", i:"grid"}, {l:"My Inbox", i:"mail"}, {l:"My Documents", i:"doc"},
      {l:"New Document", i:"plus"}, {l:"My Signatures", i:"pencil"},
    ]},
    { header:"Chat Messaging", items:[
      {l:"Chat", i:"chat"},
    ]},
    { header:"Email Marketing", items:[
      {l:"Customer", i:"user"}, {l:"Email Marketing", i:"mail"},
    ]},
    { header:"Legal Request", items:[
      {l:"All Requests", i:"doc"}, {l:"New Request", i:"plus"},
    ]},
    { header:"Lost & Found", items:[
      {l:"Lost & Found", i:"search"},
    ]},
  ],
  "system-tools":[
    { header:"User Manager", items:[
      {l:"User", i:"user"}, {l:"Change Password", i:"key"}, {l:"Signature Generator", i:"pencil"},
    ]},
    { header:"Menu Access", items:[
      {l:"Access Settings", i:"key"}, {l:"Module Settings", i:"toggle"},
    ]},
    { header:"Backend Apps", items:[
      {l:"Backend App", i:"apps"}, {l:"Table Order", i:"apps"}, {l:"Whatsapp Gateway", i:"chat"},
      {l:"Voucher Swap Analytic", i:"trend"}, {l:"Partnership", i:"link"},
    ]},
    { header:"Analytics", items:[
      {l:"Menu Access Log", i:"doc"}, {l:"Performance Monitor", i:"trend"},
    ]},
    { header:"User Feedback", items:[
      {l:"Feedback Dashboard", i:"grid"},
    ]},
    { header:"Event", items:[
      {l:"Event Settings", i:"gear"},
    ]},
  ],
};

// =====================================================================
// ICONS — compact stroke-based line icon set (24x24, stroke-width 2)
// =====================================================================
export const ICONS = {
  megaphone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"/><path d="M8 6v8"/></svg>',
  financial:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>',
  doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>',
  pencil:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>',
  delivery:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',
  gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
  crm:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>',
  binoculars:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95"/><path d="m2 15 6 6"/><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91"/></svg>',
  cloud:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 13v8"/><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m8 17 4-4 4 4"/></svg>',
  people:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/></svg>',
  ticket:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z"/></svg>',
  grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>',
  trend:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-9"/><path d="M15 6h6v6"/></svg>',
  coin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M12 7v10M15 9.3c0-1.3-1.3-2.3-3-2.3s-3 .9-3 2.1c0 2.8 6 1.3 6 4.1 0 1.3-1.3 2.1-3 2.1s-3-.9-3-2.1"/></svg>',
  scale:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M7 7l-4 6h8zM17 7l-4 6h8z"/><path d="M5 13a2 2 0 0 0 4 0M15 13a2 2 0 0 0 4 0"/></svg>',
  cash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/></svg>',
  globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/></svg>',
  bulb:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4M12 2a6 6 0 0 0-3 11c1 .8 1 1.5 1 3h4c0-1.5 0-2.2 1-3a6 6 0 0 0-3-11z"/></svg>',
  chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v11H8l-4 4z"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>',
  box:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8 12 3 3 8l9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8M12 13v8"/></svg>',
  qr:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3zM19 14h2M14 19h2M19 19h2"/></svg>',
  cart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.6 12.4a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 7H6"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></svg>',
  folder:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
  user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.4"/><path d="M5 20c0-3.6 3-6 7-6s7 2.4 7 6"/></svg>',
  calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  key:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><path d="m11 12 8-8m-3 3 2 2m-5 1 2 2"/></svg>',
  toggle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="8" width="20" height="8" rx="4"/><circle cx="16" cy="12" r="3"/></svg>',
  apps:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/></svg>',
  link:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 15 15 9"/><path d="M10 6l1.5-1.5a4 4 0 0 1 5.7 5.7L15.5 12"/><path d="M14 18l-1.5 1.5a4 4 0 0 1-5.7-5.7L8.5 12"/></svg>',
  telescope:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 14 9-5 7 4-9 5z"/><path d="M11 13l-2 6M4 20l3-1.5"/><circle cx="19" cy="7" r="1.6"/></svg>',
  heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-4.4-9.5-8.8C.7 8.7 2.6 5 6 5c2 0 3.4 1 4 2.4C10.6 6 12 5 14 5c3.4 0 5.3 3.7 3.5 7.2C19 16.6 12 21 12 21z"/></svg>',
  cap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 2 8l10 5 10-5z"/><path d="M6 11v5c0 1.5 3 2.5 6 2.5s6-1 6-2.5v-5"/></svg>',
  userplus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.4 2.9-5.8 6.5-5.8s6.5 2.4 6.5 5.8"/><path d="M18 8v4M16 10h4"/></svg>',
  drive:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
  monitor:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v6"/><circle cx="12" cy="16.3" r="0.4" fill="currentColor"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.4" y2="16.4"/></svg>',
  dot:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4"/></svg>',
};
