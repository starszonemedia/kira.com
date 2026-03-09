
function updateCountdowns() {
    
    // Get current time
    const now = new Date();
    
    // Helper function to create a date object for a specific time today
    const getTodayTime = (hours, minutes) => {
        const date = new Date();
        date.setHours(hours, minutes, 0, 0);
        return date;
    };

    // --- TikTok Countdown (17:00 UAE) ---
    let targetTikTok = getTodayTime(17, 0);
    
    // If the time has passed today, set it for tomorrow
    if (now > targetTikTok) {
        targetTikTok.setDate(targetTikTok.getDate() + 1);
    }

    // --- Kick Countdown (20:00 UAE) ---
    let targetKick = getTodayTime(20, 0);

    // If the time has passed today, set it for tomorrow
    if (now > targetKick) {
        targetKick.setDate(targetKick.getDate() + 1);
    }

    // Function to calculate time difference
    function calculateTimeLeft(targetDate, elementId) {
        const difference = targetDate - now;
        
        if (difference > 0) {
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById(elementId).innerHTML = 
                `${hours}h ${minutes}m ${seconds}s`;
        } else {
            document.getElementById(elementId).innerHTML = "LIVE NOW!";
        }
    }

    calculateTimeLeft(targetTikTok, 'tiktok-timer');
    calculateTimeLeft(targetKick, 'kick-timer');
}

// Update every second
setInterval(updateCountdowns, 1000);

// Run immediately on load
updateCountdowns();
// Video Background Autoplay Fix for Mobile
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.background-overlay');
    
    if (video) {
        // Try to play on mobile
        video.play().catch(function(error) {
            console.log('Autoplay prevented:', error);
            // User needs to interact first
            document.body.addEventListener('click', function() {
                video.play();
            }, { once: true });
        });
    }
});