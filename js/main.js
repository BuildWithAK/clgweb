// Countdown Timer
const eventDate = new Date('2025-09-30T10:30:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const diff = eventDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `
        <div class="timer-item">
            <div>${days}</div>
            <small>Days</small>
        </div>
        <div class="timer-item">
            <div>${hours}</div>
            <small>Hours</small>
        </div>
        <div class="timer-item">
            <div>${minutes}</div>
            <small>Minutes</small>
        </div>
        <div class="timer-item">
            <div>${seconds}</div>
            <small>Seconds</small>
        </div>
    `;
}

setInterval(updateCountdown, 1000);

// Notices Data
/*const notices = [
    {
        title: "Registration Deadline",
        content: "Last date for registration Feb 26th",
        time: "2025-02-26",
        status: "urgent"
    },
    {
        title: "Events Schedule ",
        content: "Check portal for updated  Events schedules & Results",
        time: "2024-02-26",
        status: "new"
    }
];*/

// Results Data
const results = [
    {
        competition: "Debugger's Dilemma",
        First: "Avdhut Taral",
        Second: "Aniruddh Hujare",
        Third: "-"

        
    },

    {

        competition: "Tech Quiz",
        First: "Kartik Raut",
        Second: "Aniruddh Hujare",
        Third: "Avdhut Taral"
    },

   {
    competition: "Research Symposium",
    First: "Kartik Raut",
    Second: "Aniruddh Hujare",
    Third: "Avdhut Taral"
   }
    
];

// Populate Notices
/*
const noticeBoard = document.getElementById('noticeBoard');
notices.forEach(notice => {
    const noticeCard = document.createElement('div');
    noticeCard.className = 'notice-card';
    noticeCard.innerHTML = `
        <h3>${notice.title}</h3>
        <p>${notice.content}</p>
        <small>${notice.time}</small>
    `;
    noticeBoard.appendChild(noticeCard);
});*/

// Populate Results
const resultsBody = document.getElementById('resultsBody');
results.forEach(result => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${result.competition}</td>
        <td>${result.First}</td>
        <td>${result.Second}</td>
        <td>${result.Third}</td>
    `;
    resultsBody.appendChild(row);
});