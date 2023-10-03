"use client";
import Header from "@/components/Header";
import Heading from "@/utils/Heading";
import { FC, useState } from "react";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div>
      <Heading
        title="Lincher | The future of Learning"
        description="Lincher is a platform for student to learn and get help from teachers"
        keywords="Programming, courses, Machine Learning"
      />
      <Header open={open} setOpen={setOpen} activeItem={activeItem} />
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum corporis
      consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa id, soluta
      enim adipisci praesentium voluptas excepturi eveniet pariatur in. Maxime,
      suscipit labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Harum corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat
      ipsa id, soluta enim adipisci praesentium voluptas excepturi eveniet
      pariatur in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Harum corporis consequuntur cum,
      voluptatibus perspiciatis cumque quaerat ipsa id, soluta enim adipisci
      praesentium voluptas excepturi eveniet pariatur in. Maxime, suscipit
      labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
      corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa
      id, soluta enim adipisci praesentium voluptas excepturi eveniet pariatur
      in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Harum corporis consequuntur cum, voluptatibus
      perspiciatis cumque quaerat ipsa id, soluta enim adipisci praesentium
      voluptas excepturi eveniet pariatur in. Maxime, suscipit labore! Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Harum corporis
      consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa id, soluta
      enim adipisci praesentium voluptas excepturi eveniet pariatur in. Maxime,
      suscipit labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Harum corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat
      ipsa id, soluta enim adipisci praesentium voluptas excepturi eveniet
      pariatur in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Harum corporis consequuntur cum,
      voluptatibus perspiciatis cumque quaerat ipsa id, soluta enim adipisci
      praesentium voluptas excepturi eveniet pariatur in. Maxime, suscipit
      labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
      corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa
      id, soluta enim adipisci praesentium voluptas excepturi eveniet pariatur
      in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Harum corporis consequuntur cum, voluptatibus
      perspiciatis cumque quaerat ipsa id, soluta enim adipisci praesentium
      voluptas excepturi eveniet pariatur in. Maxime, suscipit labore! Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Harum corporis
      consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa id, soluta
      enim adipisci praesentium voluptas excepturi eveniet pariatur in. Maxime,
      suscipit labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Harum corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat
      ipsa id, soluta enim adipisci praesentium voluptas excepturi eveniet
      pariatur in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Harum corporis consequuntur cum,
      voluptatibus perspiciatis cumque quaerat ipsa id, soluta enim adipisci
      praesentium voluptas excepturi eveniet pariatur in. Maxime, suscipit
      labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
      corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa
      id, soluta enim adipisci praesentium voluptas excepturi eveniet pariatur
      in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Harum corporis consequuntur cum, voluptatibus
      perspiciatis cumque quaerat ipsa id, soluta enim adipisci praesentium
      voluptas excepturi eveniet pariatur in. Maxime, suscipit labore! Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Harum corporis
      consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa id, soluta
      enim adipisci praesentium voluptas excepturi eveniet pariatur in. Maxime,
      suscipit labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Harum corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat
      ipsa id, soluta enim adipisci praesentium voluptas excepturi eveniet
      pariatur in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Harum corporis consequuntur cum,
      voluptatibus perspiciatis cumque quaerat ipsa id, soluta enim adipisci
      praesentium voluptas excepturi eveniet pariatur in. Maxime, suscipit
      labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
      corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa
      id, soluta enim adipisci praesentium voluptas excepturi eveniet pariatur
      in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Harum corporis consequuntur cum, voluptatibus
      perspiciatis cumque quaerat ipsa id, soluta enim adipisci praesentium
      voluptas excepturi eveniet pariatur in. Maxime, suscipit labore! Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Harum corporis
      consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa id, soluta
      enim adipisci praesentium voluptas excepturi eveniet pariatur in. Maxime,
      suscipit labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Harum corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat
      ipsa id, soluta enim adipisci praesentium voluptas excepturi eveniet
      pariatur in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Harum corporis consequuntur cum,
      voluptatibus perspiciatis cumque quaerat ipsa id, soluta enim adipisci
      praesentium voluptas excepturi eveniet pariatur in. Maxime, suscipit
      labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
      corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa
      id, soluta enim adipisci praesentium voluptas excepturi eveniet pariatur
      in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Harum corporis consequuntur cum, voluptatibus
      perspiciatis cumque quaerat ipsa id, soluta enim adipisci praesentium
      voluptas excepturi eveniet pariatur in. Maxime, suscipit labore! Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Harum corporis
      consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa id, soluta
      enim adipisci praesentium voluptas excepturi eveniet pariatur in. Maxime,
      suscipit labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Harum corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat
      ipsa id, soluta enim adipisci praesentium voluptas excepturi eveniet
      pariatur in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Harum corporis consequuntur cum,
      voluptatibus perspiciatis cumque quaerat ipsa id, soluta enim adipisci
      praesentium voluptas excepturi eveniet pariatur in. Maxime, suscipit
      labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
      corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa
      id, soluta enim adipisci praesentium voluptas excepturi eveniet pariatur
      in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Harum corporis consequuntur cum, voluptatibus
      perspiciatis cumque quaerat ipsa id, soluta enim adipisci praesentium
      voluptas excepturi eveniet pariatur in. Maxime, suscipit labore! Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Harum corporis
      consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa id, soluta
      enim adipisci praesentium voluptas excepturi eveniet pariatur in. Maxime,
      suscipit labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Harum corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat
      ipsa id, soluta enim adipisci praesentium voluptas excepturi eveniet
      pariatur in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Harum corporis consequuntur cum,
      voluptatibus perspiciatis cumque quaerat ipsa id, soluta enim adipisci
      praesentium voluptas excepturi eveniet pariatur in. Maxime, suscipit
      labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
      corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa
      id, soluta enim adipisci praesentium voluptas excepturi eveniet pariatur
      in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Harum corporis consequuntur cum, voluptatibus
      perspiciatis cumque quaerat ipsa id, soluta enim adipisci praesentium
      voluptas excepturi eveniet pariatur in. Maxime, suscipit labore! Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Harum corporis
      consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa id, soluta
      enim adipisci praesentium voluptas excepturi eveniet pariatur in. Maxime,
      suscipit labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Harum corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat
      ipsa id, soluta enim adipisci praesentium voluptas excepturi eveniet
      pariatur in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Harum corporis consequuntur cum,
      voluptatibus perspiciatis cumque quaerat ipsa id, soluta enim adipisci
      praesentium voluptas excepturi eveniet pariatur in. Maxime, suscipit
      labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
      corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa
      id, soluta enim adipisci praesentium voluptas excepturi eveniet pariatur
      in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Harum corporis consequuntur cum, voluptatibus
      perspiciatis cumque quaerat ipsa id, soluta enim adipisci praesentium
      voluptas excepturi eveniet pariatur in. Maxime, suscipit labore! Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Harum corporis
      consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa id, soluta
      enim adipisci praesentium voluptas excepturi eveniet pariatur in. Maxime,
      suscipit labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Harum corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat
      ipsa id, soluta enim adipisci praesentium voluptas excepturi eveniet
      pariatur in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Harum corporis consequuntur cum,
      voluptatibus perspiciatis cumque quaerat ipsa id, soluta enim adipisci
      praesentium voluptas excepturi eveniet pariatur in. Maxime, suscipit
      labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
      corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa
      id, soluta enim adipisci praesentium voluptas excepturi eveniet pariatur
      in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Harum corporis consequuntur cum, voluptatibus
      perspiciatis cumque quaerat ipsa id, soluta enim adipisci praesentium
      voluptas excepturi eveniet pariatur in. Maxime, suscipit labore! Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Harum corporis
      consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa id, soluta
      enim adipisci praesentium voluptas excepturi eveniet pariatur in. Maxime,
      suscipit labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Harum corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat
      ipsa id, soluta enim adipisci praesentium voluptas excepturi eveniet
      pariatur in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Harum corporis consequuntur cum,
      voluptatibus perspiciatis cumque quaerat ipsa id, soluta enim adipisci
      praesentium voluptas excepturi eveniet pariatur in. Maxime, suscipit
      labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
      corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa
      id, soluta enim adipisci praesentium voluptas excepturi eveniet pariatur
      in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Harum corporis consequuntur cum, voluptatibus
      perspiciatis cumque quaerat ipsa id, soluta enim adipisci praesentium
      voluptas excepturi eveniet pariatur in. Maxime, suscipit labore! Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Harum corporis
      consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa id, soluta
      enim adipisci praesentium voluptas excepturi eveniet pariatur in. Maxime,
      suscipit labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Harum corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat
      ipsa id, soluta enim adipisci praesentium voluptas excepturi eveniet
      pariatur in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Harum corporis consequuntur cum,
      voluptatibus perspiciatis cumque quaerat ipsa id, soluta enim adipisci
      praesentium voluptas excepturi eveniet pariatur in. Maxime, suscipit
      labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
      corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa
      id, soluta enim adipisci praesentium voluptas excepturi eveniet pariatur
      in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Harum corporis consequuntur cum, voluptatibus
      perspiciatis cumque quaerat ipsa id, soluta enim adipisci praesentium
      voluptas excepturi eveniet pariatur in. Maxime, suscipit labore! Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Harum corporis
      consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa id, soluta
      enim adipisci praesentium voluptas excepturi eveniet pariatur in. Maxime,
      suscipit labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Harum corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat
      ipsa id, soluta enim adipisci praesentium voluptas excepturi eveniet
      pariatur in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Harum corporis consequuntur cum,
      voluptatibus perspiciatis cumque quaerat ipsa id, soluta enim adipisci
      praesentium voluptas excepturi eveniet pariatur in. Maxime, suscipit
      labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
      corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa
      id, soluta enim adipisci praesentium voluptas excepturi eveniet pariatur
      in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Harum corporis consequuntur cum, voluptatibus
      perspiciatis cumque quaerat ipsa id, soluta enim adipisci praesentium
      voluptas excepturi eveniet pariatur in. Maxime, suscipit labore! Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Harum corporis
      consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa id, soluta
      enim adipisci praesentium voluptas excepturi eveniet pariatur in. Maxime,
      suscipit labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Harum corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat
      ipsa id, soluta enim adipisci praesentium voluptas excepturi eveniet
      pariatur in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Harum corporis consequuntur cum,
      voluptatibus perspiciatis cumque quaerat ipsa id, soluta enim adipisci
      praesentium voluptas excepturi eveniet pariatur in. Maxime, suscipit
      labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
      corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa
      id, soluta enim adipisci praesentium voluptas excepturi eveniet pariatur
      in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Harum corporis consequuntur cum, voluptatibus
      perspiciatis cumque quaerat ipsa id, soluta enim adipisci praesentium
      voluptas excepturi eveniet pariatur in. Maxime, suscipit labore! Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Harum corporis
      consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa id, soluta
      enim adipisci praesentium voluptas excepturi eveniet pariatur in. Maxime,
      suscipit labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Harum corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat
      ipsa id, soluta enim adipisci praesentium voluptas excepturi eveniet
      pariatur in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Harum corporis consequuntur cum,
      voluptatibus perspiciatis cumque quaerat ipsa id, soluta enim adipisci
      praesentium voluptas excepturi eveniet pariatur in. Maxime, suscipit
      labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
      corporis consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa
      id, soluta enim adipisci praesentium voluptas excepturi eveniet pariatur
      in. Maxime, suscipit labore! Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Harum corporis consequuntur cum, voluptatibus
      perspiciatis cumque quaerat ipsa id, soluta enim adipisci praesentium
      voluptas excepturi eveniet pariatur in. Maxime, suscipit labore! Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Harum corporis
      consequuntur cum, voluptatibus perspiciatis cumque quaerat ipsa id, soluta
      enim adipisci praesentium voluptas excepturi eveniet pariatur in. Maxime,
      suscipit labore!
    </div>
  );
};

export default Page;
