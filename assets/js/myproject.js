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
    image,
    endInput,
    postAt:new Date()
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
              <a href="myproject-detail.html" target="_blank"
                >${dataBlog[i].title}</a
              >
            </h1>
            <div class="detail-blog-content">
              ${getFulldate(dataBlog[i].postAt)} | Fauzi juliansyah
            </div>
            <p>
            ${dataBlog[i].content}
            </p>
            <p>
              ${getDistanceTime(dataBlog[i].postAt)}
            </p>
          </div>
        </div>`;
  }
}


function getFulldate(waktu){
  let nameofmount = [
    "januari",
    "febuari",
    "maret",
    "april",
    "mei",
    "juni",
    "juli",
    "agustus",
    "september",
    "oktober",
    "november",
    "desember"
  ]

  // console.log(waktu);
  let tanggal=new Date(waktu);
  let mounth=nameofmount[waktu.getMonth()];
  let year=waktu.getFullYear();
  let hour=waktu.getHours();
  let minute=waktu.getMinutes();

  return `${tanggal} ${mounth} ${year} - ${hour} ${minute} WIB`;
}

function getDistanceTime(waktu){
  let postTime = waktu;
  let currentTime = new Date();
  let distanceTime = currentTime-postTime;

  let millisecond = 1000;
  let secondInHour = 3600;
  let hourInDay = 24;

  let distanceTimeInSecond = Math.floor(distanceTime/millisecond);
  let distanceTimeInMinute = Math.floor(distanceTime/(millisecond*60));
  let distanceTimeInHour = Math.floor(distanceTime/(millisecond*secondInHour));
  let distanceTimeInDay = Math.floor(distanceTime/(millisecond*secondInHour*hourInDay));

  if (distanceTimeInDay > 0){
    return `${distanceTimeInDay} day ago`
  } else if (distanceTimeInHour > 0){
    return `${distanceTimeInHour} hour ago`
  } else if (distanceTimeInMinute > 0){
    return `${distanceTimeInMinute} minute ago`
  } else {
    return `${distanceTimeInSecond} second ago`
  }
}

setInterval( () => {
  renderBlog();
}, 5000)