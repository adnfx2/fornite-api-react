import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { deviceWidthPX } from "../../styles/variables";
import SideOverlay from "../../components/SideOverlay/SideOvelay";

const useStyle = createUseStyles({
  container: {
    position: "relative",
    backgroundColor: "teal",
    display: "flex",
    flexFlow: "row wrap"
  }
});

const Store = props => {
  const [active, setActive] = useState(false);
  const handler = () => setActive(prevState => !prevState);
  const onCloseOverlayHandler = () => setActive(false);
  const classes = useStyle(active);

  return (
    <div className={classes.container}>
      <h1 className="w-100">Store</h1>
      <button className="ml-auto" onClick={handler}>
        Click
      </button>
      <div className="w-100 d-flex">
        <span className="text-center">Item</span>
        <span className="ml-auto text-center">Weapon</span>
      </div>
      <SideOverlay active={active} onCancel={onCloseOverlayHandler}>
        <Filter />
      </SideOverlay>
      <Content />
    </div>
  );
};

export default Store;

const Filter = () => (
  <div>
    <h3>Sort by</h3>
    <ul>
      <li>i</li>
      <li>i</li>
      <li>i</li>
    </ul>
  </div>
);

const Content = props => (
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima totam
      tempore fugit molestiae ipsa, beatae, eius id reiciendis autem. Porro
      aliquam iusto ipsam sit reprehenderit quo cumque animi labore quidem,
      minus minima tenetur numquam commodi vero, quibusdam ipsa dolorem,
      perferendis? Facere itaque voluptatem nobis similique, ipsum expedita,
      incidunt accusantium, est iure veniam ullam laborum vero recusandae ad
      perferendis quas distinctio quo libero quia optio! Eius soluta, rem ipsa
      repellendus exercitationem minima quaerat consequatur delectus vel qui,
      praesentium. Laborum deleniti labore esse, dolorum, amet temporibus
      officia obcaecati ab iste aut animi, culpa vel reiciendis quam unde veniam
      beatae! Sit, et, quo!
    </p>
    <p>
      Consectetur soluta non perspiciatis at, facere pariatur a minima ut
      adipisci maiores similique ullam! Quia delectus repellendus laboriosam
      quaerat labore voluptate hic, aut quasi aspernatur dolorum, rerum amet
      enim magni sequi ab laudantium voluptatem sit. Dolorum quia recusandae
      dicta et harum nostrum quis optio eveniet obcaecati in amet porro modi
      deleniti dignissimos impedit inventore reprehenderit, voluptates
      voluptatum sapiente debitis neque, sunt similique aliquam vero? Aliquid
      quod mollitia commodi ducimus illo sit quidem natus, harum perferendis
      esse dolorum delectus, consequatur dolores impedit. Officiis dicta qui
      temporibus corrupti, tempora at ut. Veniam pariatur dolor similique modi
      sint recusandae temporibus quia omnis. Quibusdam.
    </p>
    <p>
      Vero, voluptate! Explicabo dicta tenetur natus aliquam porro repellendus
      ab quisquam fugit ratione accusamus sint recusandae, nam, quia incidunt
      ipsam impedit voluptate itaque consequatur sapiente dolorem facilis
      officiis sit? Vitae nulla neque, ad molestiae sequi voluptas quidem
      deserunt eveniet, ullam nemo quaerat, earum autem recusandae ipsum
      voluptates at voluptate? Voluptatem minima, libero harum. Natus quos
      repellat, ab adipisci facilis debitis asperiores corrupti est iusto nobis
      ipsam? Molestias pariatur, dignissimos aperiam, odit, debitis distinctio
      aliquid numquam vitae amet nam natus esse aspernatur unde! Tempore minima
      accusantium culpa, blanditiis inventore omnis porro asperiores aut sed,
      consequuntur numquam voluptas quibusdam id ab reprehenderit.
    </p>
    <p>
      Quo deleniti eius alias soluta nostrum ratione optio, voluptates delectus
      neque, doloribus! Vero doloremque magnam molestias accusantium illo fugiat
      molestiae, voluptas! Quod sapiente cupiditate beatae tempore animi placeat
      maxime dolorem veniam obcaecati, reprehenderit provident, totam soluta
      accusantium delectus iste suscipit accusamus porro repellat facere
      laudantium corrupti aliquam deleniti esse doloribus. Ullam mollitia optio
      reprehenderit eveniet aliquam non. Consectetur dicta mollitia recusandae
      neque et harum ea nobis aliquam, doloribus excepturi soluta, natus
      sapiente quod officiis doloremque ex nesciunt possimus. Corporis soluta,
      vel, adipisci suscipit ipsa temporibus beatae accusantium, architecto
      numquam ab inventore quo illum consequuntur. Repellat sed, quo. Ducimus,
      magnam, necessitatibus!
    </p>
  </div>
);
