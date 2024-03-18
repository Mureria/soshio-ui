import React from "react";
import Post from "./Post";

const Home = () => {
  return (
    <div className="">
      <Post
        username="Mtu Tano"
        time="2h"
        text="Naonanga jamaa za taoni wakisema wanatamani maisha ya ocha juu ni simple nashangaa sana,sisi tumegrow huko hatuezi taka kurudi ata kidogo ndio maana tunaendanga tu chrismas,ochas life is only good when you have a 20 acre ranch and workers like john dutton from Yellowstone,otherwise sidhani mnaeza survive huko ata miezi mbili na hiyo kiherehere yenu,kukata dhara,kulima,Kulisha mbuzi,kukamua ng’ombe everyday for the rest of your life,Ocha mimi niliamua nitarudi permanently nikiwa kwa geneza"
        profile="https://images.unsplash.com/photo-1540304801084-0944beb20de7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        image="https://images.unsplash.com/photo-1588152850700-c82ecb8ba9b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Post
        username="Code Blooded"
        time="6h"
        text="Im building a financial tracker application. 💰 
        My chosen stack:
        - Next JS
        - Prisma
        - Zod
        - Shadcn/UI
        - React hook form
        - Tailwind
        - MySQL
        Would you change something?"
      />
      <Post
        username="Book Ten"
        time="15h"
        profile="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        text="Nimeona interview ya msomali anaulizwa impact ya lack of miraa kwa maisha yake since ramadhan ianze. Jamaa akasema yeye imemaffect miguu ju recently ametembea sana. Amesema yeye amezoea kukaa na kulala🤣 ati amepatana na watu alidhani walikufa kwa mtaa pia."
      />
      <Post
        username="Arturo Yebei"
        time="52m"
        profile='https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        image='https://images.unsplash.com/photo-1518619745898-93e765966dcd?q=80&w=1534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
/>
    </div>
  );
};

export default Home;
