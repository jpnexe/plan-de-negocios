
import React from 'react';
import type { Section } from './types';
import {
  BuildingStorefrontIcon, BriefcaseIcon, RocketLaunchIcon, EyeIcon, ClipboardDocumentListIcon, ChartBarIcon,
  Cog6ToothIcon, CheckBadgeIcon, UserGroupIcon, UsersIcon, QueueListIcon, ChatBubbleLeftRightIcon,
  SparklesIcon, SunIcon, ShieldCheckIcon, AdjustmentsHorizontalIcon, PresentationChartLineIcon,
  LightBulbIcon, CircleStackIcon, MapIcon, LifebuoyIcon
} from '@heroicons/react/24/outline';

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start space-x-3">
    <div className="flex-shrink-0">
      <svg className="w-5 h-5 text-pink-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
      </svg>
    </div>
    <p className="text-gray-700">{children}</p>
  </li>
);

const SubHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">{children}</h3>
);

// Fix: Update Paragraph component to accept an optional className prop to allow for custom styling.
const Paragraph: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <p className={['text-gray-700 leading-relaxed mb-4', className].filter(Boolean).join(' ')}>{children}</p>
);

const DofaTable: React.FC = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-white/50 p-4 rounded-lg border border-pink-200">
            <h4 className="font-bold text-lg text-red-600">D (Debilidades)</h4>
            <ul className="mt-2 space-y-2 text-sm">
                <li><span className="font-semibold">Nuevos en el mercado:</span> Falta de reconocimiento inicial.</li>
                <li><span className="font-semibold">Poca clientela actual:</span> Necesidad de construir una base de clientes leales.</li>
            </ul>
        </div>
        <div className="bg-white/50 p-4 rounded-lg border border-pink-200">
            <h4 className="font-bold text-lg text-amber-600">O (Oportunidades)</h4>
            <ul className="mt-2 space-y-2 text-sm">
                <li><span className="font-semibold">Aceptación del público:</span> Potencial de crecimiento rápido si el producto gusta.</li>
                <li><span className="font-semibold">Financiamiento:</span> Entidades bancarias como opción para ampliar capital.</li>
            </ul>
        </div>
        <div className="bg-white/50 p-4 rounded-lg border border-pink-200">
            <h4 className="font-bold text-lg text-green-600">F (Fortalezas)</h4>
            <ul className="mt-2 space-y-2 text-sm">
                <li><span className="font-semibold">Gran variedad de prendas:</span> Amplio catálogo para atraer diferentes gustos.</li>
                <li><span className="font-semibold">Prendas únicas:</span> Factor de exclusividad y diferenciación.</li>
                <li><span className="font-semibold">Excelente calidad:</span> Fomenta la lealtad y justifica precios premium.</li>
            </ul>
        </div>
        <div className="bg-white/50 p-4 rounded-lg border border-pink-200">
            <h4 className="font-bold text-lg text-blue-600">A (Amenazas)</h4>
            <ul className="mt-2 space-y-2 text-sm">
                <li><span className="font-semibold">Alta competencia:</span> Mercado de la moda muy concurrido.</li>
                <li><span className="font-semibold">Nuevas competencias:</span> Constante aparición de nuevos rivales.</li>
                <li><span className="font-semibold">Crisis externas:</span> Posibilidad de una nueva pandemia o crisis económica.</li>
            </ul>
        </div>
    </div>
);


