"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Terjadi Kesalahan</h1>
          <p className="py-6">
            Maaf, kami mengalami sedikit kendala. Anda bisa mencoba lagi atau
            kembali ke halaman utama.
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => reset()} className="btn btn-primary">
              Coba Lagi
            </button>
            <Link href="/" className="btn btn-ghost">
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
