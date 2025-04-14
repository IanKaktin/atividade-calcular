import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Descricao from './components/Descricao';
import Calculadora from './components/Calculadora';
import Rodape from './components/Rodape';

function App() {
    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">
            <Header />

            <main className="flex flex-1 flex-col md:flex-row items-start justify-between p-6 gap-8">
                {/* Lado Esquerdo */}
                <section className="md:w-1/2 space-y-6">
                    <Banner />
                    <Descricao />
                </section>

                {/* Lado Direito - Calculadora */}
                <section className="md:w-1/2 flex justify-center items-center">
                    <Calculadora />
                </section>
            </main>

            <Rodape />
        </div>
    );
}

export default App;
