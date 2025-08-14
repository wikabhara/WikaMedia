import React from "react";
import Image from "next/image";

export default function Detail() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <article className="prose lg:prose-xl max-w-none">
          <h1 className="text-4xl font-bold mb-4">
            Revolusi AI di Dunia Kerja
          </h1>
          <div className="flex items-center text-gray-500 mb-4">
            <span className="badge badge-primary mr-4">Teknologi</span>
            <span>14 Agustus 2025</span>
          </div>
          <figure>
            <Image
              src="/backgroundhero.jpg"
              alt="Revolusi AI di Dunia Kerja"
              width={1200}
              height={675}
              className="object-cover w-full rounded-lg shadow-lg"
            />
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              Ilustrasi perkembangan teknologi AI.
            </figcaption>
          </figure>
          <p className="lead">
            Kecerdasan buatan (AI) telah mengubah cara kita bekerja, mulai dari
            otomatisasi tugas-tugas rutin hingga membantu dalam pengambilan
            keputusan yang kompleks.
          </p>
          <p>
            Perkembangan pesat dalam teknologi AI telah membuka pintu bagi
            berbagai inovasi di berbagai sektor industri. Perusahaan kini dapat
            memanfaatkan AI untuk meningkatkan efisiensi operasional,
            menganalisis data dalam jumlah besar untuk mendapatkan wawasan yang
            berharga, dan menciptakan produk serta layanan yang lebih personal
            bagi pelanggan.
          </p>
          <p>
            Meskipun demikian, revolusi AI juga membawa tantangan baru. Salah
            satunya adalah kekhawatiran mengenai penggantian pekerjaan manusia
            oleh mesin. Oleh karena itu, penting bagi para pekerja untuk terus
            meningkatkan keterampilan mereka dan beradaptasi dengan perubahan
            ini. Pendidikan dan pelatihan dalam bidang AI dan teknologi terkait
            menjadi kunci untuk tetap relevan di pasar kerja masa depan.
          </p>
        </article>
      </div>
    </>
  );
}
