
import React from 'react';
import logo from '/Calcular.png';

export default function Header() {
    return (
        <header className="flex justify-between items-center p-4 border-b text-sm">
            <div className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="w-8 h-8" />
                <span className="font-bold">Calcular</span>
                <span className="text-gray-500 hidden sm:inline">Ferramenta de aprendizagem de cálculo</span>
            </div>
            <div className="text-gray-500">07/06/2022</div>
        </header>
    );
}
