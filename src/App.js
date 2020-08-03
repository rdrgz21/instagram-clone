import React from "react";
import "./App.css";
import Post from "./components/Post";
import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import Sidebar from "./components/Sidebar";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='screen'>
        <div className='stories'>
        <Stories />
        </div>
        <div className='flex'>
        <div className='posts'>
          <Post
            avatarAlt="Chris"
            avatar="https://pbs.twimg.com/profile_images/1216175766406193152/mTPfkxyd_400x400.jpg"
            username="Chris_Whittaker"
            post="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg"
            postAlt="Icon Living"
            caption="   Moving the community!"
          />
          <Post
            avatarAlt="Kelsie_Waldney"
            avatar="https://i.pinimg.com/originals/4e/b7/73/4eb7730623e503cd289403189189c711.jpg"
            username="Kelsie_Waldney"
            post="https://i.pinimg.com/originals/4e/b7/73/4eb7730623e503cd289403189189c711.jpg"
            postAlt="holiday"
            caption=" @Kelsie_Waldney Last day in vancouver before back to Essex! Ill miss these views! XOXOX#holiday #holidayvibes #sun #funinthesun#lastdayinparadise"
          />
          <Post
            avatarAlt="Bonnie_Chen"
            avatar="https://i.pinimg.com/originals/96/3e/47/963e47ed890a031d25c766e25a24527a.jpg"
            username="Bonnie_Chen"
            post="https://www.lux-mag.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-16-at-10.39.05-copy-1.jpg"
            postAlt="Model"
            caption=" @Bonnie_Chen Fav pic from photo shoot this morning, absolute #fire here ya'll!"
          />
          <Post
            avatarAlt="buzzfeedtasty"
            avatar="https://yt3.ggpht.com/a/AATXAJy2cMODbm7W-yHSYjEXL9LfFas3cQ7GZZ9PFA=s900-c-k-c0xffffffff-no-rj-mo"
            username="buzzfeedtasty"
            post="https://i.pinimg.com/736x/22/29/7a/22297ac88b40c8c7638a9cbb0bf8f75a.jpg"
            postAlt="Icon Living"
            caption=" @buzzfeedtasty Crunchy Salt and Pepper Shrimp :camarón_frito::apuntando_hacia_la_derecha: recipe link in bio!"
          />
          <Post
            avatarAlt="WoodyCarter"
            avatar="https://i.imgur.com/XHjSg5r.jpg"
            username="WoodyCarter"
            post="https://i.chzbgr.com/full/8801661184/h3CC19CBE/yesterday-was-my-dogs-birthday"
            postAlt="bdaydog"
            caption=" @WoodyCarter Its my special boys 6th birthday! who needs kids anyway?! truely mans best friend.#birthday #dogs #lookatthatsmile #goodboy #cake #party"
          />
          <Post
            avatarAlt="DimitriSapronovich"
            avatar="https://www.momjunction.com/wp-content/uploads/2019/03/55-Romantic-Date-Ideas-For-Couples-1.jpg"
            username="DimitriSapronovich"
            post="https://www.momjunction.com/wp-content/uploads/2019/09/35-Romantic-date-night-ideas-for-married-couples.jpg"
            postAlt="couples date"
            caption=" @DimitriSapronovich Leonards house of love"
          />
          <Post
            avatarAlt="Andy_MF_Campbell"
            avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbl10Wpj4_ftwJVk-hFoDnCULXSu-U8uqiqg&usqp=CAU"
            username="Andy_MF_Campbell"
            post="https://www.rochesterlimos.com/wp-content/uploads/guys-night-out-with-the-newest-fleet-in-all-of-metro-detroit.jpg"
            postAlt="boys night"
            caption=" @Andy_MF_Campbell Boys night out! nothing better than a do with the lads! #lads #messer #cantbeliveyouvedonethis #drinks #whatamidoingwithmylife #southendmassive"
          />
        </div>
        <div className='sidebar'>
          <Sidebar className='sidebar' />
        </div>
        </div>
      </div>
    </div>
  );
}