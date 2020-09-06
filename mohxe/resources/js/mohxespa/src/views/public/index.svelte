<script>
  export let currentRoute;
  export let params = {};

  const workThumbnailUrl = "https://via.placeholder.com/250";
  const skillThumbnailUrl = "https://via.placeholder.com/250";
</script>

<style>
  .header {
    min-height: 640px;
  }
</style>

<!-- wrapper -->

<div class="wrapper">
  <!-- header -->
  <section
    class="header h-screen pt-5 pb-5 mb-8 relative flex flex-wrap z-10 bg-cover
    bg-brown-brick bg-fixed bg-no-repeat">

    <!-- left -->
    <div class="w-full z-10 md:w-1/2 lg:w-2/3 bg-opacity-25 bg-black">
      <!-- header title -->
      <div>mohxe.com</div>

      <!-- header subtile -->
      <div>Call me and get the job done!</div>
    </div>

    <!-- right -->
    <div class="w-full z-10 md:w-1/2 lg:w-1/3 bg-black bg-opacity-75">
      <!-- contact form-->
      <strong>Contact me form</strong>
    </div>

  </section>

  <main class="max-w-screen-xl sm:px-1 md:px-3 lg:p-0 m-auto">
    <!-- skills -->
    <section class="skills pt-20 pb-20">
      <div>
        <h1 class="text-2xl text-center font-bold mb-12">Skills</h1>
      </div>

      <!-- skills items -->
      <div class="flex flex-wrap justify-center items-center md:pl-1">
        <!-- FullStack Web Developer-->
        <div
          class="relative w-full mb-2 sm:mb-0 sm:w-1/2 sm:pr-1 sm:pb-1 md:w-1/4
          md:p-0 md:pr-1">
          <!-- skills logo -->
          <img
            class="w-full h-auto"
            src={skillThumbnailUrl}
            alt="skill-thumbnail" />
          <div
            class="absolute top-0 left-0 h-full w-full flex items-center
            justify-center">
            <span class="block">FullStak Web</span>
          </div>
        </div>

        <!-- Mobile -->
        <div
          class="relative w-full mb-2 sm:mb-0 sm:w-1/2 sm:pl-1 sm:pb-1 md:w-1/4
          md:p-0 md:pr-1">
          <!-- skills logo -->
          <img
            class="w-full h-auto"
            src={skillThumbnailUrl}
            alt="skill-thumbnail" />
          <div
            class="absolute top-0 left-0 h-full w-full flex items-center
            justify-center">
            <span class="block">Mobile App</span>
          </div>
        </div>

        <!-- CMS integration -->
        <div
          class="relative w-full mb-5 sm:w-1/2 sm:mb-0 sm:pt-1 sm:pr-1 md:w-1/4
          md:p-0 md:pr-1">
          <!-- skills logo -->
          <img
            class="w-full h-auto"
            src={skillThumbnailUrl}
            alt="skill-thumbnail" />
          <div
            class="absolute top-0 left-0 h-full w-full flex items-center
            justify-center">
            <span class="block">CMS integration</span>
          </div>
        </div>

        <!-- Data Analysis -->
        <div
          class="relative w-full sm:w-1/2 sm:pt-1 sm:pl-1 md:w-1/4 md:p-0
          md:pr-1">
          <!-- skills logo -->
          <img
            class="w-full h-auto"
            src={skillThumbnailUrl}
            alt="skill-thumbnail" />
          <div
            class="absolute top-0 left-0 h-full w-full flex items-center
            justify-center">
            <span class="block">Data analysis</span>
          </div>
        </div>

      </div>

    </section>

    <!-- works -->
    <section class="works pt-20 pb-20">
      <div>
        <h1 class="text-2xl text-center font-bold mb-12">Works</h1>
      </div>

      <div class="flex flex-wrap items-stretch justify-around">

        <div class="overflow-hidden relative w-full sm:w-1/2 md:w-1/3 p-2 h-64">
          <img
            class="w-full h-full"
            src={workThumbnailUrl}
            alt="skill-thumbnail" />
          <div
            class="absolute top-0 left-0 w-full h-full flex justify-center
            items-center">
            <div class="text-center">
              <span class="block mb-8 font-bold">toCash-$</span>
              <a href="/" class="text-blue-600 hover:underline">Visite</a>
            </div>
          </div>
        </div>

        <div class="overflow-hidden relative w-full sm:w-1/2 md:w-1/3 p-2 h-64">
          <img
            class="w-full h-full"
            src={workThumbnailUrl}
            alt="skill-thumbnail" />
          <div
            class="absolute top-0 left-0 w-full h-full flex justify-center
            items-center">
            <div class="text-center">
              <span class="block mb-8 font-bold">Fast-Shop</span>
              <a href="/" class="text-blue-600 hover:underline">Visite</a>
            </div>
          </div>
        </div>

        <div class="overflow-hidden relative w-full sm:w-1/2 md:w-1/3 p-2 h-64">
          <img
            class="w-full h-full"
            src={workThumbnailUrl}
            alt="skill-thumbnail" />
          <div
            class="absolute top-0 left-0 w-full h-full flex justify-center
            items-center">
            <div class="text-center">
              <span class="block mb-8 font-bold">EasyLearn</span>
              <a href="/" class="text-blue-600 hover:underline">Visite</a>
            </div>
          </div>
        </div>

        <div class="overflow-hidden relative w-full sm:w-1/2 md:w-1/3 p-2 h-64">
          <img
            class="w-full h-full"
            src={workThumbnailUrl}
            alt="skill-thumbnail" />
          <div
            class="absolute top-0 left-0 w-full h-full flex justify-center
            items-center">
            <div class="text-center">
              <span class="block mb-8 font-bold">StoreNET</span>
              <a href="/" class="text-blue-600 hover:underline">Visite</a>
            </div>
          </div>
        </div>

        <div class="overflow-hidden relative w-full sm:w-1/2 md:w-1/3 p-2 h-64">
          <img
            class="w-full h-full"
            src={workThumbnailUrl}
            alt="skill-thumbnail" />
          <div
            class="absolute top-0 left-0 w-full h-full flex justify-center
            items-center">
            <div class="text-center">
              <span class="block mb-8 font-bold">RealStateOne</span>
              <a href="/" class="text-blue-600 hover:underline">Visite</a>
            </div>
          </div>
        </div>

        <div class="overflow-hidden relative w-full sm:w-1/2 md:w-1/3 p-2 h-64">
          <img
            class="w-full h-full"
            src={workThumbnailUrl}
            alt="skill-thumbnail" />
          <div
            class="absolute top-0 left-0 w-full h-full flex justify-center
            items-center">
            <div class="text-center">
              <span class="block mb-8 font-bold">WamPyN</span>
              <a href="/" class="text-blue-600 hover:underline">Visite</a>
            </div>
          </div>
        </div>
      </div>

      <!-- view more work -->

      <div class="text-center">
        <a href="/" class="text-blue-600 hover:underline">View more</a>
      </div>
    </section>

    <!-- contact -->
    <section class="contact mt-12 h-64">
      <div class="flex flex-wrap">
        <!-- contact info -->
        <div
          class="bg-gray-800 w-full pb-12 md:w-1/2 pl-8 text-white text-center
          pt-8">
          <h4 class="text-3xl font-bold text-center mb-12">Contact Info</h4>

          <!-- email -->
          <p class="mb-8">
            <span class="font-bold">Email</span>
            <br />
            <span>example@gmail.com</span>
          </p>

          <!-- phone number -->
          <p class="mb-8">
            <span class="font-bold">Phone</span>
            <br />
            <span>+223 87 73 78 42</span>
          </p>

          <!-- address -->
          <p class="mb-8">
            <span class="font-bold">Address</span>
            <br />
            Mali/Bamako/Faladie-Sema
          </p>

          <!-- socials -->
          <div>
            <span>Socials</span>
            <br />
            <div class="text-center">
              <!-- facebook -->
              <a href="/">facebook</a>

              <!-- tweeter -->
              <a href="/">tweeter</a>

              <!-- whatsapp -->
              <a href="/">whatsapp</a>

              <!-- telegram -->
              <a href="/">telegram</a>

              <!-- messenger -->
              <a href="/">messenger</a>
            </div>
          </div>
        </div>

        <!--  contact form -->
        <div class="w-full md:w-1/2 px-5 pt-8 border">
          <h4 class="text-3xl font-bold text-center mb-12">
            Let's get in touch
          </h4>
          <form>
            <!-- fullname -->
            <div class="mb-5">
              <label for="contact_full_name">Full name (required)</label>
              <br />
              <input
                id="contact_full_name"
                class="w-full border p-1"
                name="contact_full_name"
                placeholder="Type here..."
                required />
            </div>

            <!-- phone -->
            <div class="mb-5">
              <label for="phone_number">Phone number (optional)</label>
              <br />
              <input
                id="contact_phone_number"
                class="w-full border p-1"
                name="contact_phone_number"
                placeholder="Type here..." />
            </div>

            <!-- email -->
            <div class="mb-5">
              <label for="contact_email">E-mail (required)</label>
              <br />
              <input
                id="contact_email"
                class="w-full border p-1"
                name="contact_email"
                placeholder="Type here..."
                required />
            </div>

            <!-- message -->
            <div class="mb-8">
              <label for="contact_message">Message (required)</label>
              <br />
              <textarea
                class="w-full border p-1 resize-none"
                rows="8"
                id="contact_message"
                name="contact_message"
                required />
            </div>
            <div class="text-center">
              <button
                class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2
                px-5">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</div>
