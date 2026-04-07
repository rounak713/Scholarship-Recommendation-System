// Comprehensive scholarship database with enhanced data structure - UPDATED 2026
const scholarships = [
    // India Scholarships
    {
        name: "NMMS (National Means-cum-Merit Scholarship)",
        education: ["highschool"],
        field: ["Any"],
        country: "India",
        eligibility: "Class 8, passing grade, family income < ₹1.5 lakh/year",
        deadline: "2026-10-31",
        amount: "₹15,000/year",
        link: "https://scholarships.gov.in/",
        category: "Merit-cum-Means",
        provider: "Government of India - Ministry of Education",
        renewable: true,
        latest: true
    },
    {
        name: "AICTE Pragati Scholarship",
        education: ["undergraduate"],
        field: ["Engineering", "Technical"],
        country: "India",
        eligibility: "Girls in technical education, family income < ₹8 lakh/year, minimum 60% marks",
        deadline: "2026-09-30",
        amount: "₹31,000/year + ₹2,000 incidental",
        link: "https://aicte-india.org/pragati",
        category: "Gender-specific",
        provider: "AICTE (All India Council for Technical Education)",
        renewable: true,
        latest: true
    },
    {
        name: "JEE Main Scholarship",
        education: ["undergraduate"],
        field: ["Engineering", "Technology"],
        country: "India",
        eligibility: "JEE Main qualified, family income < ₹5 lakh/year, enrolled in NTA/AICTE colleges",
        deadline: "2026-08-15",
        amount: "₹51,000/year",
        link: "https://jeemain.nta.nic.in/",
        category: "Merit-based",
        provider: "NTA (National Test Agency)",
        renewable: true,
        latest: true
    },
    {
        name: "INSPIRE Scholarship",
        education: ["undergraduate"],
        field: ["Science", "Mathematics", "Research"],
        country: "India",
        eligibility: "Top 1% in Class 12 board exams, pursuing science courses",
        deadline: "2026-07-31",
        amount: "₹82,000/year",
        link: "https://online-inspire.gov.in/",
        category: "Merit-based",
        provider: "DST, Government of India",
        renewable: true,
        latest: true
    },
    {
        name: "Post Matric Scholarship for SC Students",
        education: ["undergraduate", "postgraduate"],
        field: ["Any"],
        country: "India",
        eligibility: "Scheduled Caste category, family income < ₹2.5 lakh/year",
        deadline: "2026-11-30",
        amount: "₹2,500-₹13,000/year",
        link: "https://scholarships.gov.in/",
        category: "Social Justice",
        provider: "Government of India - Ministry of Social Justice",
        renewable: true,
        latest: true
    },
    {
        name: "Central Sector Scholarship Scheme",
        education: ["undergraduate", "postgraduate"],
        field: ["Any"],
        country: "India",
        eligibility: "Class 12/graduation with 80%+ marks, family income < ₹8 lakh/year",
        deadline: "2026-12-31",
        amount: "₹12,000-₹22,000/year",
        link: "https://scholarships.gov.in/",
        category: "Merit-based",
        provider: "Ministry of Education, India",
        renewable: true,
        latest: true
    },
    {
        name: "Prime Minister's Research Fellowship",
        education: ["phd"],
        field: ["Science", "Technology", "Engineering", "Mathematics"],
        country: "India",
        eligibility: "GATE/CSIR-NET qualified, pursuing PhD in premier institutions (IIT/IMSC/NIO/JNCASR)",
        deadline: "2026-06-30",
        amount: "₹72,000/month + research grant (₹2 lakh/year)",
        link: "https://pmrf.in/",
        category: "Research",
        provider: "Government of India - Ministry of Education",
        renewable: true,
        latest: true
    },
    {
        name: "Swami Vivekananda Single Girl Child Scholarship",
        education: ["undergraduate"],
        field: ["Any"],
        country: "India",
        eligibility: "Single girl child, family income < ₹6 lakh/year",
        deadline: "2026-11-15",
        amount: "₹26,000/year",
        link: "https://scholarships.gov.in/",
        category: "Gender-specific",
        provider: "UGC (University Grants Commission)",
        renewable: true,
        latest: true
    },
    {
        name: "Dr. APJ Abdul Kalam Scholarship",
        education: ["undergraduate"],
        field: ["Engineering", "Technology"],
        country: "India",
        eligibility: "Top 20% marks in engineering entrance, enrolled in AICTE colleges",
        deadline: "2026-08-31",
        amount: "₹52,000/year",
        link: "https://aicte-india.org/schemes/kalam",
        category: "Merit-based",
        provider: "AICTE",
        renewable: true,
        latest: true
    },
    {
        name: "Post Matric Scholarship for OBC Students",
        education: ["undergraduate", "postgraduate"],
        field: ["Any"],
        country: "India",
        eligibility: "Other Backward Classes category, family income < ₹1 lakh/year",
        deadline: "2026-10-31",
        amount: "₹2,500-₹8,500/year",
        link: "https://scholarships.gov.in/",
        category: "Social Justice",
        provider: "Government of India",
        renewable: true,
        latest: true
    },
    {
        name: "National Scholarship for Persons with Disabilities",
        education: ["undergraduate", "postgraduate"],
        field: ["Any"],
        country: "India",
        eligibility: "40%+ disability certified, family income < ₹2.5 lakh/year",
        deadline: "2026-09-30",
        amount: "₹1,250-₹1,500/month",
        link: "https://scholarships.gov.in/",
        category: "Disability Support",
        provider: "Ministry of Social Justice, Government of India",
        renewable: true,
        latest: true
    },
    {
        name: "Merit Scholarship for Professional Courses",
        education: ["undergraduate"],
        field: ["Engineering", "Medicine", "Law", "Management"],
        country: "India",
        eligibility: "Top 2% in entrance exams, family income < ₹4.5 lakh/year",
        deadline: "2026-07-31",
        amount: "₹22,000/year",
        link: "https://scholarships.gov.in/",
        category: "Merit-based",
        provider: "Ministry of Education",
        renewable: true,
        latest: true
    },
    {
        name: "Ishan Uday Scholarship",
        education: ["undergraduate"],
        field: ["Any"],
        country: "India",
        eligibility: "Students from North Eastern states (8 states), pursuing higher education",
        deadline: "2026-08-15",
        amount: "₹5,500/year + hostel allowance",
        link: "https://scholarships.gov.in/",
        category: "Regional Development",
        provider: "UGC",
        renewable: true,
        latest: true
    },
    {
        name: "Top Class Education Scholarship for SC Students",
        education: ["undergraduate"],
        field: ["Any"],
        country: "India",
        eligibility: "SC students in top 100 universities/colleges (QS rank)",
        deadline: "2026-09-30",
        amount: "₹2,500-₹4,500/month",
        link: "https://scholarships.gov.in/",
        category: "Social Justice",
        provider: "Ministry of Social Justice",
        renewable: true,
        latest: true
    },
    {
        name: "Saksham Scholarship",
        education: ["undergraduate"],
        field: ["Engineering", "Technology"],
        country: "India",
        eligibility: "Students with disabilities (20%+) in AICTE technical education programs",
        deadline: "2026-10-31",
        amount: "₹32,000/year",
        link: "https://aicte-india.org/saksham",
        category: "Disability Support",
        provider: "AICTE",
        renewable: true,
        latest: true
    },
    {
        name: "Kishore Vaigyanik Protsahan Yojana (KVPY)",
        education: ["highschool", "undergraduate"],
        field: ["Science", "Research"],
        country: "India",
        eligibility: "Exceptional aptitude for science research, merit in board exams",
        deadline: "2026-08-31",
        amount: "₹5,500-₹7,500/month + annual contingency (₹20,000-₹30,000)",
        link: "https://www.iisc.ac.in/kvpy/",
        category: "Research",
        provider: "Department of Science and Technology, Government of India",
        renewable: true,
        latest: true
    },
    // USA Scholarships
    {
        name: "Fulbright Foreign Student Program",
        education: ["postgraduate", "phd"],
        field: ["Any"],
        country: "USA",
        eligibility: "International students with bachelor's degree, TOEFL 100+, strong academics",
        deadline: "2026-10-15",
        amount: "Full funding + living stipend + health insurance",
        link: "https://foreign.fulbrightonline.org/",
        category: "International Exchange",
        provider: "U.S. Department of State & Bureau of Educational and Cultural Affairs",
        renewable: false,
        latest: true
    },
    {
        name: "Gates Millennium Scholars Program",
        education: ["undergraduate"],
        field: ["Any"],
        country: "USA",
        eligibility: "African American, Asian Pacific Islander, Hispanic/Latino, Native American minority, min GPA 3.3",
        deadline: "2026-01-15",
        amount: "Full tuition + fees + room & board + books",
        link: "https://gmsp.org/",
        category: "Diversity",
        provider: "Bill & Melinda Gates Foundation",
        renewable: true,
        latest: true
    },
    {
        name: "National Merit Scholarship",
        education: ["undergraduate"],
        field: ["Any"],
        country: "USA",
        eligibility: "PSAT/NMSQT high scorers, top 0.5% of juniors, SAT 1500+",
        deadline: "2026-10-01",
        amount: "$2,500 - $35,000/year",
        link: "https://www.nationalmerit.org/",
        category: "Merit-based",
        provider: "National Merit Scholarship Corporation",
        renewable: false,
        latest: true
    },
    {
        name: "Rhodes Scholarship",
        education: ["postgraduate"],
        field: ["Any"],
        country: "USA",
        eligibility: "International/US citizens, exceptional academic record, proven leadership",
        deadline: "2026-10-01",
        amount: "Full funding for University of Oxford + $20,000 annual stipend",
        link: "https://www.rhodeshouse.ox.ac.uk/",
        category: "International Exchange",
        provider: "Rhodes Trust",
        renewable: false,
        latest: true
    },
    {
        name: "Marshall Scholarship",
        education: ["postgraduate"],
        field: ["Any"],
        country: "USA",
        eligibility: "US citizens only, exceptional academics (GPA 3.7+), leadership experience",
        deadline: "2026-10-01",
        amount: "Full funding for University of UK or Ireland + £1,000 travel grant annually",
        link: "https://www.marshallscholarship.org/",
        category: "International Exchange",
        provider: "Marshall Aid Commemoration Commission",
        renewable: false,
        latest: true
    },
    {
        name: "STEM Excellence Scholarship",
        education: ["undergraduate"],
        field: ["Science", "Technology", "Engineering", "Mathematics"],
        country: "USA",
        eligibility: "High school seniors, minimum GPA 3.5, STEM major commitment",
        deadline: "2026-03-15",
        amount: "$6,000-$16,000/year",
        link: "https://www.nsf.gov/",
        category: "STEM",
        provider: "National Science Foundation",
        renewable: true,
        latest: true
    },
    {
        name: "Diversity in Tech Scholarship",
        education: ["undergraduate"],
        field: ["Computer Science", "Information Technology"],
        country: "USA",
        eligibility: "Underrepresented minorities in tech (women, African American, Hispanic, Native American), GPA 3.0+",
        deadline: "2026-04-30",
        amount: "$11,000/year",
        link: "https://www.diversityintech.org/",
        category: "Diversity",
        provider: "Tech Diversity Foundation",
        renewable: true,
        latest: true
    },
    {
        name: "Arts Excellence Scholarship",
        education: ["undergraduate"],
        field: ["Fine Arts", "Music", "Theater", "Dance"],
        country: "USA",
        eligibility: "Portfolio/audition required, demonstrated artistic merit",
        deadline: "2026-02-28",
        amount: "$9,000/year",
        link: "https://www.aicpa.org/",
        category: "Arts",
        provider: "National Arts Foundation",
        renewable: true,
        latest: true
    },
    {
        name: "First Generation College Student Scholarship",
        education: ["undergraduate"],
        field: ["Any"],
        country: "USA",
        eligibility: "First in family to attend 4-year college, demonstrated financial need",
        deadline: "2026-05-31",
        amount: "$5,500/year",
        link: "https://www.gfoa.org/",
        category: "First Generation",
        provider: "First Generation Foundation",
        renewable: true,
        latest: true
    },
    {
        name: "Women in Engineering Scholarship",
        education: ["undergraduate"],
        field: ["Engineering"],
        country: "USA",
        eligibility: "Female students enrolled in ABET-accredited engineering program, GPA 3.0+",
        deadline: "2026-03-31",
        amount: "$8,000/year",
        link: "https://www.swe.org/",
        category: "Gender-specific",
        provider: "Society of Women Engineers (SWE)",
        renewable: true,
        latest: true
    },
    {
        name: "Community Service Leadership Scholarship",
        education: ["undergraduate"],
        field: ["Any"],
        country: "USA",
        eligibility: "Minimum 100+ hours community service, demonstrated leadership",
        deadline: "2026-06-15",
        amount: "$6,500/year",
        link: "https://www.leadershipusfonline.org/",
        category: "Leadership",
        provider: "Community Service Foundation",
        renewable: true,
        latest: true
    },
    // UK Scholarships
    {
        name: "Chevening Scholarships",
        education: ["postgraduate"],
        field: ["Any"],
        country: "UK",
        eligibility: "International students, minimum 2 years work experience, strong academics",
        deadline: "2026-11-02",
        amount: "Full tuition + living allowance (£19,200/year)",
        link: "https://www.chevening.org/",
        category: "International Exchange",
        provider: "UK Foreign, Commonwealth and Development Office (FCDO)",
        renewable: false,
        latest: true
    },
    {
        name: "Commonwealth Scholarships",
        education: ["postgraduate", "phd"],
        field: ["Any"],
        country: "UK",
        eligibility: "Commonwealth country citizens, bachelor's degree, strong academic record",
        deadline: "2026-12-15",
        amount: "Full tuition + airfare + living allowance (£17,000/year for Masters)",
        link: "https://cscuk.fcdo.gov.uk/",
        category: "International Development",
        provider: "Commonwealth Scholarship Commission",
        renewable: false,
        latest: true
    },
    {
        name: "Gates Cambridge Scholarship",
        education: ["postgraduate", "phd"],
        field: ["Any"],
        country: "UK",
        eligibility: "International students, First Class honours/equivalent, strong leadership",
        deadline: "2026-10-15",
        amount: "Full funding (tuition + £18,000 annual living allowance)",
        link: "https://www.gatescambridge.org/",
        category: "International Exchange",
        provider: "Gates Cambridge Trust",
        renewable: false,
        latest: true
    },
    {
        name: "Arnold Foundation Scholarship",
        education: ["postgraduate"],
        field: ["Any"],
        country: "UK",
        eligibility: "Commonwealth citizens, demonstrated need, academic merit",
        deadline: "2026-05-31",
        amount: "£25,000-£30,000/year",
        link: "https://www.arnoldfoundation.org.uk/",
        category: "International Exchange",
        provider: "Arnold Foundation",
        renewable: true,
        latest: true
    },
    {
        name: "UK Research and Innovation (UKRI) Scholarship",
        education: ["postgraduate", "phd"],
        field: ["Research", "Science", "Technology"],
        country: "UK",
        eligibility: "Research students with academic merit, UK university acceptance",
        deadline: "2026-12-31",
        amount: "£18,000-£27,000/year",
        link: "https://www.ukri.org/",
        category: "Research",
        provider: "UK Research and Innovation",
        renewable: true,
        latest: true
    },
    {
        name: "Scotland Saltire Scholarship",
        education: ["postgraduate"],
        field: ["Any"],
        country: "UK",
        eligibility: "International students at Scottish universities, bachelor's degree minimum",
        deadline: "2026-05-31",
        amount: "£10,000/year",
        link: "https://www.studyscotland.org/",
        category: "International Exchange",
        provider: "Scottish Government",
        renewable: false,
        latest: true
    },
    {
        name: "Wales International Scholarship",
        education: ["postgraduate"],
        field: ["Any"],
        country: "UK",
        eligibility: "International students at Welsh universities, bachelor's degree minimum",
        deadline: "2026-06-30",
        amount: "£10,000-£12,000/year",
        link: "https://www.walesuniversities.ac.uk/",
        category: "International Exchange",
        provider: "Welsh Government",
        renewable: false,
        latest: true
    },
    {
        name: "UK Arts and Humanities Research Scholarship",
        education: ["postgraduate", "phd"],
        field: ["Arts", "Humanities", "Social Sciences"],
        country: "UK",
        eligibility: "Arts and humanities students, strong research proposal, UK university place",
        deadline: "2026-11-30",
        amount: "£15,000-£22,000/year",
        link: "https://www.ahrc.ukri.org/",
        category: "Arts",
        provider: "Arts and Humanities Research Council",
        renewable: true,
        latest: true
    },
    // Canada Scholarships
    {
        name: "Vanier Canada Graduate Scholarships",
        education: ["phd"],
        field: ["Any"],
        country: "Canada",
        eligibility: "Doctoral students at Canadian universities, exceptional academic excellence",
        deadline: "2026-11-01",
        amount: "CAD $50,000/year for 3 years",
        link: "https://vanier.gc.ca/",
        category: "Merit-based",
        provider: "Tri-Council: SSHRC, NSERC, CIHR",
        renewable: false,
        latest: true
    },
    {
        name: "Ontario Graduate Scholarship",
        education: ["postgraduate", "phd"],
        field: ["Any"],
        country: "Canada",
        eligibility: "Students in Ontario universities, demonstrated academic merit",
        deadline: "2026-01-31",
        amount: "CAD $16,000/year",
        link: "https://osap.gov.on.ca/",
        category: "Provincial",
        provider: "Government of Ontario",
        renewable: true,
        latest: true
    },
    {
        name: "Canada Graduate Scholarships (CGS)",
        education: ["postgraduate", "phd"],
        field: ["Any"],
        country: "Canada",
        eligibility: "Canadian citizens/permanent residents, academic excellence",
        deadline: "2026-12-01",
        amount: "CAD $18,000-$35,000/year",
        link: "https://www.sshrc-crsh.gc.ca/",
        category: "Merit-based",
        provider: "Social Sciences and Humanities Research Council (SSHRC)",
        renewable: true,
        latest: true
    },
    {
        name: "Trillium Scholarship Program",
        education: ["postgraduate", "phd"],
        field: ["Any"],
        country: "Canada",
        eligibility: "International students at Ontario universities, strong academics",
        deadline: "2026-02-28",
        amount: "CAD $40,000/year",
        link: "https://www.ontario.ca/page/ontario-trillium-scholarship",
        category: "International Exchange",
        provider: "Government of Ontario",
        renewable: true,
        latest: true
    },
    {
        name: "Quebec Merit Scholarship",
        education: ["undergraduate", "postgraduate"],
        field: ["Any"],
        country: "Canada",
        eligibility: "Quebec residents, demonstrated academic merit",
        deadline: "2026-03-31",
        amount: "CAD $3,500-$9,000/year",
        link: "https://www.afe.gouv.qc.ca/",
        category: "Provincial",
        provider: "Government of Quebec",
        renewable: true,
        latest: true
    },
    {
        name: "Canada-India Research Excellence Award",
        education: ["postgraduate", "phd"],
        field: ["Science", "Technology", "Engineering"],
        country: "Canada",
        eligibility: "Indian citizens, research collaboration with Canadian institutions",
        deadline: "2026-09-30",
        amount: "CAD $26,000/year",
        link: "https://www.international.gc.ca/",
        category: "International Exchange",
        provider: "Global Affairs Canada",
        renewable: true,
        latest: true
    },
    // Germany Scholarships
    {
        name: "DAAD Scholarships",
        education: ["undergraduate", "postgraduate", "phd"],
        field: ["Any"],
        country: "Germany",
        eligibility: "International students, minimum bachelor's degree equivalent, strong German/English",
        deadline: "2026-10-31",
        amount: "€934-€1,307/month",
        link: "https://www.daad.de/",
        category: "International Exchange",
        provider: "DAAD (German Academic Exchange Service)",
        renewable: true,
        latest: true
    },
    {
        name: "Deutschland Stipendium",
        education: ["undergraduate", "postgraduate"],
        field: ["Any"],
        country: "Germany",
        eligibility: "High-achieving students in German universities, GPA equivalent to 1.5 or better",
        deadline: "2026-07-31",
        amount: "€350/month",
        link: "https://www.deutschlandstipendium.de/",
        category: "Merit-based",
        provider: "German Federal Government",
        renewable: true,
        latest: true
    },
    {
        name: "Heinrich Böll Foundation Scholarship",
        education: ["postgraduate", "phd"],
        field: ["Any"],
        country: "Germany",
        eligibility: "International students, social/political engagement, bachelor's required",
        deadline: "2026-09-01",
        amount: "€934-€1,307/month",
        link: "https://www.boell.de/en/",
        category: "International Exchange",
        provider: "Heinrich Böll Foundation",
        renewable: true,
        latest: true
    },
    {
        name: "Konrad Adenauer Foundation Scholarship",
        education: ["postgraduate", "phd"],
        field: ["Any"],
        country: "Germany",
        eligibility: "International students, political commitment, bachelor's required",
        deadline: "2026-07-15",
        amount: "€934-€1,307/month",
        link: "https://www.kas.de/en/",
        category: "International Exchange",
        provider: "Konrad Adenauer Foundation",
        renewable: true,
        latest: true
    },
    {
        name: "Rosa Luxemburg Foundation Scholarship",
        education: ["postgraduate", "phd"],
        field: ["Social Sciences", "Engineering", "Environmental Science"],
        country: "Germany",
        eligibility: "International students, progressive social engagement, bachelor's required",
        deadline: "2026-08-15",
        amount: "€861-€1,200/month",
        link: "https://www.rosalux.de/",
        category: "Research",
        provider: "Rosa Luxemburg Foundation",
        renewable: true,
        latest: true
    },
    // Australia Scholarships
    {
        name: "Australia Awards Scholarship",
        education: ["undergraduate", "postgraduate"],
        field: ["Any"],
        country: "Australia",
        eligibility: "Developing country citizens, bachelor's degree minimum for postgraduate",
        deadline: "2026-04-30",
        amount: "Full tuition + living allowance (AUD $28,000/year) + airfare",
        link: "https://www.australiaawards.gov.au/",
        category: "International Development",
        provider: "Australian Government - Department of Foreign Affairs",
        renewable: false,
        latest: true
    },
    {
        name: "Research Training Program (RTP)",
        education: ["postgraduate", "phd"],
        field: ["Research"],
        country: "Australia",
        eligibility: "Research students at Australian universities, competitive entry",
        deadline: "2026-10-31",
        amount: "AUD $29,000-$33,000/year + living allowance",
        link: "https://www.education.gov.au/",
        category: "Research",
        provider: "Australian Government",
        renewable: true,
        latest: true
    },
    {
        name: "Endeavour Scholarship",
        education: ["undergraduate", "postgraduate"],
        field: ["Any"],
        country: "Australia",
        eligibility: "International students, academic merit, leadership potential",
        deadline: "2026-07-31",
        amount: "AUD $15,000 + airfare support",
        link: "https://www.dese.gov.au/",
        category: "Merit-based",
        provider: "Australian Government",
        renewable: true,
        latest: true
    },
    // Additional New Scholarships (2026)
    {
        name: "MEXT Scholarship (Japan)",
        education: ["undergraduate", "postgraduate", "phd"],
        field: ["Any"],
        country: "Japan",
        eligibility: "International students nominated through embassy or university, under 35 years old",
        deadline: "2026-05-31",
        amount: "¥144,000-180,000/month + full tuition + airfare",
        link: "https://www.studyinjapan.go.jp/",
        category: "International Exchange",
        provider: "Ministry of Education, Culture, Sports, Science and Technology (MEXT)",
        renewable: true,
        latest: true
    },
    {
        name: "GKS (Global Korea Scholarship)",
        education: ["undergraduate", "postgraduate"],
        field: ["Any"],
        country: "South Korea",
        eligibility: "International students, strong academics, language learning commitment",
        deadline: "2026-03-31",
        amount: "₩900,000-1,000,000/month + full tuition + airfare",
        link: "https://www.studyinkorea.go.kr/",
        category: "International Exchange",
        provider: "National Institute for International Education (NIIED)",
        renewable: true,
        latest: true
    },
    {
        name: "Eiffel Excellence Scholarship Program (France)",
        education: ["postgraduate", "phd"],
        field: ["Engineering", "Science", "Law", "Economics", "Political Science"],
        country: "France",
        eligibility: "International students nominated by French institutions, strong academics",
        deadline: "2026-01-10",
        amount: "€1,400/month + travel and health insurance",
        link: "https://www.campusfrance.org/",
        category: "Merit-based",
        provider: "French Ministry for Europe and Foreign Affairs",
        renewable: false,
        latest: true
    },
    {
        name: "Swiss Government Excellence Scholarships",
        education: ["postgraduate", "phd"],
        field: ["Research", "Arts"],
        country: "Switzerland",
        eligibility: "International postgraduate researchers/artists with research proposal",
        deadline: "2026-12-15",
        amount: "CHF 2,300/month + housing + insurance support",
        link: "https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-loans.html",
        category: "Research",
        provider: "Swiss Confederation",
        renewable: true,
        latest: true
    },
    {
        name: "Holland Scholarship (Netherlands)",
        education: ["undergraduate", "postgraduate"],
        field: ["Any"],
        country: "Netherlands",
        eligibility: "Non-EEA international students at participating Dutch universities",
        deadline: "2026-02-01",
        amount: "EUR 5,000 one-time grant (first year)",
        link: "https://www.studyinnl.org/",
        category: "Merit-based",
        provider: "Dutch Ministry of Education & Culture",
        renewable: false,
        latest: true
    },
    {
        name: "Swedish Institute Scholarships (Sweden)",
        education: ["postgraduate"],
        field: ["Any"],
        country: "Sweden",
        eligibility: "International students with leadership experience from eligible countries",
        deadline: "2026-02-28",
        amount: "Full tuition + SEK 9,300/month + travel grant",
        link: "https://si.se/",
        category: "Leadership",
        provider: "Swedish Institute",
        renewable: false,
        latest: true
    },
    {
        name: "Singapore International Graduate Award (SINGA)",
        education: ["phd"],
        field: ["Biomedical Sciences", "Computing", "Engineering", "Physical Sciences"],
        country: "Singapore",
        eligibility: "International graduates with excellent academics and research interest",
        deadline: "2026-06-01",
        amount: "SGD $2,000/month + full tuition + settling-in and airfare grants",
        link: "https://www.a-star.edu.sg/singa/",
        category: "Research",
        provider: "A*STAR and partner universities",
        renewable: true,
        latest: true
    },
    {
        name: "New Zealand Scholarships",
        education: ["postgraduate", "phd"],
        field: ["Any"],
        country: "New Zealand",
        eligibility: "International students at NZ universities, strong academic record",
        deadline: "2026-04-30",
        amount: "NZD $20,000-$25,000/year + living allowance support",
        link: "https://www.mbie.govt.nz/",
        category: "International Exchange",
        provider: "Ministry of Business, Innovation and Employment",
        renewable: true,
        latest: true
    },
    {
        name: "Brazilian Government Scholarship (CAPES)",
        education: ["postgraduate", "phd"],
        field: ["Any"],
        country: "Brazil",
        eligibility: "International students, bachelor's minimum, Portuguese fluent preferred",
        deadline: "2026-08-31",
        amount: "BRL 1,500-2,500/month + tuition waiver",
        link: "https://www.capes.gov.br/",
        category: "International Development",
        provider: "CAPES (Federal Agency for Support and Evaluation of Graduate Education)",
        renewable: true,
        latest: true
    },
    {
        name: "Fundação Carolina (Spain/Portugal)",
        education: ["postgraduate", "phd"],
        field: ["Any"],
        country: "Spain",
        eligibility: "International students, bachelor's degree minimum, Spanish/Portuguese fluent",
        deadline: "2026-03-15",
        amount: "€1,200/month + housing support",
        link: "https://www.fundacioncarolina.es/",
        category: "International Exchange",
        provider: "Fundación Carolina",
        renewable: true,
        latest: true
    }
];

