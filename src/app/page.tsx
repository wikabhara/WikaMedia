import Card from "@/components/card";

export default function Home() {
  const articles = [
    {
      image: "/backgroundhero.jpg",
      category: "Teknologi",
      title: "Revolusi AI di Dunia Kerja",
      description:
        "Kecerdasan buatan telah mengubah cara kita bekerja, dari otomatisasi hingga pengambilan keputusan.",
      link: "/detail",
    },
    {
      image: "/backgroundhero.jpg",
      category: "Gaya Hidup",
      title: "Tips Sehat di Tengah Kesibukan",
      description:
        "Menjaga kesehatan kini lebih mudah dengan beberapa tips praktis yang bisa diterapkan sehari-hari.",
      link: "/detail",
    },
    {
      image: "/backgroundhero.jpg",
      category: "Olahraga",
      title: "Kemenangan Dramatis di Final",
      description:
        "Timnas berhasil meraih kemenangan di menit-menit akhir dalam pertandingan yang menegangkan.",
      link: "/detail",
    },
    {
      image: "/backgroundhero.jpg",
      category: "Bisnis",
      title: "Startup Lokal Tembus Pasar Global",
      description:
        "Sebuah startup teknologi dari Indonesia berhasil mendapatkan pendanaan dan siap bersaing di kancah internasional.",
      link: "/detail",
    },
    {
      image: "/backgroundhero.jpg",
      category: "Seni & Budaya",
      title: "Pameran Seni Kontemporer Dibuka",
      description:
        "Galeri nasional menjadi tuan rumah pameran seni yang menampilkan karya-karya seniman muda berbakat.",
      link: "/detail",
    },
  ];

  return (
    <>
      <div className="bg-base-200">
        <div
          className="hero min-h-96"
          style={{
            backgroundImage: `url('/backgroundhero.jpg')`,
          }}
        >
          <div className="hero-overlay bg-black/50"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Welcome to WikaMedia</h1>
              <p className="mb-5">
                Menyajikan berita yang akurat, terpercaya, dan mendalam dari
                seluruh dunia untuk Anda.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* cards */}

      <div className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Berita Terbaru</h2>

        {/* Scroll */}
        <div
          className="flex overflow-x-auto space-x-8 snap-x snap-mandatory 
                     scrollbar-thin scrollbar-thumb-primary scrollbar-track-base-200 p-4 -mx-4"
        >
          {articles.map((article, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 w-4/5 md:w-[45%] lg:w-[30%]"
            >
              <Card
                image={article.image}
                category={article.category}
                title={article.title}
                description={article.description}
                link={article.link}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
