<template>
<div class="md:pt-[90px]">
  <div class="contacttop">
    <heading :titre="'PAGE DE CONTACT'" :text="'Pour nous contacter, remplisser le formulaire ci-dessous.'"/>
  </div>

  <section class="mt-[5%] md:flex">
    <div class="mb-[5%] md:mb-0 flex-auto">
      <form>
        <div>
          <div class="mt-5 mx-5">
            <input class="w-full bg-sombre text-accent" type="text" placeholder="Nom">
          </div>
          <underline/>
          <div class="mt-5 mx-5">
            <input class="w-full bg-sombre text-accent" type="text" placeholder="Prénom">
          </div>
          <underline/>
        </div>

        <div>
          <div class="mt-5 mx-5">
            <input class="w-full bg-sombre text-accent" type="email" placeholder="Email">
          </div>
          <underline/>
        </div>

        <div>
          <div class="mt-5 mx-5">
            <textarea class="w-full bg-sombre text-accent" placeholder="Message" name="message" rows="3"></textarea>
          </div>
          <underline/>
        </div>

        <div class="mt-5 mx-5 text-center">
          <div>
            <button type="submit" class="button font-210-d text-xl bg-white text-sombre px-8 py-4 rounded-full">ENVOYER</button>
          </div>
        </div>
      </form>
    </div>
    <div class="flex-auto md:m-auto">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11316.146225370552!2d-0.5713108098752478!3d44.89313750493678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5529ae2518e599%3A0xfbf9c37b548aee04!2sParc%20des%20Expositions%20de%20Bordeaux!5e0!3m2!1sen!2sfr!4v1653672223161!5m2!1sen!2sfr" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen=""></iframe>
    </div>
  </section>

  <section class="mt-[5%]">
    <newsletter/>
  </section>

  <DDbas class="mt-[100px]"/>

</div>
</template>

<script>
import heading from "../../src/components/HeadingsPageView.vue"
import DDbas from "../../src/components/FooterView.vue"
import underline from "../../src/components/decors/UnderlineView.vue"
import newsletter from "../components/NewsletterView.vue"
export default {
  components: { heading, DDbas, underline, newsletter },
}
</script>

<style>
.contacttop{
  background-image: url("../../public/fonds/contact.jpg");
  background-position: center;
}
.button{
  box-shadow:inset 0px 0px 15px 3px red;
}
input::placeholder, textarea::placeholder{
  color: white;
}
</style>