// script.js

gsap.registerPlugin(ScrollTrigger);

// Header animation on scroll
gsap.from("#header", {
    opacity: 0,
    y: -100,
    duration: 1,
    ease: "power3.out"
});

// Hero section animation
gsap.from("#hero .hero-item", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power3.out",
    stagger: 0.3
});

// About section horizontal scroll effect
gsap.to("#about", {
    xPercent: -100,
    ease: "none",
    scrollTrigger: {
        trigger: "#about",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true
    }
});

// Resume Creator section 3D hover effect
gsap.to(".resume-item", {
    rotationY: 15,
    rotationX: 15,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#resume-creator",
        start: "top center",
        end: "bottom center",
        scrub: true
    }
});

// Horizontal scrolling effect
gsap.to("#support", {
    xPercent: -50,
    ease: "none",
    scrollTrigger: {
        trigger: "#support",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true
    }
});

// Form submission and PDF download
document.getElementById('resume-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const resumeData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        school: document.getElementById('school').value,
        degree: document.getElementById('degree').value,
        graduation: document.getElementById('graduation').value,
        company: document.getElementById('company').value,
        position: document.getElementById('position').value,
        duration: document.getElementById('duration').value,
        skills: document.getElementById('skills').value
    };
    
    document.getElementById('resume-output').innerHTML = `
        <h3>${resumeData.name}</h3>
        <p><strong>Email:</strong> ${resumeData.email}</p>
        <p><strong>Phone:</strong> ${resumeData.phone}</p>
        <p><strong>School/University:</strong> ${resumeData.school}</p>
        <p><strong>Degree:</strong> ${resumeData.degree}</p>
        <p><strong>Year of Graduation:</strong> ${resumeData.graduation}</p>
        <p><strong>Company:</strong> ${resumeData.company}</p>
        <p><strong>Position:</strong> ${resumeData.position}</p>
        <p><strong>Duration:</strong> ${resumeData.duration}</p>
        <p><strong>Skills:</strong> ${resumeData.skills}</p>
    `;
});

// Download resume as PDF
document.getElementById('download-pdf').addEventListener('click', function () {
    const resumeOutput = document.getElementById('resume-output').innerHTML;
    const pdfWindow = window.open('', '', 'width=800,height=600');
    pdfWindow.document.write(`
        <html>
            <head>
                <title>Resume PDF</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    h3 { font-size: 24px; }
                    p { font-size: 16px; }
                </style>
            </head>
            <body>
                ${resumeOutput}
            </body>
        </html>
    `);
    pdfWindow.document.close();
    pdfWindow.focus();
    pdfWindow.print();
});
