<template>
  <section class="comonSection resumeSection">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6">
          <h2 class="sectionTitle">Education</h2>
          <div class="kr-accordion" id="edication_accordion">
            <div class="card">
              <div class="card-header" id="ea_03">
                <h2 class="mb-0">
                  <a class="collapsed" href="#" data-toggle="collapse" data-target="#ea_col_03" aria-expanded="false" aria-controls="ea_col_03">
                    <i class="icon icon-Medal"></i>
                    <span>Computer Science &amp; Engineering</span>
                  </a>
                </h2>
              </div>
              <div id="ea_col_03" class="collapse show" aria-labelledby="ea_01" data-parent="#edication_accordion">
                <div class="card-body">
                  <div class="ac_meta"><span>Passing Year: 2019</span></div>
                  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header" id="ea_02">
                <h2 class="mb-0">
                  <a class="collapsed" href="#" data-toggle="collapse" data-target="#ea_col_02" aria-expanded="false" aria-controls="ea_col_02">
                    <i class="icon icon-Medal"></i>
                    <span>Higher Secondary School Certificate</span>
                  </a>
                </h2>
              </div>
              <div id="ea_col_02" class="collapse" aria-labelledby="ea_02" data-parent="#edication_accordion">
                <div class="card-body">
                  <div class="ac_meta"><span>Passing Year: 2014</span><span>Grade: 5.00</span></div>
                  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header" id="ea_01">
                <h2 class="mb-0">
                  <a class="" href="#" data-toggle="collapse" data-target="#ea_col_01" aria-expanded="true" aria-controls="ea_col_01">
                    <i class="icon icon-Medal"></i>
                    <span>Secondary School Certificate</span>
                  </a>
                </h2>
              </div>
              <div id="ea_col_01" class="collapse" aria-labelledby="ea_01" data-parent="#edication_accordion">
                <div class="card-body">
                  <div class="ac_meta"><span>Passing Year: 2012</span><span>Grade: 5.00</span></div>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <h2 class="sectionTitle">Experience</h2>
          <div class="kr-accordion" id="exps_accordion">
            <div class="card">
              <div class="card-header" id="ex_01">
                <h2 class="mb-0">
                  <a class="" href="#" data-toggle="collapse" data-target="#ex_col_01" aria-expanded="true" aria-controls="ex_col_01">
                    <i class="icon icon-Cup"></i>
                    <span>Trimatric Architects & Engineers</span>
                  </a>
                </h2>
              </div>
              <div id="ex_col_01" class="collapse show" aria-labelledby="ex_01" data-parent="#exps_accordion">
                <div class="card-body">
                  <div class="ac_meta"><span>Nov 2018 - Running</span><span>Web Developer</span></div>
                  <strong><a href="https://www.indecor.com.bd/"><u>Indecor BD (Ecommerce)</u></a></strong>
                  <ul>
                    <li>Backend Development dynamic ecommerce (Furniture Shop) website</li>
                    <li>Site integrated with SSLCommerce Payment and Messaging API</li>
                    <li>Lookup hosting issues, client and staff logins and general upgrades/maintenance of servers</li>
                  </ul>
                  <strong><a href="https://www.satez.com.bd/"><u>Satez Super Shop (Ecommerce)</u></a></strong>
                  <ul>
                    <li>Woo commerce Based Grocery Ecommerce Website</li>
                    <li>Integrated Cloud CDN and maintain Cloud server (Digital Ocean) issues</li>
                  </ul>
                  <strong><a href="#"><u>MIS (Management Information System)</u></a></strong>
                  <ul>
                    <li>Develop internal MIS for company Project Management & HRM</li>
                    <li>Backend Development using REST APIs built in Laravel PHP</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="ex_02">
                <h2 class="mb-0">
                  <a class="collapsed" href="#" data-toggle="collapse" data-target="#ex_col_02" aria-expanded="false" aria-controls="ex_col_02">
                    <i class="icon icon-Cup"></i>
                    <span>Artact BD</span>
                  </a>
                </h2>
              </div>
              <div id="ex_col_02" class="collapse" aria-labelledby="ex_02" data-parent="#exps_accordion">
                <div class="card-body">
                  <div class="ac_meta"><span>2018 - 2018</span><span>Web Developer & Digital Marketing Media Manager</span></div>
                  <ul>
                    <li>Develop websites from front to backend using PHP, JavaScript and HTML</li>
                    <li>Designed and maintained both corporate and client websites</li>
                    <li>Maintain Social Media Platform</li>
                    <li>Design, delivering innovative concepts, wireframes & prototypes</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="ex_03">
                <h2 class="mb-0">
                  <a class="collapsed" href="#" data-toggle="collapse" data-target="#ex_col_03" aria-expanded="false" aria-controls="ex_col_03">
                    <i class="icon icon-Cup"></i>
                    <span>Fiverr</span>
                  </a>
                </h2>
              </div>
              <div id="ex_col_03" class="collapse" aria-labelledby="ex_01" data-parent="#exps_accordion">
                <div class="card-body">
                  <div class="ac_meta"><span>2019 - Running</span><span>UI UX Designer</span></div>
                    Design web & mobile user interface at fiverr and other marketplace.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Resume"
}
</script>

<style scoped>

</style>