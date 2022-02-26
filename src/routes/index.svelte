<svelte:head>
  <title>Escribanía Lanzón</title>
</svelte:head>

<header class="fixed w-full bg-gradient-to-b from-purple-400/70 px-16 py-12 flex justify-center">
  <div class="w-3/4 flex justify-between items-center">
    <h1 class="text-6xl font-cursive text-white drop-shadow-lg">Escribanía Lanzón</h1>
    <nav>
      {#each navLinks as {href, title}}
        <a class="text-xl mx-4 text-white drop-shadow" {href}>{title}</a>
      {/each}
    </nav>
  </div>
</header>

<img alt="Persona firmando" src="img/pexels-cottonbro-6814526.jpeg" />

<script>
  const navLinks = [
    { title: 'Inicio', href: '#inicio' },
    { title: 'Sobre mí', href: '#sobre' },
    { title: 'Servicios', href: '#servicios' },
    { title: 'Contacto', href: '#contacto' },
  ]
</script>