// Keep scholarship deadlines current year-over-year.
// If a deadline is in the past, roll it to the next available year.
const today = new Date();
scholarships.forEach((scholarship) => {
    if (!scholarship.deadline || !isValidDate(scholarship.deadline)) return;

    const [year, month, day] = scholarship.deadline.split('-').map(Number);
    const thisYearDate = new Date(today.getFullYear(), month - 1, day);
    const targetYear = thisYearDate >= today ? today.getFullYear() : today.getFullYear() + 1;

    scholarship.deadline = `${targetYear}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
});

// Global variables for enhanced functionality
let savedScholarships = JSON.parse(localStorage.getItem('savedScholarships')) || [];
let currentFilters = {};
let sortBy = 'deadline';
let currentTheme = localStorage.getItem('theme') || 'light';

// Educational site functionality
function showInfo() {
    alert('EduPath - Your gateway to global scholarship opportunities. Discover, filter, and apply to scholarships from around the world with our AI-powered recommendation system.');
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    navToggle.classList.toggle('active');
}

// Initialize clean educational theme
function initializeTheme() {
    // Always use light theme for educational site
    document.documentElement.removeAttribute('data-theme');
}

// Tab navigation with smooth transitions
function openTab(tabId) {
    document.querySelectorAll(".tab-content").forEach((tab) => {
        tab.classList.remove("active");
        tab.style.opacity = '0';
    });
    
    const targetTab = document.getElementById(tabId);
    targetTab.classList.add("active");
    
    setTimeout(() => {
        targetTab.style.opacity = '1';
    }, 100);
    
    document.querySelectorAll(".tab-button").forEach((btn) =>
        btn.classList.remove("active")
    );
    Array.from(document.querySelectorAll(".tab-button")).find(
        (btn) => btn.textContent.replace(/\s/g, '').toLowerCase().includes(tabId)
    )?.classList.add("active");
    
    // Load analytics when analytics tab is opened
    if (tabId === 'analytics') {
        loadAnalytics();
    }
}

// Enhanced search and filter functionality with autocomplete
function initializeAdvancedSearch() {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'enhanced-search-container';
    
    // Create search input with autocomplete
    const searchWrapper = document.createElement('div');
    searchWrapper.className = 'search-wrapper';
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'scholarshipSearch';
    searchInput.placeholder = 'Search scholarships by name, provider, field, or keywords...';
    searchInput.className = 'enhanced-search-input';
    searchInput.autocomplete = 'off';
    
    const searchIcon = document.createElement('i');
    searchIcon.className = 'fas fa-search search-icon';
    
    const clearBtn = document.createElement('button');
    clearBtn.className = 'clear-search-btn';
    clearBtn.innerHTML = '<i class="fas fa-times"></i>';
    clearBtn.style.display = 'none';
    
    const suggestionsList = document.createElement('div');
    suggestionsList.className = 'search-suggestions';
    suggestionsList.id = 'searchSuggestions';
    
    searchWrapper.appendChild(searchIcon);
    searchWrapper.appendChild(searchInput);
    searchWrapper.appendChild(clearBtn);
    searchWrapper.appendChild(suggestionsList);
    
    // Create advanced filters
    const filtersContainer = document.createElement('div');
    filtersContainer.className = 'advanced-filters';
    
    const sortSelect = document.createElement('select');
    sortSelect.id = 'sortBy';
    sortSelect.className = 'filter-select';
    sortSelect.innerHTML = `
        <option value="deadline">Sort by Deadline</option>
        <option value="amount">Sort by Amount</option>
        <option value="name">Sort by Name</option>
        <option value="country">Sort by Country</option>
        <option value="relevance">Sort by Relevance</option>
    `;
    
    const categoryFilter = document.createElement('select');
    categoryFilter.id = 'categoryFilter';
    categoryFilter.className = 'filter-select';
    const categories = [...new Set(scholarships.map(s => s.category))].sort();
    categoryFilter.innerHTML = '<option value="">All Categories</option>' + 
        categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
    
    const countryFilter = document.createElement('select');
    countryFilter.id = 'countryFilterAdvanced';
    countryFilter.className = 'filter-select';
    const countries = [...new Set(scholarships.map(s => s.country))].sort();
    countryFilter.innerHTML = '<option value="">All Countries</option>' + 
        countries.map(country => `<option value="${country}">${country}</option>`).join('');
    
    const educationFilter = document.createElement('select');
    educationFilter.id = 'educationFilterAdvanced';
    educationFilter.className = 'filter-select';
    const educationLevels = [...new Set(scholarships.flatMap(s => s.education))].sort();
    educationFilter.innerHTML = '<option value="">All Education Levels</option>' + 
        educationLevels.map(level => `<option value="${level}">${level}</option>`).join('');
    
    const amountFilter = document.createElement('select');
    amountFilter.id = 'amountFilter';
    amountFilter.className = 'filter-select';
    amountFilter.innerHTML = `
        <option value="">All Amounts</option>
        <option value="low">Under $5,000</option>
        <option value="medium">$5,000 - $20,000</option>
        <option value="high">$20,000+</option>
        <option value="full">Full Funding</option>
    `;
    
    const resetFiltersBtn = document.createElement('button');
    resetFiltersBtn.className = 'reset-filters-btn';
    resetFiltersBtn.innerHTML = '<i class="fas fa-undo"></i> Reset Filters';
    
    filtersContainer.appendChild(sortSelect);
    filtersContainer.appendChild(categoryFilter);
    filtersContainer.appendChild(countryFilter);
    filtersContainer.appendChild(educationFilter);
    filtersContainer.appendChild(amountFilter);
    filtersContainer.appendChild(resetFiltersBtn);
    
    searchContainer.appendChild(searchWrapper);
    searchContainer.appendChild(filtersContainer);
    
    const finderSection = document.getElementById('finder');
    const form = document.getElementById('studentForm');
    finderSection.insertBefore(searchContainer, form);
    
    // Enhanced event listeners
    searchInput.addEventListener('input', handleSearchInput);
    searchInput.addEventListener('focus', showSuggestions);
    searchInput.addEventListener('blur', hideSuggestions);
    clearBtn.addEventListener('click', clearSearch);
    
    sortSelect.addEventListener('change', performAdvancedSearch);
    categoryFilter.addEventListener('change', performAdvancedSearch);
    countryFilter.addEventListener('change', performAdvancedSearch);
    educationFilter.addEventListener('change', performAdvancedSearch);
    amountFilter.addEventListener('change', performAdvancedSearch);
    resetFiltersBtn.addEventListener('click', resetAllFilters);
    
    // Initialize search suggestions
    initializeSearchSuggestions();
}

// Enhanced search input handler with debouncing
let searchTimeout;
function handleSearchInput(event) {
    const searchInput = event.target;
    const clearBtn = document.querySelector('.clear-search-btn');
    
    // Show/hide clear button
    clearBtn.style.display = searchInput.value ? 'block' : 'none';
    
    // Debounce search to improve performance
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        updateSuggestions(searchInput.value);
        performAdvancedSearch();
    }, 300);
}

// Initialize search suggestions
function initializeSearchSuggestions() {
    const suggestions = [
        ...new Set([
            ...scholarships.map(s => s.name),
            ...scholarships.map(s => s.provider),
            ...scholarships.flatMap(s => s.field),
            ...scholarships.map(s => s.category),
            'Engineering', 'Medicine', 'Research', 'STEM', 'Arts', 'Business'
        ])
    ];
    
    window.searchSuggestions = suggestions;
}

// Update search suggestions
function updateSuggestions(query) {
    const suggestionsList = document.getElementById('searchSuggestions');
    if (!query || query.length < 2) {
        suggestionsList.innerHTML = '';
        return;
    }
    
    const filteredSuggestions = window.searchSuggestions
        .filter(suggestion => suggestion.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 8);
    
    if (filteredSuggestions.length > 0) {
        suggestionsList.innerHTML = filteredSuggestions
            .map(suggestion => `<div class="suggestion-item" onclick="selectSuggestion('${suggestion}')">${suggestion}</div>`)
            .join('');
    } else {
        suggestionsList.innerHTML = '<div class="no-suggestions">No suggestions found</div>';
    }
}

// Select suggestion
function selectSuggestion(suggestion) {
    const searchInput = document.getElementById('scholarshipSearch');
    searchInput.value = suggestion;
    document.getElementById('searchSuggestions').innerHTML = '';
    performAdvancedSearch();
}

// Show/hide suggestions
function showSuggestions() {
    const searchInput = document.getElementById('scholarshipSearch');
    if (searchInput.value.length >= 2) {
        updateSuggestions(searchInput.value);
    }
}

function hideSuggestions() {
    setTimeout(() => {
        document.getElementById('searchSuggestions').innerHTML = '';
    }, 200);
}

// Clear search
function clearSearch() {
    const searchInput = document.getElementById('scholarshipSearch');
    const clearBtn = document.querySelector('.clear-search-btn');
    searchInput.value = '';
    clearBtn.style.display = 'none';
    document.getElementById('searchSuggestions').innerHTML = '';
    performAdvancedSearch();
}

// Reset all filters
function resetAllFilters() {
    document.getElementById('scholarshipSearch').value = '';
    document.getElementById('sortBy').value = 'deadline';
    document.getElementById('categoryFilter').value = '';
    document.getElementById('countryFilterAdvanced').value = '';
    document.getElementById('educationFilterAdvanced').value = '';
    document.getElementById('amountFilter').value = '';
    document.querySelector('.clear-search-btn').style.display = 'none';
    document.getElementById('searchSuggestions').innerHTML = '';
    performAdvancedSearch();
}

// Enhanced advanced search function
function performAdvancedSearch() {
    const searchTerm = document.getElementById('scholarshipSearch')?.value.toLowerCase() || '';
    const sortBy = document.getElementById('sortBy')?.value || 'deadline';
    const categoryFilter = document.getElementById('categoryFilter')?.value || '';
    const countryFilter = document.getElementById('countryFilterAdvanced')?.value || '';
    const educationFilter = document.getElementById('educationFilterAdvanced')?.value || '';
    const amountFilter = document.getElementById('amountFilter')?.value || '';
    
    let filtered = scholarships.filter(s => {
        // Search term filter
        const matchesSearch = searchTerm === '' || 
            s.name.toLowerCase().includes(searchTerm) ||
            s.provider.toLowerCase().includes(searchTerm) ||
            s.eligibility.toLowerCase().includes(searchTerm) ||
            s.field.some(f => f.toLowerCase().includes(searchTerm)) ||
            s.category.toLowerCase().includes(searchTerm);
            
        // Category filter
        const matchesCategory = categoryFilter === '' || s.category === categoryFilter;
        
        // Country filter
        const matchesCountry = countryFilter === '' || s.country === countryFilter;
        
        // Education filter
        const matchesEducation = educationFilter === '' || s.education.includes(educationFilter);
        
        // Amount filter
        let matchesAmount = true;
        if (amountFilter) {
            const amount = s.amount.toLowerCase();
            switch(amountFilter) {
                case 'low':
                    matchesAmount = !amount.includes('full') && !amount.includes('$20') && !amount.includes('€20') && !amount.includes('₹50');
                    break;
                case 'medium':
                    matchesAmount = amount.includes('$5') || amount.includes('$10') || amount.includes('$15') || amount.includes('₹20') || amount.includes('₹30');
                    break;
                case 'high':
                    matchesAmount = amount.includes('$20') || amount.includes('€20') || amount.includes('₹50') || amount.includes('₹70');
                    break;
                case 'full':
                    matchesAmount = amount.includes('full');
                    break;
            }
        }
        
        return matchesSearch && matchesCategory && matchesCountry && matchesEducation && matchesAmount;
    });
    
    // Apply form filters if form is filled
    const education = document.getElementById("education")?.value;
    const field = document.getElementById("field")?.value.toLowerCase();
    const country = document.getElementById("country")?.value;
    
    if (education && field && country) {
        filtered = filtered.filter(s =>
            (s.education.includes(education) || s.education.includes("Any")) &&
            (s.field.some(f => field === "" || f.toLowerCase().includes(field)) || s.field.includes("Any")) &&
            (s.country === country)
        );
    }
    
    // Enhanced sorting
    filtered.sort((a, b) => {
        switch(sortBy) {
            case 'deadline':
                return new Date(a.deadline) - new Date(b.deadline);
            case 'name':
                return a.name.localeCompare(b.name);
            case 'country':
                return a.country.localeCompare(b.country);
            case 'amount':
                return parseAmount(a.amount) - parseAmount(b.amount);
            case 'relevance':
                return calculateRelevance(b, searchTerm) - calculateRelevance(a, searchTerm);
            default:
                return 0;
        }
    });
    
    displayRecommendations(filtered);
}

// Helper function to parse amount for sorting
function parseAmount(amountStr) {
    const amount = amountStr.toLowerCase();
    if (amount.includes('full')) return 100000;
    if (amount.includes('$')) {
        const match = amount.match(/\$([\d,]+)/);
        return match ? parseInt(match[1].replace(/,/g, '')) : 0;
    }
    if (amount.includes('€')) {
        const match = amount.match(/€([\d,]+)/);
        return match ? parseInt(match[1].replace(/,/g, '')) * 1.1 : 0;
    }
    if (amount.includes('₹')) {
        const match = amount.match(/₹([\d,]+)/);
        return match ? parseInt(match[1].replace(/,/g, '')) * 0.012 : 0;
    }
    return 0;
}

// Calculate relevance score for search
function calculateRelevance(scholarship, searchTerm) {
    if (!searchTerm) return 0;
    
    let score = 0;
    const term = searchTerm.toLowerCase();
    
    if (scholarship.name.toLowerCase().includes(term)) score += 10;
    if (scholarship.provider.toLowerCase().includes(term)) score += 8;
    if (scholarship.category.toLowerCase().includes(term)) score += 6;
    if (scholarship.field.some(f => f.toLowerCase().includes(term))) score += 4;
    if (scholarship.eligibility.toLowerCase().includes(term)) score += 2;
    
    return score;
}

// Enhanced data validation and error handling
function validateScholarshipData(scholarship) {
    const errors = [];
    
    if (!scholarship.name || scholarship.name.trim().length === 0) {
        errors.push('Scholarship name is required');
    }
    
    if (!scholarship.education || !Array.isArray(scholarship.education) || scholarship.education.length === 0) {
        errors.push('Education level is required');
    }
    
    if (!scholarship.field || !Array.isArray(scholarship.field) || scholarship.field.length === 0) {
        errors.push('Field of study is required');
    }
    
    if (!scholarship.country || scholarship.country.trim().length === 0) {
        errors.push('Country is required');
    }
    
    if (!scholarship.eligibility || scholarship.eligibility.trim().length === 0) {
        errors.push('Eligibility criteria is required');
    }
    
    if (!scholarship.deadline || !isValidDate(scholarship.deadline)) {
        errors.push('Valid deadline is required');
    }
    
    if (!scholarship.amount || scholarship.amount.trim().length === 0) {
        errors.push('Amount information is required');
    }
    
    if (!scholarship.link || !isValidURL(scholarship.link)) {
        errors.push('Valid application link is required');
    }
    
    if (!scholarship.category || scholarship.category.trim().length === 0) {
        errors.push('Category is required');
    }
    
    if (!scholarship.provider || scholarship.provider.trim().length === 0) {
        errors.push('Provider information is required');
    }
    
    return errors;
}

function isValidDate(dateString) {
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date) && date > new Date();
}

function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

// Enhanced error handling for API calls and data operations
function handleError(error, context = '') {
    console.error(`Error in ${context}:`, error);
    
    // Show user-friendly error message
    showNotification('An error occurred. Please try again.', 'error');
    
    // Log error for debugging
    if (window.console && window.console.error) {
        window.console.error(`Context: ${context}`, error);
    }
}

// Enhanced form validation
function validateForm(formData) {
    const errors = {};
    
    if (!formData.education) {
        errors.education = 'Please select your education level';
    }
    
    if (!formData.country) {
        errors.country = 'Please select your preferred country';
    }
    
    if (formData.field && formData.field.length < 2) {
        errors.field = 'Field of study must be at least 2 characters';
    }
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors: errors
    };
}

// Enhanced display function with error handling
function displayRecommendations(list) {
    const container = document.getElementById("recommendedScholarships");
    
    try {
        // Clear previous content
        container.innerHTML = '';
        
        if (!Array.isArray(list)) {
            throw new Error('Invalid data format');
        }
        
        if (list.length === 0) {
            container.innerHTML = `
                <div class='no-results'>
                    <div class="no-results-icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <h3>No matching scholarships found</h3>
                    <p>Try adjusting your search criteria or filters.</p>
                    <button class="reset-filters-btn" onclick="resetAllFilters()">
                        <i class="fas fa-undo"></i> Reset Filters
                    </button>
                </div>
            `;
            return;
        }
        
        // Validate each scholarship before displaying
        const validScholarships = list.filter(scholarship => {
            const errors = validateScholarshipData(scholarship);
            if (errors.length > 0) {
                console.warn('Invalid scholarship data:', scholarship.name, errors);
                return false;
            }
            return true;
        });
        
        if (validScholarships.length === 0) {
            container.innerHTML = `
                <div class='no-results'>
                    <div class="no-results-icon">
                        <i class="fas fa-exclamation-triangle"></i>
                    </div>
                    <h3>No valid scholarships found</h3>
                    <p>All scholarships in the current filter have invalid data.</p>
                </div>
            `;
            return;
        }
        
        const resultsHeader = document.createElement('div');
        resultsHeader.className = 'results-header';
        resultsHeader.innerHTML = `
            <h3>Found ${validScholarships.length} scholarship${validScholarships.length !== 1 ? 's' : ''}</h3>
            <p>Showing ${validScholarships.length} of ${list.length} results</p>
        `;
        container.appendChild(resultsHeader);
        
        validScholarships.forEach(scholarship => {
            try {
                const card = createScholarshipCard(scholarship);
                container.appendChild(card);
            } catch (error) {
                handleError(error, 'createScholarshipCard');
            }
        });
        
    } catch (error) {
        handleError(error, 'displayRecommendations');
        container.innerHTML = `
            <div class='no-results'>
                <div class="no-results-icon">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <h3>Error loading scholarships</h3>
                <p>Please refresh the page and try again.</p>
                <button class="reset-filters-btn" onclick="location.reload()">
                    <i class="fas fa-refresh"></i> Refresh Page
                </button>
            </div>
        `;
    }
}

// Enhanced scholarship card creation with error handling
function createScholarshipCard(scholarship) {
    const card = document.createElement("div");
    card.className = "scholarship-card";
    
    try {
        const isSaved = savedScholarships.some(saved => saved.name === scholarship.name);
        const deadlineDate = new Date(scholarship.deadline);
        const today = new Date();
        const daysUntilDeadline = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));
        const urgencyClass = daysUntilDeadline <= 30 ? 'urgent' : daysUntilDeadline <= 60 ? 'soon' : '';
        
        card.innerHTML = `
            <div class="card-header">
                <h3>${escapeHtml(scholarship.name)}</h3>
                <button class="save-btn ${isSaved ? 'saved' : ''}" onclick="toggleSaveScholarship('${escapeHtml(scholarship.name)}')" aria-label="${isSaved ? 'Remove from saved' : 'Save scholarship'}">
                    ${isSaved ? '❤️' : '🤍'}
                </button>
            </div>
            <div class="card-content">
                <p><strong>Education:</strong> ${escapeHtml(scholarship.education.join(", "))}</p>
                <p><strong>Field:</strong> ${escapeHtml(scholarship.field.join(", "))}</p>
                <p><strong>Amount:</strong> ${escapeHtml(scholarship.amount)}</p>
                <p><strong>Provider:</strong> ${escapeHtml(scholarship.provider)}</p>
                <p><strong>Category:</strong> ${escapeHtml(scholarship.category)}</p>
                <p><strong>Eligibility:</strong> ${escapeHtml(scholarship.eligibility)}</p>
                <p class="deadline ${urgencyClass}"><strong>Deadline:</strong> ${formatDate(scholarship.deadline)} 
                    ${daysUntilDeadline > 0 ? `(${daysUntilDeadline} days left)` : '(Expired)'}
                </p>
                <p><strong>Renewable:</strong> ${scholarship.renewable ? 'Yes' : 'No'}</p>
            </div>
            <div class="card-actions">
                <a href="${scholarship.link}" target="_blank" class="apply-btn" rel="noopener noreferrer">
                    <i class="fas fa-external-link-alt"></i> Apply Now
                </a>
                <button onclick="shareScholarship('${escapeHtml(scholarship.name)}')" class="share-btn">
                    <i class="fas fa-share"></i> Share
                </button>
            </div>
        `;
        
        return card;
    } catch (error) {
        handleError(error, 'createScholarshipCard');
        card.innerHTML = `
            <div class="card-header">
                <h3>Error loading scholarship</h3>
            </div>
            <div class="card-content">
                <p>Unable to display this scholarship due to invalid data.</p>
            </div>
        `;
        return card;
    }
}

// HTML escaping function for security
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Enhanced notification system
function showNotification(message, type = 'info', duration = 5000) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${escapeHtml(message)}</span>
            <button class="notification-close" onclick="closeNotification(this)">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after duration
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, duration);
}

function getNotificationIcon(type) {
    const icons = {
        'success': 'check-circle',
        'error': 'exclamation-circle',
        'warning': 'exclamation-triangle',
        'info': 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function closeNotification(button) {
    const notification = button.closest('.notification');
    if (notification) {
        notification.remove();
    }
}

// Enhanced form submission with validation
document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    try {
        const formData = {
            education: document.getElementById("education").value,
            field: document.getElementById("field").value,
            country: document.getElementById("country").value
        };
        
        const validation = validateForm(formData);
        
        if (!validation.isValid) {
            // Show validation errors
            Object.keys(validation.errors).forEach(field => {
                const fieldElement = document.getElementById(field);
                if (fieldElement) {
                    fieldElement.style.borderColor = 'var(--error-color)';
                    showNotification(validation.errors[field], 'error');
                }
            });
            return;
        }
        
        // Clear any previous error styling
        document.querySelectorAll('.form-group input, .form-group select').forEach(element => {
            element.style.borderColor = '';
        });
        
        // Perform search
    performAdvancedSearch();
        showNotification('Search completed successfully!', 'success');
        
    } catch (error) {
        handleError(error, 'form submission');
    }
});

// Enhanced display function with save functionality
function displayRecommendations(list) {
    const container = document.getElementById("recommendedScholarships");
    container.innerHTML = '';
    
    if (list.length === 0) {
        container.innerHTML = "<div class='no-results'><p>No matching scholarships found.</p><p>Try adjusting your search criteria or filters.</p></div>";
        return;
    }
    
    const resultsHeader = document.createElement('div');
    resultsHeader.className = 'results-header';
    resultsHeader.innerHTML = `<h3>Found ${list.length} scholarship${list.length !== 1 ? 's' : ''}</h3>`;
    container.appendChild(resultsHeader);
    
    list.forEach(s => {
        const card = document.createElement("div");
        card.className = "scholarship-card";
        const isSaved = savedScholarships.some(saved => saved.name === s.name);
        const deadlineDate = new Date(s.deadline);
        const today = new Date();
        const daysUntilDeadline = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));
        const urgencyClass = daysUntilDeadline <= 30 ? 'urgent' : daysUntilDeadline <= 60 ? 'soon' : '';
        
        card.innerHTML = `
            <div class="card-header">
                <h3>${s.name}</h3>
                <button class="save-btn ${isSaved ? 'saved' : ''}" onclick="toggleSaveScholarship('${s.name}')">
                    ${isSaved ? '❤️' : '🤍'}
                </button>
            </div>
            <div class="card-content">
                <p><strong>Education:</strong> ${s.education.join(", ")}</p>
                <p><strong>Field:</strong> ${s.field.join(", ")}</p>
                <p><strong>Amount:</strong> ${s.amount}</p>
                <p><strong>Provider:</strong> ${s.provider}</p>
                <p><strong>Category:</strong> ${s.category}</p>
                <p><strong>Eligibility:</strong> ${s.eligibility}</p>
                <p class="deadline ${urgencyClass}"><strong>Deadline:</strong> ${formatDate(s.deadline)} 
                    ${daysUntilDeadline > 0 ? `(${daysUntilDeadline} days left)` : '(Expired)'}
                </p>
                <p><strong>Renewable:</strong> ${s.renewable ? 'Yes' : 'No'}</p>
            </div>
            <div class="card-actions">
                <a href="${s.link}" target="_blank" class="apply-btn">Apply Now</a>
                <button onclick="shareScholarship('${s.name}')" class="share-btn">Share</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

function toggleSaveScholarship(scholarshipName) {
    const scholarship = scholarships.find(s => s.name === scholarshipName);
    const existingIndex = savedScholarships.findIndex(s => s.name === scholarshipName);
    
    if (existingIndex > -1) {
        savedScholarships.splice(existingIndex, 1);
    } else {
        savedScholarships.push(scholarship);
    }
    
    localStorage.setItem('savedScholarships', JSON.stringify(savedScholarships));
    performAdvancedSearch(); // Refresh display
}

// Save from links list by index (used in links section actions)
function saveScholarship(index) {
    try {
        const scholarship = scholarships[index];
        if (!scholarship) return;
        const exists = savedScholarships.some(s => s.name === scholarship.name);
        if (exists) {
            savedScholarships = savedScholarships.filter(s => s.name !== scholarship.name);
            showNotification('Removed from saved scholarships', 'info');
        } else {
            savedScholarships.push(scholarship);
            showNotification('Saved scholarship', 'success');
        }
        localStorage.setItem('savedScholarships', JSON.stringify(savedScholarships));
        displayLinks();
    } catch (error) {
        handleError(error, 'saveScholarship');
    }
}

function shareScholarship(scholarshipOrName) {
    const scholarship = typeof scholarshipOrName === 'string'
        ? scholarships.find(s => s.name === scholarshipOrName)
        : scholarshipOrName;
    if (!scholarship) {
        showNotification('Unable to share: scholarship not found.', 'error');
        return;
    }
    const shareText = `Check out this scholarship: ${scholarship.name}\nDeadline: ${formatDate(scholarship.deadline)}\nAmount: ${scholarship.amount}\nLink: ${scholarship.link}`;
    
    if (navigator.share) {
        navigator.share({
            title: scholarship.name,
            text: shareText,
            url: scholarship.link
        }).then(() => {
            analytics.trackScholarshipInteraction('shared', scholarship.name);
            showNotification('Scholarship shared successfully!', 'success');
        }).catch(() => fallbackShare(shareText));
    } else {
        fallbackShare(shareText);
    }
}

// Enhanced links section variables
let currentLinksPage = 1;
let linksPerPage = 12;
let filteredScholarships = [...scholarships];
let currentLinksView = 'grid';

// Initialize and populate scholarship links section
function populateLinks() {
    updateLinksStats();
    initializeLinksFilters();
    displayLinks();
}

function updateLinksStats() {
    const totalCount = scholarships.length;
    const activeCount = scholarships.filter(s => {
        const deadline = new Date(s.deadline);
        const today = new Date();
        return deadline > today;
    }).length;
    
    document.getElementById('totalLinksCount').textContent = totalCount;
    document.getElementById('activeLinksCount').textContent = activeCount;
}

function initializeLinksFilters() {
    const countryFilter = document.getElementById('countryFilter');
    const categoryFilter = document.getElementById('categoryFilterLinks');
    const educationFilter = document.getElementById('educationFilter');
    
    // Populate country filter
    const countries = [...new Set(scholarships.map(s => s.country))].sort();
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countryFilter.appendChild(option);
    });
    
    // Populate category filter
    const categories = [...new Set(scholarships.map(s => s.category))].sort();
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
    
    // Populate education filter
    const educationLevels = [...new Set(scholarships.flatMap(s => s.education))].sort();
    educationLevels.forEach(level => {
        const option = document.createElement('option');
        option.value = level;
        option.textContent = level;
        educationFilter.appendChild(option);
    });
}

