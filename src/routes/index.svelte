<script lang="ts">
  import carnet from '$lib/assets/carnet.jpg';
  import jorge from '$lib/assets/jorge.jpg';
  import registro from '$lib/assets/registro.jpg';
  import senado from '$lib/assets/senado.jpg';

  import Section from '$lib/Section.svelte';
  import ServiceBox from '$lib/ServiceBox.svelte';
  import Autoproteccion from '$lib/Autoproteccion.svelte';

  const services = [
    {
      description:
        'Atención personalizada enfocada en la adecuación de tus necesidades a la ley vigente en cada caso, en cumplimiento de la función notarial en nuestro país.'
    },
    {
      description:
        'Siempre con el debido asesoramiento previo en todo lo referido a operaciones inmobiliarias, testamentos, hipotecas, autorizaciones y poderes, planificación del patrimonio, donaciones y actos de cesión de derechos de toda clase.'
    },
    {
      description:
        'Certificación de firmas y fotocopias en papel y en forma digital.'
    },
    {
      description: 'Legalizaciones y apostillas.'
    },
    {
      description: 'Actas de constatación de hechos, de notificación, y otras.'
    },
    {
      description:
        'Actos de autoprotección, directivas médicas anticipadas, nombramiento del propio curador, etc.'
    }
  ];
</script>

<svelte:head>
  <title>Escribanía Lanzón</title>
  <meta name="description" content="Sitio oficial de la Escribanía Lanzón.">
</svelte:head>

<main class="flex flex-col items-center bg-slate-100 min-h-screen">
  <div class="sm:flex max-w-screen-lg">
    <Section name="Servicios">
      <ul class="grid sm:grid-cols-2 gap-1 sm:gap-4">
        {#each services as service}
          <ServiceBox>
            {service.description}
          </ServiceBox>
        {/each}
      </ul>
    </Section>
    <img
      class="mx-auto my-4 sm:m-auto sm:p-4 w-64"
      alt="Patricia Lanzón"
      src={carnet}
    />
  </div>
  <Section name="Novedades">
    <ul
      class="bg-purple-100/80 rounded sm:rounded-lg px-6 sm:px-8 py-2 list-disc"
    >
      <li>
        Publicación en la Revista del Notariado: <a
          class="font-bold text-purple-800"
          href="https://www.revista-notariado.org.ar/index.php/2022/11/la-vivienda-como-instrumento-de-dominacion-generador-de-situaciones-de-vulnerabilidad-te-saco-la-casa/"
          >La vivienda como instrumento de dominación generador de situaciones
          de vulnerabilidad. «Te saco la casa»</a
        >
      </li>
    </ul>
  </Section>
  <Section name="Trayectoria">
    <article class="flex flex-col sm:grid grid-cols-8 gap-4">
      <img class="col-span-2" alt="Jorge M. Lanzón" src={jorge} />
      <p class="sm:text-lg col-span-6">
        <strong>Patricia Adriana Lanzón</strong>, siendo Abogada de la
        Universidad de Buenos Aires, se incorporó en su juventud en la
        Escribanía de su padre <strong>Esc. Jorge Mario Lanzón</strong>,
        llegando a ser escribana adscripta en 1995 y actualmente escribana
        titular del Registro 570 de la Ciudad autónoma de Buenos Aires, cargo
        obtenido por concurso de oposición y antecedentes.<br />
        A lo largo del ejercicio de la profesión ha sido tres veces integrante del
        Consejo Directivo del Colegio, electa para los cargos de Vocal y Secretaria,
        participando así de la dirección de la institución que regula la profesión
        en el ámbito de la C.A.B.A.
      </p>
      <p class="sm:text-lg col-span-6">
        Desde 2007 participa de la organización del <strong
          >Registro de actos de autoprotección</strong
        >
        del Colegio de Escribanos de C.A.B.A, y es
        <strong
          >presidenta de la Comisión de Derechos Humanos, Personalísimos y de
          autoprotección</strong
        >
        de dicha institución. Con marcada pasión por la difusión y docencia sobre
        esta novedosa temática, ha dado charlas en distintas localidades de nuestro
        país y países limítrofes; en 2013 formó parte del
        <strong>Taller sobre Derecho de autoprotección</strong>
        organizado por el Consejo Federal del Notariado Argentino; en 2018 participó
        del dictado del <strong>Seminario Mario Zinny</strong> sobre
        <strong>Actos de autoprotección</strong> en el Colegio de Escribanos de Salta,
        Argentina, entre otros eventos.
      </p>
      <img class="col-span-2" alt="Colegio de Escribanos" src={registro} />
      <p class="sm:text-lg col-span-full">
        Durante el año 2020 en forma virtual ha participado de charlas sobre el
        tema para abogados y escribanos de Córdoba, Argentina, así como para
        colegas de su misma Ciudad. Ha publicado diversos artículos y en JUNIO
        de 2017 el libro <strong>Directivas Anticipadas</strong> de Di Lalla Ediciones.
      </p>
      <img class="col-span-2" alt="En el Senado de la Nación" src={senado} />
      <p class="sm:text-lg col-span-6">
        En 2022 participó, junto con otros colegas de diversas jurisdicciones,
        de la redacción del <strong>Proyecto de Ley</strong> 669/22 de Ley
        Nacional de Autoprotección y mandato preventivo, en tratamiento en el
        Senado de la Nación.<br />Se encuentra finalizando la Tesis de la
        Maestría sobre <strong>“Derecho de la Vejez”</strong> en la Universidad Nacional
        de Córdoba, Argentina.
      </p>
    </article>
  </Section>
  <div class="w-full bg-purple-100">
    <Section name="Autoproteccion" hideName>
      <Autoproteccion />
    </Section>
  </div>
</main>
