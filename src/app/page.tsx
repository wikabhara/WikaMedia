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
  ];

  return (
    <>
      <div className="bg-base-200">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url('/backgroundhero.jpg')`,
          }}
        >
          <div className="hero-overlay bg-black/50"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Welcome to WikaMedia</h1>
              <p className="mb-5">
                Nikmati sumber berita terpercaya hanya untuk anda!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Berita Terbaru</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card
              key={index}
              image={article.image}
              category={article.category}
              title={article.title}
              description={article.description}
              link={article.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}
