const express = require('express');
const app = express();
const port = 3000;

// Define a route to send details in JSON format
app.get('/About-Me', (req, res) => {
    console.log(req, "Req");
    const userDetails = {
        name: "Aakash R",
        age: 22,
        location: "Karaikal, Pondicherry",
        email: "aakashr2308@gmail.com",
        phone: "+91 6383000350",
        linkedin: "https://linkedin.com/in/aakash-r-9a151024b",
        github: "https://github.com/AakashTheDev",
        website: "https://thenoobdev.web.app",
        portfolio: "https://devaakashportfolio.w3spaces.com",
        domain: "https://thenoobdev.com",
        photoURL: "https://firebasestorage.googleapis.com/v0/b/personal-website-a40f7.appspot.com/o/Picsart_24-02-13_20-12-23-170.jpg?alt=media&token=c428d14e-bf1e-4f62-9e70-25df68cca937",
        resume: "https://firebasestorage.googleapis.com/v0/b/personal-website-a40f7.appspot.com/o/Aakash_Resume_Final_.pdf?alt=media&token=5c082591-8160-4cbc-9bc8-44ca9bcd0394",
        profession: "Full Stack Developer",
        summary: "Passionate and motivated Full Stack Developer with a strong foundation in software development. Eager to learn new technologies and contribute to innovative projects.",
        skills: [
            "Programming Languages: C, C++, JavaScript, Python, Go Lang",
            "Web Development: HTML5, CSS3, Tailwind CSS, Bootstrap, jQuery, React JS, Next JS, Node JS, Express JS",
            "Database Management: Firebase, Pocketbase, MongoDB",
            "Version Control: Git, GitHub",
            "Tools: VS Code, Postman, Thunder Client Etc",
            "MS Office",
            "Problem Solving",
            "Communication Skills"
        ],
        education: [
            {
                degree: "Bachelor of Technology in Electronics and Communication Engineering",
                university: "Pondicherry University",
                year: "2018 - 2022",
                cgpa: 7.6,
            },
        ],
        experience: [
            {
                position: "Junior Full Stack Developer",
                company: "Wahmi Softwares and Solutions",
                location: "Nagore, Nagappattinam",
                duration: "Nov 2022 - Present",
                responsibilities: [
                    "Worked in the development of web applications using Web Technologies (HTML5, CSS3, Tailwind CSS, Bootstrap, jQuery, Firebase), React.js and Node.js.",
                    "Worked in the development of MERN Stack Projects",
                    "Collaborated with team members to troubleshoot and debug code issues."
                ]
            }
        ],
        projects: [
            {
                id: 1,
                subject: "Career Guidance Application With Admin Dashboard",
                description: "Embark on a journey of self-discovery with our revolutionary Career Guidance Application. Tailored for students navigating the maze of educational choices, our platform offers a seamless experience in finding the perfect courses and colleges. Our stunning UI/UX design, coupled with intuitive filters, ensures an immersive exploration of possibilities. Powered by cutting-edge technologies including HTML5, CSS3, Tailwind CSS, JavaScript, React JS, and Firebase, our application provides comprehensive insights and personalized recommendations. With an integrated Admin Dashboard, educators can efficiently manage and curate content, fostering a dynamic learning ecosystem. Experience the future of career exploration with our innovative solution!"
            }, {
                id: 2,
                subject: "Real Estate Web Application With Admin Dashboard",
                description: "Welcome to the future of real estate exploration! Our Real Estate Web Application revolutionizes property search and management. With a sleek and intuitive interface, users can seamlessly browse through a vast array of properties, from cozy apartments to luxurious estates. Our platform, powered by HTML5, CSS3, Tailwind CSS, JavaScript, React JS, and Firebase, delivers lightning-fast performance and unparalleled user experience. Advanced search filters allow users to pinpoint their dream property with precision. Meanwhile, property owners and agents can leverage our integrated Admin Dashboard to effortlessly list, manage, and analyze properties, ensuring optimal visibility and strategic decision-making. Whether you're buying, selling, or renting, unlock the potential of real estate with our innovative solution!"
            }, {
                id: 3,
                subject: "Ticket Raising Web Application With Admin, Employee, and Client Dashboards",
                description: "Experience unparalleled efficiency in issue resolution with our Ticket Raising Web Application. Seamlessly designed for seamless collaboration, our platform empowers users with intuitive dashboards tailored to their roles. Clients can effortlessly raise tickets, track progress, and communicate with support teams through a user-friendly interface. Meanwhile, employees are equipped with robust tools to prioritize, assign, and resolve tickets swiftly, ensuring superior customer satisfaction. Administrators have full oversight and control through our comprehensive Admin Dashboard, facilitating streamlined operations and strategic decision-making. Built with HTML5, CSS3, Tailwind CSS, JavaScript, React JS, and Firebase, our application delivers lightning-fast performance and unparalleled user experience. Elevate your support ecosystem to new heights with our innovative solution!"
            }, {
                id: 4,
                subject: "PDF Development Using React JS & Node JS",
                description: "Unlock the power of PDF development in our comprehensive MERN stack application! As the PDF Developer, you play a pivotal role in crafting seamless document solutions within our ecosystem. Leveraging the strengths of React JS for the frontend and Node JS for backend processing, our application offers a robust platform for creating, editing, and managing PDF documents with finesse. Your expertise ensures that our users experience top-notch functionality, whether it's generating reports, creating invoices, or designing digital documents. Collaborating within our MERN stack environment, you'll drive innovation and excellence in PDF development, elevating our application to new heights of efficiency and usability."
            }, {
                id: 5,
                subject: "Learn Full Stack Development Website",
                description: "Embark on an enriching journey into Full Stack Development with our immersive learning platform. Dive into the world of web development with comprehensive courses designed to empower learners at every stage of their journey. Our platform offers a seamless experience, providing curated content, interactive exercises, and real-world projects to enhance your skills in both frontend and backend development. Whether you're a beginner or an experienced developer looking to expand your skill set, our intuitive interface and expertly crafted curriculum ensure a rewarding learning experience. Built with HTML5, CSS3, Tailwind CSS, JavaScript, React JS, and Node JS, our website delivers lightning-fast performance and unparalleled user experience. Join our community and unlock the full potential of Full Stack Development today!"
            },            
        ],
        mini_projects: [
            {
                id: 1,
                subject: "File Sharing Application",
                description: "It is an file sharing application for sharing any type of files using Javascript & React JS",
                url: "https://github.com/AakashTheDev/File-Sharing-Application"
            }, {
                id: 2,
                subject: "Text 2 Speech Application",
                description: "It is an Text 2 Speech application using Javascript & React JS",
                url: "https://github.com/AakashTheDev/Text2Speech"
            }, {
                id: 3,
                subject: "Blog Application",
                description: "It is an Blogs Sharing Application for sharing any type of blogs using Javascript & React JS",
                url: "https://github.com/AakashTheDev/Simple-MERN-Blog-Application"
            }, {
                id: 4,
                subject: "Speech to Text Application",
                description: "It is an Speech to Text Application Javascript & React JS",
                url: "https://github.com/AakashTheDev/Speech2Text"
            }, {
                id: 5,
                subject: "Alarm Application",
                description: "It is an Alarm Application using Javascript & React JS",
                url: "https://github.com/AakashTheDev/Alarm-App-Using-Javascript"
            }, {
                id: 6,
                subject: "Weather Application",
                description: "It is an Simple Weather Application Javascript, Weather API & React JS",
                url: "https://github.com/AakashTheDev/Weather-Application"
            }, {
                id: 7,
                subject: "ToDo Application",
                description: "It is an Simple ToDo Application using Javascript, Redux & React JS",
                url: "https://github.com/AakashTheDev/Simple-ToDo-App-Using-Redux"
            }, {
                id: 8,
                subject: "Parallex Website",
                description: "It is an Simple Parallex Website Javascript & React JS",
                url: "https://github.com/AakashTheDev/Parallex_Effect_With_React"
            }, {
                id: 9,
                subject: "MERN Stack Application",
                description: "It is an MERN Stack Application 4 Employee Management with JWT Authentication",
                url: "https://github.com/AakashTheDev/EM-CRUD-With-MERN"
            }, {
                id: 10,
                subject: "E-Commerce Application",
                description: "It is an Simple E-Commerce Application using Javascript, React JS & Pocket Base",
                url: "https://github.com/AakashTheDev/E-Commerce-App-With-React-JS"
            }, {
                id: 11,
                subject: "Code Editor Application",
                description: "It is an Simple Code Editor Application HTML, CSS & Javascript",
                url: "https://github.com/AakashTheDev/Code-Editor"
            }, {
                id: 12,
                subject: "Chat Application",
                description: "It is an Simple Chat Application using Javascript, React JS & Firebase",
                url: "https://github.com/AakashTheDev/Chat-Application"
            }, {
                id: 13,
                subject: "Calculator Application",
                description: "It is an Simple Calculator Application using Javascript & React JS",
                url: "https://github.com/AakashTheDev/Mark-Calculator"
            }, {
                id: 14,
                subject: "AI Images Generator",
                description: "It is an Simple AI Images Generating application using MERN Stack",
                url: "https://github.com/AakashTheDev/Simple-Images-Generator-Using-MERN"
            }, {
                id: 15,
                subject: "Portfolio Website",
                description: "It is my Personal Portfolio Website using HTML5, CSS3, Javascript & React JS",
                url: "https://github.com/AakashTheDev/Portfolio-Website"
            }, {
                id: 16,
                subject: "Piano Application",
                description: "It is an Simple Piano Application Using Javascript & React JS",
                url: "https://github.com/AakashTheDev/Simple-Piano"
            }
        ],
        certifications: [
            {
                title: "Full Stack Development Bootcamp",
                issuer: "Udemy",
                year: "2022",
            },
            {
                title: "Front End Development",
                issuer: "Udemy",
                year: "2023",
            }, {
                title: "React JS Development",
                issuer: "Udemy",
                year: "2022",
            }, {
                title: "Web Development",
                issuer: "Edurekha",
                year: "2022",
            }, {
                title: "Advanced Diploma in Java Programming",
                issuer: "GTech Computer Education",
                year: "2022",
            },
        ],
        languages: ["English", "Tamil"],
        interests: [
            "Reading about new technologies",
            "Contributing to open-source projects",
            "Playing cricket"
        ]
    };

    res.json(userDetails);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
