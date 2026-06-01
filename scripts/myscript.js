// scripts/myscript.js

// 1. Değişken Tanımlamaları
const quizData = [
  {
    soru: "Giyim tarzını nasıl tanımlarsın?",
    secenekler: ["Rahat ve Spor", "Klasik ve Şık", "Minimal ve Modern"],
  },
  {
    soru: "Hangi parça seni daha iyi yansıtır?",
    secenekler: ["Tshirt / Crop", "Sweatshirt", "Etek / Pantolon"],
  },
  {
    soru: "Renk tercihin hangisi?",
    secenekler: ["Canlı ve Açık", "Siyah / Koyu", "Nötr ve Soft"],
  },
];

const quizCevaplari = [];
let mevcutSoru = 0;

const quizUrunleri = [
  { ad: "Baskılı Oversize Siyah Tshirt", fiyat: 300, gorsel: "img/tshirt1.jpg", link: "pages/tshirt1.html", etiketler: ["Rahat ve Spor", "Tshirt / Crop", "Siyah / Koyu"] },
  { ad: "Beyaz sweatshirt", fiyat: 950, gorsel: "img/sweat1.jpg", link: "pages/sweat1.html", etiketler: ["Minimal ve Modern", "Sweatshirt", "Nötr ve Soft"] },
  { ad: "Mavi crop", fiyat: 200, gorsel: "img/crop1.jpg", link: "pages/crop1.html", etiketler: ["Rahat ve Spor", "Tshirt / Crop", "Canlı ve Açık"] },
  { ad: "Fularlı Siyah Mini Çanta", fiyat: 350, gorsel: "img/canta2.jpg", link: "pages/canta2.html", etiketler: ["Klasik ve Şık", "Nötr ve Soft", "Siyah / Koyu"] },
  { ad: "Beyaz zincirli omuz çantası", fiyat: 400, gorsel: "img/canta1.jpg", link: "pages/canta1.html", etiketler: ["Klasik ve Şık", "Nötr ve Soft", "Canlı ve Açık"] },
  { ad: "Siyah etek", fiyat: 450, gorsel: "img/etek1.jpg", link: "pages/etek1.html", etiketler: ["Klasik ve Şık", "Etek / Pantolon", "Siyah / Koyu"] },
  { ad: "Bej pantolon", fiyat: 550, gorsel: "img/pantolon1.jpg", link: "pages/pantolon1.html", etiketler: ["Minimal ve Modern", "Etek / Pantolon", "Nötr ve Soft"] },
];

const urunAciklamaHaritasi = {
  "Baskılı Oversize Siyah Tshirt": "Yumuşak dokulu pamuk kumaşı ve rahat oversize kalıbıyla günlük kombinlerin ana parçası olur.",
  "Baskılı Oversize Beyaz Tshirt": "Nefes alan pamuklu yüzeyi ve modern baskı detayıyla enerjik bir şehir stiline uyum sağlar.",
  "Sarı oversize tshirt": "Canlı sarı tonu ve dökümlü kesimiyle yaz kombinlerine dinamik ve rahat bir görünüm kazandırır.",
  "Pembe tshirt": "Yumuşak pembe tonu ve hafif kumaşıyla gün boyu konfor sunan sade bir temel parçadır.",
  "Beyaz sweatshirt": "İç yüzeyi yumuşak dokulu bu model, minimalist görünümüyle serin havalarda şık bir rahatlık sunar.",
  "Kahverengi sweatshirt": "Toprak tonlu rengi ve regular kalıbıyla günlük stiline sıcak ve dengeli bir hava katar.",
  "Pembe sweatshirt": "Pastel tonu ve konforlu formu sayesinde hafta sonu kombinlerinde hem rahat hem canlı bir seçenek olur.",
  "Lila bugs bunny sweatshirt": "Ön yüzündeki eğlenceli baskı detayıyla casual kombinlere genç ve enerjik bir karakter katar.",
  "Yeşil sweatshirt": "Doğal yeşil tonu ve yumuşak dokusuyla mevsim geçişlerinde katmanlı kullanıma uygundur.",
  "Mavi crop": "Esnek yapılı kumaşı ve kısa kesimiyle yüksek bel alt giyimlerle modern bir siluet oluşturur.",
  "Simli siyah crop": "Hafif parlak dokusuyla gece kombinlerinde dikkat çeken şık ve iddialı bir seçenektir.",
  "Siyah omuzları açık üst": "Omuz dekoltesi ve vücuda oturan kesimiyle feminen ve güçlü bir görünüm sunar.",
  "Siyah straplez büstiyer": "Destekli formu ve sade çizgisiyle blazer veya gömleklerle katmanlı kullanıma uygundur.",
  "Beyaz sıfır kol crop": "Temiz beyaz tonu ve minimal tasarımıyla günlük kombinlere ferah bir temel parça ekler.",
  "Siyah deri etek": "Deri dokulu yüzeyi ve modern kesimiyle akşam kombinlerinde güçlü bir stil etkisi yaratır.",
  "Siyah puantiyeli etek": "Hareketli puantiye deseni ve hafif yapısıyla romantik şehir stiline uyum sağlar.",
  "Desenli beyaz uzun etek": "Akışkan formu ve zarif deseniyle yaz akşamlarında konforlu ve şık bir tercih olur.",
  "Mavi kot şort etek": "Şort rahatlığını etek görünümüyle birleştirerek günlük kullanımda özgür hareket sağlar.",
  "Gri pileli etek": "Pile detayları ve modern gri tonu sayesinde hem spor hem klasik parçalarla kolayca kombinlenir.",
  "Mavi kot pantolon": "Orta bel kesimi ve esnek denim dokusuyla gün boyu konfor sağlayan zamansız bir modeldir.",
  "Beyaz keten pantolon": "Nefes alan keten karışımlı kumaşıyla sıcak havalarda hafif ve ferah bir kullanım sunar.",
  "Beyaz kot pantolon": "Temiz görünümü ve düz paça kesimiyle her mevsim minimal kombinlerin tamamlayıcısıdır.",
  "Siyah kumaş pantolon": "Dökümlü kumaşı ve yüksek bel formuyla ofis stilinden akşam kombinlerine kadar çok yönlüdür.",
  "Siyah kot pantolon": "Koyu renk denim yapısı ve modern kesimiyle gündüzden geceye kolayca uyarlanır.",
  "Beyaz zincirli omuz çantası": "Zincir askı detayı ve kompakt formuyla günlük şıklığı tamamlayan pratik bir aksesuardır.",
  "Fularlı Siyah Mini Çanta": "Çıkarılabilir fular detayı ve mini tasarımıyla sade kombinlere zarif bir vurgu ekler.",
  "Mavi büyük kol çantası": "Geniş iç hacmi ve dayanıklı yapısıyla gün içinde ihtiyaçlarını düzenli taşımayı kolaylaştırır.",
  "Kahverengi kol çantası": "Sıcak kahve tonu ve sade hatlarıyla sezon fark etmeyen klasik bir kullanım sunar.",
  "Fularlı siyah bez çanta": "Hafif bez dokusu ve fular detayıyla günlük kullanımda hem rahat hem modern bir seçenek olur.",
};

