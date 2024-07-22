let dataBlog = []; //parkiran

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let start = document.getElementById("startInput").value;
  let end = document.getElementById("endInput").value;
  let typescrip = document.getElementById("typescrip").checked;
    let ruby = document.getElementById("ruby").checked;
    let python = document.getElementById("python").checked;
    let javascrip = document.getElementById("javascrip").checked;

  let image = document.getElementById("input-image").files;

  image = URL.createObjectURL(image[0]);
  console.log(image)

  let blog = {
    title,
    content: content,
    start,
    end,
    typescrip,
    python,
    javascrip,
    ruby,
    image
  };

  dataBlog.push(blog); // dataBlog = [blog,blog]

  console.log(dataBlog);
  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  for (let i = 0; i < dataBlog.length; i++) {
    document.getElementById("contents").innerHTML += `
    <div class="blog-list-item">
          <div class="blog-image">
            <img src="${dataBlog[i].image}" alt="" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Delete Post</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank"
                >${dataBlog[i].title}</a
              >
            </h1>
            <div class="detail-blog-content">
              21 Jul 2024 22:30 WIB | Fauzi juliansyah
            </div>
            <p>
            ${dataBlog[i].content}
            </p>
          </div>
        </div>`;
  }
}
