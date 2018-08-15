<template>
    <div>

        <!-- start main -->
        <div class="wrap">
            <div class="wrapper">
                <div class="main">
                    <div class="content">
                        <div class="contact">
                            <h2 class="style"><a href="#">Get in Touch</a></h2>
                            <div class="contact_info">
                                <div class="map">
                                    <iframe width="100%" height="175" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Lighthouse+Point,+FL,+United+States&amp;aq=4&amp;oq=light&amp;sll=26.275636,-80.087265&amp;sspn=0.04941,0.104628&amp;ie=UTF8&amp;hq=&amp;hnear=Lighthouse+Point,+Broward,+Florida,+United+States&amp;t=m&amp;z=14&amp;ll=26.275636,-80.087265&amp;output=embed"></iframe><br><small><a href="https://maps.google.co.in/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Lighthouse+Point,+FL,+United+States&amp;aq=4&amp;oq=light&amp;sll=26.275636,-80.087265&amp;sspn=0.04941,0.104628&amp;ie=UTF8&amp;hq=&amp;hnear=Lighthouse+Point,+Broward,+Florida,+United+States&amp;t=m&amp;z=14&amp;ll=26.275636,-80.087265" style="font-family: 'Open Sans', sans-serif;color:#666;text-align:left;font-size:0.85em">View Larger Map</a></small>
                                </div>
                            </div>
                            <div class="contact-form">
                                <h2 class="style"><a href="#">Contact Us</a></h2>
                                <form method="post" >
                                    <div>
                                        <span><label>NAME</label></span>
                                        <span><input name="userName" type="text" class="textbox" ></span>
                                    </div>
                                    <div>
                                        <span><label>E-MAIL</label></span>
                                        <span><input name="userEmail" type="text" class="textbox"></span>
                                    </div>
                                    <div>
                                        <span><label>MOBILE</label></span>
                                        <span><input name="userPhone" type="text" class="textbox"></span>
                                    </div>
                                    <div>
                                        <span><label>SUBJECT</label></span>
                                        <span><textarea name="userMsg"> </textarea></span>
                                    </div>
                                    <div>
                                        <span>{{status}}</span>
                                        <span><input type="button" value="Submit us" v-on:click="doSubmit" v-bind="{disabled : isSubmit}"></span>
                                    </div>
                                </form>
                            </div>
                            <div class="clear"> </div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>


    export default {
        name: 'contact',
        props:['isLogin'],
        components:{
            // 'app-header':Header,
            // 'app-footer':Footer,
        },
        data () {
            return {
                isSubmit : false,
                status : ''
            }
        },
        methods:{
            doSubmit:function () {
                this.isSubmit = true;
                this.status = 'requesting...'
                fetch("/bgft/admin/index.php?g=api&m=user&a=login",
                    {
                        method:"post",
                        body:JSON.stringify(
                            {
                                username:'123',
                                psw:'321',
                            }
                            ),
                    }).then(result => {
                    return result.json();
                }).then(data => {
                    if(data.status === 0){
                        this.isSubmit = false;
                        this.status = 'fail'
                    }else{
                        this.status = 'success';
                    }

                })
            }
        },
        created(){
            this.$emit('LoginStatusChange', true);
            this.$emit('sendObj', true);
            // console.log('change');
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
