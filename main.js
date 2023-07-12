// Swiperスライダーの設定
new Swiper(".swiper-container", {
    loop: true, // ループ（最後まで行ったら最初に戻る）
    autoHeight: true, // 自動で高さを調整
    autoplay: {
      // 自動再生の設定
      delay: 4000, // 4秒ごとにスライド
    },
    speed: 500, // スライドの速度（ミリ秒）
    effect: "fade", // スライドのエフェクト（フェード）
  });
  
  // ヘッダーのクラス切り替え機能
  const toggleClass = () => {
    const header = document.getElementById("header");
    header.classList.toggle("active"); // ヘッダー要素に "active" クラスを追加/削除
  };
  
  // メニューボタンにイベントリスナーを設定
  const menuBtn = document.getElementById("menuBtn");
  menuBtn.addEventListener("click", toggleClass); // メニューボタンがクリックされたときにtoggleClass関数を実行
  
  // ナビゲーションリンクにイベントリスナーを設定
  const navLink = document.getElementsByClassName("nav-link");
  [...navLink].forEach((link) => {
    link.addEventListener("click", toggleClass); // 各リンクがクリックされたときにtoggleClass関数を実行
  });
  