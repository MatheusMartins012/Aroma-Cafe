import {FaCoffee,FaCheck,FaLock,FaEnvelope,
} from "react-icons/fa";

export default function Login() {
    return (
        <div
            className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
            style={{
                backgroundImage: "url('/img/bg_login.png')",
            }}
        >
            <div className="w-full max-w-262.5 min-h-155 bg-[#24170f]/90 rounded-2xl overflow-hidden shadow-2xl flex">

                <div className="w-1/2 bg-[#fffdf9] flex items-center justify-center p-12">
                    <div className="w-full max-w-97.5">

                        {/* LOGO */}
                        <div className="flex items-center justify-center gap-3 mb-10">
                            <div className="w-11 h-11 rounded-full border-2 border-[#7b3f1d] flex items-center justify-center">
                                <FaCoffee size={21} className="text-[#7b3f1d]" />
                            </div>
                            <span className="text-xl font-semibold text-[#29231f]">
                                Aroma Café
                            </span>
                        </div>

                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-[#29231f] mb-2">
                                Bem-vindo de volta!
                            </h1>
                            <p className="text-sm text-gray-500">
                                Faça login para continuar
                            </p>
                        </div>

                        <form className="space-y-5">

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    E-mail
                                </label>
                                <div className="relative">
                                    <FaEnvelope
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                        size={14}
                                    />
                                    <input
                                        type="email"
                                        placeholder="Digite seu e-mail"
                                        className="w-full h-12 pl-11 pr-4 rounded-lg border border-gray-200 bg-white text-sm outline-none transition focus:border-[#9a542b] focus:ring-2 focus:ring-[#9a542b]/20"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Senha
                                </label>
                                <div className="relative">
                                    <FaLock
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                        size={14}
                                    />
                                    <input
                                        type="password"
                                        placeholder="Digite sua senha"
                                        className="w-full h-12 pl-11 pr-4 rounded-lg border border-gray-200 bg-white text-sm outline-none transition focus:border-[#9a542b] focus:ring-2 focus:ring-[#9a542b]/20"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 accent-[#8b481f]"
                                    />
                                    <span>Lembrar de mim</span>
                                </label>
                                <button
                                    type="button"
                                    className="text-[#8b481f] font-medium hover:underline cursor-pointer"
                                >
                                    Esqueci a senha
                                </button>
                            </div>


                            <button
                                type="submit"
                                className="w-full h-12 rounded-lg bg-[#8b481f] hover:bg-[#733a18] text-white font-semibold transition shadow-md hover:shadow-lg cursor-pointer"
                            >
                                Entrar
                            </button>

                        </form>


                        <p className="text-center text-sm text-gray-500 mt-8">
                            Não tem uma conta?{" "}
                            <button
                                type="button"
                                className="text-[#8b481f] font-semibold hover:underline cursor-pointer"
                            >
                                Cadastre-se
                            </button>
                        </p>

                    </div>
                </div>

                <div
                    className="w-1/2 relative bg-cover bg-center flex items-end"
                    style={{
                        backgroundImage: "url('/images/cafe-login.jpg')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/35" />

                    <div className="relative z-10 p-12 text-white max-w-117.5">
                        <h2 className="text-4xl font-bold leading-tight mb-4">
                            Mais praticidade
                            <br />
                            para o seu dia
                        </h2>
                        <p className="text-base leading-relaxed text-white/90">
                            Acesse sua conta e faça pedidos,
                            <br />
                            acompanhe seu histórico e muito mais.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}