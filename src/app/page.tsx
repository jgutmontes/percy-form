import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-[20px] shadow-xl p-8 w-full max-w-sm space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="https://www.vectorlogo.es/wp-content/uploads/2024/07/logo-vector-rimac-seguros.jpg"            
            alt="RIMAC Logo"
            width={100}
            height={100}
          />
        </div>

        {/* Formulario de login */}
        <form className="space-y-4" autoComplete="off">
          <input
            type="email"
            placeholder="Email Address"
            required
             autoComplete="off"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
          <input
           autoComplete="off"
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold text-sm hover:bg-red-600 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
}
