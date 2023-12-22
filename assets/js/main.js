

//gnb
$('nav .gnb-list li a').click(function(){
  $(this).parent().addClass('on').siblings().removeClass('on');
})



fetch('./assets/data/newBestChallenge.json')
  .then(res => res.json())
  .then(json => {
    html = `
      <div class="img-box">
            <a href="#">
                <i class="best-badge"><svg width="24" height="34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <path d="M14.75 32.761a4.167 4.167 0 0 1-5.159.04L.605 25.828A1.562 1.562 0 0 1 0 24.593V0h24v24.602c0 .474-.215.923-.586 1.22l-8.664 6.94Z" fill="#00DC64"></path> <path d="M.25 24.593V.25H23.75v24.352c0 .398-.181.775-.492 1.024l-8.664 6.94a3.917 3.917 0 0 1-4.85.038L.758 25.63a1.312 1.312 0 0 1-.508-1.037Z" stroke="#000" stroke-opacity="0.1" stroke-width="0.5"></path> <path d="M6.817 10.867h-1.08V9.076h1.08v1.791Zm1.872-2.349h-.774V6.241H6.817V8.14h-1.08V6.232H4.621v5.58h3.294v-2.34h.774v3.942h1.107V5.629H8.689v2.889Zm1.683-3.042v8.289h1.125V5.476h-1.125Zm6.632 6.39v-1.728h2.367v-.954h-4.635V7.006h4.572v-.954H13.54v4.086h2.277v1.728h-3.15v.972h7.506v-.972h-3.168Zm-5.498 5.058c-1.854-.234-2.763-1.188-2.763-2.052v-.243H7.519v.243c0 .873-.909 1.818-2.763 2.052l.432.927c1.404-.198 2.421-.801 2.943-1.602.531.801 1.539 1.404 2.952 1.602l.423-.927Zm-3.393 4.968c-1.107 0-1.674-.189-1.674-.612s.567-.612 1.674-.612 1.674.189 1.674.612-.567.612-1.674.612Zm0-2.115c-1.791 0-2.871.54-2.871 1.503 0 .963 1.08 1.512 2.871 1.512s2.88-.549 2.88-1.512-1.089-1.503-2.88-1.503Zm-3.726-1.485v.936h7.488v-.936H4.387Zm9.557 2.394h4.464v2.052h1.188V19.75h-5.652v.936Zm4.464-6.201v1.332h-1.413c.045-.261.072-.531.072-.81h-3.843v.945h2.565c-.18 1.125-1.206 2.052-3.042 2.52l.46.927c1.745-.468 2.951-1.35 3.51-2.628h1.691v.81h-1.827v.954h1.827v.864h1.188v-4.905l-1.188-.009Z" fill="#fff"></path> </svg><span class="blind">베도승격</span></i>
                <img src="${json.thumbnailUrl}" alt="">
            </a>
        </div>
        <div class="txt-box">
            <h3 class="webtoontit"><a href="#">${json.titleName}</a></h3>
            <em class="writer"><a href="#">${json.author.writers.name}</a></em>
            <p class="txt">${json.synopsis}</p>
        </div>
    </div>
  `
    $('#bestData').html(html)
  })



const newIcon = `<i class="new-badge"><svg width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <circle cx="10.082" cy="10" r="10" fill="#00DC64"></circle> <path d="M9.306 12.482v1.065H2.812v-2.5h1.17v1.435h5.324ZM9.14 5.988v5.632H7.977V5.988H9.14Zm-5.21 0H5.1c0 .287-.017.569-.052.845-.03.275-.076.545-.14.81.252.398.571.777.958 1.135.388.357.787.65 1.197.88l-.695.87a6.37 6.37 0 0 1-1.003-.73 7.632 7.632 0 0 1-.88-.924c-.176.37-.39.71-.643 1.021a4.264 4.264 0 0 1-.827.8l-.871-.747c.563-.417 1-.962 1.311-1.637.317-.675.475-1.449.475-2.323ZM10.489 6.111h4.127v.995h-1.505a8.073 8.073 0 0 1-.061.396c-.018.129-.044.255-.08.378.235.358.537.701.907 1.03.37.322.754.592 1.153.81-.123.14-.247.278-.37.413-.117.129-.238.26-.36.396a6.334 6.334 0 0 1-1.77-1.505 5.184 5.184 0 0 1-.66.95 4.248 4.248 0 0 1-.827.73l-.228-.175a3.282 3.282 0 0 1-.22-.185l-.23-.176c-.07-.059-.14-.12-.21-.185.492-.3.894-.695 1.205-1.188.311-.493.51-1.056.599-1.69h-1.47v-.994Zm7.4 1.61v1.11h-.985v1.768h-1.17V5.988h1.17v1.734h.986Zm-.985 3.256v2.693h-1.17v-1.645h-5.166v-1.048h6.336Z" fill="#000"></path> </svg> <span class="blind">신작</span></i>`;
const upIcon = `<i class="up-badge"><svg width="17" height="13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <rect x="0.5" y="0.5" width="16" height="12" rx="1.5" stroke="#FF4747"> </rect> <path d="M3.449 6.899c0 1.518.957 2.53 2.401 2.53 1.454 0 2.42-1.012 2.42-2.53V3.403H7.12V6.89c0 .837-.497 1.389-1.251 1.389-.764 0-1.27-.561-1.27-1.399V3.403h-1.15v3.496Zm6.174 2.4h1.15V7.314h.929c1.435 0 2.383-.773 2.383-1.96 0-1.177-.939-1.95-2.365-1.95H9.623V9.3Zm2.19-4.884c.634 0 1.057.377 1.057.938 0 .57-.423.948-1.058.948h-1.04V4.415h1.04Z" fill="#FF4747"></path> </svg><span class="blind">UP</span></i>`
const restIcon = `<i class="DailyList__icon_bullet--c2Mqv"><svg width="20" height="13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="0.5" y="0.5" width="19" height="12" rx="1.5" stroke="#999"></rect><path d="M8.934 6.008c0-.736-.928-1.144-2.328-1.144-1.392 0-2.312.408-2.312 1.144s.92 1.144 2.312 1.144c1.4 0 2.328-.408 2.328-1.144ZM5.822 9.824V8.208h1.512v1.616h.936V8.208h1.544v-.744h-6.44v.744h1.512v1.616h.936Zm3.672-5.208V3.88H3.702v.736h5.792Zm-1.544 1.4c0 .288-.576.448-1.344.448-.768 0-1.328-.16-1.328-.448 0-.304.56-.456 1.328-.456s1.344.152 1.344.456ZM5.31 3.552h2.576v-.728H5.31v.728Zm11.03 6.28V2.704h-.889v2.8h-.576V2.832h-.872v6.672h.872V6.256h.576v3.576h.888Zm-2.56-2.328c-.849-.496-1.305-1.512-1.305-2.904v-.296h1.112V3.56h-3.216v.744h1.2v.312c0 1.408-.464 2.432-1.472 3.104l.568.624c.568-.328 1.184-1.16 1.344-1.816.184.632.784 1.368 1.248 1.656l.52-.68Z" fill="#999"></path></svg><span class="blind">휴재</span></i>`


