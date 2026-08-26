import React, { useEffect } from 'react';

export default function Privacidad() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="relative min-h-screen pt-32 pb-20 bg-dark text-gray-300 font-sans overflow-hidden">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-3xl mx-auto px-6 relative z-10">

                <div className="mb-12 border-b border-white/10 pb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Políticas de <span className="text-primary neon-text">Privacidad</span>
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Última actualización: Agosto de 2026
                    </p>
                </div>

                <div className="space-y-8 text-base md:text-lg leading-relaxed">

                    <section>
                        <p>
                            En <strong>BuhoGrafika</strong> valoramos tu privacidad y nos comprometemos a proteger tus datos personales en cumplimiento con la Ley N° 25.326 de Protección de Datos Personales de la República Argentina.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">1. Información que recopilamos</h2>
                        <p className="mb-3">
                            A través de nuestro sitio web, recolectamos únicamente la información que decides compartir voluntariamente al utilizar nuestro formulario de contacto o al comunicarte vía WhatsApp. Esto incluye:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-400">
                            <li>Nombre completo.</li>
                            <li>Dirección de correo electrónico.</li>
                            <li>Número de teléfono.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">2. Uso de la información</h2>
                        <p className="mb-3">
                            Los datos proporcionados serán utilizados exclusivamente para:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-400">
                            <li>Responder a tus consultas y brindar asesoramiento personalizado.</li>
                            <li>Enviar presupuestos solicitados.</li>
                            <li>Coordinar la entrega o instalación de nuestros servicios gráficos.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">3. Protección y confidencialidad</h2>
                        <p>
                            BuhoGrafika no vende, alquila ni comparte tu información personal con terceros bajo ninguna circunstancia, salvo que sea estrictamente requerido por una orden judicial. Hemos implementado medidas de seguridad razonables para proteger tu información contra accesos no autorizados.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">4. Tus derechos</h2>
                        <p>
                            Como titular de los datos, tienes derecho a solicitar el acceso, la rectificación, actualización o eliminación de tu información personal en nuestra base de datos en cualquier momento. Para ejercer estos derechos, puedes contactarnos enviando un correo electrónico a <a href="mailto:buhografika@gmail.com" className="text-primary hover:underline">buhografika@gmail.com</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">5. Uso del sitio web</h2>
                        <p>
                            El diseño, las imágenes de los trabajos realizados y el contenido de este sitio web son propiedad exclusiva de BuhoGrafika. Queda prohibida su reproducción total o parcial sin autorización previa.
                        </p>
                    </section>

                </div>
            </div>
        </main>
    );
}