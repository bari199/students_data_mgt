import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>About</h1>
          {/* <p className="text-lg text-center">
            The Student Management System Portal is a modern web-based
            application designed to simplify and digitalize the process of
            managing student information efficiently. This platform helps
            educational institutions organize, store, and manage student records
            in a centralized system, reducing manual paperwork and improving
            overall productivity. The portal allows administrators and users to
            create, view, update, and delete student details such as student
            names, marks, and department information through an easy-to-use
            interface. With advanced features like student search and
            department-based filtering, users can quickly access specific
            records without navigating through large datasets.
          </p> */}
        </div>
      </section>
    </DefaultLayout>
  );
}