$('.sc-main .head-list li button').click(function () {
  sortVal = $(this).data('daily');
  $(this).parent().addClass('on').siblings().removeClass('on')

  $('.sc-main .head-list li button').attr('aria-selected', false)
  $(this).attr('aria-selected', true)

  dilayList(sortVal)
})
dilayList(2);

function dilayList(num) {
  fetch(`./assets/data/daily${num}.json`)
    .then(res => res.json())
    .then(json => {

      data = json.titleList;
      html = ``

      data.forEach(element => {

        isNewicon = element.thumbnailBadgeList.indexOf("NEW") >= 0 ? newIcon : '';
        isUpIcon = element.up ? upIcon : '';
        isRestIcon = element.rest ? restIcon : '';


        html += ` <li class="swiper-slide">
              <a href="#">
                  <div class="img-box"> 
                      ${isNewicon}
                      <img src="${element.thumbnailUrl}" alt>
                  </div>
              </a>
              <div class="txt-box">
                  <h3 class="cont-tit">
                      <a href="#">
                          ${isUpIcon}
                          ${isRestIcon}
                          <em>${element.titleName}</em>
                      </a>
                  </h3>
                  <p class="writer"><a href="#">${element.displayAuthor}</a></p>
              </div>
          </li>`;
      });
      $('#dilyData').html(html)
    })
}



//genre
$('.sc-genre .genre-list li button').click(function () {
  sortVal = $(this).data('genre');

  cateTit = $(this).html();
  $('.headline em').html(cateTit);

  $(this).parent().addClass('on').siblings().removeClass('on')

  $('.sc-genre .genre-list li button').attr('aria-selected', false)
  $(this).attr('aria-selected', true)

  genreList(sortVal)
})
genreList(6);
function genreList(a) {
  fetch(`./assets/data/genre${a}.json`)
    .then(res => res.json())
    .then(json => {

      data = json.titleList
      html = ``

      data.forEach(element => {

        isUpIcon = element.up ? upIcon : '';
        isRestIcon = element.rest ? restIcon : '';

        html += `
      <li class="swiper-slide">
          <a href="#">
              <div class="img-box"><img src="${element.thumbnailUrl}" alt></div>
          </a>
          <a href="#">
              <div class="txt-box">
                  <span class="lank">${element.rank}</span>
                  <h3 class="webtoon-tit">
                  ${isUpIcon}
                  ${isRestIcon}
                  <em>
                  ${element.titleName}
                  </em>
                  </h3>
              </div>
          </a>
        </li>
      `
      });
      $('#genreData').html(html)
    })
}

const mainSlide = new Swiper('.sc-main .swiper', {
  slidesPerView: 5,
  spaceBetween: 10,
  speed: 2000,
  loop: true,
  navigation: {
    prevEl: '.sc-main .btn-prev',
    nextEl: '.sc-main .btn-next',
  },
  slidesPerGroup: 5,
  slidesPerGroupSkip: 0,
});

const genreSlide = new Swiper('.sc-genre .swiper', {
  slidesPerView: 5,
  spaceBetween: 10,
  speed: 2000,
  loop: true,
  navigation: {
    prevEl: '.sc-genre .btn-prev',
    nextEl: '.sc-genre .btn-next',
  },
  slidesPerGroup: 5,
  slidesPerGroupSkip: 0,
});

const updateSlide = new Swiper('.sc-update .swiper', {
  slidesPerView: 5,
  spaceBetween: 10,
  speed: 2000,
  loop: true,
  navigation: {
    prevEl: '.sc-update .btn-prev',
    nextEl: '.sc-update .btn-next',
  },
  slidesPerGroup: 5,
  slidesPerGroupSkip: 0,
});

const setSlide = new Swiper('.sc-set .swiper', {
  slidesPerView: 5,
  spaceBetween: 10,
  speed: 2000,
  loop: true,
  navigation: {
    prevEl: '.sc-set .btn-prev',
    nextEl: '.sc-set .btn-next',
  },
  slidesPerGroup: 5,
  slidesPerGroupSkip: 0,
});



