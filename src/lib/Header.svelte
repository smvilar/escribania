<script lang="ts">
  const sections = [
    { href: '#servicios', name: 'Servicios' },
    { href: '#novedades', name: 'Novedades' },
    { href: '#trayectoria', name: 'Trayectoria' },
    { href: '#autoproteccion', name: 'Derecho de autoprotección' }
  ];

  function scrollIntoSection(
    ev: MouseEvent & { currentTarget: HTMLAnchorElement }
  ) {
    const url = new URL(ev.currentTarget.href);
    const section = document.querySelector(url.hash);
    section.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<header class="w-full bg-banner bg-cover text-slate-100">
  <div
    class="flex flex-col items-center pt-8 sm:pt-12 backdrop-brightness-50 backdrop-blur-sm"
  >
    <div class="w-full px-2 max-w-screen-lg mb-8 sm:mb-16">
      <section class="pb-8">
        <h1 class="border-b-2 border-purple-400">Escribanía Lanzón</h1>
        <h2 class="mb-2 sm:mb-4">Dra. Patricia A. Lanzón</h2>
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
    </div>
    <nav class="p-1 text-center bg-slate-100/20 w-full">
      {#each sections as section, i}
        <a href={section.href} on:click|preventDefault={scrollIntoSection}>
          {section.name}
        </a>
        {#if i !== sections.length - 1}
          •&nbsp;
        {/if}
      {/each}
    </nav>
  </div>
</header>
