const propositionComposant = {
    props: ['proposition'],
    methods:{
        voteUp(prop){
            prop.votes++;
        }
    },
    template:`
        <div class="media">
            <img class="mr-3" v-bind:src="proposition.image" alt="ZZ">
            <div class="media-body">
                <h5>
                    {{ proposition.titre }}
                    <label for="" class="badge badge-secondary">
                        #{{ proposition.id }}
                    </label>
                </h5>
                <p v-html="proposition.description">
                    
                </p>
                <p class="">
                    <img v-bind:src="proposition.auteur.image" alt=""> 
                    {{ proposition.auteur.nom }}
                </p>
            </div>
            <div col="mr-2">
                <a href="#" title="Je vote pour cette proposition!" v-on:click="voteUp(proposition)"> <i class="fa fa-chevron-up"></i> </a>
                {{ proposition.votes }}
            </div>
        </div>
    `
};