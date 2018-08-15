<template>
    <!-- start header -->
    <div class="header_bg">
        <div class="wrap">
            <div class="wrapper">
                <div class="header">
                    <div class="logo">
                        <a href="index.html"><img src="images/logo.png" alt=""/> </a>
                    </div>
                    <div class="cssmenu">
                        <ul>

                            <li><router-link v-bind:class="{'active': this.$route.path === '/'}" tag="a" to="/" >Home</router-link></li>
                            <li><router-link v-bind:class="{'active': this.$route.path === '/about'}" tag="a" to="/about">About</router-link></li>
                            <li><router-link v-bind:class="{'active': this.$route.path === '/blog'}" tag="a" to="/blog">Blog</router-link></li>
                            <li><router-link v-bind:class="{'active': this.$route.path === '/inspiration'}" tag="a" to="/inspiration">Inspiration</router-link></li>
                            <li><router-link v-bind:class="{'active': this.$route.path === '/contact'}" tag="a" to="/contact">Contact Us</router-link></li>

                            <div class="clear"></div>
                        </ul>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app-header',
        data () {
            return {

            }
        },
        methods:{

        },
        created(){
            // console.log(this.$route.path);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
