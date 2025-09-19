// JSON + LocalStorage'dan yazıları getir
async function getPosts() {
  try {
    const res = await fetch('posts.json');
    const posts = await res.json();

    // LocalStorage yazıları
    const localPosts = JSON.parse(localStorage.getItem('localPosts')) || [];

    // Hepsini birleştir (önce JSON, sonra LocalStorage)
    return [...posts, ...localPosts];
  } catch (error) {
    console.error("posts.json yüklenemedi:", error);
    return JSON.parse(localStorage.getItem('localPosts')) || [];
  }
}

// Ana sayfada yazıları listele
async function showPosts() {
  const posts = await getPosts();
  const container = document.getElementById('posts');
  if (!container) return;

  if (posts.length === 0) {
    container.innerHTML = "<p>Henüz yazı eklenmemiş.</p>";
    return;
  }

  posts.forEach(post => {
    const div = document.createElement('div');
    div.classList.add('post');
    div.innerHTML = `
      <h2><a href="post.html?id=${post.id}">${post.title}</a></h2>
      <small>${post.date}</small>
      <p>${post.content.substring(0, 120)}...</p>
    `;
    container.appendChild(div);
  });
}

// Detay sayfasında tek yazıyı göster
async function showPostDetail() {
  const container = document.getElementById('post-detail');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const postId = parseInt(params.get('id'));
  if (!postId) {
    container.innerHTML = "<p>Yazı bulunamadı.</p>";
    return;
  }

  const posts = await getPosts();
  const post = posts.find(p => p.id === postId);
  if (!post) {
    container.innerHTML = "<p>Yazı bulunamadı.</p>";
    return;
  }

  container.innerHTML = `
    <h2>${post.title}</h2>
    <small>${post.date}</small>
    <p>${post.content}</p>
  `;
}

// Sayfa yüklenince hangi fonksiyon çalışacak kontrol et
window.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('posts')) {
    showPosts();
  } else if (document.getElementById('post-detail')) {
    showPostDetail();
  }
});
