<svelte:head>
  <title>Escribanía Lanzón</title>
</svelte:head>

<header class="fixed w-full bg-gradient-to-b text-white from-purple-500/70 py-12 flex justify-center">
  <div class="w-3/4 flex justify-between items-center">
    <h1 class="text-6xl font-cursive drop-shadow-lg">Escribanía Lanzón</h1>
    <nav>
      {#each navLinks as {href, title}}
        <a class="text-xl mx-4 drop-shadow" {href}>{title}</a>
      {/each}
    </nav>
  </div>
</header>

<Section id="inicio" class="bg-[url(/img/pexels-cottonbro-6814526.jpeg)] bg-cover text-white pt-48 pb-12">
  La escribanía blablabla
</Section>

<Section id="acerca-de">
  <h2>Patricia Adriana Lanzón</h2>
</Section>

<Section id="servicios">
  <h2>Servicios</h2>
</Section>

<Section id="contacto">
  <h2>Contacto</h2>
</Section>

<footer class="bg-purple-500 text-white py-4 flex justify-center">
  <p class="w-3/4">
    🏢 Uruguay 196 4º piso. CABA, Argentina<br />
    📞 <a href="tel:+5491112341234">+54 911 1234 1234</a><br />
    📧 <a href="mailto:escribanialanzon@gmail.com">escribanialanzon@gmail.com</a>
  </p>
</footer>

<script>
  import Section from "$lib/Section.svelte"

  const navLinks = [
    { title: 'Inicio', href: '#inicio' },
    { title: 'Sobre mí', href: '#acerca-de' },
    { title: 'Servicios', href: '#servicios' },
    { title: 'Contacto', href: '#contacto' },
  ]
</script>
