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

    history.pushState({}, '', url);
  }
</script>

<header class="w-full bg-banner bg-cover text-slate-100">
  <div
    class="min-h-screen flex flex-col justify-between items-center pt-8 sm:pt-12 backdrop-brightness-50 backdrop-blur-sm"
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
          📞 Solicite turno al <a href="tel:+541145431676">4543-1676</a> ó
          <a href="tel:+541145459357">4545-9357</a>
        </li>
        <li>
          🏢 <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://goo.gl/maps/E6NtDRU2w6JVVo5s7"
            >Echeverría 4230, 2º B. CABA, Argentina</a
          >
        </li>
        <li>
          📧 <a href="mailto:escribanialanzon@gmail.com"
            >escribanialanzon@gmail.com</a
          >
        </li>
      </ul>
    </div>
    <nav
      class="py-8 sm:py-16 bg-slate-100/10 w-full sm:text-2xl font-bold flex justify-center"
    >
      <div class="flex gap-4 flex-wrap justify-center">
        {#each sections as section, i}
          <a
            class="inline-block w-40 h-40 sm:w-64 sm:h-64"
            href={section.href}
            on:click|preventDefault={scrollIntoSection}
          >
            <svg width="100%" height="100%">
              <defs>
                <mask id={`mask-${i}`}>
                  <rect width="100%" height="100%" fill="#ccc" />
                  <text fill="#000">
                    {#each section.name.split(' ') as word, j}
                      <tspan x="1rem" y={`${5 + j * 1.25}em`}>{word}</tspan>
                    {/each}
                  </text>
                </mask>
              </defs>
              <rect
                width="100%"
                height="100%"
                fill="white"
                mask={`url(#mask-${i})`}
              />
            </svg>
          </a>
        {/each}
      </div>
    </nav>
  </div>
</header>
