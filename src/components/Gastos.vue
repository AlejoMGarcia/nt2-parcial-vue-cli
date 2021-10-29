<template>
  <section class="src-components-gastos">
    <div class="jumbotron">
      <h3> Gastos </h3>
      <hr>

      <vue-form :state="formstate" @submit.prevent="cargarGasto()">

        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" class="form-control"
            v-model.trim="formData.nombre" 
            required :minlength="caracteresMinimos" :maxlength="caracteresMaximos"
            autocomplete="off">

          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-2">
              El nombre es requerido.
            </div>
            <div slot="minlength" class="alert alert-danger mt-2">
              El nombre debe tener al menos {{caracteresMinimos}} caracteres.
            </div>
            <div v-if="nombreTieneMaxCaracteres()" class="alert alert-danger mt-2">
              El nombre debe tener como máximo {{caracteresMaximos}} caracteres.
            </div>
            <div v-if="nombreTieneEspaciosIntermedios()" class="alert alert-danger mt-2">
              El nombre no puede contener espacios intermedios.
            </div>
          </field-messages>
        </validate>
        <br>

        <validate tag="div">
          <label for="descripcion">Descripcion</label>
          <input type="text" id="descripcion" name="descripcion" class="form-control"
            v-model="formData.descripcion" required
            autocomplete="off"
          >

          <field-messages name="descripcion" show="$dirty">
            <div slot="required" class="alert alert-danger mt-2">
              La descripcion es requerida.
            </div>
          </field-messages>
        </validate>
        <br>

        <validate tag="div">
          <label for="importe">Importe</label>
          <input type="number" id="importe" v-model.number="formData.importe" required name="importe" 
            autocomplete="off" class="form-control"
          />
    
          <field-messages name="importe" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">El importe es requerido.</div>
          </field-messages>
        </validate>
        <br>

        <button class="btn btn-success my-4" :disabled="formstate.$invalid" type="submit">Agregar gasto</button>
      </vue-form>

      <h2>Detalle de Gastos</h2>
      <br>

      <div class="my-2">
        <h4>Presupuesto</h4>
        <input type="number" id="presupuesto" v-model.number="presupuesto" name="presupuesto" autocomplete="off" class="form-control my-2"/>
      </div>

      <div v-if="gastos.length" class="table-responsive">
        <table class="table">
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Importe</th>
            <th>Fecha</th>
          </tr>
          <tr v-for="(gasto,index) in gastos" :key="index" >
            <td>{{ gasto.nombre }}</td>
            <td>{{ gasto.descripcion }}</td>
            <td>{{ gasto.importe | agregarMoneda('$') }}</td>
            <td>{{ gasto.fecha }}</td>
          </tr>
          <tr :style="{color: analizarTotal().color }">
            <td/>
            <td/>
            <td class="result" >Gasto total:</td>
            <td class="result" >{{ analizarTotal().total | agregarMoneda('$') }}</td>
          </tr>
        </table>
      </div>
      <h3 v-else class="alert alert-info mt-4">No hay datos ingresados</h3>

      
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-gastos',
    props: [],
    mounted () {

    },
    filters : {
      agregarMoneda: function(importe,moneda) {
        return moneda + importe
      }
    },
    data () {
      return {
        caracteresMinimos : 3,
        caracteresMaximos : 15,
        formstate : {},
        formData : this.getInitialData(),
        gastos: [],
        presupuesto : null
      }
    },
    methods: {
      getInitialData(){
        return {
          nombre : null,
          descripcion: null,
          importe: null
        }
      },
      nombreTieneMaxCaracteres(){
        return this.formData.nombre && this.formData.nombre.length == this.caracteresMaximos
      },
      nombreTieneEspaciosIntermedios(){
        return this.formData.nombre && this.formData.nombre.includes(' ')
      },
      cargarGasto () {
        let gastoCopia = {...this.formData}
        gastoCopia.fecha = new Date().toLocaleString()

        this.gastos.push(gastoCopia)

        this.formData = this.getInitialData()
        this.formstate._reset() 
      },
      analizarTotal() {
        let total = 0 
        this.gastos.forEach(gasto => {
          total += gasto.importe
        });

        let color = '#229954'
        if(total >= 1000 && total <= 5000) color = '#9B59B6'
        if(total > 5000) color = '#F39C12'

        if(this.presupuesto != null && this.presupuesto != '' && this.presupuesto < total) color = '#E74C3C'

        return {
          total,
          color
        }
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-gastos {

  }

  .jumbotron {
    background-color: lightsteelblue;
    color: dimgray;
  }

  .result {
    background-color: lightgray;
  }

</style>
