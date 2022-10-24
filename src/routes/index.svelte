<script>
  import carnet from '$lib/assets/carnet.jpg'
  import jorge from '$lib/assets/jorge.jpg'
  import diploma from '$lib/assets/diploma.jpg'
  import registro from '$lib/assets/registro.jpg'
  import libro from '$lib/assets/libro.jpg'
  import senado from '$lib/assets/senado.jpg'
</script>

<svelte:head>
  <title>Escribanía Lanzón</title>
</svelte:head>

<main class="flex flex-col items-center bg-slate-100 min-h-screen">
  <header class="w-full bg-banner bg-cover text-slate-100">
    <div
      class="flex flex-col items-center pt-4 px-2 sm:pt-12 backdrop-brightness-50 backdrop-blur-sm"
    >
      <div class="w-full max-w-screen-lg">
        <section class="pb-4 sm:pb-8">
          <h1 class="border-b-2 border-purple-400">Patricia A. Lanzón</h1>
          <h2 class="mb-2 sm:mb-4">Escribana</h2>
          <h4>Registro Notarial 570</h4>
          <h4>Matrícula 4344</h4>
        </section>
        <ul>
          <li>
            📞 Solicite turno al <a href="tel:+541143142009">4314-2009</a> ó
            <a href="tel:+541143148715">4314-8815</a>
          </li>
          <li>
            🏢 <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://goo.gl/maps/rYGGcNGqypjxgNWn9"
              >Av. Córdoba 785, 11º piso, oficina 21. CABA, Argentina</a
            >
          </li>
          <li>
            📧 <a href="mailto:escribanialanzon@gmail.com"
              >escribanialanzon@gmail.com</a
            >
          </li>
        </ul>
        <nav class="mt-4 sm:mt-16 text-center">
          <a href="#servicios">Servicios</a> •
          <a href="#trayectoria">Trayectoria</a> •
          <a href="#docencia">Actualidad docente</a> •
          <a href="#vejez">Derecho de la vejez</a>
        </nav>
      </div>
    </div>
  </header>
  <section id="servicios" class="h-min m-px p-2 sm:py-16 max-w-screen-lg">
    <header>
      <h3>Servicios</h3>
    </header>
    <ul class="flex flex-wrap gap-1 sm:gap-8">
      <li
        class="sm:max-w-[45%] bg-purple-400/20 rounded sm:rounded-lg p-2 sm:p-4"
      >
        <h4>Familiar</h4>
        <small>
          Aceptación o renuncia de herencia. Autorizaciones de Viajes para
          menores legalizadas y registradas. Convenciones Matrimoniales. Cambio
          de regimen Patrimonial Matrimonial. Certificación de firmas,
          fotocopias y fotografías. Delegación de la responsabilidad parental.
          Disolución de Sociedad Conyugal. Donaciones. Particiones Hereditarias
          y Judiciales. Testamentos. Uniones convivenciales y pactos de
          convivencia.
        </small>
      </li>
      <li
        class="sm:max-w-[45%] bg-purple-400/10 rounded sm:rounded-lg p-2 sm:p-4"
      >
        <h4>Bancario</h4>
        <small>
          Cancelación y Constitución de Hipotecas en Capital Federal y en la
          Provincia de Buenos Aires. Certificación de firmas. Cesión de Derechos
          y Créditos. Fianzas. Poderes administrativos y bancarios, entre otros.
        </small>
      </li>
      <li
        class="sm:max-w-[45%] bg-purple-400/20 sm:bg-purple-400/10 rounded-lg p-4"
      >
        <h4>CORPORATIVO</h4>
        <small>
          Actas de Notificación, Inserción de Actas de Consorcio y Sorteo.
          Constitución de Sociedades (S.A., S.A.S., S.R.L.) y todos los actos
          societarios dentro del ámbito de la Capital Federal. Contrato
          Asociativos (U.T.E., Consorcios de cooperación, etc.). Certificación
          de firmas, fotocopias y fotografías. Rúbricas de Libros por ante
          Inspección General de Justicia.
        </small>
      </li>
      <li
        class="sm:max-w-[45%] bg-purple-400/10 sm:bg-purple-400/20 rounded-lg p-4"
      >
        <h4>INMOBILIARIO</h4>
        <small>
          Afectación y Desafectación a Protección de la Vivienda (antes Bien de
          Familia). Compraventas de inmuebles en Capital Federal y en la
          Provincia de Buenos Aires. Certificación de firmas, fotocopias y
          fotografías. Constitución, desafectación y renuncia de Usufructo.
          Contratos de locación. Contratos onerosos de renta vitalicia. Derecho
          Real de Propiedad Horizontal y más...
        </small>
      </li>
      <li
        class="sm:max-w-[45%] bg-purple-400/20 sm:bg-purple-400/20 rounded-lg p-4"
      >
        <h4>NOTARIALES</h4>
        <small>
          Derecho real de Superficie. Fideicomisos (ordinarios, financieros,
          públicos, privados, de garantía, de administración, etc.).
          Reordenamiento parcelario, unificación, planimetría. Transferencias de
          dominio fiduciario.
        </small>
      </li>
      <li
        class="sm:max-w-[45%] bg-purple-400/10 sm:bg-purple-400/10 rounded-lg p-4"
      >
        <h4>AUTOMOTORES</h4>
        <small>
          Autorizaciones de Manejo Legalizadas y registradas. Certificación de
          firmas en formularios 08, 02, 04, entre otros. Certificación de
          fotocopias y fotografías. Poderes para Seguros, siniestros, etc...
        </small>
      </li>
    </ul>
  </section>
  <section id="trayectoria" class="h-min m-px p-2 sm:py-16 max-w-screen-lg">
    <header>
      <h3 class="">Trayectoria</h3>
    </header>
    <article class="py-2 text-sailing-blue-dark">
      <img
        class="self-center"
        alt="Patricia Lanzón"
        width="400"
        height="400"
        src={carnet}
      />
      <img
        class=""
        alt="Jorge M. Lanzón"
        width="400"
        height="400"
        src={jorge}
      />
      <p>Escribano Jorge Mario Lanzón. Fundador.</p>
      <img
        class="float-left mr-2"
        alt="Recibida de Abogada"
        width="400"
        height="400"
        src={diploma}
      />
      <p class="p-2 sm:text-lg">
        <strong>Patricia Adriana Lanzón</strong> es escribana titular del Registro
        570 de la Ciudad autónoma de Buenos Aires desde 1995, por concurso de oposición
        y antecedentes, con título de Abogada de la Universidad de Buenos Aires.
      </p>
      <img
        alt="Colegio de Escribanos"
        width="400"
        height="400"
        src={registro}
      />
      <p class="clear-left p-2 sm:text-lg">
        Desde 2007 participa de la organización del <strong
          >registro de actos de autoprotección</strong
        >
        del Colegio de Escribanos de CABA, y es
        <strong
          >Presidenta de la Comisión de Derechos Humanos, Personalísimos y de
          autoprotección</strong
        >
        de dicha institución desde el año 2017. Activamente participa de la docencia
        sobre este tema, entre otros eventos: en 2013 formó parte del
        <strong>Taller sobre Derecho de autoprotección</strong>
        organizado por el Consejo Federal del Notariado Argentino; en 2018 participó
        del dictado del <strong>Seminario Mario Zinny</strong> sobre
        <strong>Actos de autoprotección</strong> en el Colegio de Escribanos de Salta,
        Argentina.
      </p>
      <div class="float-left mr-2">
        <img
          class="sm:w-60"
          alt="Publicación de libro"
          width="400"
          height="400"
          src={libro}
        />
        <img
          class="sm:w-60"
          alt="En el Senado de la Nación"
          width="400"
          height="400"
          src={senado}
        />
      </div>
      <p class="p-2 sm:text-lg">
        Durante el año 2020 forma virtual ha participado de charlas virtuales
        sobre el tema para abogados y escribanos de Córdoba, Argentina así como
        para colegas de su misma Ciudad. Ha publicado diversos artículos y en
        JUNIO de 2017 el libro <strong>Directivas Anticipadas</strong> de Di Lalla
        Ediciones. En 2022 participó, junto con otros colegas de diversas jurisdicciones,
        de la redacción del Proyecto de Ley 669/22 de Ley Nacional de Autoprotección
        y mandato preventivo, en tratamiento en el Senado de la Nación. Se encuentra
        finalizando la Tesis de la Maestría sobre Derecho de la Vejez en la Universidad
        Nacional de Córdoba, Argentina.
      </p>
    </article>
  </section>
  <section id="docencia" class="h-min m-px p-2 sm:py-16">
    <header>
      <h3>Actualidad docente</h3>
    </header>
  </section>
  <section id="vejez" class="h-min m-px p-2 sm:py-16">
    <header>
      <h3>Derecho de la vejez</h3>
    </header>
  </section>
</main>
