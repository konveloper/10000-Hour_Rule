const startBtn = document.querySelector('.btn-start');
const goBtn = document.querySelector('.btn-go');
const shareBtn = document.querySelector('.btn-share');
const closeBtn = document.querySelector('.btn-close');
const loading = document.querySelector('.container-result-loading');
const result = document.querySelector('.container-result');
const modal = document.querySelector('#modal');

function calculator() {
  const jobValue = document.querySelector('#value-job');
  let timeValue = document.querySelector('#value-time');
  let timeValue_int = Number(timeValue.value);

  const jobResult = document.querySelector('.result-job');
  const timeResult = document.querySelector('.result-time');

  if (jobValue.value == '') {
    alert('입력되지 않았습니다.');
    jobValue.focus();
    return false;
  } else if (timeValue.value == '') {
    alert('입력되지 않았습니다.');
    timeValue.focus();
    return false;
  } else if (timeValue_int > 24) {
    alert('24 이하의 값을 입력해주세요.');
    return false;
  }

  result.style.display = 'none';
  loading.style.display = 'flex';

  setTimeout(function () {
    loading.style.display = 'none';
    result.style.display = 'flex';
    jobResult.innerText = jobValue.value;
    timeResult.innerText = parseInt(10000 / timeValue_int, 10);
  }, 1800);
}

function openModal() {
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

// 화면을 클릭했을 때 모달 닫히기
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

function copyUrl() {
  navigator.clipboard.writeText(window.location.href);
  alert('URL이 복사되었습니다.');
}

startBtn.addEventListener('click', calculator);
goBtn.addEventListener('click', openModal);
shareBtn.addEventListener('click', copyUrl);
closeBtn.addEventListener('click', closeModal);
