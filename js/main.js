
const events = {
    "event-001": {
        title: "Build Something Amazing",
        type: "WORKSHOP",
        category: "Technology",
        description: "Explore new technologies, create something of your own, and meet fellow innovators.",
        date: "To be announced",
        time: "To be announced",
        location: "LPU Campus",
        symbol: "⌘",
        theme: "event-tech",
        label: "IDEAS INTO REALITY",
        highlights: [
            "Explore ideas and emerging technologies.",
            "Connect with students who share your interests.",
            "Learn, collaborate, and create something new."
        ]
    },
    "event-002": {
        title: "Celebrate Campus Life",
        type: "FESTIVAL",
        category: "Culture",
        description: "Make space for music, performances, creative expression, and shared memories.",
        date: "To be announced",
        time: "To be announced",
        location: "LPU Campus",
        symbol: "✳",
        theme: "event-culture",
        label: "MAKE SOME NOISE",
        highlights: [
            "Enjoy music and campus performances.",
            "Celebrate creativity and student talent.",
            "Make memories with your campus community."
        ]
    },
    "event-003": {
        title: "Meet Your Future",
        type: "NETWORKING",
        category: "Career",
        description: "Exchange ideas, discover opportunities, and connect with people who inspire you.",
        date: "To be announced",
        time: "To be announced",
        location: "LPU Campus",
        symbol: "↗",
        theme: "event-career",
        label: "YOUR FUTURE STARTS HERE",
        highlights: [
            "Meet students and professionals.",
            "Discover opportunities and new ideas.",
            "Build meaningful connections."
        ]
    },
    "event-004": {
        title: "Bring Your Game",
        type: "SPORTS",
        category: "Sports",
        description: "Get moving, find your team, and make every moment on the field count.",
        date: "To be announced",
        time: "To be announced",
        location: "LPU Campus",
        symbol: "✦",
        theme: "event-sports",
        label: "PLAY YOUR PART",
        highlights: [
            "Get active and enjoy friendly competition.",
            "Meet teammates who share your interests.",
            "Bring your energy and team spirit."
        ]
    }
};

const eventId = new URLSearchParams(window.location.search).get("id");
const event = events[eventId];

if (event) {
    document.title = `${event.title} — CampusEvents`;

    document.getElementById("event-title").textContent = event.title;
    document.getElementById("event-category").textContent =
        `${event.type} · ${event.category}`;
    document.getElementById("event-description").textContent =
        event.description;
    document.getElementById("event-date").textContent = event.date;
    document.getElementById("event-time").textContent = event.time;
    document.getElementById("event-location").textContent = event.location;
    document.getElementById("event-category-value").textContent = event.category;

    const artwork = document.querySelector(".event-details-art");
    artwork.classList.remove(
        "event-tech", "event-culture", "event-career", "event-sports"
    );
    artwork.classList.add(event.theme);

    document.querySelector(".event-details-symbol").textContent = event.symbol;
    document.querySelector(".event-details-art-label").textContent = event.label;

    const highlights = document.querySelector(".event-details-highlights ul");
    highlights.replaceChildren();

    event.highlights.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        highlights.appendChild(li);
    });

    document.querySelector(".event-registration-section h2").textContent =
        `Join ${event.title}.`;
}
