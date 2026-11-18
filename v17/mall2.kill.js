/* 윤식단 개편 화면 '끄기 판' — 문제가 생기면 저장소의 mall2.js를 이 파일로 바꿔 올린다(publish_cdn.py --kill).
   하는 일: 로더가 걸어 둔 화면 가림만 풀고 아무것도 안 함 → 모든 손님이 옛 화면. 되살리기 = 정상 mall2.js 다시 올리기 */
(function () { try { document.documentElement.classList.remove('yd2-pending'); window.__YD2 = { ok: false, killed: true }; } catch (e) {} })();
