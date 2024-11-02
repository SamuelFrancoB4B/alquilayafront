"use client";
import React, { useState } from "react";
import ButtonCyan from "../ButtonCyan/ButtonCyan";
import IconSelector from "../IconSelector/IconSelector";
import { useRouter } from "next/navigation";


const Step2 = () => {
    const router = useRouter(); // Instanciamos el enrutador para poder navegar entre pasos
    const [isSelected, setIsSelected] = useState(null);

    const serviceData = [
        { icon: '/llave-de-casa.png', text: "Una vivienda completa" },
        { icon: '/llave-de-la-habitacion.png', text: "Habitación Privada" },
        { icon: '/compartir-el-hogar.png', text: "Habitación Compartida" },
        { icon: '/bano.png', text: "Habitación con Baño Privado" },
    ];

    // Función que guarda la selección en sessionStorage y navega al siguiente paso
    const saveDataPage = () => {
        // Recupera los datos almacenados en sessionStorage, de lo contrario, crea un objeto vacío
        let data = sessionStorage.getItem("data") ? JSON.parse(sessionStorage.getItem("data")!) : {};

       /* // Guarda en el objeto data los servicios seleccionados para agregarlos a la sesión
        if (isSelected) {
            data.services = [isSelected.text];
        }*/

        // Actualiza sessionStorage con los nuevos datos en formato JSON
        sessionStorage.setItem("data", JSON.stringify(data));

        // Navega al paso 3 después de guardar los datos
        router.push("/sube-tu-propiedad/paso-3");
    };

    return (
        <div>
            <div className="relative bg-gray-100 min-h-screen p-10">

                <h2 className="ml-10 mt-10 text-black mb-2">Paso 2:</h2>
                <h1 className="mt-10 text-black text-center mb-4">Indicá qué tipo de alojamiento ofrecés a los huéspedes</h1>

                <div className="flex justify-center mb-1">
                    <IconSelector
                        data={serviceData}
                        isSelected={isSelected}
                        setIsSelected={setIsSelected}
                        numCols={2}
                        iconSize={48}
                    />
                </div>
            </div>

            <div className="absolute bottom-4 right-4">
                <ButtonCyan onClick={saveDataPage} />
            </div>
        </div>
    );
};

export default Step2;
