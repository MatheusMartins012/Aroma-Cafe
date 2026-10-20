
function Localizacao() {
    return (
        <section className="w-full px-20 pb-20">
            <div className="overflow-hidden rounded-2xl border  border-gray-200">
                <iframe
                    title="Localização Aroma Café"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2944.2085765359743!2d-40.9233348029307!3d-3.8492222829873004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x794cbbd7ae6b261%3A0xf4860a7fc7a9be43!2sAromas%20Caf%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1792501549440!5m2!1spt-BR!2sbr"
                    className=" h-50 w-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                />
            </div>
        </section>
    );
}

export default Localizacao;