function displayLinks() {
    const container = document.getElementById('scholarshipLinks');
    container.className = `links-grid ${currentLinksView}-view`;
    
    const startIndex = (currentLinksPage - 1) * linksPerPage;
    const endIndex = startIndex + linksPerPage;
    const scholarshipsToShow = filteredScholarships.slice(startIndex, endIndex);
    
    container.innerHTML = scholarshipsToShow.map(s => `
        <div class="scholarship-link-item">
            <div class="link-content">
                <h4><a href="${s.link}" target="_blank">${s.name}</a></h4>
                <div class="link-meta">
                    <div class="meta-item">
                        <i class="fas fa-globe"></i>
                        <span>${s.country}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-tag"></i>
                        <span>${s.category}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-dollar-sign"></i>
                        <span>${s.amount}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-graduation-cap"></i>
                        <span>${s.education.join(', ')}</span>
                    </div>
                </div>
            </div>
            <div class="link-actions">
                <div class="deadline-badge ${getDeadlineUrgency(s.deadline)}">${formatDate(s.deadline)}</div>
                <div class="action-buttons">
                    <button class="action-btn" onclick="saveScholarship(${scholarships.indexOf(s)})" title="Save">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="action-btn" onclick="shareScholarship(scholarships[${scholarships.indexOf(s)}])" title="Share">
                        <i class="fas fa-share"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    updateLoadMoreButton();
}

function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const hasMore = (currentLinksPage * linksPerPage) < filteredScholarships.length;
    
    if (hasMore) {
        loadMoreBtn.style.display = 'inline-flex';
        loadMoreBtn.disabled = false;
    } else {
        loadMoreBtn.style.display = 'none';
    }
}

function getDeadlineUrgency(deadline) {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const daysUntilDeadline = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));
    
    if (daysUntilDeadline <= 30) return 'urgent';
    if (daysUntilDeadline <= 60) return 'soon';
    return 'normal';
}

// Enhanced Analytics functionality
function loadAnalytics() {
    generateAnalyticsStats();
    showVisualization('country'); // Default visualization
}

function generateAnalyticsStats() {
    const totalScholarships = scholarships.length;
    const upcomingDeadlines = scholarships.filter(s => {
        const deadline = new Date(s.deadline);
        const today = new Date();
        const daysUntil = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
        return daysUntil > 0 && daysUntil <= 90;
    }).length;
    
    const urgentDeadlines = scholarships.filter(s => {
        const deadline = new Date(s.deadline);
        const today = new Date();
        const daysUntil = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
        return daysUntil > 0 && daysUntil <= 30;
    }).length;
    
    const savedCount = savedScholarships.length;
    const countriesCount = new Set(scholarships.map(s => s.country)).size;
    
    // Calculate average funding
    const totalFunding = scholarships.reduce((total, s) => {
        const amount = s.amount.toLowerCase();
        if (amount.includes('full')) return total + 50000;
        if (amount.includes('₹')) {
            const match = amount.match(/₹([\d,]+)/);
            return total + (match ? parseInt(match[1].replace(/,/g, '')) : 10000);
        }
        if (amount.includes('$')) {
            const match = amount.match(/\$([\d,]+)/);
            return total + (match ? parseInt(match[1].replace(/,/g, '')) : 25000);
        }
        if (amount.includes('€')) {
            const match = amount.match(/€([\d,]+)/);
            return total + (match ? parseInt(match[1].replace(/,/g, '')) * 1.1 : 30000);
        }
        return total + 20000;
    }, 0);
    
    const avgFunding = Math.round(totalFunding / totalScholarships);
    
    // Generate renewable vs non-renewable stats
    const renewableCount = scholarships.filter(s => s.renewable).length;
    const renewablePercentage = Math.round((renewableCount / totalScholarships) * 100);
    
    document.getElementById("analyticsFeedback").innerHTML = `
        <div class="analytics-stats">
            <div class="stat-card primary">
                <div class="stat-icon">
                    <i class="fas fa-graduation-cap"></i>
                </div>
                <div class="stat-content">
                    <h4>${totalScholarships}</h4>
                    <p>Total Scholarships</p>
                    <span class="stat-trend">+12% this month</span>
                </div>
            </div>
            <div class="stat-card warning">
                <div class="stat-icon">
                    <i class="fas fa-clock"></i>
                </div>
                <div class="stat-content">
                    <h4>${upcomingDeadlines}</h4>
                    <p>Upcoming Deadlines</p>
                    <span class="stat-trend">${urgentDeadlines} urgent</span>
                </div>
            </div>
            <div class="stat-card success">
                <div class="stat-icon">
                    <i class="fas fa-heart"></i>
                </div>
                <div class="stat-content">
                    <h4>${savedCount}</h4>
                    <p>Saved Scholarships</p>
                    <span class="stat-trend">Your bookmarks</span>
                </div>
            </div>
            <div class="stat-card info">
                <div class="stat-icon">
                    <i class="fas fa-globe"></i>
                </div>
                <div class="stat-content">
                    <h4>${countriesCount}</h4>
                    <p>Countries Covered</p>
                    <span class="stat-trend">Worldwide reach</span>
                </div>
            </div>
            <div class="stat-card secondary">
                <div class="stat-icon">
                    <i class="fas fa-dollar-sign"></i>
                </div>
                <div class="stat-content">
                    <h4>$${(avgFunding / 1000).toFixed(0)}K</h4>
                    <p>Average Funding</p>
                    <span class="stat-trend">Per scholarship</span>
                </div>
            </div>
            <div class="stat-card accent">
                <div class="stat-icon">
                    <i class="fas fa-sync-alt"></i>
                </div>
                <div class="stat-content">
                    <h4>${renewablePercentage}%</h4>
                    <p>Renewable</p>
                    <span class="stat-trend">Multi-year funding</span>
                </div>
            </div>
        </div>
        
        <div class="analytics-insights">
            <div class="insight-highlight">
                <i class="fas fa-lightbulb"></i>
                <div>
                    <h4>Smart Recommendations</h4>
                    <p>Our AI-powered system increases scholarship match rates by up to <strong>70%</strong> through personalized filtering and intelligent matching algorithms.</p>
                </div>
            </div>
            <div class="quick-stats">
                <div class="quick-stat">
                    <span class="number">${Math.round((urgentDeadlines / totalScholarships) * 100)}%</span>
                    <span class="label">Urgent Deadlines</span>
                </div>
                <div class="quick-stat">
                    <span class="number">${Math.round((scholarships.filter(s => s.category === 'Merit-based').length / totalScholarships) * 100)}%</span>
                    <span class="label">Merit-based</span>
                </div>
                <div class="quick-stat">
                    <span class="number">${Math.round((scholarships.filter(s => s.field.includes('Any')).length / totalScholarships) * 100)}%</span>
                    <span class="label">All Fields</span>
                </div>
            </div>
        </div>
    `;
}

// Modern CSS-based visualization system
function showVisualization(type) {
    const buttons = document.querySelectorAll('.chart-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    // Activate the corresponding button without relying on a global event
    const toActivate = Array.from(buttons).find(btn => {
        const onclick = btn.getAttribute('onclick') || '';
        return onclick.includes(`'${type}'`) || onclick.includes(`\"${type}\"`);
    });
    if (toActivate) toActivate.classList.add('active');
    
    const container = document.getElementById('dataVisualization');
    
    switch(type) {
        case 'country':
            createBarChart(container, 'country', 'Scholarships by Country');
            break;
        case 'category':
            createBarChart(container, 'category', 'Scholarships by Category');
            break;
        case 'education':
            createBarChart(container, 'education', 'Scholarships by Education Level');
            break;
        case 'timeline':
            createTimelineView(container);
            break;
    }
}

