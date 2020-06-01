<template>
  <div class="infracoes">

      <div id="caixa" v-for="(infracao, index) in infracoes" :key="index">

        <label class="letras" for="placa">Placa: </label>
        <input type="text" id="placaq" :value="infracao.PLACA" /><br>
        <label class="letras" for="placa">Local: </label>
        <input type="text" id="localq" :value="infracao.LOCALIDADE" /><br>
        <h2 id="tit">Dados da Infração:</h2>
        <label class="letras" for="data">Tipo:</label>
        <input type="text" id="tipoq" :value="infracao.DADOS_INFRACAO.TIPO" /><br>
        <label class="letras" for="placa">Data e Hora:</label>
        <input type="text" id="datahoraq" :value="infracao.DADOS_INFRACAO.DATAHORA" /><br>
        <label class="letras" for="placa" id="infracaoq" v-if="infracao.DADOS_INFRACAO.TIPO == 'VELOCIDADE'">Velocidade Máxima: {{infracao.DADOS_INFRACAO.VEL_MAXIMA}} Km/h</label><br>
      </div>

  </div>
</template>

<script>
export default {
  computed: {
    infracoes: function() {
        return this.$store.state.infracoesVeiculo
    },
    methods: {
        voltar: function(){
            this.$router.push('/')
        }
    }
    
    
  }
};
</script>

<style>
</style>