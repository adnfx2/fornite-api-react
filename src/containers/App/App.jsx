import React, { Component } from "react";
import { Provider } from "react-redux";
import Header from "../../layout/Header/Header";
import Main from "../../layout/Main/Main";
import NewsFeed from "../NewsFeed/NewsFeed";

// const news = JSON.parse(localStorage.getItem("LOCAL_REDUX_STORE"));

const App = ({ store }) => (
  <Provider store={store}>
    <div style={{paddingTop: "3.5em"}}>
      <Header />
      <NewsFeed />
      <Main />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est aliquam
        repudiandae nisi eius voluptatem atque asperiores quae. Ab ipsam
        quibusdam, voluptas, autem cumque odio ipsa perspiciatis minima
        molestiae rerum qui ducimus libero ipsum. Quia nemo nisi, qui impedit,
        alias illo assumenda vitae libero quos necessitatibus, consequuntur
        voluptatum placeat sint dolores praesentium magnam modi vero. Optio,
        natus, tenetur. Minus accusamus id quae, vitae maiores recusandae? Dolor
        fugit aut facere corporis accusamus quas, pariatur animi iure, in iusto
        similique qui quos id illo molestiae inventore quae perferendis iste
        maxime, laboriosam sed, ad deleniti omnis possimus blanditiis! Debitis
        nisi voluptatum similique sapiente aspernatur ea error, ut dignissimos
        eum voluptatem exercitationem quibusdam itaque enim quasi quas ab vitae
        atque blanditiis, libero impedit labore deleniti aliquam in! Aspernatur
        recusandae dolore architecto eius. Molestias possimus quam ipsam, atque,
        exercitationem ratione veniam, odio explicabo omnis suscipit aut
        voluptas nesciunt fuga, velit optio dolore quia corrupti cumque facere
        reprehenderit mollitia! Saepe voluptas similique mollitia quae debitis
        ab ipsa necessitatibus omnis nam minus ipsam, modi culpa placeat harum
        doloremque quisquam dolore accusamus corrupti eum, alias vero eveniet.
        Ratione quae delectus velit quis molestiae perferendis, accusamus
        recusandae, voluptatibus nobis tenetur asperiores nesciunt possimus
        natus officia sapiente suscipit? Perspiciatis nam veniam repudiandae
        autem molestiae porro sequi magni deserunt quidem esse aspernatur
        distinctio incidunt saepe nostrum quasi dicta itaque suscipit, modi vel
        unde necessitatibus corrupti nulla! Tempore assumenda pariatur
        perferendis minima fuga vitae nobis earum consequuntur velit eos ratione
        nihil sit doloremque, vel quae rem eligendi numquam culpa repudiandae
        delectus non. Pariatur ullam illo error, nobis quibusdam, cumque
        perspiciatis aliquam unde perferendis quam molestiae asperiores
        temporibus mollitia aspernatur, velit recusandae, ratione nemo deserunt!
        Nesciunt nihil commodi, neque provident qui ullam, labore, voluptatum
        facilis suscipit totam pariatur et quo perferendis alias excepturi quasi
        cupiditate laboriosam eos quos animi illum eum illo ipsam nisi. Eaque
        nihil aliquam deserunt, ut blanditiis eos, eum veniam modi aspernatur,
        explicabo odit et fuga dolores ipsum accusamus at! Deleniti modi
        officiis recusandae voluptatem quos dolorem rerum perspiciatis nobis
        cumque veritatis quidem voluptates, quam earum, minima assumenda aut
        numquam minus omnis quisquam asperiores ipsa animi culpa optio placeat!
        Vero perferendis eaque nam aut rerum numquam tempore, quas inventore
        possimus maiores, sit unde perspiciatis voluptas, esse voluptatum qui.
        Dolore eveniet vel, accusamus illo perferendis atque harum impedit
        perspiciatis cupiditate. Minima ex reiciendis asperiores explicabo cum
        ut eligendi quia delectus quam iste quibusdam expedita eaque
        voluptatibus, laboriosam animi enim ea, vel harum, praesentium
        necessitatibus id et provident! Sapiente eum fugiat repellendus
        explicabo. Sunt eligendi error voluptatibus voluptas ducimus, magnam,
        fuga amet mollitia, cumque dolorem magni a quaerat doloremque
        consequuntur quisquam explicabo nemo, cum asperiores ut. Magni est ex
        laboriosam, in omnis? Amet deserunt doloribus nostrum facere est tempora
        quis laudantium officia. Sequi magnam ullam saepe quis, totam, maiores
        delectus cum facere tenetur deleniti, labore, corporis porro eveniet
        commodi iusto quisquam quod modi sunt velit mollitia minima. Recusandae
        minus, culpa enim quia, odio ullam eaque ipsam neque tenetur commodi
        harum optio eveniet quasi, consectetur molestias nihil. Sint in, eum
        unde nulla similique perspiciatis!
      </p>
    </div>
  </Provider>
);

export default App;
