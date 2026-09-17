// Global App State
let isSubscribedBC = false;
let isSubscribedBP = false;
let likes = 124500;
let isLiked = false;

// Persona Switching Logic
function switchPersona(personaKey) {
    // Hide all sections
    const sections = document.querySelectorAll('.persona-section');
    sections.forEach(sec => sec.classList.add('hidden'));
    
    // Show selected section
    const targetSection = document.getElementById(`section-${personaKey}`);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }

    // Elements
    const activeDesktop = document.getElementById(`tab-${personaKey}`);
    const activeMob = document.getElementById(`mob-tab-${personaKey}`);
    const body = document.getElementById('mainBody');
    const globalHeader = document.getElementById('globalHeader');
    const headerLogoBox = document.getElementById('headerLogoBox');
    const headerLogoIcon = document.getElementById('headerLogoIcon');
    const headerTitle = document.getElementById('headerTitle');
    const ytLinkBtn = document.getElementById('ytChannelLink');
    const ytBtnText = document.getElementById('ytChannelBtnText');
    const mcIpBtn = document.getElementById('mcIpBtn');

    // Reset tab button default styles
    const desktopBtns = document.querySelectorAll('.persona-btn');
    desktopBtns.forEach(btn => {
        btn.className = "persona-btn w-32 sm:w-36 py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 text-slate-300 hover:text-white hover:bg-slate-700";
    });
    const mobBtns = document.querySelectorAll('.mob-persona-btn');
    mobBtns.forEach(btn => {
        btn.className = "mob-persona-btn flex-1 min-w-[105px] text-center px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-800 text-slate-300";
    });

    // Toggle IP Copy Button Visibility
    if (personaKey === 'bakwan') {
        if (mcIpBtn) mcIpBtn.classList.remove('hidden');
    } else {
        if (mcIpBtn) mcIpBtn.classList.add('hidden');
    }

    // Apply Theme & Persona Buttons per theme specification
    if (personaKey === 'beaconcream') {
        if (activeDesktop) activeDesktop.className = "persona-btn w-32 sm:w-36 py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 bg-blue-600 text-white shadow-sm font-bold";
        if (activeMob) activeMob.className = "mob-persona-btn flex-1 min-w-[105px] text-center px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-600 text-white font-bold";
        
        body.className = "bg-slate-100 text-slate-900 font-sans antialiased";
        globalHeader.className = "sticky top-0 z-50 bg-slate-900 border-b border-slate-800 shadow-md";
        headerLogoBox.className = "w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center";
        headerLogoIcon.className = "fa-solid fa-play text-blue-400 text-lg";
        headerTitle.className = "font-extrabold text-base sm:text-lg tracking-tight text-white leading-none";
        if (ytLinkBtn && ytBtnText) {
            ytLinkBtn.href = "https://www.youtube.com/@BeaconCream";
            ytLinkBtn.className = "px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2 shadow-sm hover:shadow-md";
            ytBtnText.innerText = "Kunjungi YT BeaconCream";
        }
    } else if (personaKey === 'beaconpret') {
        if (activeDesktop) activeDesktop.className = "persona-btn w-32 sm:w-36 py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 bg-sky-600 text-white shadow-sm font-bold";
        if (activeMob) activeMob.className = "mob-persona-btn flex-1 min-w-[105px] text-center px-3 py-1.5 rounded-full text-xs font-semibold bg-sky-600 text-white font-bold";
        
        body.className = "bg-sky-50 text-slate-800 font-sans antialiased";
        globalHeader.className = "sticky top-0 z-50 bg-white border-b border-sky-200 shadow-sm";
        headerLogoBox.className = "w-full h-full bg-white rounded-[10px] flex items-center justify-center";
        headerLogoIcon.className = "fa-solid fa-play text-sky-600 text-lg";
        headerTitle.className = "font-extrabold text-base sm:text-lg tracking-tight text-slate-900 leading-none";
        if (ytLinkBtn && ytBtnText) {
            ytLinkBtn.href = "https://www.youtube.com/@BeaconPret";
            ytLinkBtn.className = "px-3.5 py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2 shadow-sm hover:shadow-md";
            ytBtnText.innerText = "Kunjungi YT BeaconPret";
        }
    } else if (personaKey === 'bakwan') {
        if (activeDesktop) activeDesktop.className = "persona-btn w-32 sm:w-36 py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 bg-amber-400 text-slate-950 font-extrabold shadow-sm";
        if (activeMob) activeMob.className = "mob-persona-btn flex-1 min-w-[105px] text-center px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-400 text-slate-950 font-extrabold";
        
        body.className = "bg-amber-50/30 text-slate-800 font-sans antialiased";
        globalHeader.className = "sticky top-0 z-50 bg-white border-b border-amber-200 shadow-sm";
        headerLogoBox.className = "w-full h-full bg-white rounded-[10px] flex items-center justify-center";
        headerLogoIcon.className = "fa-solid fa-cubes text-amber-500 text-lg";
        headerTitle.className = "font-extrabold text-base sm:text-lg tracking-tight text-slate-900 leading-none";
        if (ytLinkBtn && ytBtnText) {
            ytLinkBtn.href = "https://www.youtube.com/@BakwanBerkawan";
            ytLinkBtn.className = "px-3.5 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-extrabold rounded-xl transition-all flex items-center gap-2 shadow-sm hover:shadow-md";
            ytBtnText.innerText = "Kunjungi YT Bakwan";
        }
    } else if (personaKey === 'nelson') {
        if (activeDesktop) activeDesktop.className = "persona-btn w-32 sm:w-36 py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md font-bold";
        if (activeMob) activeMob.className = "mob-persona-btn flex-1 min-w-[105px] text-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold";
        
        body.className = "bg-slate-950 text-slate-100 font-sans antialiased";
        globalHeader.className = "sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-indigo-900/50 shadow-md";
        headerLogoBox.className = "w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center";
        headerLogoIcon.className = "fa-solid fa-user-gear text-purple-400 text-lg";
        headerTitle.className = "font-extrabold text-base sm:text-lg tracking-tight text-white leading-none";
        if (ytLinkBtn && ytBtnText) {
            ytLinkBtn.href = "https://www.youtube.com/@BeaconCream";
            ytLinkBtn.className = "px-3.5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2 shadow-md";
            ytBtnText.innerText = "Kunjungi YT BeaconCream";
        }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Copy Minecraft IP Function
function copyServerIP() {
    const ip = "mc.bakwan.id";
    const dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.value = ip;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    showToast("IP Server 'mc.bakwan.id' berhasil disalin!");
}

// Subscribe Toggle Interaction
function toggleSubscribe(channelKey) {
    if (channelKey === 'BC') {
        isSubscribedBC = !isSubscribedBC;
        const btn = document.getElementById('subBtnBC');
        const txt = document.getElementById('subTextBC');
        if (isSubscribedBC) {
            btn.className = "bg-slate-700 hover:bg-slate-600 text-white px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 pulse-sub";
            txt.innerText = "SUBSCRIBED 🔔";
            showToast("Terima kasih sudah subscribe BeaconCream!");
        } else {
            btn.className = "bg-red-600 hover:bg-red-500 text-white px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 shadow-lg";
            txt.innerText = "SUBSCRIBE";
            showToast("Batal berlangganan channel BeaconCream.");
        }
    } else if (channelKey === 'BP') {
        isSubscribedBP = !isSubscribedBP;
        const btn = document.getElementById('subBtnBP');
        const txt = document.getElementById('subTextBP');
        if (isSubscribedBP) {
            btn.className = "bg-slate-200 hover:bg-slate-300 text-slate-900 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 pulse-sub";
            txt.innerText = "SUBSCRIBED 🔔";
            showToast("Terima kasih sudah subscribe BeaconPret!");
        } else {
            btn.className = "bg-sky-600 hover:bg-sky-700 text-white px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 shadow";
            txt.innerText = "SUBSCRIBE";
            showToast("Batal berlangganan channel BeaconPret.");
        }
    }
}

// Video Modal Controls
function openVideoModal(title, views, date, thumbUrl) {
    document.getElementById('modalVideoTitle').innerText = title;
    document.getElementById('modalVideoMeta').innerText = `${views} • ${date}`;
    document.getElementById('modalVideoThumb').src = thumbUrl || "https://placehold.co/1280x720/1e1b4b/ffffff?text=BEACONCREAM+VIDEO";
    document.getElementById('videoModal').classList.remove('hidden');
}

function closeVideoModal() {
    document.getElementById('videoModal').classList.add('hidden');
}

function simulatePlayVideo() {
    showToast("Memutar video... (Simulasi player aktif)");
}

function likeVideo() {
    isLiked = !isLiked;
    const countEl = document.getElementById('likeCount');
    const iconEl = document.querySelector('#likeBtn i');
    if (isLiked) {
        likes++;
        iconEl.className = "fa-solid fa-thumbs-up text-sm text-blue-400";
        showToast("Video disukai!");
    } else {
        likes--;
        iconEl.className = "fa-regular fa-thumbs-up text-sm";
    }
    countEl.innerText = (likes / 1000).toFixed(1) + 'K';
}

// Custom Toast Function
function showToast(msg) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');
    toastMsg.innerText = msg;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 2500);
}