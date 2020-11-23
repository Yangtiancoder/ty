export function getParamsFromUrl(){
    console.log(this.$route.query)
    return this.$route.query
}