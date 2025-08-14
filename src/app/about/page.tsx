import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Gibray",
    role: "Pemimpin Redaksi",
    image: "/gibray.png",
  },
  {
    name: "Alfiansyah",
    role: "Kepala Jurnalis",
    image: "/komeng.png",
  },
  {
    name: "Bahllul",
    role: "Manajer Teknologi",
    image: "/bahlul.png",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="hero min-h-[40vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Tentang WikaMedia</h1>
            <p className="py-6">
              Menyajikan berita yang akurat, terpercaya, dan mendalam dari
              seluruh dunia untuk Anda.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Visi & Misi Kami</h2>
            <p className="mb-4">
              Visi kami adalah menjadi sumber informasi terdepan yang
              memberdayakan masyarakat melalui jurnalisme berkualitas tinggi.
              Kami berkomitmen untuk menyajikan berita yang tidak hanya cepat,
              tetapi juga akurat dan berimbang.
            </p>
            <p>
              Misi kami adalah melaporkan kebenaran dengan integritas,
              memberikan ruang bagi beragam sudut pandang, dan memanfaatkan
              teknologi untuk menyajikan konten yang relevan dan mudah diakses
              oleh semua kalangan.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/Wmedia1.png"
              alt="WikaMedia Logo"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <Image
                    src={member.image}
                    alt={`Foto ${member.name}`}
                    width={200}
                    height={200}
                    className="rounded-full w-32 h-32 object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h3 className="card-title">{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