// 2. Fonksiyonlar
function quiziBaslat() {
  const container = document.getElementById("quiz-container");
  const startBtn = document.getElementById("quiz-start-btn");

  mevcutSoru = 0;
  quizCevaplari.length = 0;
  startBtn.classList.add("hidden"); // Başlat butonunu gizle
  container.classList.remove("hidden"); // Quiz alanını göster
  soruGoster();
}

function soruGoster() {
  const container = document.getElementById("quiz-container");
  const data = quizData[mevcutSoru];

  container.innerHTML = `
      <div class="quiz-card">
        <p class="quiz-step">Soru ${mevcutSoru + 1} / ${quizData.length}</p>
        <h3>${data.soru}</h3>
        <div class="options quiz-options">
            ${data.secenekler
              .map(
                (secenek) =>
                  `<button class="quiz-option-btn" onclick="cevapla('${secenek}')">${secenek}</button>`,
              )
              .join("")}
        </div>
      </div>
  `;
}

function cevapla(secim) {
  quizCevaplari[mevcutSoru] = secim;
  mevcutSoru++;

  if (mevcutSoru < quizData.length) {
    soruGoster();
  } else {
    sonucGoster();
  }
}

function sonucGoster() {
  const secilenler = new Set(quizCevaplari);
  const oneriler = quizUrunleri
    .map((urun) => ({
      ...urun,
      puan: urun.etiketler.reduce(
        (toplam, etiket) => toplam + (secilenler.has(etiket) ? 1 : 0),
        0,
      ),
    }))
    .sort((a, b) => b.puan - a.puan)
    .slice(0, 4);

  const container = document.getElementById("quiz-container");
  container.innerHTML = `
      <div class="quiz-card quiz-result-card">
        <h3>Sana uygun ürünleri seçtik</h3>
        <p>Cevaplarına göre öne çıkan parçalar aşağıda.</p>
        <div class="quiz-product-grid">
          ${oneriler
            .map(
              (urun) => `
                <a class="quiz-product-card" href="${urun.link}">
                  <img src="${urun.gorsel}" alt="${urun.ad}">
                  <h4>${urun.ad}</h4>
                  <p>${urun.fiyat} TL</p>
                </a>
              `,
            )
            .join("")}
        </div>
        <a href="pages/urunler.html" class="quiz-all-products-link">Tüm Ürünleri Gör</a>
      </div>
    `;
}

// 3. Olay İzleyiciler (Event Listeners)
const quizStartBtn = document.getElementById("quiz-start-btn");
if (quizStartBtn) {
  quizStartBtn.addEventListener("click", quiziBaslat);
}

function mevcutUrunBilgileriniTopla() {
  const ad =
    (document.querySelector(".detail-info h2") || {}).textContent || "Urun";
  const fiyatYazi =
    (document.querySelector(".detail-info .price") || {}).textContent || "0";
  const aciklama =
    (document.querySelector(".detail-info .description") || {}).textContent || "";
  const gorsel =
    (document.querySelector(".detail-img img") || {}).getAttribute?.("src") || "";

  return {
    ad: ad.trim(),
    fiyat: parseInt(String(fiyatYazi).replace(/[^0-9]/g, ""), 10) || 0,
    aciklama: aciklama.trim(),
    gorsel,
  };
}

