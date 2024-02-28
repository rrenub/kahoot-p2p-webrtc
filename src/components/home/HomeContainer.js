import React from 'react';
import HomeSection from "./HomeSection";

const HomeContainer = () => {
    return (
        <main>
            <h1>Quiz P2P</h1>
            <section>
                <h2>Acceder</h2>
                <div>
                    <label>ID de la sala</label>
                    <input type="text"/>
                </div>
                <button>Acceder</button>
            </section>
            <div>
                <HomeSection title="Elabora un nuevo quiz" description="Crea un quiz personalizado con tus propias preguntas" linkText="Crear Quiz" linkURL="/create" />
                <HomeSection title="Elabora un nuevo quiz" description="Crea un quiz personalizado con tus propias preguntas" linkText="Crear Quiz" linkURL="/create" />
            </div>
        </main>
    );
};

export default HomeContainer;