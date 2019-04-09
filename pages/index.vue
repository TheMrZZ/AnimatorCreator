<template>
  <section class="container">
    <header>
      <h1 class="title">{{name}} Animator</h1>
    </header>

    <b-form class="form" ref="form" @submit="onSubmit">
      <div class="inputs">
      <template v-for="[id, label, placeholder, title, pattern] in fields" class="item">
        <label :key="`label-${id}`" :for="id" class="label">{{label}}:</label>
        <b-form-input :key="`input-${id}`" :id="id" :placeholder="placeholder" v-model="fieldsValues[id]"
                      class="input" :pattern="pattern"
                      :title="title"
        />
      </template>
      </div>
      <b-button type="submit" class="submit btn-success">Create the Animator !</b-button>
    </b-form>
  </section>
</template>

<script>
  import Datapack from '~/assets/datapack'

  export default {
    data () {
      return {
        fieldsValues: {},
        fields: [
          ['name', 'Name', 'Animator\'s name', "The name of the animator", "[A-Za-z_0-9 ]+"],
          ['author', 'Author', 'Author\'s name', "Your name", ".*"],
          ['authorURL', 'Author\'s Website', 'Author\'s website', "Your website", ".*"],
        ]
      }
    },

    computed: {
      name: function () {
        let name = this.fieldsValues['name']
        if (name) {
          return name.toLowerCase()
        }
        return ''
      }
    },

    methods: {
      onSubmit: function (submit) {
        const form = this.$refs.form
        submit.preventDefault()
        console.log(form.checkValidity())
        this.downloadDatapack()
      },

      downloadDatapack: function () {
        let datapack = new Datapack(this.datapackName(), this.animatorName(), this.animatorTag())
        datapack.download()
      },

      animatorName: function () {
        let name = this.name + ' animator'

        // Capitalize each words
        return name
          .toLowerCase()
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ')
      },

      animatorTag: function () {
        return this.animatorName().replace(/ /g, '_').replace(/[^A-Za-z_]/g, '').toLowerCase()
      },

      datapackName: function () {
        return this.animatorTag()
      }
    }
  }
</script>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: min-content;
  }

  .container * {
    width: 100%;
  }

  .title {
    text-transform: capitalize;
    border-bottom: 3px solid rgba(0, 0, 0, 0.1);
    white-space: nowrap;
  }

  .inputs {
    display: grid;
    grid-template-columns: auto max-content;
    grid-column-gap: 50px;
  }

  .submit {
    margin-top: 20px;
  }

  .label {
    white-space: nowrap;
    text-align: left;
    grid-column: 1;
  }

  .input {
    grid-column: 2;
  }
</style>

