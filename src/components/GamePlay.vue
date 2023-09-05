<template>
  <div class="flex justify-center space-x-1 p-2 mt-20">
    <div class="bg-blue p-5">
      <router-link to="/register">
        <div class="mt-8">
          <i class="fa-fw fa-2x fa fa-heart"></i>
          <h2>Favorite</h2>
        </div>
      </router-link>

      <div class="mt-8">
        <i class="fa-fw fa-2x fa fa-thumbs-up"></i>
        <h2>Like</h2>
      </div>
      <div class="mt-8">
        <i class="fa-fw fa-2x fa fa-thumbs-down"></i>
        <h2>Dislike</h2>
      </div>
      <div class="mt-8">
        <i class="fa-fw fa-2x fa fa-address-card"></i>
        <h2>Feedback</h2>
      </div>
      <div class="mt-96">
        <i class="fa-fw fa-3x fa fa-arrows-alt"></i>
      </div>
    </div>

    <img
      src="https://www.khmertimeskh.com/wp-content/uploads/2021/04/WoF-online.jpg"
      class="w-10/12"
      alt=""
    />
  </div>
  <div class="flex flex-wrap justify-center text-center p-10">
      <div class="m-10 shadow-lg shadow-white-500/40 p-5">
        <img
          src="https://direxplay.com/images/games/WOF_Icon.png"
          class="w-48"
          alt=""
        />
        <h2>Title</h2>
      </div>
    >
    <div class="m-10 shadow-lg shadow-white-500/40 p-5">
      <img
        src="https://direxplay.com/images/games/WOF_Icon.png"
        class="w-48"
        alt=""
      />
      <h2>Title</h2>
    </div>
    <div class="m-10 shadow-lg shadow-white-500/40 p-5">
      <img
        src="https://direxplay.com/images/games/WOF_Icon.png"
        class="w-48"
        alt=""
      />
      <h2>Title</h2>
    </div>
    <div class="m-10 shadow-lg shadow-white-500/40 p-5">
      <img
        src="https://direxplay.com/images/games/WOF_Icon.png"
        class="w-48"
        alt=""
      />
      <h2>Title</h2>
    </div>
    <div class="m-10 shadow-lg shadow-white-500/40 p-5">
      <img
        src="https://direxplay.com/images/games/WOF_Icon.png"
        class="w-48"
        alt=""
      />
      <h2>Title</h2>
    </div>
  </div>
  <div class="ml-72">
    <div class="flex">
      <h1 class="text-xl">Conversation</h1>
      <p class="ml-5 items-center flex">180 comments</p>
    </div>
    <input
      type="text"
      class="p-5 w-10/12 border-solid border-2 border-blue-600"
    />
  </div>
  <div class="flex justify-end mr-72 mt-5">
    <button class="bg-blue w-20 rounded">Post</button>
  </div>
  <div class="ml-80">
    <div class="flex">
      <img
        src="data:image/png;base64,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"
        alt=""
        class="w-20"
      />
      <h1 class="items-center flex">Doeur Diet</h1>
    </div>
    <div>
      <p>29,Aug,2023</p>
      <p>I love this game so much.</p>
    </div>
    <hr
      style="height: 1px; border-width: 0; background-color: black"
      class="mr-80"
    />
    <div class="flex">
      <img
        src="data:image/png;base64,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"
        alt=""
        class="w-20"
      />
      <h1 class="items-center flex">Doeur Diet</h1>
    </div>
    <div>
      <p>29,Aug,2023</p>
      <p>I love this game so much.</p>
    </div>
  </div>
</template>
