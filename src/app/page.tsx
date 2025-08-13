import Backgroundhero from "@/assets/img/backgroundhero.jpg";

export default function Home() {
  return (
    <>
      <div className="bg-base-200">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${Backgroundhero.src})`,
          }}
        >
          <div className="hero-overlay bg-black bg-opacity-50"></div>
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
    </>
  );
}
