import Link from "next/link";
import Image from "next/image";

export const Card = ({
  url,
  img,
  title,
  ariaLabel,
  description,
  footerDescription,
  spansInTwo,
}: {
  url: string;
  img: string;
  title: string;
  ariaLabel: string;
  description: string;
  footerDescription?: string;
  spansInTwo?: boolean;
}) => {
  if (spansInTwo) {
    return (
      <li className="lg:col-span-2">
        <Link
                className="group h-full rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-surface-container-lowest flex flex-col lg:flex-row lg:min-h-105.5"
                aria-label={ ariaLabel }
                href={ url }
              >
                <div className="relative w-full lg:w-1/2  lg:min-h-105.5 overflow-hidden">
                  <Image
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    alt=""
                    width="300"
                    height="300"
                    src={ img }
                  />
                </div>
                <div className="p-8 lg:w-1/2 flex flex-col justify-between bg-surface-container-lowest">
                  <div>
                    <h2 className="font-headline-sm text-2xl font-bold text-on-surface group-hover:text-primary transition-colors mb-5">
                      { title }
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface/75 mt-space-xs mb-5">
                      { description }
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-sm mt-space-xs">
                    <span className="font-label-md text-label-md text-secondary font-semibold max-w-[190px]">
                      { footerDescription }
                    </span>
                    <span className="w-9 h-9 rounded-full flex items-center justify-center btn-text-color bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-within:bg-primary-container transition-colors">
                      <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
      </li>
    );
  }
  return (
    <li>
      <Link
        className="group h-full relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-surface-container-lowest flex flex-col"
        aria-label={ariaLabel}
        href={url}
      >
        <div className="relative w-full overflow-hidden">
          <Image
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            alt=""
            width="300"
            height="300"
            src={img}
          />
        </div>
        <div className="p-8 grow flex flex-col justify-between bg-surface-container-lowest">
          <div>
            <h2 className="font-headline-sm text-2xl font-bold text-on-surface group-hover:text-primary transition-colors mb-5">
              {title}
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface/75 mt-space-xxs mb-5">
              {description}
            </p>
          </div>
          <div className="flex items-center justify-between pt-space-xs">
            <span className="font-label-sm text-label-sm text-secondary font-semibold">
              {footerDescription}
            </span>
            <span className="w-8 h-8 rounded-full flex items-center justify-center bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-within:bg-primary-container transition-colors">
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-[18px]"
              >
                arrow_forward
              </span>
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
};