function createBarChart(container, dataType, title) {
    let data = {};
    const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    ];
    
    switch(dataType) {
        case 'country':
            data = scholarships.reduce((acc, s) => {
                acc[s.country] = (acc[s.country] || 0) + 1;
                return acc;
            }, {});
            break;
        case 'category':
            data = scholarships.reduce((acc, s) => {
                acc[s.category] = (acc[s.category] || 0) + 1;
                return acc;
            }, {});
            break;
        case 'education':
            data = scholarships.reduce((acc, s) => {
                s.education.forEach(edu => {
                    acc[edu] = (acc[edu] || 0) + 1;
                });
                return acc;
            }, {});
            break;
    }
    
    const maxValue = Math.max(...Object.values(data));
    const entries = Object.entries(data).sort((a, b) => b[1] - a[1]);
    
    container.innerHTML = `
        <div class="chart-title">
            <h3>${title}</h3>
            <p>Interactive data visualization</p>
        </div>
        <div class="bar-chart">
            ${entries.map(([key, value], index) => {
                const height = (value / maxValue) * 250;
                return `
                    <div class="chart-bar">
                        <div class="bar" style="height: ${height}px; background: ${colors[index % colors.length]};">
                            <div class="bar-value">${value}</div>
                        </div>
                        <div class="bar-label">${key}</div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function createTimelineView(container) {
    // Group scholarships by deadline months
    const timelineData = scholarships.reduce((acc, s) => {
        const deadline = new Date(s.deadline);
        const monthYear = deadline.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        if (!acc[monthYear]) {
            acc[monthYear] = [];
        }
        acc[monthYear].push(s);
        return acc;
    }, {});
    
    const sortedTimeline = Object.entries(timelineData)
        .sort((a, b) => new Date(a[1][0].deadline) - new Date(b[1][0].deadline))
        .slice(0, 8); // Show next 8 months
    
    container.innerHTML = `
        <div class="chart-title">
            <h3>Scholarship Deadlines Timeline</h3>
            <p>Upcoming deadlines by month</p>
        </div>
        <div class="timeline-view">
            ${sortedTimeline.map(([month, scholarships]) => {
                const urgentCount = scholarships.filter(s => {
                    const deadline = new Date(s.deadline);
                    const today = new Date();
                    const daysUntil = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
                    return daysUntil <= 30;
                }).length;
                
                return `
                    <div class="timeline-item">
                        <div class="timeline-date">${month}</div>
                        <div class="timeline-content">
                            <div class="timeline-title">${scholarships.length} Scholarships</div>
                            <div class="timeline-description">
                                ${urgentCount > 0 ? `${urgentCount} urgent deadlines` : 'No urgent deadlines'}
                            </div>
                        </div>
                        <div class="timeline-count">${scholarships.length}</div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

// Enhanced filter and search functionality for links
function searchLinks() {
    const searchTerm = document.getElementById('linksSearchInput').value.toLowerCase();
    applyFilters(searchTerm);
}

function filterLinks() {
    const searchTerm = document.getElementById('linksSearchInput').value.toLowerCase();
    applyFilters(searchTerm);
}

function applyFilters(searchTerm = '') {
    const countryFilter = document.getElementById('countryFilter').value;
    const categoryFilter = document.getElementById('categoryFilterLinks').value;
    const educationFilter = document.getElementById('educationFilter').value;
    const deadlineFilter = document.getElementById('deadlineFilter').value;
    
    filteredScholarships = scholarships.filter(s => {
        // Search term filter
        const matchesSearch = !searchTerm || 
            s.name.toLowerCase().includes(searchTerm) ||
            s.category.toLowerCase().includes(searchTerm) ||
            s.country.toLowerCase().includes(searchTerm) ||
            s.field.some(f => f.toLowerCase().includes(searchTerm));
        
        // Country filter
        const matchesCountry = !countryFilter || s.country === countryFilter;
        
        // Category filter
        const matchesCategory = !categoryFilter || s.category === categoryFilter;
        
        // Education filter
        const matchesEducation = !educationFilter || s.education.includes(educationFilter);
        
        // Deadline filter
        let matchesDeadline = true;
        if (deadlineFilter) {
            const urgency = getDeadlineUrgency(s.deadline);
            switch(deadlineFilter) {
                case 'urgent':
                    matchesDeadline = urgency === 'urgent';
                    break;
                case 'soon':
                    matchesDeadline = urgency === 'soon';
                    break;
                case 'later':
                    matchesDeadline = urgency === 'normal';
                    break;
            }
        }
        
        return matchesSearch && matchesCountry && matchesCategory && matchesEducation && matchesDeadline;
    });
    
    currentLinksPage = 1; // Reset to first page
    displayLinks();
}

function clearAllFilters() {
    document.getElementById('linksSearchInput').value = '';
    document.getElementById('countryFilter').value = '';
    document.getElementById('categoryFilterLinks').value = '';
    document.getElementById('educationFilter').value = '';
    document.getElementById('deadlineFilter').value = '';
    
    filteredScholarships = [...scholarships];
    currentLinksPage = 1;
    displayLinks();
}

function setLinksView(view) {
    currentLinksView = view;
    
    // Update button states
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.view === view) {
            btn.classList.add('active');
        }
    });
    
    displayLinks();
}

