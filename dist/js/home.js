const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');
menuIcon.addEventListener('click',()=>{
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
  navbg.classList.toggle('active')
});

document.addEventListener("DOMContentLoaded", function() {
  const logo = document.querySelector(".logo");

  // GMT +8
const now = new Date();
const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
const gmt8 = new Date(utc + (8 * 60 * 60000));
const hour = gmt8.getHours();

let greeting = "";
if (hour >= 5 && hour < 12) {
  greeting = "Selamat Pagii";
} else if (hour >= 12 && hour < 15) {
  greeting = "Selamat Siang";
} else if (hour >= 15 && hour < 18) {
  greeting = "Selamat Soree";
} else {
  greeting = "Selamat Malamm";
}

  logo.textContent = greeting;
});

  // Fungsi ketik huruf demi huruf
  function typeWriter(el, text, speed = 60) {
    let i = 0;
    const timer = setInterval(() => {
      el.innerHTML = text.slice(0, i++).replace(/\n/g, '<br>');
      if (i > text.length) {
        clearInterval(timer);
        // Setelah animasi selesai, tunggu 2 detik lalu tampilkan tombol dengan fade in
        setTimeout(() => {
          const btn = document.getElementById('rayakaan-btn');
          btn.style.opacity = '1';
        }, 100); // Jeda
      }
    }, speed);
  }

  // Teks yang akan dianimasikan
  const ucapan = "happy birthday\nayraa!";

  // Tunggu animasi api selesai (6.5s) baru mulai animasi teks
  setTimeout(() => {
    const textElement = document.getElementById('birthday-text');
    typeWriter(textElement, ucapan);
  }, 6500); // 6.5 detik sesuai dengan animasi fire

  // Fungsi untuk membuat efek party popper
  function createPartyPopper() {
    const container = document.getElementById('party-popper');
    const colors = ['#ffb6c1', '#ffc0cb', '#ffd1dc', '#ffe4e6', '#ffffff', '#ff9eb5', '#f8bbd0'];
    
    for (let i = 0; i < 40; i++) {
      createConfetti(container, colors);
    }
  }
  
  function createConfetti(container, colors) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    // Pilih bentuk acak
    const shapes = ['star', 'circle', 'rectangle', 'heart', 'ribbon'];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    confetti.classList.add(shape);
    
    // Warna acak dari palette soft pink dan putih
    const color = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.backgroundColor = color;
    if (shape === 'star' || shape === 'heart') {
      confetti.style.backgroundColor = 'transparent';
      confetti.style.borderBottomColor = color;
      if (shape === 'heart') {
        confetti.style.background = 'transparent';
      }
    }
    
    confetti.style.opacity = '0';
    confetti.style.width = Math.random() * 12 + 6 + 'px';
    confetti.style.height = Math.random() * 12 + 6 + 'px';
    
    // Posisi awal di bagian bawah layar
    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight + 50;
    
    confetti.style.left = startX + 'px';
    confetti.style.top = startY + 'px';
    
    container.appendChild(confetti);
    
    // Animasi muncul
    setTimeout(() => {
      confetti.style.opacity = '1';
      
      // Animasi naik ke atas dan berputar
      const endY = Math.random() * (window.innerHeight / 2); // Hanya naik sampai setengah layar
      const endX = startX + (Math.random() * 200 - 100); // Sedikit gerakan horizontal
      
      const animation = confetti.animate([
        { 
          transform: `translate(0, 0) rotate(0deg)`,
          opacity: 1
        },
        { 
          transform: `translate(${endX - startX}px, -${startY - endY}px) rotate(${Math.random() * 360}deg)`,
          opacity: 0.8
        },
        { 
          transform: `translate(${(endX - startX) * 1.5}px, -${(startY - endY) * 1.2}px) rotate(${Math.random() * 720}deg)`,
          opacity: 0
        }
      ], {
        duration: Math.random() * 4000 + 3000, // Durasi lebih lama: 3-7 detik
        easing: 'cubic-bezier(0.2, 0.5, 0.8, 1)'
      });
      
      // Hapus elemen setelah animasi selesai
      animation.onfinish = () => {
        confetti.remove();
      };
    }, Math.random() * 300);
  }
  
  // Jalankan efek party popper bersamaan dengan munculnya tombol
  // (setelah animasi teks selesai + 2 detik)
  const textLength = "happy birthday\nayraa!".length;
  const typingSpeed = 60;
  const typingDuration = (textLength * typingSpeed);
  
  setTimeout(() => {
    createPartyPopper();
  }, 6500 + typingDuration + 10); // Sesuai dengan waktu munculnya tombol