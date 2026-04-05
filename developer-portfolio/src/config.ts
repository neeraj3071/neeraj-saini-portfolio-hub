import aiChatbotImage from "./assets/AI Chatbot.png";
import awsBookstoreImage from "./assets/Bookstore on AWS.png";
import dvdRentalImage from "./assets/DVD Rental.png";
import gitResearchImage from "./assets/GitResearch tool.png";
import hotwheelsImage from "./assets/Hotwheels.png";
import iotVehicleImage from "./assets/IOT Vehicle.png";
import invoiceProImage from "./assets/Invoicepro.png";
import sainiBatteryImage from "./assets/SainiBatteryWebsite.png";
import dailyOrbitImage from "./assets/dailyorbit.png";

export const config = {
    developer: {
        name: "Neeraj",
        fullName: "Neeraj Randhir Singh Saini",
        title: "Full-Stack Software Engineer",
        description:
            "Full-stack software engineer with 3+ years of experience building scalable applications, microservices, and automation systems.",
        location: "Detroit, MI",
    },
    hero: {
        eyebrow: "software engineer · detroit, mi",
        headline: ["art of", "building", "scalable code"],
        subheading: "full-stack software engineer",
        experienceBadge: "3+ years of experience",
        blurb:
            "helping companies build scalable software with character-driven engineering. 3+ years of experience. m.s. @ university of michigan.",
        availability: "open to full-time & internships",
        resumeUrl:
            "https://drive.google.com/file/d/1NIAo0TSpN_srA-lIm8Dtdn31Uo10IYTR/view?usp=sharing",
        photo: "/images/mypicnbg.png",
        alt: "Neeraj Randhir Singh Saini",
    },
    social: {
        github: "https://github.com/neeraj3071",
        linkedin: "https://linkedin.com/in/neerajsaini07",
        email: "neerajsa@umich.edu",
        location: "Detroit, MI",
    },
    about: {
        title: "About Me",
        description:
            "full-stack software engineer with 3+ years of experience developing scalable web applications, microservices, and automation solutions.",
    },
    experiences: [
        {
            position: "Graduate Research Assistant",
            company: "University of Michigan",
            period: "Jan 2025 - Present",
            location: "Dearborn, MI",
            description:
                "performed large-scale analysis of 350+ commits across open-source projects, deriving structured insights on refactoring and software evolution.",
            responsibilities: [
                "devised a hybrid automation pipeline integrating analytics tools with python classifiers",
                "reduced manual effort across code review and analysis workflows",
                "translated research findings into actionable engineering recommendations",
            ],
            technologies: ["Research", "Automation", "Python", "Analytics"],
        },
        {
            position: "Software Developer Engineer",
            company: "Reliance Jio Platforms Limited",
            period: "Jun 2023 - Aug 2024",
            location: "Mumbai, India",
            description:
                "developed 30+ spring boot microservices with kafka/mysql, improving data synchronization efficiency by 40%.",
            responsibilities: [
                "optimized ci/cd using jenkins and kubernetes, cutting deployment time by 25%",
                "constructed react.js interfaces integrated with rest apis, increasing performance and usability by 30%",
                "enhanced testing using junit, selenium, and postman, improving defect detection by 35%",
            ],
            technologies: ["Spring Boot", "Kafka", "MySQL", "React"],
        },
        {
            position: "Software Developer & Operations Manager",
            company: "Saini Battery and Auto Electrical Works",
            period: "Aug 2022 - Oct 2023",
            location: "Pune, India",
            description:
                "created a billing and inventory system using react.js, node.js, and mysql, reducing processing time by 45%.",
            responsibilities: [
                "launched the business website and automated reports",
                "increased online inquiries by 25% through digital workflows",
                "streamlined billing and inventory handling for daily operations",
            ],
            technologies: ["React", "Node.js", "MySQL"],
        },
        {
            position: "Software Developer Intern",
            company: "The Entrepreneurship Network",
            period: "Feb 2022 - Jun 2022",
            location: "Pune, India",
            description:
                "engineered restful apis using node.js and express.js to support data visualization tools.",
            responsibilities: [
                "optimized sql queries and caching with redis, achieving 35% faster execution",
                "supported internal tools and integration work",
                "improved backend reliability for reporting and visualization tools",
            ],
            technologies: ["Node.js", "Express", "SQL", "Redis"],
        },
    ],
    projects: [
        {
            id: 1,
            title: "Daily Orbit",
            category: "Full-Stack / AI",
            technologies:
                "Next.js 16, React 19, TypeScript, Tailwind CSS v4, Express 5, Prisma, PostgreSQL, Gemini 2.0 Flash",
            image: dailyOrbitImage,
            description:
                "full-stack personal analytics cockpit to track sleep, workouts, habits, mood, and spending with ai-powered insights.",
            liveDemo: "https://daily-orbit-six.vercel.app",
            sourceCode: "https://github.com/neeraj3071/Personal-Life-DashBoard",
            highlights: "life score engine · ai forecast · frontend on vercel",
            featured: true,
        },
        {
            id: 2,
            title: "Hot Wheels Marketplace",
            category: "Marketplace",
            technologies:
                "Next.js 16, React 19, TypeScript, Node.js, Express, PostgreSQL, Prisma, JWT",
            image: hotwheelsImage,
            description:
                "production-ready marketplace for hot wheels collectors with real-time messaging, search & filtering, wishlists.",
            liveDemo: "https://hotwheels-marketplace.vercel.app/",
            sourceCode: "https://github.com/neeraj3071/HotWheels-Marketplace",
            highlights: "34 api endpoints · 74 tests · 100+ concurrent users",
            featured: true,
        },
        {
            id: 3,
            title: "InvoicePro",
            category: "SaaS / Finance",
            technologies: "Vue.js 3, Vuex 4, Firebase, Firestore, SCSS",
            image: invoiceProImage,
            description:
                "cloud-based invoice management app with firebase authentication and real-time data sync.",
            liveDemo: "https://neeraj3071.github.io/InvoicePro/",
            sourceCode: "https://github.com/neeraj3071/InvoicePro",
            highlights: "firebase auth · real-time cloud sync",
            featured: true,
        },
        {
            id: 4,
            title: "IoT Vehicle Monitoring",
            category: "IoT / Dashboard",
            technologies: "React.js, Node.js, Python, MongoDB, Kubernetes, MQTT",
            image: iotVehicleImage,
            description:
                "cloud-native iot solution for real-time vehicle monitoring with live telemetry for 500+ vehicles.",
            sourceCode:
                "https://github.com/neeraj3071/IOT---Enabled-Vehicle-Monitoring-Dashboard",
            highlights: "99.9% uptime · scalable pipelines",
            featured: true,
        },
        {
            id: 5,
            title: "GreenChain Eco Tracker",
            category: "AI / Sustainability",
            technologies: "React.js, FastAPI, MongoDB, Gemini API, JWT",
            image: "/images/project-5.webp",
            description:
                "ai-powered sustainability tracker using gemini api with jwt auth.",
            sourceCode:
                "https://github.com/neeraj3071/GreenChain-Community-Eco-Action-Tracker",
            highlights: "ai-powered eco insights",
            featured: true,
        },
        {
            id: 6,
            title: "AI Chatbot",
            category: "Conversational AI",
            technologies: "React, Spring Boot, Docker, Render",
            image: aiChatbotImage,
            description:
                "full-stack chatbot using react and spring boot, integrated with gemini flash api.",
            liveDemo: "https://myaichatbot-springboot.netlify.app/",
            sourceCode: "https://github.com/neeraj3071/AI-ChatBot",
        },
        {
            id: 7,
            title: "Aura Sense",
            category: "Computer Vision",
            technologies: "TensorFlow, Keras, Flask, OpenCV",
            image: "/images/project-7.png",
            description:
                "real-time deep learning system for gender and mood recognition using mobilenetv2.",
            liveDemo: "https://www.youtube.com/watch?v=uZQCt3bLOB4",
            sourceCode:
                "https://github.com/neeraj3071/Aura-Sense---Gender-and-Mood-Recognizer-System",
            presentation: "https://www.youtube.com/watch?v=BnlZIYyMLEc",
        },
        {
            id: 8,
            title: "AWS Cloud App",
            category: "Cloud / Full-Stack",
            technologies: "React, Spring Boot, AWS, CloudWatch",
            image: awsBookstoreImage,
            description:
                "full-stack app deployed with aws services and integrated ci/cd monitoring.",
            sourceCode: "https://github.com/neeraj3071/Book-Store-on-Aws-full-stack-",
        },
        {
            id: 9,
            title: "AI Test Case Generator",
            category: "Developer Tools",
            technologies: "React, Flask, OpenAI API, GitHub Actions",
            image: "/images/project-9.png",
            description:
                "intelligent tool that automates unit test case generation using openai's api.",
            sourceCode: "https://github.com/neeraj3071/AI-Powered-Test-Case-Generator",
        },
        {
            id: 10,
            title: "Quiz Management System",
            category: "Backend / Education",
            technologies: "Java, Spring Boot, MySQL, REST API",
            image: "/images/project-10.png",
            description:
                "secure and scalable quiz platform with user roles and performance optimization.",
            sourceCode: "https://github.com/neeraj3071/Quiz-App",
        },
        {
            id: 11,
            title: "DVD Rental Database",
            category: "SQL / Database",
            technologies: "PostgreSQL, SQL, Indexing",
            image: dvdRentalImage,
            description:
                "postgresql-based project focused on schema design, query optimization, and tuning.",
            sourceCode: "https://github.com/neeraj3071/dvd_rental_project_sql",
        },
        {
            id: 12,
            title: "Git Research Tool",
            category: "Java / Analytics",
            technologies: "Java, GitHub API, Java Swing",
            image: gitResearchImage,
            description:
                "java app for analyzing github repos with automated commit analysis.",
            sourceCode: "https://github.com/neeraj3071/Git-Research-Tool",
        },
        {
            id: 13,
            title: "Saini Battery Website",
            category: "Business Website",
            technologies: "HTML, CSS, JavaScript, SEO",
            image: sainiBatteryImage,
            description:
                "official website for a local business, built for mobile and seo performance.",
            liveDemo: "https://saini-battery.netlify.app/",
        },
    ],
    contact: {
        email: "neerajsa@umich.edu",
        github: "https://github.com/neeraj3071",
        linkedin: "https://linkedin.com/in/neerajsaini07",
        resumeUrl:
            "https://drive.google.com/file/d/1NIAo0TSpN_srA-lIm8Dtdn31Uo10IYTR/view?usp=sharing",
    },
    skills: {
        develop: {
            title: "FULL-STACK ENGINEER",
            description: "Building scalable web systems and product experiences",
            details:
                "Building full-stack applications with React, Next.js, Node.js, Spring Boot, and Python. Focused on reliable APIs, clean interfaces, and production-ready delivery.",
            tools: [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Spring Boot",
                "Python",
                "REST APIs",
                "PostgreSQL",
                "MongoDB",
                "Tailwind CSS",
            ],
        },
        design: {
            title: "PLATFORM & AI",
            description: "Shipping cloud, data, and AI systems",
            details:
                "Working across cloud platforms, microservices, CI/CD, containerization, and applied AI to ship resilient systems and automation workflows.",
            tools: [
                "AWS",
                "Azure",
                "Docker",
                "Kubernetes",
                "Kafka",
                "Jenkins",
                "GitHub Actions",
                "TensorFlow",
                "PyTorch",
                "Gemini",
            ],
        },
    },
    certifications: [
        {
            issuer: "JPMorganChase",
            issuerLogo: "jpmc",
            credentials: [
                {
                    title: "Software Engineering Job Simulation",
                    issuedDate: "Mar 2026",
                    expiresDate: "Mar 2027",
                    credentialId: "aDuLr3MPHzxc5saih",
                    skills: [],
                },
            ],
        },
        {
            issuer: "Wells Fargo",
            issuerLogo: "wellsfargo",
            credentials: [
                {
                    title: "Software Engineering Job Simulation",
                    issuedDate: "Feb 2026",
                    expiresDate: "Feb 2027",
                    credentialId: "79p6HsAxEGaytWmdh",
                    skills: ["Java", "Spring Boot"],
                },
            ],
        },
        {
            issuer: "Google",
            issuerLogo: "google",
            credentials: [
                {
                    title: "Google AI Essentials",
                    issuedDate: "Feb 2026",
                    credentialId: "96EB0HV4R69O",
                    skills: ["Artificial Intelligence (AI)"],
                },
                {
                    title: "Use AI Responsibly",
                    issuedDate: "Feb 2026",
                    credentialId: "RNHMA5D66EIQ",
                    skills: [],
                },
                {
                    title: "Discover the Art of Prompting",
                    issuedDate: "Feb 2026",
                    credentialId: "A3I38HBK6OE0",
                    skills: [],
                },
                {
                    title: "Maximize Productivity With AI Tools",
                    issuedDate: "Feb 2026",
                    credentialId: "ARIKS3GNQS4H",
                    skills: ["Artificial Intelligence (AI)"],
                },
                {
                    title: "Introduction to AI",
                    issuedDate: "Feb 2026",
                    credentialId: "IZ8V7LGYJEON",
                    skills: [],
                },
            ],
        },
        {
            issuer: "LinkedIn",
            issuerLogo: "linkedin",
            credentials: [
                {
                    title: "Node.js Essential Training",
                    issuedDate: "Jan 2026",
                    credentialId: "linkedin-nodejs-2026",
                    skills: ["Node.js"],
                },
                {
                    title: "JavaScript Essential Training",
                    issuedDate: "Sep 2025",
                    credentialId: "linkedin-js-2025",
                    skills: ["JavaScript"],
                },
                {
                    title: "Java EE: Servlets and JavaServer Pages (JSP)",
                    issuedDate: "Sep 2025",
                    credentialId: "linkedin-javaee-2025",
                    skills: ["Java"],
                },
                {
                    title: "Learning Java Collections",
                    issuedDate: "Jul 2024",
                    credentialId: "linkedin-javacollections-2024",
                    skills: ["Java", "Java Frameworks"],
                },
                {
                    title: "HTML Essential Training",
                    issuedDate: "Jul 2024",
                    credentialId: "linkedin-html-2024",
                    skills: ["HTML", "Front-End Development"],
                },
                {
                    title: "Learning Java Enterprise Edition",
                    issuedDate: "Jul 2024",
                    credentialId: "linkedin-javaee2-2024",
                    skills: ["Java"],
                },
                {
                    title: "Java Database Access with Hibernate",
                    issuedDate: "Jul 2024",
                    credentialId: "linkedin-hibernate-2024",
                    skills: ["Java"],
                },
                {
                    title: "Learning Spring with Spring Boot",
                    issuedDate: "Feb 2024",
                    credentialId: "linkedin-springboot-2024",
                    skills: ["Spring Boot", "Spring Framework"],
                },
                {
                    title: "Spring: Framework in Depth",
                    issuedDate: "Feb 2024",
                    credentialId: "linkedin-spring-2024",
                    skills: ["Back-End Web Development", "Spring Framework"],
                },
                {
                    title: "Java 8 Essential Training",
                    issuedDate: "Jan 2024",
                    credentialId: "linkedin-java8-2024",
                    skills: ["Java"],
                },
                {
                    title: "Designing RESTful APIs",
                    issuedDate: "Jan 2024",
                    credentialId: "linkedin-restapi-2024",
                    skills: ["REST APIs"],
                },
                {
                    title: "JavaScript: Ajax and Fetch",
                    issuedDate: "Jan 2024",
                    credentialId: "linkedin-ajax-2024",
                    skills: ["Fetch", "AJAX"],
                },
                {
                    title: "Managing Project Stakeholders",
                    issuedDate: "Dec 2023",
                    credentialId: "linkedin-stakeholders-2023",
                    skills: ["Stakeholder Management"],
                },
                {
                    title: "MySQL Essential Training (2019)",
                    issuedDate: "Dec 2023",
                    credentialId: "linkedin-mysql-2023",
                    skills: ["MySQL"],
                },
                {
                    title: "Generative AI in Learning and Development",
                    issuedDate: "Dec 2023",
                    credentialId: "linkedin-genai-2023",
                    skills: ["Artificial Intelligence for Business"],
                },
                {
                    title: "Software Development Life Cycle (SDLC)",
                    issuedDate: "Dec 2023",
                    credentialId: "linkedin-sdlc-2023",
                    skills: ["Software Development Life Cycle (SDLC)"],
                },
                {
                    title: "Learning REST APIs",
                    issuedDate: "Dec 2023",
                    credentialId: "linkedin-restapi2-2023",
                    skills: ["REST APIs"],
                },
                {
                    title: "Programming Foundations: Databases",
                    issuedDate: "Dec 2023",
                    credentialId: "linkedin-databases-2023",
                    skills: ["Databases", "Database Development"],
                },
                {
                    title: "Programming Foundations: Secure Coding",
                    issuedDate: "Dec 2023",
                    credentialId: "linkedin-securecoding-2023",
                    skills: ["Secure Coding"],
                },
                {
                    title: "HTTP Essential Training",
                    issuedDate: "Dec 2023",
                    credentialId: "linkedin-http-2023",
                    skills: ["Hypertext Transfer Protocol (HTTP)"],
                },
                {
                    title: "Programming Foundations: APIs and Web Services",
                    issuedDate: "Dec 2023",
                    credentialId: "linkedin-apiweb-2023",
                    skills: ["Web Services", "API Development"],
                },
            ],
        },
    ],
};


