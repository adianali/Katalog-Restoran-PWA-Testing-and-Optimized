class introartikel extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <article class="intro">
      <h2 tabindex="0"> 9 Restaurant terbaik disembilan kota besar </h2>
      <p tabindex="0"> 
        &nbsp; Kamu sedang mencari restoran yang ramai dikunjungi karena suasana nyaman, spot foto bagus, dan makanannya enak. Ada 9 kota besar yang menurut RestaurantKu menjadi rekomendasi tempat makan yang wajib kamu coba. 
         Memang ada banyak restoran yang ramai terdekat setiap kamu menggunakan google maps, lalu mencari sebuah restoran terdekat dengan menggunakan smartphone yang kamu miliki.Hasilnya nanti akan ada beberapa restoran yang bisa kamu pilih lalu ada puluhan ribu orang yang review restoran tersebut, sehingga kamu tinggal memilih tempat makan berdasarkan review orang-orang yang ada di google maps.
        <br><br>Tanpa panjang lebar, berikut ini rekomendasi restaurant yang ramai dikunjungi berdasarkan rekomendasi RestaurantKu.
      </p>
    </article>
           `;
  }
}
customElements.define('intro-artikel', introartikel);
