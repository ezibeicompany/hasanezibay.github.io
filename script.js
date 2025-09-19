// Örnek blog yazıları
const posts = [
    {
        title: "Yazılım Geliştirme Hakkında",
        content: "Yazılım geliştirme süreci, problem çözme ve yaratıcılığı birleştiren bir süreçtir."
    },
    {
        title: "Girişimcilik Deneyimlerim",
        content: "Girişimcilik, risk almayı ve sürekli öğrenmeyi gerektirir."
    },
    {
        title: "Teknoloji Trendleri 2025",
        content: "Yapay zeka, blockchain ve IoT 2025’te hayatımızı daha fazla şekillendirecek."
    }
];

// Blog yazılarını sayfaya ekleme
const postsContainer = document.getElementById("posts");

posts.forEach(post => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
    postsContainer.appendChild(postDiv);
});

// Form gönderme işlemi
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Mesajınız gönderildi!");
    contactForm.reset();
});