export const BusinessPlanData: Section[] = [
  {
    id: 'nombre',
    title: 'Nombre de la Empresa',
    icon: BuildingStorefrontIcon,
    content: (
      <>
        <Paragraph>El nombre de la empresa es <strong>Zibá Clothes</strong>.</Paragraph>
        <Paragraph>Se define como una "Tienda Exclusiva", enfocada en ropa de dama, que busca satisfacer las necesidades de sus clientes con una atención personalizada y excelente.</Paragraph>
      </>
    ),
  },
  {
    id: 'objeto',
    title: 'Objeto Social',
    icon: BriefcaseIcon,
    content: (
        <Paragraph>El objeto social de Zibá Clothes es la comercialización de ropa de dama. La empresa se dedica a satisfacer las necesidades de la población ofreciendo un buen asesoramiento y servicio de los productos, brindando una excelente atención para generar una clientela leal y ser una marca reconocida en el mercado de la moda.</Paragraph>
    ),
  },
  {
    id: 'mision',
    title: 'Misión',
    icon: RocketLaunchIcon,
    content: (
        <Paragraph>Zibá Clothes es una tienda de ropa que busca satisfacer las necesidades de la población ofreciendo un buen asesoramiento y servicio de los productos. Lo hace con el mayor de los gustos, brindando una muy buena atención para generar clientela y ser reconocida.</Paragraph>
    ),
  },
  {
    id: 'vision',
    title: 'Visión',
    icon: EyeIcon,
    content: (
        <Paragraph>La visión de Zibá Clothes es ser una tienda reconocida por la calidad de sus prendas, exclusividad y atención. Para el año 2028, se proyecta expandirse en los centros comerciales más reconocidos de Colombia hasta llegar a ser una multimarca en el país.</Paragraph>
    ),
  },
  {
    id: 'politicas',
    title: 'Políticas y Normas',
    icon: ClipboardDocumentListIcon,
    content: (
      <>
        <SubHeading>Políticas de la Empresa</SubHeading>
        <ul className="space-y-4">
          <ListItem>Ofrecer atención de lunes a domingo de 8:30 AM a 6:00 PM.</ListItem>
          <ListItem>Aceptar pagos en tarjetas de crédito, débito, efectivo y transferencias bancarias.</ListItem>
          <ListItem>Ofrecer garantía de satisfacción para todas las prendas.</ListItem>
          <ListItem>Realizar cambios de prendas dentro de los cinco (5) días posteriores a la compra.</ListItem>
          <ListItem>Asegurar que los trabajadores reciban salarios adecuados, tengan horarios razonables, acceso a beneficios laborales y trabajen en entornos seguros.</ListItem>
        </ul>
        <SubHeading>Normas Internas</SubHeading>
        <ul className="space-y-4">
            <ListItem>Antes de realizar la entrega de cualquier prenda, se debe verificar que se encuentre en perfectas condiciones.</ListItem>
            <ListItem>Los pedidos deben ser entregados puntualmente en el momento de su compra.</ListItem>
            <ListItem>Uso obligatorio del uniforme durante la jornada laboral para representar la imagen de la empresa.</ListItem>
        </ul>
      </>
    ),
  },
  {
    id: 'objetivos-metas',
    title: 'Objetivos y Metas',
    icon: ChartBarIcon,
    content: (
      <>
        <SubHeading>Objetivos Generales</SubHeading>
        <ul className="space-y-4">
            <ListItem>Vender prendas de alta calidad.</ListItem>
            <ListItem>Tener una amplia variedad en las prendas ofrecidas.</ListItem>
            <ListItem>Trabajar duro para obtener ventas rentables y asegurar el crecimiento sostenido.</ListItem>
            <ListItem>Implementar una línea de ropa importada.</ListItem>
            <ListItem>Aprender a elaborar prendas personalizadas para la tienda.</ListItem>
        </ul>

        <SubHeading>Metas Generales</SubHeading>
        <ul className="space-y-4">
            <ListItem>Ser reconocida por la calidad de nuestras prendas en toda Colombia en un plazo de cuatro a cinco años.</ListItem>
            <ListItem>Convertirse en una empresa líder en tendencias femeninas a nivel nacional a través de la innovación y creatividad.</ListItem>
            <ListItem>Aumentar la satisfacción de los clientes en un 80%.</ListItem>
        </ul>

        <SubHeading>Metas por Plazo</SubHeading>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white/50 p-4 rounded-lg border border-pink-200">
                <h4 className="font-bold text-pink-700">Corto Plazo</h4>
                <p className="text-sm mt-2">Incrementar las ventas en línea en un 40% y asegurar un alto porcentaje de retención de clientes.</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg border border-pink-200">
                <h4 className="font-bold text-pink-700">Mediano Plazo</h4>
                <p className="text-sm mt-2">Alcanzar más de 1 millón de usuarios en la comunidad de Instagram y aumentar los ingresos por productos vendidos.</p>
            </div>
             <div className="bg-white/50 p-4 rounded-lg border border-pink-200">
                <h4 className="font-bold text-pink-700">Largo Plazo</h4>
                <p className="text-sm mt-2">Diseñar ropa de tendencia, aumentar las ventas generales y lograr el crecimiento global de la boutique abriendo nuevas sucursales.</p>
            </div>
        </div>
      </>
    ),
  },
  {
    id: 'planeacion',
    title: 'Planeación Estratégica',
    icon: PresentationChartLineIcon,
    content: (
      <>
        <Paragraph>La planeación estratégica de Zibá Clothes se centra en mejorar continuamente, estudiando las necesidades de los clientes y adaptándose a nuevos estilos para ser más eficaces. La estrategia se basa en un análisis DOFA y la implementación de tácticas de mercado específicas.</Paragraph>
        <SubHeading>Análisis DOFA</SubHeading>
        <DofaTable />
        <SubHeading>Estrategias Clave</SubHeading>
        <ul className="space-y-4 mt-4">
            <ListItem><strong>Regateo Sutil y Beneficios Exclusivos:</strong> Ofrecer descuentos limitados (5-10%) o por volumen ("compra 3 y recibe 10% off") para incentivar compras sin devaluar la marca.</ListItem>
            <ListItem><strong>Innovación y Exclusividad:</strong> Distribuir ropa innovadora que no se encuentra en otras tiendas y establecer alianzas com diseñadores para ofrecer productos únicos.</ListItem>
            <ListItem><strong>Experiencia de Compra Única:</strong> Crear un ambiente y un servicio memorables en la tienda.</ListItem>
            <ListItem><strong>Fuerte Presencia Digital:</strong> Mantener una presencia activa en redes sociales para marketing y comunicación.</ListItem>
        </ul>
      </>
    ),
  },
  {
    id: 'toma-decisiones',
    title: 'Toma de Decisiones',
    icon: AdjustmentsHorizontalIcon,
    content: (
        <>
            <Paragraph>El proceso de toma de decisiones en Zibá Clothes se alinea con el estilo de liderazgo democrático y transformacional. Se basa en la colaboración, la inclusión y el análisis de datos para guiar a la empresa hacia sus objetivos.</Paragraph>
            <SubHeading>Proceso Clave</SubHeading>
            <ul className="space-y-4">
                <ListItem><strong>Escuchar al Equipo:</strong> Fomentar espacios de diálogo y creatividad donde todos los miembros del equipo puedan aportar ideas y opiniones.</ListItem>
                <ListItem><strong>Análisis del Cliente:</strong> Estudiar constantemente las necesidades, gustos y feedback de los clientes para tomar decisiones informadas sobre productos y servicios.</ListItem>
                <ListItem><strong>Medición de Procesos:</strong> Evaluar el rendimiento de las operaciones diarias (ventas, inventario, marketing) para identificar áreas de mejora y realizar correcciones necesarias.</ListItem>
                <ListItem><strong>Dirección Clara:</strong> Aunque se fomenta la participación, la dirección final se mantiene clara y alineada con la misión y visión de la empresa.</ListItem>
            </ul>
        </>
    ),
  },
  {
    id: 'estructura-org',
    title: 'Estructura Organizativa',
    icon: QueueListIcon,
    content: (
      <>
        <Paragraph>Para una boutique como Zibá Clothes, se propone una estructura organizativa plana y ágil que fomente la comunicación directa y la rápida toma de decisiones.</Paragraph>
        <SubHeading>Roles y Departamentos</SubHeading>
        <ul className="space-y-4">
          <ListItem><strong>Gerente/Propietaria:</strong> Lidera la visión estratégica, gestiona las finanzas, las compras a proveedores y la dirección general del negocio. Responsable del liderazgo del equipo.</ListItem>
          <ListItem><strong>Departamento de Ventas y Atención al Cliente:</strong>
            <ul className="list-disc pl-6 mt-2 text-sm text-gray-600">
                <li><strong>Asesora de Venta (2-3 empleados):</strong> Brinda atención personalizada, asesora a los clientes, procesa pagos, gestiona el inventario en tienda y mantiene el orden visual del local.</li>
            </ul>
          </ListItem>
           <ListItem><strong>Departamento de Marketing y Operaciones:</strong>
            <ul className="list-disc pl-6 mt-2 text-sm text-gray-600">
                <li>Gestionado inicialmente por la Gerente, con posible delegación. Responsable de la publicidad en redes sociales, creación de contenido, gestión de pedidos en línea y logística.</li>
            </ul>
          </ListItem>
        </ul>
         <Paragraph className="mt-4">La empresa contaría inicialmente con un equipo de <strong>3 a 4 empleados</strong>, incluyendo a la propietaria, para mantener una operación eficiente y un ambiente de trabajo cercano y colaborativo.</Paragraph>
      </>
    ),
  },
   {
    id: 'direccion',
    title: 'Proceso de Dirección',
    icon: MapIcon,
    content: (
      <>
        <Paragraph>La dirección en Zibá Clothes se ejerce a través de un liderazgo que inspira y empodera al equipo, combinado con procedimientos claros que garantizan la eficiencia y la calidad del servicio.</Paragraph>
        <SubHeading>Liderazgo Aplicado</SubHeading>
         <Paragraph>Se aplica un modelo de liderazgo dual:</Paragraph>
        <ul className="space-y-4">
            <ListItem><strong>Liderazgo Transformacional:</strong> Para alinear al equipo com la visión de crecimiento e innovación. Inspira compromiso y motivación, fomenta nuevas ideas y mejora la atención al cliente a través de un equipo motivado.</ListItem>
            <ListItem><strong>Liderazgo Democrático:</strong> Para el día a día. Se valora el trabajo en equipo, se escuchan las ideas de todos y se crea un ambiente donde los empleados se sienten valorados y parte del proceso.</ListItem>
        </ul>
        <SubHeading>Procedimientos Operativos</SubHeading>
         <ul className="space-y-4">
            <ListItem><strong>Apertura y Cierre:</strong> Protocolos de seguridad, ambiente (luces, música) y preparación de la tienda.</ListItem>
            <ListItem><strong>Gestión de Inventario:</strong> Inventario diario, conteo y verificación de existencias para evitar errores.</ListItem>
            <ListItem><strong>Atención al Cliente:</strong> Protocolo de recibimiento, asesoramiento personalizado, procesamiento de pagos y empaque.</ListItem>
            <ListItem><strong>Gestión de Proveedores:</strong> Realizar pedidos, recibir mercancía y verificar la calidad antes de almacenarla.</ListItem>
        </ul>
      </>
    ),
  },
  {
    id: 'liderazgo',
    title: 'Tipo de Líder',
    icon: LightBulbIcon,
    content: (
      <>
        <Paragraph>Zibá Clothes necesita un líder que combine dos estilos complementarios para impulsar tanto la visión a largo plazo como la excelencia operativa diaria.</Paragraph>
        <SubHeading>1. Líder Transformacional</SubHeading>
        <Paragraph>Este estilo es ideal porque la empresa tiene una visión clara de crecimiento, innovación y expansión. Un líder transformacional puede:</Paragraph>
        <ul className="space-y-2 ml-4 list-disc text-gray-700">
            <li>Alinear al equipo con la visión de la empresa.</li>
            <li>Motivar a los empleados a dar lo mejor de sí mismos.</li>
            <li>Generar propuestas innovadoras para mantener la exclusividad y calidad.</li>
        </ul>
        <SubHeading>2. Líder Democrático</SubHeading>
        <Paragraph>Este estilo es fundamental para el ambiente de trabajo. Un líder democrático:</Paragraph>
         <ul className="space-y-2 ml-4 list-disc text-gray-700">
            <li>Cree firmemente en el valor del trabajo en equipo.</li>
            <li>Escucha las ideas y opiniones de quienes lo rodean.</li>
            <li>Crea un ambiente donde todos se sienten escuchados, valorados y motivados.</li>
            <li>Fomenta espacios de diálogo y creatividad, creyendo que las mejores ideas nacen de la colaboración.</li>
        </ul>
        <Paragraph className="mt-4"><strong>Conclusión:</strong> La combinación de un líder transformacional y democrático permite crecer junto al equipo, fortalecer las relaciones laborales y brindar una experiencia única y auténtica a los clientes.</Paragraph>
      </>
    ),
  },
  {
    id: 'control',
    title: 'Tipo de Control',
    icon: ShieldCheckIcon,
    content: (
         <>
            <Paragraph>Se aplicarían varios tipos de control para asegurar la calidad, la eficiencia y el cumplimiento de los objetivos.</Paragraph>
            <ul className="space-y-4">
                <ListItem>
                    <strong>Control de Calidad:</strong> Verificación de todas las prendas antes de la entrega al cliente para asegurar que se encuentren en perfectas condiciones. Control de calidad también al recibir mercancía de proveedores.
                </ListItem>
                <ListItem>
                    <strong>Control de Inventario:</strong> Realización de un inventario diario para contar y verificar existencias, evitando errores, pérdidas y asegurando la disponibilidad de productos.
                </ListItem>
                 <ListItem>
                    <strong>Control de Procesos:</strong> Medición y seguimiento de los procesos diarios (ventas, atención, pedidos) para identificar ineficiencias y realizar correcciones, asegurando que se cumplan los objetivos establecidos.
                </ListItem>
                 <ListItem>
                    <strong>Control Financiero:</strong> Seguimiento de ventas, costos e ingresos para evaluar la rentabilidad y tomar decisiones financieras informadas.
                </ListItem>
            </ul>
        </>
    ),
  },
   {
    id: 'equipo',
    title: 'Trabajo en Equipo',
    icon: UsersIcon,
    content: (
      <>
        <Paragraph>El comportamiento grupal y el trabajo en equipo en Zibá Clothes se fundamentan en los principios del liderazgo democrático, buscando crear un ambiente colaborativo, respetuoso y altamente productivo.</Paragraph>
        <SubHeading>Claves para el Trabajo en Equipo</SubHeading>
        <ul className="space-y-4">
            <ListItem><strong>Colaboración sobre Competencia:</strong> Se fomenta un ambiente donde las mejores ideas nacen de la colaboración. El éxito de la tienda es el éxito de todos.</ListItem>
            <ListItem><strong>Comunicación Abierta:</strong> Se promueven espacios de diálogo donde cada miembro del equipo se sienta escuchado, valorado y motivado para participar activamente en las decisiones.</ListItem>
            <ListItem><strong>Pasión y Compromiso:</strong> Al hacer que las personas se sientan parte de los procesos, se busca que trabajen con más pasión y compromiso, lo que se traduce en un mejor servicio al cliente.</ListItem>
            <ListItem><strong>Dirección Clara pero Flexible:</strong> Se mantiene una dirección clara de los objetivos, pero se está abierto al aporte y la creatividad del equipo para alcanzar esas metas.</ListItem>
        </ul>
      </>
    ),
  },
  {
    id: 'comunicacion',
    title: 'Proceso de Comunicación',
    icon: ChatBubbleLeftRightIcon,
    content: (
       <>
        <Paragraph>La comunicación en Zibá Clothes es un pilar fundamental, diseñada para ser fluida, transparente y bidireccional tanto interna como externamente.</Paragraph>
        <SubHeading>Comunicación Interna</SubHeading>
        <ul className="space-y-4">
            <ListItem><strong>Reuniones Diarias (Briefings):</strong> Cortas reuniones al inicio del día para alinear objetivos, discutir promociones y resolver dudas.</ListItem>
            <ListItem><strong>Canal Abierto con Gerencia:</strong> Fomentado por el liderazgo democrático, donde los empleados pueden expresar ideas, preocupaciones y sugerencias directamente.</ListItem>
            <ListItem><strong>Reuniones Mensuales:</strong> Para revisar el rendimiento, celebrar logros y planificar las próximas estrategias.</ListItem>
        </ul>
        <SubHeading>Comunicación Externa (con el Cliente)</SubHeading>
        <ul className="space-y-4">
            <ListItem><strong>Atención Personalizada:</strong> El proceso principal, como se ve en el flujograma, donde la asesora atiende dudas, valida pedidos y confirma la compra.</ListItem>
            <ListItem><strong>Redes Sociales:</strong> Canal clave para publicidad, promociones, interacción y recepción de feedback de la comunidad.</ListItem>
        </ul>
       </>
    ),
  },
  {
    id: 'cultura-org',
    title: 'Cultura Organizacional',
    icon: SparklesIcon,
    content: (
        <>
            <Paragraph>La cultura organizacional de Zibá Clothes se define por un conjunto de valores y comportamientos que giran en torno a la exclusividad, la calidad y las personas (tanto clientes como empleados).</Paragraph>
            <SubHeading>Pilares de la Cultura</SubHeading>
            <ul className="space-y-4">
                <ListItem><strong>Orientación al Cliente:</strong> El cliente está en el centro de todo. El objetivo es ofrecer una experiencia de compra única, memorable y personalizada.</ListItem>
                <ListItem><strong>Calidad y Exclusividad:</strong> Un compromiso inquebrantable con la alta calidad de las prendas y la oferta de productos únicos que no se encuentran en otros lugares.</ListItem>
                <ListItem><strong>Colaboración y Respeto:</strong> Un ambiente de trabajo basado en el respeto mutuo, la escucha activa y la colaboración, donde cada empleado es una pieza valiosa del equipo.</ListItem>
                <ListItem><strong>Innovación y Adaptabilidad:</strong> Una mentalidad de mejora continua, buscando siempre nuevas tendencias, adaptándose a los estilos de los clientes y proponiendo ideas frescas.</ListItem>
                <ListItem><strong>Pasión por la Moda:</strong> Fomentar un equipo que comparte un interés genuino y pasión por la moda, lo que se traduce en un mejor asesoramiento al cliente.</ListItem>
            </ul>
        </>
    ),
  },
  {
    id: 'clima-org',
    title: 'Clima Organizacional',
    icon: SunIcon,
    content: (
        <>
            <Paragraph>El clima organizacional deseado para Zibá Clothes es un reflejo directo de su cultura y estilo de liderazgo: un ambiente positivo, motivador y empoderador.</Paragraph>
            <SubHeading>Características del Clima</SubHeading>
            <ul className="space-y-4">
                <ListItem><strong>Motivador y Entusiasta:</strong> Gracias al liderazgo transformacional, se busca que los empleados trabajen con entusiasmo hacia un objetivo común.</ListItem>
                <ListItem><strong>De Confianza y Apoyo:</strong> Un lugar donde los empleados se sienten seguros para proponer ideas, cometer errores y aprender, sabiendo que tienen el apoyo de su líder y compañeros.</ListItem>
                <ListItem><strong>Colaborativo y Unido:</strong> Se promueve el sentimiento de equipo, donde el éxito individual está ligado al éxito colectivo.</ListItem>
                <ListItem><strong>Dinámico y Creativo:</strong> Un ambiente que alienta la innovación y la creatividad, vital para mantenerse relevante en el competitivo mundo de la moda.</ListItem>
                <ListItem><strong>Profesional pero Cercano:</strong> Se mantienen altos estándares de profesionalismo en la atención al cliente, pero en un ambiente de trabajo cercano y familiar.</ListItem>
            </ul>
        </>
    ),
  },
];
