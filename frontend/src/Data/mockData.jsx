import {
    FaRegCompass,
    FaBolt,
    FaChartLine,
    FaIndustry,
    FaSolarPanel,
    FaShieldAlt
} from "react-icons/fa";

// Isme koi JSX (< />) nahi hai, isliye .js file mein koi error nahi aayega
export const servicesData = [
    {
        id: 1,
        icon: <FaRegCompass />, // Sirf component ka naam pass kiya bina brackets ke
        title: "Advanced System Design",
        description: "Our engineering team creates tailored lithium-ion layouts optimized specifically to meet your unique load requirements."
    },
    {
        id: 2,
        icon: <FaBolt />,
        title: "Grid Integration",
        description: "Seamlessly connect solar and wind power to your storage. We ensure maximum grid stability and zero energy wastage."
    },
    {
        id: 3,
        icon: <FaChartLine />,
        title: "Performance Analytics",
        description: "Monitor the health of every single cell. Our advanced analytics service helps you maximize and extend your battery life."
    },
    {
        id: 4,
        icon: <FaIndustry />,
        title: "Industrial BESS",
        description: "High-capacity Battery Energy Storage Systems designed to manage peak loads and significantly reduce overall operational costs."
    },
    {
        id: 5,
        icon: <FaSolarPanel />,
        title: "Solar Integration",
        description: "Our premium lithium batteries integrate seamlessly with solar arrays, enabling reliable 24/7 access to renewable energy."
    },
    {
        id: 6,
        icon: <FaShieldAlt />,
        title: "BMS Maintenance",
        description: "Expert monitoring and maintenance of Battery Management Systems to prevent cell imbalance and ensure thermal safety."
    }
];


export const temporaryProducts = [
    {
        id: 1,
        name: "Premium Touch Series 51V 316Ah | 16KWh",
        price: "646,000.00",
        image: "https://cadabatteries.us/wp-content/uploads/2026/04/51-volt-cada-batteries1.png",
        description: "Perfect for UPS systems, residential solar setups, commercial storage & off-grid installations. Available in 51V Series with 100Ah | 150Ah | 200Ah | 280Ah | 300Ah capacities.",
        chemistry: "LiFePO4 (Lithium)",
        cycles: "6000+ @ 80% DOD"
    },
    {
        id: 2,
        name: "Premium Touch Series (48V)",
        price: "800.00",
        image: "https://cadabatteries.us/wp-content/uploads/2026/04/48-volt-shortlisted1.png",
        description: "100Ah 150Ah 51V Series |200Ah | 280Ah 300Ah",
        chemistry: "LiFePO4 (Lithium)",
        cycles: "6500+ Cycles"
    },
    {
        id: 3,
        name: "Standard Series (12V & 24V)",
        price: "800.00",
        image: "https://cadabatteries.us/wp-content/uploads/2026/04/12-volt-1.png",
        description: "75Ah 100Ah 150Ah 200Ah",
        chemistry: "LiFePO4 (Lithium)",
        cycles: "7000+ Premium Cycles"
    },
    {
        id: 4,
        name: "Bluetooth Smart Series (24V)",
        price: "800.00",
        image: "https://cadabatteries.us/wp-content/uploads/2026/04/24v-1.png",
        description: "Available Voltage & Capacity Variants 24V Series 75Ah 100Ah 150Ah 200Ah 300Ah",
        chemistry: "LiFePO4 (Lithium)",
        cycles: "6000+ Cycles"
    },
    {
        id: 5,
        name: "CADA Eco Compact 12V 50Ah",
        price: "68,000",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60",
        description: "Lightweight and portable lithium pack optimized for smaller server racks, emergency lighting, and small DC backup applications.",
        chemistry: "LiFePO4 (Lithium)",
        cycles: "5500+ Cycles"
    },
    {
        id: 6,
        name: "CADA Ultra High Capacity 48V 200Ah",
        price: "780,000",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60",
        description: "Massive utility scale energy capacity block. Built for full factory autonomy, industrial heavy machinery, and massive enterprise architectures.",
        chemistry: "LiFePO4 (Lithium)",
        cycles: "8000+ Military Grade"
    }
];


export const reviews = [
    {
        id: 1,
        name: "Mr. Salman Khan",
        role: "Industrialist",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        comment: "CADA's USA technology is a game changer for our factory. The 48V batteries are incredibly efficient!"
    },
    {
        id: 2,
        name: "Zainab Aziz",
        role: "Home Owner",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        comment: "Finally, a reliable lithium battery in Pakistan. My solar system works perfectly even at night."
    },
    {
        id: 3,
        name: "Omar Jaffar",
        role: "Tech Consultant",
        image: "https://randomuser.me/api/portraits/men/46.jpg",
        rating: 5,
        comment: "The Smart BMS feature is what sets CADA apart. I can monitor everything. Highly recommended!"
    },
    {
        id: 4,
        name: "Engr. Fahad Mustafa",
        role: "Solar Project Lead",
        image: "https://randomuser.me/api/portraits/men/81.jpg",
        rating: 5,
        comment: "Deployed CADA lithium batteries for a commercial solar setup in Lahore. The energy density and zero-maintenance nature completely outclasses traditional setups."
    },
    {
        id: 5,
        name: "Dr. Amara Khan",
        role: "Clinic Director",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 5,
        comment: "Our medical equipment needs 100% uninterrupted power. CADA batteries switch over so fast you don't even notice the load shedding. Excellent investment!"
    },
    {
        id: 6,
        name: "Engr. Tariq Mehmood",
        role: "Industrial Plant Manager",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        comment: "We deployed CADA's High-capacity BESS at our textile facility. Managing peak loads has never been this efficient—our operational electricity costs have dropped significantly."
    },
    {
        id: 7,
        name: "Zainab Shah",
        role: "Solar Solutions Consultant",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        rating: 5,
        comment: "Integrating CADA lithium batteries with residential solar setups has been a game-changer for my clients. The BMS maintenance is flawless, and the cell balancing ensures maximum safety."
    },
    {
        id: 8,
        name: "M. Haris Raza",
        role: "Data Center Operations Head",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        rating: 5,
        comment: "For servers, microsecond fluctuations can cause data loss. CADA's advanced system design provides absolute ultra-stable power output. Truly USA standard reliability in Pakistan!"
    },
    {
        id: 9,
        name: "Ayesha Siddiqui",
        role: "Smart Home Enthusiast",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
        rating: 5,
        comment: "Switched my hybrid solar inverter setup to CADA 48V series. The compact wall-mount design looks beautiful, and it gives a flawless backup for our heavy home appliances 24/7."
    }, {
        id: 10,
        name: "Chaudhary Nabeel",
        role: "Commercial Farm Owner",
        image: "https://i.pinimg.com/564x/25/3a/bf/253abf4f1f4bc16b6dc04571f8d21624.jpg",
        rating: 5,
        comment: "We synced CADA's high-capacity lithium batteries with our agricultural solar tubes. Even during cloudy days or nighttime, the power delivery is rock-solid. Best decision for heavy-duty setups!"
    }
];
