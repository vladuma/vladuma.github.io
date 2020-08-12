<template>
  <section id="contact">
      <h3>Contact</h3>
      <p>Have a question or want to work together?</p>
      <div class="contacts">
        <span v-if="email">
          <a :href="email.link">{{email.value}}</a>
        </span>
        <span v-if="phone">
          <a :href="phone.link">{{phone.value}}</a>
        </span>
      </div>
      <form id="contact-form" v-if="showForm">
        <div class="contact-info">
          <div class="half-screen">
            <input type="text" name="name" placeholder="Your name*" class="" required @change="setName($event)">
          </div>
          <div class="half-screen">
            <input type="email" name="email" placeholder="Your email*" class="" required @change="setEmail($event)">
          </div>
        </div>
        <textarea name="message" placeholder="Your comment*" class="" rows="5" required @change="setMessage($event)"></textarea>
        <button type="button" name="send-button" class="button-wb" v-on:click="sendEmail($event)">Send message</button>
      </form>
      <div class="send-status">
        <div class="form-success-message" :class="{hidden: !successMessage}">
          <h4>Your message was sent! <i class="far fa-check-circle"></i></h4>
        </div>
        <div class="form-error-message" :class="{hidden: !errorMessage}">
          <h6>Oops, something went wrong. Please, try again!</h6>
        </div>
        <div class="form-required-message" :class="{hidden: !requiredMessage}">
          <h6>Please, fill out the required fields</h6>
        </div>
      </div>
    </section>
</template>

<script>
 
export default {
    name: "Contact",
    props: {
        contacts: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
            requiredMessage: false,
            errorMessage: false,
            successMessage: false,
            showForm: true,
            email: this.contacts.find(contact => contact.name === "Email"),
            phone: this.contacts.find(contact => contact.name === "Phone"),
        }
    },
    methods: {
        setName(e) {
            this.name = e.target.value;
        },
        setEmail(e) {
            this.email = e.target.value;
        },
        setMessage(e) {
            this.message = e.target.value;
        },
        sendEmail(e) {
            this.requiredMessage = false;
            this.errorMessage = false;

            if (this.name && this.email && this.message) {
                const data = {
                    "replyToEmails": [this.email],
                    "subject" : `Message from ${this.name}`,
                    "message" : this.message
                };

                fetch('https://j9oargvlkl.execute-api.us-east-1.amazonaws.com/prod', {
                    method: 'POST', 
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
        
                    if(res && res.statusCode === 204) {
                        this.successMessage = true;
                        this.showForm = false;
                    } else {
                        this.formError(res.errorMessage);
                    }
                }).catch(err => {
                    this.formError(res.errorMessage);
                })
            } else {
                this.requiredMessage = true;
            }
        },
        formError(error) {
            this.errorMessage = true;

            console.log('FAILED...', error);
        }
    }
}
</script>

<style>
#contact {
    padding: 30px 15% 50px 15%;
}
#contact p {
    margin: 0 0 21px;
    text-align: center;
}
.contacts {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0 0 20px;
}
.contacts span {
    padding: 5px 7px;
}
.contacts span a {
    color: black;
}
.contact-info {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.half-screen {
  display: flex;
  width: calc(50% - 20px);
}
form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
form input {
    width: 100%;
    border: 1px solid black;
    padding: 18px 20px;
}
form textarea{
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    margin: 20px 0;
    border: 1px solid black;
    padding: 18px 20px;
    -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
            box-sizing: border-box;
}
.send-status i {
    vertical-align: middle;
}
.send-status .form-success-message {
    color: black;
}
.send-status .form-error-message {
    color: red;
}
.send-status .form-required-message {
    color: red;
}
</style>