<template>
  <div>
  <v-row>
    <v-col
      cols="12"
      sm="6"
      md="3"

    >
      <input 
      class="input" 
      type="text"
      v-model="cep"
      placeholder="Insira o CEP" />
    </v-col>

    <v-col
      cols="12"
      sm="6"
      md="3"

    >
    <v-btn class="botoes_primarios" @click="buscarCep()">
        <img src="../assets/img/icone-plus.svg" class="icon" height="19px" alt="mais"/>
        <p class="text_botoes">Adicionar endereço</p>
    </v-btn>
    </v-col>
  </v-row>
  <div v-if="ceps.length > 0" >
  <v-row v-for="(cep, i) in ceps" :key="i" >
    <v-col
      cols="12"
      sm="6"
      md="6"
      
    >
      <v-row style="margin:10px">
        <img src="../assets/img/icone-lugar.svg" class="icon" height="30px" alt="mais"/>
        <v-card-title class="text_botoes" style="color: #20272C; font-weight: 700; font-size: 20px; padding:0px">
          CEP <p style="padding-left: 10px; color:#BBC4CE"> {{cep}}</p>
        </v-card-title>
      </v-row>
    </v-col>
    <v-col
      cols="12"
      sm="6"
      md="6"
      
    > </v-col>
    
  </v-row>
  </div>


  <v-row>
    <v-col
      cols="12"
      sm="6"
      md="3"
    >
      
    </v-col>

    <v-col
      cols="12"
      sm="6"
      md="3"

    >
    <v-btn class="botoes_primarios" @click="gerarEnderecos">
        <p class="text_botoes">Gerar endereços</p>
    </v-btn>
    </v-col>
  </v-row>

  <v-col
      cols="12"
      sm="6"
      md="6"
      class="px-0"

    >
    <hr style="margin-top: 15px; border: 1px solid #B7B7B7;"/>
  </v-col>
  <div v-if="enderecos.length > 0">
  <v-row style="margin:10px" v-for="(endereco, i) in enderecos" :key="i">
    <v-col
      cols="12"
      sm="6"
      md="6"

    >
      <div style="box-shadow: 0px 4px 20px rgba(32, 39, 44, 0.1);
border-radius: 8px;">
        <v-row style="padding:34px; align-items: center">
          <img src="../assets/img/icone-lugar.svg" class="icon" height="15px" alt="mais"/>
          <div>
            <p class="text_botoes" style="color: #424E59; font-size: 20px; font-weight: 700;">{{endereco.rua}}, {{endereco.bairro}}</p>
            <p class="text_botoes" style="color: #20272C; font-size: 16px; font-weight: 400;">{{endereco.cidade}} - {{endereco.estado}}</p>
          </div>
          <p style="margin-left:auto; font-weight: 400; font-size: 16px; line-height: 22px; letter-spacing: 0.01em; color: #B600EE;">
            {{endereco.cep}}
          </p>
          <div @click="removerEndereco(endereco.cep)">
            <img src="../assets/img/icone-lixo.svg" class="icon" style="padding-left:23px" height="18px" alt="mais"/>
          </div>
        </v-row>
      </div>
    </v-col>
    <v-col
      cols="12"
      sm="6"
      md="6"

    >
    </v-col>
    
  </v-row>
  </div>
  

  </div>
  
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
  export default {
    name: 'IndexPage',
    data () {
      return {
        cep: null,
        ceps: [],
        enderecos: [],
        
      }
    },

    methods:{
      buscarCep(){
        let cep = this.cep.replace(/\D/g, "");
        if (!/^[0-9]{8}$/.test(cep)) {
          Swal.fire({
          icon: 'error',
          title: 'CEP inválido',
          text: 'Digite um cep válido para cadastrar',
        })
        } else{
            if (this.ceps.includes(this.cep)){
              Swal.fire({
                icon: 'error',
                title: 'Oopps...',
                text: 'O CEP informado já foi cadastrado, tente outro',
              })
            } else{
              this.ceps.push(this.cep)
              this.cep = null
            }
        }

      },

      gerarEnderecos(){
        this.ceps.forEach(valor => {
          axios
          .get("https://viacep.com.br/ws/" + valor + "/json/")
          .then((response) => {
             this.enderecos.push({
              rua: response.data.logradouro,
              cidade: response.data.localidade,
              estado: response.data.uf,
              cep: response.data.cep,
              bairro: response.data.bairro
            })
          });
          this.ceps = []
        })
      },

      removerEndereco(cep){
        this.enderecos = this.enderecos.filter((item) => item.cep !== cep);
      }
    }
  }
</script>

