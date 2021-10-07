<template>
  <section class="comonSection contactSection">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="sectionTitle">Contact Me</h2>
        </div>
      </div>
      <div class="row mb30">
        <div class="col-lg-8">
          <div class="contact_form">
            <form ref="form" @submit.prevent="sendEmail" @submit="submitForm">
              <label>Name</label>
              <input type="text" name="from_name" placeholder="Your Full Name" required="">
              <label>Email</label>
              <input type="email" name="from_email" placeholder="Your Email Address" required="">
              <label>Message</label>
              <textarea name="message"></textarea>
              <input type="submit" value="Send" class="btt_btn float-right">
            </form>
          </div>

        </div>
        <div class="col-lg-4">
          <div class="icon_box_01">
            <i class="icon icon-Mail"></i>
            <h3>Email Address</h3>
            <p>sabbir5795@gmail.com</p>
          </div>
          <div class="icon_box_01">
            <i class="icon icon-Phone"></i>
            <h3>Phone Number</h3>
            <p>+8801521463599</p>
            <p>+8801920823381</p>
          </div>
          <div class="icon_box_01 addrBox">
            <i class="icon icon-Pointer"></i>
            <h3>Address</h3>
            <p>
              Basabo, Dhaka-1214
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>


<script>
import emailjs from 'emailjs-com';

export default {
  name: "Contact",

  methods: {
    sendEmail() {
      emailjs.sendForm('service_r9404xq', 'template_yt7ci89', this.$refs.form, 'user_2mq34F2xrlKEfo7KMvI9O')
          .then((result) => {
            console.log('Message Send Successfully!', result.text);
            this.resetForm();
          }, (error) => {
            console.log('FAILED...', error.text);
          });
      },
    submitForm : function(event){
      event.preventDefault(),
      event.target.reset(),
      window.alert('Message Send Successfully!');
    }

    }

}
</script>

<style scoped>

</style>