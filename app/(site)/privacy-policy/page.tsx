import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Way Home Care",
  description: "Delivering Professional Best Way In-Home Care",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Privacy Policy</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Description
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