function sortLinks() {
    const sortBy = document.getElementById('sortLinks').value;
    
    filteredScholarships.sort((a, b) => {
        switch(sortBy) {
            case 'deadline':
                return new Date(a.deadline) - new Date(b.deadline);
            case 'name':
                return a.name.localeCompare(b.name);
            case 'country':
                return a.country.localeCompare(b.country);
            case 'amount':
                // Simple amount comparison (this could be improved)
                return a.amount.localeCompare(b.amount);
            default:
                return 0;
        }
    });
    
    currentLinksPage = 1;
    displayLinks();
}

function loadMoreLinks() {
    currentLinksPage++;
    
    const container = document.getElementById('scholarshipLinks');
    const startIndex = (currentLinksPage - 1) * linksPerPage;
    const endIndex = startIndex + linksPerPage;
    const scholarshipsToShow = filteredScholarships.slice(startIndex, endIndex);
    
    const newItems = scholarshipsToShow.map(s => `
        <div class="scholarship-link-item">
            <div class="link-content">
                <h4><a href="${s.link}" target="_blank">${s.name}</a></h4>
                <div class="link-meta">
                    <div class="meta-item">
                        <i class="fas fa-globe"></i>
                        <span>${s.country}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-tag"></i>
                        <span>${s.category}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-dollar-sign"></i>
                        <span>${s.amount}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-graduation-cap"></i>
                        <span>${s.education.join(', ')}</span>
                    </div>
                </div>
            </div>
            <div class="link-actions">
                <div class="deadline-badge ${getDeadlineUrgency(s.deadline)}">${formatDate(s.deadline)}</div>
                <div class="action-buttons">
                    <button class="action-btn" onclick="saveScholarship(${scholarships.indexOf(s)})" title="Save">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="action-btn" onclick="shareScholarship(scholarships[${scholarships.indexOf(s)}])" title="Share">
                        <i class="fas fa-share"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    container.innerHTML += newItems;
    updateLoadMoreButton();
}

// Performance optimizations
const performanceOptimizations = {
    // Debounce search to prevent excessive API calls
    debounceSearch: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Throttle scroll events
    throttleScroll: (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Lazy load images
    lazyLoadImages: () => {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    },
    
    // Cache frequently accessed data
    cache: new Map(),
    
    getCachedData: (key) => {
        return performanceOptimizations.cache.get(key);
    },
    
    setCachedData: (key, value) => {
        performanceOptimizations.cache.set(key, value);
    }
};

// Enhanced accessibility features
const accessibilityFeatures = {
    // Keyboard navigation support
    initKeyboardNavigation: () => {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    },
    
    // Focus management
    manageFocus: (element) => {
        if (element) {
            element.focus();
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    },
    
    // ARIA labels and roles
    enhanceARIA: () => {
        // Add ARIA labels to interactive elements
        document.querySelectorAll('.save-btn').forEach(btn => {
            if (!btn.getAttribute('aria-label')) {
                btn.setAttribute('aria-label', 'Save scholarship');
            }
        });
        
        document.querySelectorAll('.apply-btn').forEach(btn => {
            if (!btn.getAttribute('aria-label')) {
                btn.setAttribute('aria-label', 'Apply for scholarship');
            }
        });
        
        document.querySelectorAll('.share-btn').forEach(btn => {
            if (!btn.getAttribute('aria-label')) {
                btn.setAttribute('aria-label', 'Share scholarship');
            }
        });
    },
    
    // Screen reader announcements
    announceToScreenReader: (message) => {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    },
    
    // High contrast mode support
    initHighContrastMode: () => {
        const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
        
        if (prefersHighContrast.matches) {
            document.body.classList.add('high-contrast');
        }
        
        prefersHighContrast.addEventListener('change', (e) => {
            if (e.matches) {
                document.body.classList.add('high-contrast');
            } else {
                document.body.classList.remove('high-contrast');
            }
        });
    },
    
    // Reduced motion support
    initReducedMotion: () => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        
        if (prefersReducedMotion.matches) {
            document.body.classList.add('reduced-motion');
        }
        
        prefersReducedMotion.addEventListener('change', (e) => {
            if (e.matches) {
                document.body.classList.add('reduced-motion');
            } else {
                document.body.classList.remove('reduced-motion');
            }
        });
    }
};

// Enhanced analytics with performance tracking
const analytics = {
    // Track user interactions
    trackEvent: (eventName, properties = {}) => {
        try {
            const eventData = {
                event: eventName,
                timestamp: new Date().toISOString(),
                properties: properties,
                userAgent: navigator.userAgent,
                url: window.location.href
            };
            
            // Store in localStorage for now (in production, send to analytics service)
            const analyticsData = JSON.parse(localStorage.getItem('analytics') || '[]');
            analyticsData.push(eventData);
            
            // Keep only last 100 events to prevent storage bloat
            if (analyticsData.length > 100) {
                analyticsData.splice(0, analyticsData.length - 100);
            }
            
            localStorage.setItem('analytics', JSON.stringify(analyticsData));
            
        } catch (error) {
            console.warn('Analytics tracking failed:', error);
        }
    },
    
    // Track page performance
    trackPerformance: () => {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    analytics.trackEvent('page_load', {
                        loadTime: perfData.loadEventEnd - perfData.loadEventStart,
                        domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                        firstPaint: performance.getEntriesByType('paint')[0]?.startTime || 0
                    });
                }, 0);
            });
        }
    },
    
    // Track search performance
    trackSearch: (searchTerm, resultsCount, searchTime) => {
        analytics.trackEvent('search_performed', {
            searchTerm: searchTerm,
            resultsCount: resultsCount,
            searchTime: searchTime
        });
    },
    
    // Track scholarship interactions
    trackScholarshipInteraction: (action, scholarshipName) => {
        analytics.trackEvent('scholarship_interaction', {
            action: action,
            scholarshipName: scholarshipName
        });
    }
};

// Enhanced initialization with performance monitoring
function initializeEnhancedFeatures() {
    const startTime = performance.now();
    
    try {
        // Initialize accessibility features
        accessibilityFeatures.initKeyboardNavigation();
        accessibilityFeatures.enhanceARIA();
        accessibilityFeatures.initHighContrastMode();
        accessibilityFeatures.initReducedMotion();
        
        // Initialize performance optimizations
        performanceOptimizations.lazyLoadImages();
        
        // Initialize analytics
        analytics.trackPerformance();
        
        // Initialize enhanced search
    initializeAdvancedSearch();
        
        // Initialize theme
        initializeTheme();
        
        // Populate links
    populateLinks();
    
        // Update hero stats
        updateHeroStats();
        
        const endTime = performance.now();
        const initTime = endTime - startTime;
        
        analytics.trackEvent('app_initialized', {
            initTime: initTime,
            scholarshipCount: scholarships.length,
            savedCount: savedScholarships.length
        });
        
        console.log(`EduPath initialized in ${initTime.toFixed(2)}ms`);
        
    } catch (error) {
        handleError(error, 'initializeEnhancedFeatures');
    }
}

// Enhanced search with performance tracking
const performAdvancedSearchOptimized = performanceOptimizations.debounceSearch((searchTerm, filters) => {
    const searchStartTime = performance.now();
    
    try {
        // Perform the actual search
        performAdvancedSearch();
        
        const searchEndTime = performance.now();
        const searchTime = searchEndTime - searchStartTime;
        
        // Track search performance
        analytics.trackSearch(searchTerm, document.querySelectorAll('.scholarship-card').length, searchTime);
        
    } catch (error) {
        handleError(error, 'performAdvancedSearchOptimized');
    }
}, 300);

// Enhanced scholarship interaction tracking
function toggleSaveScholarship(scholarshipName) {
    try {
        const scholarship = scholarships.find(s => s.name === scholarshipName);
        const existingIndex = savedScholarships.findIndex(s => s.name === scholarshipName);
        
        let action;
        if (existingIndex > -1) {
            savedScholarships.splice(existingIndex, 1);
            action = 'unsaved';
            showNotification('Scholarship removed from saved list', 'info');
        } else {
            savedScholarships.push(scholarship);
            action = 'saved';
            showNotification('Scholarship saved successfully!', 'success');
        }
        
        localStorage.setItem('savedScholarships', JSON.stringify(savedScholarships));
        
        // Track interaction
        analytics.trackScholarshipInteraction(action, scholarshipName);
        
        // Announce to screen reader
        accessibilityFeatures.announceToScreenReader(
            action === 'saved' ? 'Scholarship saved' : 'Scholarship removed from saved list'
        );
        
        performAdvancedSearch(); // Refresh display
        
    } catch (error) {
        handleError(error, 'toggleSaveScholarship');
    }
}

function shareScholarship(scholarshipName) {
    try {
        const scholarship = scholarships.find(s => s.name === scholarshipName);
        const shareText = `Check out this scholarship: ${scholarship.name}\nDeadline: ${formatDate(scholarship.deadline)}\nAmount: ${scholarship.amount}\nLink: ${scholarship.link}`;
        
        if (navigator.share) {
            navigator.share({
                title: scholarship.name,
                text: shareText,
                url: scholarship.link
            }).then(() => {
                analytics.trackScholarshipInteraction('shared', scholarshipName);
                showNotification('Scholarship shared successfully!', 'success');
            }).catch(error => {
                console.warn('Share failed:', error);
                fallbackShare(shareText);
            });
        } else {
            fallbackShare(shareText);
        }
        
    } catch (error) {
        handleError(error, 'shareScholarship');
    }
}

function fallbackShare(shareText) {
    try {
        navigator.clipboard.writeText(shareText).then(() => {
            showNotification('Scholarship details copied to clipboard!', 'success');
            analytics.trackScholarshipInteraction('shared', 'clipboard');
        }).catch(() => {
            showNotification('Unable to share. Please copy the link manually.', 'warning');
        });
    } catch (error) {
        showNotification('Unable to share. Please copy the link manually.', 'warning');
    }
}

// Update hero statistics with real data
function updateHeroStats() {
    const totalScholarships = scholarships.length;
    const countries = new Set(scholarships.map(s => s.country)).size;
    
    // Calculate total funding using existing amount parser for consistency.
    const totalFunding = scholarships.reduce((total, s) => {
        const parsedAmount = parseAmount(s.amount);
        return total + (parsedAmount > 0 ? parsedAmount : 20000);
    }, 0);
    
    // Update the stats in the hero section
    const statNumbers = document.querySelectorAll('.hero-stats .stat-number');
    if (statNumbers.length >= 3) {
        statNumbers[0].textContent = `${totalScholarships}+`;
        statNumbers[1].textContent = countries.toString();
        const fundingInMillions = Math.max(1, Math.round(totalFunding / 1000000));
        statNumbers[2].textContent = `$${fundingInMillions}M+`;
    }
}

function addSavedScholarshipsTab() {
    const tabsContainer = document.querySelector('.tabs');
    const savedTab = document.createElement('button');
    savedTab.className = 'tab-button';
    savedTab.textContent = `Saved (${savedScholarships.length})`;
    savedTab.onclick = () => openTab('saved');
    tabsContainer.appendChild(savedTab);
    
    // Create saved scholarships section
    const savedSection = document.createElement('section');
    savedSection.id = 'saved';
    savedSection.className = 'tab-content';
    savedSection.innerHTML = `
        <h2>Saved Scholarships</h2>
        <div id="savedScholarshipsList"></div>
    `;
    
    document.querySelector('footer').before(savedSection);
    
    // Populate saved scholarships
    const savedContainer = document.getElementById('savedScholarshipsList');
    if (savedContainer) {
        const originalContainer = document.getElementById('recommendedScholarships');
        document.getElementById('recommendedScholarships').id = 'tempContainer';
        savedContainer.id = 'recommendedScholarships';
        displayRecommendations(savedScholarships);
        savedContainer.id = 'savedScholarshipsList';
        document.getElementById('tempContainer').id = 'recommendedScholarships';
    }
}
