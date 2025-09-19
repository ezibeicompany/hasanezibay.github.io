// Sayfaya göre işlem yap
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("postForm")) {
    // Admin sayfası
    document.getElementById("postForm").addEventListener("submit", savePost);
  } else if (document.getElementById("blogPosts")) {
    // Ana sayfa
    displayPosts();
  }
});

// Yazıyı kaydet
function savePost(e) {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;

  let newPost = {
    title: title,
    content: content,
    date: new Date().toLocaleString()
  };

  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.unshift(newPost); // Yeni yazı en başa ekleniyor
  localStorage.setItem("posts", JSON.stringify(posts));

  alert("Yazı başarıyla eklendi!");
  document.getElementById("postForm").reset();
}

// Yazıları göster
function displayPosts() {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  let blogPosts = document.getElementById("blogPosts");

  if (posts.length === 0) {
    blogPosts.innerHTML = "<p>Henüz yazı eklenmedi.</p>";
    return;
  }

  blogPosts.innerHTML = "";
  posts.forEach(post => {
    let article = document.createElement("article");
    article.innerHTML = `
      <h2>${post.title}</h2>
      <small>${post.date}</small>
      <p>${post.content}</p>
    `;
    blogPosts.appendChild(article);
  });
}
