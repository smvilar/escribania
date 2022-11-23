<script lang="ts">
  import carnet from '$lib/assets/carnet.jpg';
  import jorge from '$lib/assets/jorge.jpg';
  import diploma from '$lib/assets/diploma.jpg';
  import registro from '$lib/assets/registro.jpg';
  import libro from '$lib/assets/libro.jpg';
  import senado from '$lib/assets/senado.jpg';

  import Section from '$lib/Section.svelte';
  import ServiceBox from '$lib/ServiceBox.svelte';
  import Autoproteccion from '$lib/Autoproteccion.svelte';

  const services = [
    {
      description:
        'Atención personalizada y sin intermediarios en cumplimiento del amplio espectro de la función notarial en nuestro país.'
    },
    {
      description:
        'Incluye el asesoramiento previo en todas las consultas, en especial para operaciones inmobiliarias, fideicomisos, hipotecas y actos de transferencia de derechos de toda clase. Además de los servicios de certificación de firmas y fotocopias.'
    },
    {
      description:
        'Actas de constatación de hechos, notificación, y demás casos en resguardo de derechos. Y todo lo relacionado con firma digital y los servicios de tipo remoto.'
    },
    {
      description:
        'Por el momento, no podemos casarte ni divorciarte, como en muchos otros países…'
    }
  ];
</script>

<svelte:head>
  <title>Escribanía Lanzón</title>
</svelte:head>

<main class="flex flex-col items-center bg-slate-100 min-h-screen">
  <div class="sm:flex">
    <img
      class="mx-auto my-4 sm:m-auto order-last"
      alt="Patricia Lanzón"
      width="400"
      height="400"
      src={carnet}
    />
    <Section name="Servicios">
      <ul class="flex flex-wrap gap-1 sm:gap-8">
        {#each services as service}
          <ServiceBox>
            {service.description}
          </ServiceBox>
        {/each}
      </ul>
    </Section>
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
    <article class="py-2 grid grid-cols-1 sm:grid-cols-5 gap-4">
      <div class="col-span-full">
        <img alt="Jorge M. Lanzón" width="400" height="400" src={jorge} />
        <p><strong>Escribano Jorge Mario Lanzón.</strong> Fundador.</p>
      </div>
      <p class="sm:text-lg col-span-3">
        <strong>Patricia Adriana Lanzón</strong> es escribana titular del Registro
        570 de la Ciudad autónoma de Buenos Aires desde 1995, por concurso de oposición
        y antecedentes, con título de Abogada de la Universidad de Buenos Aires.
      </p>
      <img
        class="col-span-2"
        alt="Colegio de Escribanos"
        width="400"
        height="400"
        src={registro}
      />
      <img class="col-span-2" alt="Publicación de libro" src={libro} />
      <p class="sm:text-lg col-span-3">
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
      <p class="sm:text-lg col-span-3">
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
      <img
        class="col-span-2"
        alt="En el Senado de la Nación"
        width="400"
        height="400"
        src={senado}
      />
    </article>
  </Section>
  <div class="w-full bg-purple-100">
    <Section name="Autoproteccion" hideName>
      <Autoproteccion />
    </Section>
  </div>
</main>
