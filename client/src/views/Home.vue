<template>
    <div class="container home pt-3">
        <h1>This is PuntPortalen</h1>
        <span class="fa fa-th-large" @click="viewType = false" v-bind:class="{ active: !viewType }"></span>&nbsp;&nbsp;
        <span class="fa fa-list" @click="viewType = true" v-bind:class="{ active: viewType }"></span>
        <ul class="list-unstyled row" v-if="!viewType">
            <div class="col-sm-6 col-md-3" v-for="beerbet in beerbets" :key="beerbet.id">
                <li class="card" @dblclick="editBeerbet(beerbet)">
                    <div class="card-header">
                        <input type="text" v-if="beerbet.editing" class="form-control">
                        <h3>För: {{ beerbet.author.first_name }} <span class="float-right"
                                style="font-size:0.9rem;">id:({{ beerbet.id }})</span></h3>
                    </div>
                    <div class="card-body">
                        <h4>{{ beerbet.description }}</h4>
                        <br>
                        <h5 v-if="!beerbet.type"><strong>Typ: &#x1f37a;</strong></h5>
                        <h5 v-else><strong>Typ: &#x1f96a;</strong></h5>
                        <h5><strong>Emot:</strong></h5>
                        <ul class="list-unstyled taker_list" :id="beerbet.id">
                            <li v-for="taker in beerbet.takers" :key="taker.id" class="card-header">
                                {{ taker.first_name }} 
                                <span class="float-right text-success" v-if="taker.paid">Betald</span>
                                <span class="float-right text-warning" v-else>Ej Betald</span>
                            </li>
                        </ul>
                    </div>
                </li>
            </div>
        </ul>
        <table class="table table-striped" v-else>
            <thead>
                <tr>
                    <th>Typ av vad</th>
                    <th>Kort beskrivning</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="beerbet in beerbets" :key="beerbet.id">
                    <td v-if="!beerbet.type">&#x1f37a;</td>
                    <td v-else>&#x1f96a;</td>
                    <td>{{ beerbet.description }}</td>
                    <td class="text-warning">Ej klar</td>
                </tr>
            </tbody>
        </table>
        <div class="add-bb-form card col-sm-12 col-md-3 py-3">
            <h3>Lägg till vadslagning</h3>
            <form @submit.prevent="createBet()">
                <div class="form-group">
                    <label for="author">Skapare</label>
                    <select v-model="create_author" class="form-control">
                        <option v-for="user in users" :key="user.id" :value="user.id" class="form-control">{{ user.first_name }}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="description">Beskrivning</label>
                    <textarea type="text" class="form-control" id="description" v-model="create_description"></textarea>
                </div>
                <div class="form-group">
                    <span>Sandwich bet?</span><br>
                    <label class="switch mt-2">
                        <input type="checkbox" id="type" v-model="create_sandwich">
                        <span class="slider round"></span>
                    </label>
                </div>
                <h5>Vem/vilka är emot</h5>
                <div class="card-header" v-for="user in users" :key="user.id">
                    <span class="text-muted">{{ user.first_name }}</span> <span class="float-right">
                        <label class="switch">
                            <input type="checkbox" v-model="create_takers" :value="user.id">
                            <span class="slider round"></span>
                        </label></span>
                </div>
                <button type="submit" class="btn btn-block btn-success my-3">Lägg till</button>
            </form>
        </div>
        <a class="add-btn" @click="showForm()">+</a>
    </div>
</template>

<script>
    // @ is an alias to /src

    import {mapActions} from 'vuex';

    export default {
        chainWebpack: config => {
            config.plugin('html').tap(args => {
                return [
                    args[0].title = 'Beerbets | Puntportalen.se'
                ]
            });
        },
        name: 'Home',
        data: () => ({
            viewType: false,
            create_author: '',
            create_description: '',
            create_sandwich: false,
            create_takers: [],
        }),
        mounted() {
            this.beerbets = this.$store.state.beerbets;
            this.users = this.$store.state.users;
        },
        methods: {
            ...mapActions([
                'postBeerbet',
            ]),
            editBeerbet(beerbet) {
                beerbet.editing = true;
            },
            clearForm() {
                this.create_author = '';
                this.create_description = '';
                this.create_sandwich = false;
                this.create_takers = [];
            },
            showForm() {
                $('.add-bb-form').toggleClass('open');
            },
            createBet() {
                const bb = {
                    author_id: this.create_author,
                    description: this.create_description,
                    type: this.create_sandwich,
                    takers: this.create_takers,
                };
                bb.takers.push(this.create_author);
                // this.clearForm();
                const newObj = bb;
                this.postBeerbet(newObj);
            },
        },
        computed: {
            beerbets: {
                get: function() {
                    return this.$store.state.beerbets;
                },
                set: function() {
                    this.$store.dispatch('getBeerbets');
                }
            },
            users: {
                get: function() {
                    return this.$store.state.users;
                },
                set: function() {
                    this.$store.dispatch('getUsers');
                }
            }
        }
    }
</script>

<style lang="scss">
    .col-sm-6 {
        padding: 15px;
    }

    .fa {
        font-size: 2em;
    }

    .active {
        color: #E0FF4F;
    }

    .add-btn {
        font-size: 3rem;
        background: #E0FF4F;
        color: #222;
        border-radius: 50px;
        padding: 0px 23px;
        transition: all 200ms;
        position: fixed;
        bottom: 20px;
        right: 20px;
    }

    .add-bb-form {
        position: fixed;
        top: 3%;
        right: -1000px;
        transition: all 200ms ease-in-out;
    }

    .open {
        right: 10px;
    }

    .hideBbForm {
        right: -1000px;
    }

    .add-btn:hover {
        text-decoration: none;
        color: #222;
        background: #aac33b;
    }











    /* The switch - the box around the slider */
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked+.slider {
        background-color: #2196F3;
    }

    input:focus+.slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked+.slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>