<template>
  <div class="mailchimp-signup">
    <!-- Begin Mailchimp Signup Form -->
    <div id="mc_embed_signup">
      <form action="https://gmail.us5.list-manage.com/subscribe/post?u=7337420e6783810a874d22fe4&amp;id=7565936ba5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
          <h2>Subscribe for Updates</h2>
          <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
          <div class="mc-field-group">
            <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
            </label>
            <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
          </div>
          <div class="mc-field-group">
            <label for="mce-FNAME">First Name   <span class="asterisk">*</span>
            </label>
            <input type="text" value="" name="FNAME" class="required" id="mce-FNAME">
          </div>
          <div class="mc-field-group">
            <label for="mce-LNAME">Last Name </label>
            <input type="text" value="" name="LNAME" class="" id="mce-LNAME">
          </div>
          <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
          </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_7337420e6783810a874d22fe4_7565936ba5" tabindex="-1" value=""></div>
          <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
        </div>
      </form>
    </div>
    <!--End mc_embed_signup-->
  </div>
</template>

<script>
export default {
  name: "MailChimpSignUpForm",
  metaInfo: {
    link: [
      { rel: 'stylesheet', href: '//cdn-images.mailchimp.com/embedcode/classic-10_7.css' }
    ],
    style: [
      { type: 'text/css', cssText: '#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }' }
    ],
    script: [
      { type: 'text/javascript', src: '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js' },
    ]
  },
}
</script>
