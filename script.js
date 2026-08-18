// الإعدادات (يمكنك تغييرها)
const duration = 30; // مدة الظهور بالثواني
const intervalTime = 120000; // 120,000ms = دقيقتين

const container = document.getElementById('widgetContainer');
const timerDisplay = document.getElementById('timerCount');
const barFill = document.getElementById('barFill');

function runEffect() {
    // 1. إعادة تعيين وإظهار
    let timeLeft = duration;
    timerDisplay.textContent = timeLeft;
    barFill.style.width = '100%';
    container.classList.add('show');

    // 2. تشغيل العد التنازلي
    let countdown = setInterval(() => {
        timeLeft--;

        if (timeLeft >= 0) {
            timerDisplay.textContent = timeLeft;
            // حساب النسبة المئوية للشريط
            const percentage = (timeLeft / duration) * 100;
            barFill.style.width = percentage + '%';
        } else {
            // 3. انتهاء الوقت
            clearInterval(countdown);
            container.classList.remove('show'); // إخفاء الودجت
        }
    }, 1000);
}

// --- التشغيل التلقائي ---

// التشغيل فور فتح الودجت
runEffect();

// التكرار كل دقيقتين
setInterval(runEffect, intervalTime);