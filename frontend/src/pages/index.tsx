// import { Link } from "@heroui/link";
// // import { Snippet } from "@heroui/snippet";
// // import { Code } from "@heroui/code";
// import { button as buttonStyles } from "@heroui/theme";

// import { siteConfig } from "@/config/site";
// import { title, subtitle } from "@/components/primitives";
// // import { GithubIcon } from "@/components/icons";
// import DefaultLayout from "@/layouts/default";

// export default function IndexPage() {
//   return (
//     <DefaultLayout>
//       <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
//         <div className="inline-block max-w-lg text-center justify-center">
//           <span className={title()}>Make&nbsp;</span>
//           <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
//           <br />
//           <span className={title()}>
//             All-in-One Student Management Solution.
//           </span>
//           <div className={subtitle({ class: "mt-4" })}>
//             Manage student records, attendance, results, and performance .
//           </div>
//         </div>

//         <div className="flex gap-3">
//           <Link
//             isExternal
//             className={buttonStyles({
//               color: "primary",
//               radius: "full",
//               variant: "shadow",
//             })}
//             href={siteConfig.links.read}
//           >
//             Read
//           </Link>
//           <Link
//             isExternal
//             className={buttonStyles({ variant: "bordered", radius: "full" })}
//             href={siteConfig.links.create}
//           >
//             {/* <GithubIcon size={20} /> */}
//             Create
//           </Link>
//         </div>

//         {/* <div className="mt-8">
//           <Snippet hideCopyButton hideSymbol variant="bordered">
//             <span>
//               Get started by editing{" "}
//               <Code color="primary">pages/index.tsx</Code>
//             </span>
//           </Snippet>
//         </div> */}

//       </section>
//     </DefaultLayout>
//   );
// }

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Card, CardBody, Divider } from "@heroui/react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center gap-6 py-10 md:py-14 text-center">
        <div className="inline-block max-w-2xl">
          <span className={title()}>Smart&nbsp;</span>
          <span className={title({ color: "violet" })}>Student Management</span>
          <br />

          <span className={title()}>Portal for Modern Education</span>

          <div className={subtitle({ class: "mt-6" })}>
            Simplify student data management with a powerful digital platform
            designed to organize academic records, monitor performance, and
            streamline administrative workflows efficiently.
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-4">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.read}
          >
            Read
          </Link>

          <Link
            isExternal
            className={buttonStyles({
              variant: "bordered",
              radius: "full",
            })}
            href={siteConfig.links.create}
          >
            Create
          </Link>
        </div>
      </section>

      <Divider className="my-10" />

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Powerful Features for Efficient Management
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card shadow="sm">
            <CardBody>
              <h3 className="font-semibold text-lg mb-2">
                Student Records Management
              </h3>
              <p className="text-default-500">
                Easily create, update, and manage student academic data through
                a centralized dashboard.
              </p>
            </CardBody>
          </Card>

          <Card shadow="sm">
            <CardBody>
              <h3 className="font-semibold text-lg mb-2">
                Smart Search & Filters
              </h3>
              <p className="text-default-500">
                Quickly locate students using advanced search and department
                filtering options.
              </p>
            </CardBody>
          </Card>

          <Card shadow="sm">
            <CardBody>
              <h3 className="font-semibold text-lg mb-2">CRUD Operations</h3>
              <p className="text-default-500">
                Perform Create, Read, Update, and Delete operations smoothly
                with an intuitive interface.
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      <Divider className="my-10" />

      {/* WHY CHOOSE SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-10 text-center">
        <h2 className="text-3xl font-semibold mb-6">Why Choose Our Portal?</h2>

        <p className="text-default-500 max-w-3xl mx-auto leading-relaxed">
          The Student Management System Portal eliminates manual record handling
          by providing a secure and user-friendly environment for managing
          institutional data. Built using modern web technologies, the system
          ensures faster performance, improved accuracy, and seamless academic
          administration.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
          <div>
            <h3 className="text-3xl font-bold text-primary">100+</h3>
            <p className="text-default-500">Students Managed</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-primary">5+</h3>
            <p className="text-default-500">Departments</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-primary">24/7</h3>
            <p className="text-default-500">Accessibility</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-primary">Secure</h3>
            <p className="text-default-500">Data System</p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
