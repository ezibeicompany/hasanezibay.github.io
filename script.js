// Blog yazıları
const posts = [
  { title: "Yazılım Geliştirme", content: "Kodlama, hayal gücünü gerçeğe dönüştürmektir." },
  { title: "Girişimcilik Yolculuğum", content: "Her gün yeni bir fırsat demektir." },
  { title: "Teknoloji Trendleri 2025", content: "AI, blockchain ve IoT hayatımızı değiştirecek." }
];

// Blog sayfasında yazıları listele
if (document.getElementById("posts")) {
  const container = document.getElementById("posts");
  posts.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `<h3>${p.title}</h3><p>${p.content}</p>`;
    container.appendChild(div);
  });
}

// İletişim formu
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Mesajınız gönderildi! Teşekkürler 🙌");
    contactForm.reset();
  });
}