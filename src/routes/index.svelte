<script lang="ts">
  import carnet from '$lib/assets/carnet.jpg';
  import jorge from '$lib/assets/jorge.jpg';
  import diploma from '$lib/assets/diploma.jpg';
  import registro from '$lib/assets/registro.jpg';
  import libro from '$lib/assets/libro.jpg';
  import senado from '$lib/assets/senado.jpg';

  import Section from '$lib/Section.svelte';
  import ServiceBox from '$lib/ServiceBox.svelte';

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
  <section class="flex w-full bg-purple-300 py-2">
    <img
      class="m-auto"
      alt="Patricia Lanzón"
      width="400"
      height="400"
      src={carnet}
    />
  </section>
  <Section name="Servicios">
    <ul class="flex flex-wrap gap-1 sm:gap-8">
      {#each services as service}
        <ServiceBox>
          {service.description}
        </ServiceBox>
      {/each}
    </ul>
  </Section>
  <Section name="Trayectoria">
    <article class="py-2">
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
  </Section>
  <Section name="Actualidad docente">Próximamente...</Section>
</main>
