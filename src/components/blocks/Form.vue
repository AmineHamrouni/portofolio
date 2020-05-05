<template>
  <div class="row">
    <div class="column large-6 tab-full">
      <h3>Form Styles</h3>

      <form>
        <div>
          <label for="sampleInput">Your email</label>
          <input class="h-full-width" type="email" placeholder="test@mailbox.com" id="sampleInput">
        </div>
        <div>
          <label for="sampleRecipientInput">Reason for contacting</label>
          <div class="ss-custom-select">
            <select class="h-full-width" id="sampleRecipientInput">
              <option value="Option 1">Questions</option>
              <option value="Option 2">Report</option>
              <option value="Option 3">Others</option>
            </select>
          </div>
        </div>

        <label for="exampleMessage">Message</label>
        <textarea class="h-full-width" placeholder="Your message" id="exampleMessage"></textarea>
        
        <label class="h-add-bottom">
          <input type="checkbox">
          <span class="label-text">Send a copy to yourself</span>
        </label>
        
        <input class="btn--primary h-full-width" type="submit" value="Submit">
      </form>
    </div>

    <Alerts/>
  </div>
  <!-- end row -->
</template>

<script>
import Alerts from "./Alerts";

export default {
  name: "Form",
  components: {
    Alerts
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
