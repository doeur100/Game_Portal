<template>
  <div class="flex justify-center space-x-1 p-4 mt-20">
    <div class="bg-blue p-3">
      <router-link to="/register">
        <div class="sm:mt-5 md:mt-2 lg:mt-2 xl:96 2xl:mt-2 mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            class="md:h-10 md:w-10 lg:h-10 lg:w-10 h-7 w-7"
          >
      
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>

          <h2 class="md:text-xl lg:text-xl text-sm">Favorite</h2>
        </div>
      </router-link>

      <div class="sm:mt-5 md:mt-8 lg:mt-10 xl:96 2xl:mt-14 mt-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          class="md:h-10 md:w-10 lg:h-10 lg:w-10 h-7 w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
          />
        </svg>

        <h2 class="md:text-xl lg:text-xl text-sm">Like</h2>
      </div>
      <div class="sm:mt-5 md:mt-8 lg:mt-10 xl:96 2xl:mt-14 mt-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          class="md:h-10 md:w-10 lg:h-10 lg:w-10 h-7 w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
          />
        </svg>

        <h2 class="md:text-xl lg:text-xl text-sm">Dislike</h2>
      </div>
      <div class="sm:mt-5 md:mt-8 lg:mt-10 xl:96 2xl:mt-14 mt-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          class="md:h-10 md:w-10 lg:h-10 lg:w-10 h-7 w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>

        <h2 class="md:text-xl lg:text-xl text-sm sm:bg-orange-500 md:bg-blue-600 lg:bg-teal-600 xl:bg-pink-600 2xl:bg-yellow-300 bg-green-400">Feedback</h2>
      </div>
      <div class="sm:mt-5 md:mt-8 lg:mt-32 xl:mt-60 2xl:mt-96 mt-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          class="md:h-10 md:w-10 lg:h-10 lg:w-10 h-7 w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
          />
        </svg>
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
  <div class="sm:ml-32 md:ml-68 lg:ml-52 xl:ml-72 2xl:ml-72 ml-28">
    <div class="flex">
      <h1 class="text-xl">Conversation</h1>
      <p class="ml-5 items-center flex">180 comments</p>
    </div>
    <input
      type="text"
      class="p-5 w-10/12 border-solid border-2 border-blue-600"
    />
  </div>
  <div class="flex justify-end sm:mr-32 md:mr-36 lg:mr-50 xl:mr-72 2xl:mr-72 mr-32 mt-5">
    <button class="bg-blue w-20 rounded">Post</button>
  </div>
  <div class="sm:ml-40 md:ml-70 lg:ml-60 xl:ml-80 2xl:ml-80 ml-36">
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
    <hr class="my-4 mr-40 border-gray-300">
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