function urunDetayAciklamasiniGuncelle() {
  const adAlani = document.querySelector(".detail-info h2");
  const aciklamaAlani = document.querySelector(".detail-info .description");
  if (!adAlani || !aciklamaAlani) {
    return;
  }

  const urunAdi = adAlani.textContent.trim();
  const ozelAciklama = urunAciklamaHaritasi[urunAdi];
  if (ozelAciklama) {
    aciklamaAlani.textContent = ozelAciklama;
  }
}

// 4. Ürünü hafızaya ekleyen fonksiyon
function sepeteGonder(ad, fiyat, aciklama, gorsel) {
  const mevcutBilgiler = mevcutUrunBilgileriniTopla();
  const sepet = JSON.parse(localStorage.getItem("yeniSepet")) || [];
  sepet.push({
    urunAd: (ad || mevcutBilgiler.ad).trim(),
    urunFiyat: Number(fiyat || mevcutBilgiler.fiyat) || 0,
    urunAciklama: (aciklama || mevcutBilgiler.aciklama || "").trim(),
    urunGorsel: gorsel || mevcutBilgiler.gorsel || "",
  });
  localStorage.setItem("yeniSepet", JSON.stringify(sepet));

  alert((ad || mevcutBilgiler.ad) + " sepete eklendi!");
  window.location.href = "sepet.html";
}

// Inline onclick kullanan sayfalar için global erişim
window.sepeteGonder = sepeteGonder;

document.addEventListener("DOMContentLoaded", function () {
  document.title = document.title
    .replace(/Butik Giyim/gi, "Mor Butik")
    .replace(/MODA BUTIK/gi, "MOR BUTIK")
    .replace(/MODA BUTİK/gi, "MOR BUTİK");

  urunDetayAciklamasiniGuncelle();

  const addToCartBtn = document.querySelector(".add-to-cart");
  if (addToCartBtn && !addToCartBtn.getAttribute("onclick")) {
    addToCartBtn.addEventListener("click", function () {
      const dataName = addToCartBtn.getAttribute("data-name");
      const dataPrice = addToCartBtn.getAttribute("data-price");
      const dataDesc = addToCartBtn.getAttribute("data-description");
      const dataImage = addToCartBtn.getAttribute("data-image");

      const mevcutBilgiler = mevcutUrunBilgileriniTopla();
      const urunAd = dataName || mevcutBilgiler.ad;
      const urunFiyat =
        parseInt(String(dataPrice || "").replace(/[^0-9]/g, ""), 10) ||
        mevcutBilgiler.fiyat;
      const urunAciklama = dataDesc || mevcutBilgiler.aciklama;
      const urunGorsel = dataImage || mevcutBilgiler.gorsel;

      sepeteGonder(urunAd.trim(), urunFiyat, urunAciklama, urunGorsel);
    });
  }

  const sepetAlani = document.getElementById("cart-items");
  const toplamAlani = document.getElementById("total-price");
  if (sepetAlani) {
    const sepet = JSON.parse(localStorage.getItem("yeniSepet")) || [];
    const birlesikSepet = [];
    let toplam = 0;

    if (sepet.length > 0) {
      sepet.forEach(function (urun) {
        const ad = (urun.urunAd || "Urun").trim();
        const fiyat = Number(urun.urunFiyat) || 0;
        const aciklama =
          (urun.urunAciklama || urunAciklamaHaritasi[ad] || "").trim();
        const gorsel = urun.urunGorsel || "";

        const mevcut = birlesikSepet.find(
          (item) => item.urunAd === ad && item.urunFiyat === fiyat,
        );
        if (mevcut) {
          mevcut.adet += 1;
        } else {
          birlesikSepet.push({
            urunAd: ad,
            urunFiyat: fiyat,
            urunAciklama: aciklama,
            urunGorsel: gorsel,
            adet: 1,
          });
        }
      });

      sepetAlani.innerHTML = "";
      birlesikSepet.forEach(function (urun) {
        sepetAlani.innerHTML +=
          '<div class="cart-item">' +
          (urun.urunGorsel
            ? '<img src="' + urun.urunGorsel + '" alt="' + urun.urunAd + '" />'
            : "") +
          '<div class="cart-item-info">' +
          "<h4>" +
          urun.urunAd +
          (urun.adet > 1 ? ' <span class="cart-qty-badge">x' + urun.adet + "</span>" : "") +
          "</h4>" +
          (urun.urunAciklama ? "<p>" + urun.urunAciklama + "</p>" : "") +
          "<strong>" +
          urun.urunFiyat * urun.adet +
          " TL</strong>" +
          "</div>" +
          "</div>";
        toplam += urun.urunFiyat * urun.adet;
      });
    } else {
      sepetAlani.innerHTML = "<p>Sepetiniz şu an boş.</p>";
    }

    if (toplamAlani) {
      toplamAlani.innerText = toplam + " TL";
    }
  }
});