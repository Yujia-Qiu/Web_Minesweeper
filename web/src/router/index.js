import { createRouter, createWebHistory } from "vue-router";
import GamepageView from "@/views/gamepage/GamepageView";
import LeaderboardView from "@/views/leaderboard/LeaderboardView";
import NotFound from "@/views/error/NotFound";
import UserInfoView from "@/views/user/info/UserInfoView";

//configures url to component
const routes = [
  {
    //default -> main page
    path: "/",
    name: "home",
    redirect: "/pk/",
  },
  {
    path: "/pk/",
    name: "main_page",
    component: GamepageView,
  },
  {
    path: "/leaderboard/",
    name: "leaderboard",
    component: LeaderboardView,
  },
  {
    path: "/user/info",
    name: "user_info",
    component: UserInfoView,
  },
  {
    path: "/404/",
    name: "404",
    component: NotFound,
  },
  {
    //catch nonexistent url
    path: "/:catchAll(.*)",
    redirect: "/404/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
