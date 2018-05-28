new Vue({
    el:'#app',
    data: () => ({ propositions : LesPropositions}),
    computed:{
        propositionsPopulaires(){
            return this.propositions.sort( (a,b) => b.votes - a.votes );
        }
    },
    methods:{
        voteUp(prop){
            prop.votes++;
        }
    }
});