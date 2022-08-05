<script>
  import { createForm } from "svelte-forms-lib";
  import * as yup from "yup";
  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      siteName: "https://veldron.com",
      description: "",
    },
    validationSchema: yup.object().shape({
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
      email: yup
        .string()
        .required("Email is required")
        .email("Email is invalid"),
      subject: yup.string().required("Subject is required"),
      description: yup
        .string()
        .min(20, "Minimum 20 characters")
        .required("Description is required"),
    }),
    onSubmit: async (values) => {
      const dataToSend = JSON.stringify(values);
      // clear form
      form.set({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        siteName: "https://veldron.com",
        description: "",
      });
      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };

      let response = await fetch(
        "https://prd.api.web.mbdg5r7a9t7effeb.foodstepsapp.com/v1/contact-me",
        {
          method: "POST",
          body: dataToSend,
          headers: headersList,
        }
      );

      let data = await response.text();
      console.log(data);
      alert("Thank you for contacting, We will get back to you soon");
    },
  });
</script>

<div class="mt-10">
  <h1 class="text-4xl font-black text-center ">Contact Us</h1>

  <!-- <p class="text-xl font-black text-center ">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum
    modi, adipisci facilis.
  </p> -->
  <!-- registration form -->

  <form on:submit={handleSubmit}>
    <div class="flex flex-row items-center justify-center py-10 ">
      <div class="w-full max-w-lg">
        <div class="flex flex-wrap ">
          <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              class="block mb-2 text-xs font-black tracking-wide uppercase"
              for="firstName"
            >
              First Name
            </label>
            <div class="mb-3">
              <input
                class="block w-full px-4 py-3 leading-tight bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-gray-100 focus:border-primary-dark"
                id="firstName"
                on:change={handleChange}
                bind:value={$form.firstName}
                type="text"
                placeholder="Jane"
              />
              {#if $errors.firstName}
                <span class="text-xs italic text-red-700 "
                  >{$errors.firstName}</span
                >
              {/if}
            </div>
          </div>
          <div class="w-full px-3 md:w-1/2">
            <label
              class="block mb-2 text-xs font-bold tracking-wide uppercase"
              for="lastName"
            >
              Last Name
            </label>
            <div class="mb-3">
              <input
                bind:value={$form.lastName}
                on:change={handleChange}
                class="block w-full px-4 py-3 leading-tight bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-gray-100 focus:border-primary-dark"
                id="lastName"
                type="text"
                placeholder="Doe"
              />
              {#if $errors.lastName}
                <span class="text-xs italic text-red-700 "
                  >{$errors.lastName}</span
                >
              {/if}
            </div>
          </div>
        </div>
        <div class="flex flex-wrap ">
          <div class="w-full px-3">
            <label
              class="block mb-2 text-xs font-bold tracking-wide uppercase"
              for="email"
            >
              E-mail
            </label>
            <div class="mb-3">
              <input
                class="block w-full px-4 py-3 leading-tight bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-gray-100 focus:border-primary-dark"
                id="email"
                placeholder="name@email.com"
                bind:value={$form.email}
                on:change={handleChange}
                type="email"
              />
              {#if $errors.email}
                <span class="text-xs italic text-red-700 ">{$errors.email}</span
                >
              {/if}
            </div>
          </div>
        </div>
        <div class="flex flex-wrap ">
          <div class="w-full px-3">
            <label
              class="block mb-2 text-xs font-bold tracking-wide uppercase"
              for="subject"
            >
              Subject
            </label>
            <div class="mb-3">
              <input
                class="block w-full px-4 py-3 leading-tight bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-gray-100 focus:border-primary-dark"
                id="subject"
                placeholder="I have this idea...."
                bind:value={$form.subject}
                on:change={handleChange}
                type="text"
              />
              {#if $errors.subject}
                <span class="text-xs italic text-red-700 "
                  >{$errors.subject}</span
                >
              {/if}
            </div>
          </div>
        </div>
        <div class="flex flex-wrap ">
          <div class="w-full px-3">
            <label
              class="block mb-2 text-xs font-bold tracking-wide uppercase"
              for="description"
            >
              Message
            </label>
            <div class="mb-3">
              <textarea
                class="block w-full h-48 px-4 py-3 leading-tight bg-gray-200 border border-gray-200 rounded appearance-none resize-none no-resize focus:outline-none focus:bg-gray-100 focus:border-primary-dark"
                id="description"
                placeholder="It starts with..."
                on:change={handleChange}
                bind:value={$form.description}
              />
              {#if $errors.description}
                <span class="text-xs italic text-red-700 "
                  >{$errors.description}</span
                >
              {/if}
            </div>
          </div>
        </div>
        <div class="md:flex md:items-center md:flex-row md:justify-center ">
          <div
            class="rounded bg-primary hover:bg-primary-light hover:border-primary"
          >
            <button
              class="px-4 py-2 font-bold text-center text-white rounded shadow-inner shadow-primary-dark focus:shadow-outline focus:outline-none"
              type="submit"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>
