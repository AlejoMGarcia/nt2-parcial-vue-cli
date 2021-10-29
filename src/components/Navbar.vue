<template>

  <section class="src-components-navbar">
    <div>
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <h5 class="text-white h3">Seleccione una opción</h5>
          <ul class="navbar-nav">
            <li class="nav-item"> 
                <router-link to="/gastos">
                  <a class="text-lightblue h4 nav-link" href="#">Gastos</a>
                </router-link>
            </li>
            <li class="nav-item" > 
              <router-link to="/respuestas">
                <a class="text-lightblue h4 nav-link" href="#">Respuestas</a>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-navbar {

  }

  .text-lightblue {
    color: lightblue;
  }
</style>
