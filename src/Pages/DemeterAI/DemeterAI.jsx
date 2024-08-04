import React, { useState } from 'react';
import './DemeterAI.css'; // Importa el archivo CSS

const DemeterAI = () => {
    const [selectedQuestion, setSelectedQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const responses = {
        '¿Qué es una finca?': 'Una finca es una propiedad rural que se dedica a actividades agrícolas o ganaderas. Puede ser utilizada para cultivar plantas, criar animales, o ambas cosas.',
        '¿Cómo mejorar la agricultura?': 'Para mejorar la agricultura, puedes adoptar prácticas como la rotación de cultivos, el uso de fertilizantes orgánicos, y técnicas de conservación del agua. También es útil utilizar tecnologías modernas para monitorear y gestionar los cultivos.',
        '¿Qué son los agroquímicos verdes?': 'Los agroquímicos verdes son productos diseñados para minimizar el impacto ambiental y ser más sostenibles en comparación con los agroquímicos tradicionales. Pueden incluir fertilizantes orgánicos, biopesticidas, y otros productos que tienen menos efectos secundarios negativos.',
        '¿Cómo elaborar agroquímicos verdes?': 'La elaboración de agroquímicos verdes suele involucrar el uso de ingredientes naturales y procesos sostenibles. Puede incluir la fermentación de residuos orgánicos para producir compost o el desarrollo de extractos de plantas que actúan como pesticidas.',
        '¿Qué plantaciones son recomendables para mi región?': 'La elección de plantaciones depende del clima, tipo de suelo y otros factores ambientales de tu región. Algunas opciones populares incluyen vegetales locales, frutas adaptadas al clima, y cultivos que requieran menos recursos hídricos.',
        'Ideas para mejorar la productividad de una finca': 'Considera implementar sistemas de riego eficiente, usar técnicas de cultivo de precisión, diversificar los cultivos para reducir riesgos, y adoptar tecnologías de monitoreo para obtener datos precisos sobre el estado de tus cultivos.',
        '¿Qué es la agricultura sostenible?': 'La agricultura sostenible busca mantener la productividad agrícola a largo plazo sin comprometer los recursos naturales ni el medio ambiente. Incluye prácticas como la conservación del suelo, el manejo eficiente del agua, y el uso de técnicas de cultivo amigables con el ecosistema.',
        '¿Cómo se realiza el compostaje?': 'El compostaje es el proceso de descomposición de materiales orgánicos como restos de comida y estiércol para producir compost. El compost se utiliza como fertilizante natural para enriquecer el suelo.',
        '¿Qué es la permacultura?': 'La permacultura es un sistema de diseño agrícola basado en principios de ecología y sostenibilidad. Busca crear sistemas agrícolas que imiten los ecosistemas naturales y sean autosuficientes.',
        '¿Cómo manejar plagas de manera orgánica?': 'Para manejar plagas de manera orgánica, puedes usar métodos como el control biológico (introducir enemigos naturales de las plagas), usar trampas, y aplicar productos naturales como aceites esenciales o extractos de plantas.',
        '¿Qué es el riego por goteo?': 'El riego por goteo es un sistema de riego que entrega agua directamente a las raíces de las plantas a través de tubos y goteros. Es eficiente y reduce el desperdicio de agua.',
        '¿Cómo mejorar la calidad del suelo?': 'Para mejorar la calidad del suelo, puedes usar prácticas como la incorporación de materia orgánica, la rotación de cultivos, y el uso de cultivos de cobertura para prevenir la erosión.',
        '¿Qué son los biofertilizantes?': 'Los biofertilizantes son productos que contienen microorganismos beneficiosos que ayudan a mejorar la salud del suelo y la disponibilidad de nutrientes para las plantas.',
        '¿Cómo se realiza el cultivo hidropónico?': 'El cultivo hidropónico es un método de cultivo que no utiliza suelo. Las plantas crecen en una solución nutritiva que proporciona todos los nutrientes necesarios.',
        '¿Qué son las técnicas de cultivo de precisión?': 'Las técnicas de cultivo de precisión utilizan tecnologías como sensores y sistemas de información para gestionar los cultivos de manera más eficiente y precisa, optimizando el uso de recursos.',
        '¿Cómo se realiza la poda de árboles frutales?': 'La poda de árboles frutales se realiza eliminando ramas muertas o enfermas, y recortando ramas para mejorar la forma del árbol y fomentar una mejor producción de frutas.',
        '¿Qué es el agroecología?': 'La agroecología es un enfoque que combina principios ecológicos con prácticas agrícolas para crear sistemas de producción más sostenibles y resilientes.',
        '¿Cómo prevenir la erosión del suelo?': 'Para prevenir la erosión del suelo, puedes usar técnicas como la siembra de cultivos de cobertura, construir terrazas, y mantener una cubierta vegetal en el suelo.',
        '¿Qué son las técnicas de agricultura de conservación?': 'Las técnicas de agricultura de conservación incluyen prácticas que protegen y mejoran la salud del suelo, como la siembra directa, la rotación de cultivos y la conservación del agua.',
        '¿Cómo elaborar fertilizantes caseros?': 'Puedes elaborar fertilizantes caseros utilizando ingredientes como cáscaras de huevo, restos de café, y estiércol compostado. Estos materiales proporcionan nutrientes esenciales para las plantas.',
        '¿Qué es la agricultura vertical?': 'La agricultura vertical es un método de cultivo que utiliza estructuras verticales, como torres o estantes, para maximizar el uso del espacio y permitir el cultivo en áreas urbanas.',
        '¿Cómo manejar la salinidad del suelo?': 'Para manejar la salinidad del suelo, puedes usar prácticas como el riego con agua de baja salinidad, el uso de cultivos tolerantes a la sal, y la incorporación de materia orgánica.',
        '¿Qué es la agricultura regenerativa?': 'La agricultura regenerativa es un enfoque que busca restaurar la salud del suelo y los ecosistemas mediante prácticas que aumentan la biodiversidad y mejoran la resiliencia del sistema agrícola.',
        '¿Cómo hacer un análisis de suelo?': 'Un análisis de suelo se realiza tomando una muestra del suelo y enviándola a un laboratorio para evaluar su composición y niveles de nutrientes. Los resultados ayudan a tomar decisiones sobre la fertilización y manejo del suelo.',
        '¿Qué es el manejo integrado de plagas (MIP)?': 'El manejo integrado de plagas es un enfoque que combina diversas estrategias para controlar plagas de manera efectiva y sostenible, minimizando el uso de pesticidas.',
        '¿Cómo se realiza la siembra directa?': 'La siembra directa es una técnica en la que las semillas se siembran directamente en el suelo sin necesidad de preparar el lecho de siembra. Esto ayuda a conservar la humedad y mejorar la salud del suelo.',
        '¿Qué son los cultivos de cobertura?': 'Los cultivos de cobertura son plantas que se siembran entre cultivos principales para proteger el suelo, mejorar su estructura y aportar nutrientes.',
        '¿Cómo se realiza el análisis de agua para riego?': 'El análisis de agua para riego se realiza tomando una muestra del agua y evaluando su composición química. Esto ayuda a ajustar el uso de fertilizantes y evitar problemas de salinidad.',
        '¿Qué es el cultivo en terrazas?': 'El cultivo en terrazas es una técnica que implica construir terrazas en terrenos inclinados para reducir la erosión y facilitar el cultivo de plantas.',
        '¿Cómo prevenir enfermedades en los cultivos?': 'Para prevenir enfermedades en los cultivos, es importante usar variedades resistentes, mantener buenas prácticas de manejo, y aplicar tratamientos preventivos cuando sea necesario.',
        '¿Qué es el cultivo de plantas medicinales?': 'El cultivo de plantas medicinales se refiere al cultivo de plantas que tienen propiedades terapéuticas y se utilizan en la medicina tradicional o alternativa.',
        '¿Cómo se realiza la recolección de semillas?': 'La recolección de semillas se realiza cuando las semillas están maduras y secas. Es importante recolectarlas en el momento adecuado para garantizar su viabilidad.',
        '¿Qué es el riego por aspersión?': 'El riego por aspersión es un sistema que simula la lluvia al distribuir agua sobre las plantas en forma de gotas. Es adecuado para grandes áreas y cultivos variados.',
        '¿Cómo manejar el agua en la agricultura?': 'El manejo del agua en la agricultura incluye técnicas para conservar y utilizar el agua de manera eficiente, como la implementación de sistemas de riego, la recolección de agua de lluvia, y el uso de prácticas de conservación.',
        '¿Qué es la agroforestería?': 'La agroforestería es una práctica que combina la agricultura con la silvicultura para crear sistemas agrícolas que proporcionen beneficios ambientales, económicos y sociales.',
        '¿Cómo hacer un plan de manejo agrícola?': 'Un plan de manejo agrícola incluye estrategias para la gestión de cultivos, recursos y prácticas sostenibles. Debe considerar aspectos como el clima, el suelo y las necesidades del cultivo.',
        '¿Qué es la agricultura orgánica?': 'La agricultura orgánica es un sistema de cultivo que evita el uso de pesticidas y fertilizantes sintéticos, y se basa en prácticas naturales para mantener la salud del suelo y los cultivos.',
        '¿Cómo hacer un sistema de riego automático?': 'Un sistema de riego automático utiliza sensores y temporizadores para suministrar agua a las plantas según sus necesidades. Puede incluir sistemas de goteo, aspersión o microaspersión.',
        '¿Qué son los invernaderos?': 'Los invernaderos son estructuras que proporcionan un ambiente controlado para el cultivo de plantas. Permiten cultivar durante todo el año y proteger las plantas de condiciones adversas.',
        '¿Cómo mejorar la eficiencia del uso del agua en la agricultura?': 'Para mejorar la eficiencia del uso del agua, puedes usar técnicas como el riego por goteo, la recolección de agua de lluvia, y la implementación de prácticas de conservación del suelo.',
        '¿Qué es el control biológico de plagas?': 'El control biológico de plagas utiliza organismos vivos, como insectos depredadores o parásitos, para controlar las poblaciones de plagas de manera natural.',
        '¿Cómo se realiza la fermentación de estiércol?': 'La fermentación de estiércol implica la descomposición controlada del estiércol para producir compost. Se realiza en un contenedor o pila donde se controla la temperatura y la humedad.',
        '¿Qué son las técnicas de agricultura de precisión?': 'Las técnicas de agricultura de precisión utilizan tecnologías como GPS y sensores para gestionar los cultivos de manera más eficiente y personalizada.',
        '¿Cómo se realiza el análisis de nutrientes en el suelo?': 'El análisis de nutrientes en el suelo se realiza mediante la toma de muestras y su evaluación en un laboratorio para determinar los niveles de nutrientes esenciales.',
        '¿Qué es la siembra en surcos?': 'La siembra en surcos es una técnica en la que se hacen surcos en el suelo para sembrar las semillas, lo que facilita el manejo y la cosecha.',
        '¿Cómo hacer un sistema de compostaje en casa?': 'Puedes hacer un sistema de compostaje en casa utilizando un recipiente o compostador donde se mezclan materiales orgánicos como restos de comida y hojas secas.',
        '¿Qué es la agricultura de conservación?': 'La agricultura de conservación es un enfoque que busca preservar la calidad del suelo y el medio ambiente mediante prácticas como la siembra directa y la rotación de cultivos.',
        '¿Cómo mejorar la estructura del suelo?': 'Para mejorar la estructura del suelo, puedes incorporar materia orgánica, utilizar prácticas de labranza mínima y evitar el sobrepastoreo.',
        '¿Qué son los cultivos intercalados?': 'Los cultivos intercalados son cultivos que se siembran entre otros cultivos principales para aprovechar mejor el espacio y mejorar la biodiversidad.',
        '¿Cómo manejar los residuos agrícolas?': 'Los residuos agrícolas se pueden manejar mediante técnicas como el compostaje, la producción de biogás, y la incorporación de residuos en el suelo.',
        '¿Qué es la agricultura urbana?': 'La agricultura urbana se refiere al cultivo de plantas y la cría de animales en entornos urbanos, como jardines comunitarios, tejados y balcones.',
        '¿Cómo hacer un jardín vertical?': 'Un jardín vertical se realiza utilizando estructuras verticales como paneles o estantes para cultivar plantas. Es una opción eficiente para el cultivo en espacios reducidos.',
        '¿Qué es el cultivo de algas?': 'El cultivo de algas es la producción de algas marinas o de agua dulce para su uso en alimentos, suplementos nutricionales, y productos industriales.',
        '¿Cómo se realiza la selección de cultivos?': 'La selección de cultivos se basa en factores como el clima, el tipo de suelo, y las necesidades del mercado. Es importante elegir cultivos adecuados para las condiciones locales.',
        '¿Qué son las técnicas de cultivo en lechos elevados?': 'Las técnicas de cultivo en lechos elevados utilizan camas elevadas para cultivar plantas, lo que facilita el acceso y mejora el drenaje del suelo.',
        '¿Cómo mejorar la fertilidad del suelo?': 'Para mejorar la fertilidad del suelo, puedes usar abonos orgánicos, practicar la rotación de cultivos, y aplicar técnicas de manejo del suelo sostenibles.',
        '¿Qué es el cultivo en macetas?': 'El cultivo en macetas es una técnica que utiliza contenedores para cultivar plantas en espacios reducidos, ideal para jardines urbanos y terrazas.',
        '¿Cómo se realiza la recogida de lluvia?': 'La recogida de lluvia se realiza mediante la instalación de sistemas de captación, como canalones y depósitos, para recolectar y almacenar agua de lluvia para su uso en riego.',
        '¿Qué son los bioestimulantes?': 'Los bioestimulantes son productos que mejoran la salud y el crecimiento de las plantas al estimular procesos biológicos y aumentar la resistencia a estrés.',
        '¿Cómo hacer un análisis de suelo para cultivo de huerto?': 'El análisis de suelo para cultivo de huerto incluye la toma de muestras y su evaluación en un laboratorio para determinar los niveles de nutrientes y pH del suelo.',
        '¿Qué es la gestión de nutrientes en la agricultura?': 'La gestión de nutrientes en la agricultura implica el uso eficiente de fertilizantes y enmiendas para asegurar que las plantas reciban los nutrientes necesarios para su crecimiento.',
        '¿Cómo prevenir la contaminación del suelo?': 'Para prevenir la contaminación del suelo, es importante evitar el uso excesivo de pesticidas y fertilizantes, y gestionar adecuadamente los residuos agrícolas.',
        '¿Cómo se realiza el control de malezas?': 'El control de malezas se puede realizar mediante métodos mecánicos, químicos y culturales. Es importante seleccionar el método adecuado para cada tipo de maleza.',
        '¿Qué son las técnicas de manejo de agua?': 'Las técnicas de manejo de agua incluyen prácticas para optimizar el uso del agua en la agricultura, como la implementación de sistemas de riego eficientes y la conservación del agua.',
        '¿Cómo se realiza el cultivo de hongos?': 'El cultivo de hongos se realiza en un ambiente controlado con sustratos adecuados. Los hongos se cultivan en condiciones de humedad y temperatura específicas.',
        '¿Qué es la agricultura climáticamente inteligente?': 'La agricultura climáticamente inteligente busca aumentar la productividad agrícola mientras se reduce el impacto en el clima. Incluye prácticas para adaptarse al cambio climático y mitigar sus efectos.',
        '¿Cómo se realiza la gestión de residuos orgánicos?': 'La gestión de residuos orgánicos incluye prácticas como el compostaje y la producción de biogás para reciclar los residuos y utilizar los productos resultantes como fertilizantes.',
        '¿Qué son los sistemas agroforestales?': 'Los sistemas agroforestales combinan árboles y cultivos en el mismo terreno para mejorar la biodiversidad, el manejo del suelo y la productividad.',
        '¿Cómo hacer un plan de cultivo?': 'Un plan de cultivo incluye la selección de cultivos, la programación de siembra y cosecha, y las estrategias de manejo para optimizar la producción.',
        '¿Qué es el cultivo en agua?': 'El cultivo en agua, también conocido como hidroponía, es un método de cultivo en el que las plantas crecen en una solución nutritiva sin suelo.',
        '¿Cómo se realiza la siembra de cultivos tropicales?': 'La siembra de cultivos tropicales requiere considerar factores como el clima cálido y húmedo, y seleccionar variedades adecuadas para estas condiciones.',
        '¿Qué es el cultivo de biomasa?': 'El cultivo de biomasa se refiere al cultivo de plantas destinadas a la producción de materia orgánica para su uso como combustible o en la producción de bioproductos.',
        '¿Cómo hacer un plan de fertilización?': 'Un plan de fertilización incluye la selección de fertilizantes adecuados, la programación de aplicaciones y la evaluación de las necesidades nutricionales del cultivo.',
        '¿Qué es el cultivo de tubérculos?': 'El cultivo de tubérculos implica el cultivo de plantas que producen estructuras subterráneas comestibles, como papas, zanahorias y remolachas.',
        '¿Cómo se realiza la plantación de árboles frutales?': 'La plantación de árboles frutales incluye la selección de variedades adecuadas, la preparación del suelo y el cuidado de los árboles durante su crecimiento.',
        '¿Qué son las técnicas de cultivo sin suelo?': 'Las técnicas de cultivo sin suelo, como la hidroponía y la aeroponía, utilizan soluciones nutritivas o aire para cultivar plantas sin suelo.',
        '¿Cómo mejorar la resistencia de los cultivos a enfermedades?': 'Para mejorar la resistencia de los cultivos a enfermedades, puedes utilizar variedades resistentes, aplicar tratamientos preventivos y mantener buenas prácticas de manejo.',
        '¿Qué es el cultivo de plantas aromáticas?': 'El cultivo de plantas aromáticas se refiere al cultivo de plantas que tienen aromas y sabores distintivos, como albahaca, menta y romero.',
        '¿Cómo hacer un sistema de captura de agua de lluvia?': 'Un sistema de captura de agua de lluvia incluye la instalación de canalones, tuberías y depósitos para recolectar y almacenar agua de lluvia.',
        '¿Qué es el cultivo de cereales?': 'El cultivo de cereales implica el cultivo de plantas como trigo, maíz y arroz, que se utilizan para producir granos comestibles.',
        '¿Cómo se realiza la gestión de plagas en invernaderos?': 'La gestión de plagas en invernaderos incluye el uso de técnicas de control integrado, como el uso de depredadores naturales y la aplicación de tratamientos biológicos.',
        '¿Qué son las técnicas de agricultura regenerativa?': 'Las técnicas de agricultura regenerativa buscan restaurar la salud del suelo y los ecosistemas mediante prácticas como la rotación de cultivos y el uso de abonos verdes.',
        '¿Cómo hacer un sistema de riego automatizado?': 'Un sistema de riego automatizado se puede construir utilizando sensores de humedad, temporizadores y válvulas para controlar el riego de manera eficiente.',
        '¿Qué es la agricultura de conservación de suelos?': 'La agricultura de conservación de suelos se enfoca en prácticas que protegen y mejoran la calidad del suelo, como la siembra directa y el uso de cultivos de cobertura.',
        '¿Cómo se realiza el cultivo de plantas ornamentales?': 'El cultivo de plantas ornamentales se realiza mediante la selección de variedades estéticamente agradables y su cuidado para mantener su aspecto y salud.',
        '¿Qué son los sistemas de cultivo vertical?': 'Los sistemas de cultivo vertical permiten cultivar plantas en estructuras verticales, optimizando el uso del espacio y facilitando el cultivo en áreas urbanas.',
        '¿Cómo hacer un plan de riego?': 'Un plan de riego incluye la evaluación de las necesidades de agua de los cultivos, la selección de métodos de riego y la programación de aplicaciones de agua.',
        '¿Qué es la agricultura de precisión?': 'La agricultura de precisión utiliza tecnologías como sensores y GPS para gestionar los cultivos de manera más eficiente, mejorando la productividad y reduciendo el impacto ambiental.',
        '¿Cómo se realiza el cultivo de plantas medicinales?': 'El cultivo de plantas medicinales incluye la selección de variedades con propiedades terapéuticas y su cuidado para asegurar su calidad y efectividad.',
        '¿Cómo hacer un sistema de compostaje eficiente?': 'Un sistema de compostaje eficiente requiere una mezcla adecuada de materiales orgánicos, un control adecuado de la humedad y la aireación, y una temperatura óptima.',
        '¿Qué son las técnicas de cultivo en sustratos alternativos?': 'Las técnicas de cultivo en sustratos alternativos utilizan materiales diferentes al suelo, como perlita o fibra de coco, para cultivar plantas en ambientes controlados.',
        '¿Cómo se realiza el cultivo de hierbas culinarias?': 'El cultivo de hierbas culinarias implica seleccionar variedades apropiadas para el uso en cocina y proporcionarles condiciones óptimas de crecimiento.',
        '¿Qué es la agricultura biodinámica?': 'La agricultura biodinámica es un enfoque de cultivo que utiliza principios de la agricultura orgánica y prácticas basadas en ciclos astronómicos para mejorar la salud del suelo y las plantas.',
        '¿Cómo hacer un sistema de cultivo en casa?': 'Puedes hacer un sistema de cultivo en casa utilizando macetas, sustratos adecuados, y sistemas de riego para cultivar plantas en un espacio reducido.',
        '¿Qué es el cultivo de especias?': 'El cultivo de especias se refiere al cultivo de plantas cuyas partes se utilizan para dar sabor a los alimentos, como pimienta, clavo y canela.',
        '¿Cómo se realiza la poda de plantas?': 'La poda de plantas se realiza eliminando partes no deseadas, como ramas muertas o enfermas, para mejorar la salud de la planta y fomentar un crecimiento más vigoroso.',
        '¿Qué es la agricultura ecológica?': 'La agricultura ecológica es un enfoque de cultivo que evita el uso de productos químicos sintéticos y promueve prácticas que respetan el medio ambiente y la salud del suelo.',
        '¿Cómo hacer un sistema de cultivo en invernadero?': 'Un sistema de cultivo en invernadero incluye la instalación de estructuras de invernadero, sistemas de riego y ventilación, y la selección de cultivos adecuados para el entorno controlado.',
        '¿Qué son los cultivos hidropónicos?': 'Los cultivos hidropónicos son cultivos que se realizan en soluciones nutritivas sin suelo, utilizando sustratos inertes o soluciones líquidas para proporcionar nutrientes a las plantas.',
        '¿Cómo se realiza la planificación de cultivos?': 'La planificación de cultivos implica seleccionar cultivos adecuados para el clima y el suelo, y programar las fechas de siembra y cosecha para optimizar la producción.',
        '¿Qué es la agricultura permacultural?': 'La agricultura permacultural es un enfoque que busca diseñar sistemas agrícolas sostenibles basados en principios ecológicos y la imitación de ecosistemas naturales.',
        '¿Cómo hacer un sistema de cultivo en contenedores?': 'Puedes hacer un sistema de cultivo en contenedores utilizando macetas o recipientes con buen drenaje, sustratos adecuados y sistemas de riego eficientes.',
        '¿Qué es el cultivo de leguminosas?': 'El cultivo de leguminosas implica cultivar plantas que fijan nitrógeno en el suelo, como frijoles, lentejas y garbanzos, mejorando la fertilidad del suelo.',
        '¿Cómo se realiza el cultivo de raíces comestibles?': 'El cultivo de raíces comestibles incluye la selección de variedades adecuadas y el cuidado del suelo para asegurar un buen desarrollo y calidad de las raíces.',
        '¿Qué son las técnicas de cultivo en agua reciclada?': 'Las técnicas de cultivo en agua reciclada utilizan agua reciclada o reutilizada para el riego, reduciendo el consumo de agua fresca y mejorando la sostenibilidad.',
        '¿Cómo hacer un jardín de hierbas en casa?': 'Puedes hacer un jardín de hierbas en casa utilizando macetas, una mezcla adecuada de tierra y fertilizantes, y proporcionando luz y riego adecuados.',
        '¿Qué es la agricultura intensiva?': 'La agricultura intensiva se enfoca en maximizar la producción en un área reducida mediante el uso de tecnología avanzada, fertilizantes y métodos de cultivo intensivos.',
        '¿Cómo se realiza la cosecha de cultivos?': 'La cosecha de cultivos se realiza cuando los frutos, granos o partes de la planta han alcanzado la madurez, utilizando herramientas adecuadas para recolectar sin dañar los cultivos.',
        '¿Qué son las técnicas de cultivo en túneles?': 'Las técnicas de cultivo en túneles utilizan estructuras cubiertas para proteger los cultivos de condiciones climáticas adversas y extender la temporada de crecimiento.',
        '¿Cómo hacer un sistema de cultivo en acuaponía?': 'Un sistema de cultivo en acuaponía combina el cultivo de plantas con la cría de peces, utilizando el agua rica en nutrientes de los peces para fertilizar las plantas.',
        '¿Qué es la agricultura sinérgica?': 'La agricultura sinérgica es un enfoque que busca crear sistemas agrícolas que maximicen los beneficios mutuos entre plantas, animales y el medio ambiente.',
        '¿Cómo hacer un plan de manejo de plagas?': 'Un plan de manejo de plagas incluye la identificación de plagas, la selección de métodos de control, y la implementación de prácticas para minimizar el impacto de las plagas en los cultivos.',
        '¿Qué es el cultivo en lechos elevados?': 'El cultivo en lechos elevados implica el uso de camas elevadas para cultivar plantas, lo que mejora el drenaje y facilita el acceso a las plantas.',
        '¿Cómo se realiza la selección de variedades de cultivo?': 'La selección de variedades de cultivo se basa en factores como el clima, la resistencia a enfermedades, y las características deseadas para el cultivo.',
        '¿Qué es el cultivo de plantas perennes?': 'El cultivo de plantas perennes implica cultivar plantas que viven más de dos años y producen cosechas repetidas, como fresas y espárragos.',
        '¿Cómo hacer un jardín de flores en casa?': 'Puedes hacer un jardín de flores en casa utilizando macetas o parterres, seleccionando variedades adecuadas para el clima, y proporcionando cuidado y mantenimiento regular.',
        '¿Qué son los sistemas de cultivo con control climático?': 'Los sistemas de cultivo con control climático utilizan tecnología para regular el ambiente de cultivo, como la temperatura, la humedad y la luz, para mejorar la productividad.',
        '¿Cómo hacer un sistema de cultivo con reciclaje de nutrientes?': 'Puedes hacer un sistema de cultivo con reciclaje de nutrientes utilizando técnicas como el compostaje y el uso de sistemas de cultivo que permiten la reutilización de nutrientes.',
        '¿Qué es la agricultura de montaña?': 'La agricultura de montaña se refiere a la práctica de cultivar en terrenos montañosos, adaptando las técnicas de cultivo a las condiciones específicas de altitud y pendiente.',
        '¿Cómo se realiza el cultivo de flores comestibles?': 'El cultivo de flores comestibles incluye la selección de variedades adecuadas para el consumo, el cuidado de las plantas y la cosecha de las flores para su uso en alimentos.',
        '¿Qué son las técnicas de cultivo en sistemas cerrados?': 'Las técnicas de cultivo en sistemas cerrados utilizan entornos controlados y cerrados para cultivar plantas, reduciendo la exposición a factores externos y mejorando el control de las condiciones de crecimiento.',
        '¿Cómo hacer un sistema de cultivo en sistemas aquaponicos?': 'Un sistema de cultivo en sistemas aquaponicos combina la acuicultura con la hidroponía, creando un ecosistema donde los desechos de los peces fertilizan las plantas.',
        '¿Qué es el cultivo de plantas suculentas?': 'El cultivo de plantas suculentas implica cultivar plantas que almacenan agua en sus hojas, como cactus y aloe, adaptadas a condiciones de sequía.',
        '¿Cómo se realiza el cultivo de verduras de hoja?': 'El cultivo de verduras de hoja, como lechuga y espinaca, requiere una siembra adecuada, riego y fertilización para obtener hojas tiernas y saludables.',
        '¿Cómo hacer un sistema de cultivo en zonas áridas?': 'Puedes hacer un sistema de cultivo en zonas áridas utilizando técnicas de conservación de agua, selección de cultivos resistentes a la sequía, y sistemas de riego eficientes.',
        '¿Qué son los sistemas de cultivo con fertilización orgánica?': 'Los sistemas de cultivo con fertilización orgánica utilizan materiales naturales como compost y estiércol para proporcionar nutrientes a las plantas.',
        '¿Cómo se realiza el cultivo de frutas tropicales?': 'El cultivo de frutas tropicales requiere un clima cálido y húmedo, y técnicas adecuadas de manejo para asegurar un crecimiento saludable y una buena cosecha.',
        '¿Qué es la agricultura de subsistencia?': 'La agricultura de subsistencia se enfoca en cultivar alimentos para el consumo propio y la autosuficiencia, en lugar de para la venta o el comercio.',
        '¿Cómo hacer un jardín de vegetales en casa?': 'Puedes hacer un jardín de vegetales en casa utilizando macetas o espacios al aire libre, seleccionando variedades adecuadas y proporcionando riego y fertilización.',
        '¿Qué son las técnicas de cultivo en cultivos mixtos?': 'Las técnicas de cultivo en cultivos mixtos involucran el cultivo de diferentes tipos de plantas juntas para maximizar la producción y mejorar la salud del suelo.',
        '¿Cómo se realiza el cultivo de plantas trepadoras?': 'El cultivo de plantas trepadoras implica proporcionar estructuras de soporte y permitir que las plantas crezcan hacia arriba, como enrejados o espalderas.',
        '¿Qué es la agricultura comunitaria?': 'La agricultura comunitaria es un enfoque que involucra a la comunidad en la producción y distribución de alimentos, fomentando la cooperación y el apoyo mutuo.',
        '¿Cómo hacer un sistema de cultivo en sustrato acuático?': 'Puedes hacer un sistema de cultivo en sustrato acuático utilizando técnicas como la hidroponía o la acuaponía, donde las plantas crecen en soluciones nutritivas o en agua.',
        '¿Qué son las técnicas de cultivo en suelos ácidos?': 'Las técnicas de cultivo en suelos ácidos incluyen la aplicación de enmiendas para elevar el pH del suelo y seleccionar cultivos adaptados a condiciones ácidas.',
        '¿Cómo se realiza el cultivo de plantas de interior?': 'El cultivo de plantas de interior requiere proporcionar luz artificial, control de temperatura y humedad, y cuidados específicos para el ambiente interior.',
        '¿Qué es la agricultura social?': 'La agricultura social es un enfoque que combina la producción agrícola con objetivos sociales, como la inclusión de personas en situación de vulnerabilidad o el desarrollo comunitario.',
        '¿Cómo hacer un sistema de cultivo en suelo fértil?': 'Puedes hacer un sistema de cultivo en suelo fértil utilizando prácticas que mantengan y mejoren la calidad del suelo, como la rotación de cultivos y el uso de abonos orgánicos.',
        '¿Qué son los sistemas de cultivo con energía renovable?': 'Los sistemas de cultivo con energía renovable utilizan fuentes de energía sostenibles, como solar o eólica, para alimentar los sistemas de riego, iluminación y otros equipos agrícolas.',
        '¿Cómo se realiza el cultivo de plantas aromáticas?': 'El cultivo de plantas aromáticas implica seleccionar variedades adecuadas para el uso en cocina o aromaterapia y proporcionar las condiciones óptimas de crecimiento.',
    }

    const handleSelectChange = (e) => {
        const question = e.target.value;
        setSelectedQuestion(question);
        setLoading(true);

        if (responses[question]) {
            setResponse(responses[question]);
        } else {
            setResponse('Lo siento, no tengo información sobre eso. Intenta seleccionar otra pregunta.');
        }

        setLoading(false);
    };

    return (
        <div className='demeter-page'>
        <div className="demeterai-container">
            <h2 className="demeterai-title">DeméterAI - Chatbot de Agricultura y Ecología</h2>
            <p className="demeterai-subtitle">En el futuro el chatbot pretende implementarse con ChatGPt, más no se hizo inicialmente por el costo de uso del api.</p>
            <div className="demeterai-select-container">
                <select
                    value={selectedQuestion}
                    onChange={handleSelectChange}
                    className="demeterai-select"
                >
                    <option value="" disabled>Selecciona una pregunta...</option>
                    {Object.keys(responses).map((question, index) => (
                        <option key={index} value={question}>
                            {question}
                        </option>
                    ))}
                </select>
            </div>
            {loading && <p className="demeterai-loading">Cargando...</p>}
            <div className="demeterai-response">
                <h3 className="demeterai-response-title">Respuesta</h3>
                <p className="demeterai-response-text">{response}</p>
            </div>
        </div></div>
    );
};

export default DemeterAI;
