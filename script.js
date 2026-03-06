//OP REGEL 29 IS HET WACHTWOORD ALLEEN WEL GEHASHED IN BASE64, DECODE HET EN JE KRIJGT HET WACHTWOORD.
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0F0"; 
    ctx.font = fontSize + "px arial";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}
setInterval(drawMatrix, 33);

//DIT IS HET WACHTWOORD ALLEEN WEL GEHASHED IN BASE64, DECODE HET EN JE KRIJGT HET WACHTWOORD.
const geheim = "RGVtaTIxUGFydHk="; 
document.cookie = "Sessie_Sleutel=" + atob(geheim) + "; path=/; max-age=3600";

function checkPassword() {
    const ingevoerdWachtwoord = document.getElementById('passwordInput').value;
    const cookies = document.cookie.split('; ');
    const cookieData = cookies.find(row => row.startsWith('Sessie_Sleutel='));
    const correcteSleutel = cookieData ? cookieData.split('=')[1] : null;

    if (ingevoerdWachtwoord === correcteSleutel) {
        alert("TOEGANG VERLEEND. Welkom Demi.");
    
        window.location.href = "bericht.html"; 
    } else {
        alert("Niet gokken he Noobje");
    }
}