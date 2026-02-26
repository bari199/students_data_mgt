// import { title } from "@/components/primitives";
// import DefaultLayout from "@/layouts/default";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// export default function DocsPage() {

// const {id} = useParams();
//  const [student, setStudent] = useState<any>({});

// useEffect(() =>{
//   axios.get(`https://698ec424aded595c2532b6b0.mockapi.io/Students_data/${id}`)
//   .then((res)=>{
//     setStudent(res.data)
//   })
//   .catch((err)=>{
//     console.log("Error",err);
//   })
// }, [id]);

//   return (
//     <DefaultLayout>
//       <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
//         <div className="inline-block max-w-lg text-center justify-center">
//           <h1 className={title()}>About</h1>
//           <p className="text-lg text-center">
//           </p>
//         </div>
//       </section>
//     </DefaultLayout>
//   );
// }

import DefaultLayout from "@/layouts/default";
import { Divider, Image } from "@heroui/react";

export default function AboutPage() {
  return (
    <DefaultLayout>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <h1 className="text-3xl sm:text-4xl font-bold">
          About Student Management System
        </h1>

        <p className="text-small text-default-400 mt-2">
          A smart digital solution for managing student data efficiently.
        </p>

        <Divider className="my-4" />
      </div>

      {/* MAIN SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT SIDE IMAGE */}
        <div className="w-full lg:w-1/2">
          <Image
            isZoomed
            alt="Student Management System"
            className="w-full h-[350px] object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold">
            Student Management System Portal
          </h2>

          <p className="text-default-500 leading-relaxed">
            The Student Management System Portal is a modern web-based
            application developed to simplify and digitalize student record
            management. It allows administrators and users to efficiently manage
            student information such as names, academic details, departments,
            and performance records in one centralized platform.
          </p>

          <p className="text-default-500 leading-relaxed">
            The system provides essential CRUD functionalities including
            creating, reading, updating, and deleting student data. Users can
            easily search students using the search bar and filter records based
            on departments, improving accessibility and organization of data.
          </p>

          <p className="text-default-500 leading-relaxed">
            Built using modern technologies like React.js and a clean UI powered
            by HeroUI components, the portal ensures a responsive, fast, and
            user-friendly experience. The platform helps reduce manual work,
            improves accuracy, and enhances overall academic data management.
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
