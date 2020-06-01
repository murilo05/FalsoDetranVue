<template>
  <div id="caixa">
    <legend id="titulo">Dados do veículo</legend>
    <label  for="placa" id="plac">Placa:</label>
    <input type="text" id="placa" placeholder=" Escreva aqui" v-model="placa" />
    <button id="botao" @click="pesquisarVeiculo">OK</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      placa: ""
    };
  },
  methods: {
    pesquisarVeiculo: function() {     
      this.$store.state.infracoesVeiculo = this.$store.state.multas.filter(multa => multa.PLACA == this.placa);
      this.$router.push("/infracoes")
    }
  }
};
</script>

<style>
</style>