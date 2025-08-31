interface CollectionCardProps {
  className?: string;
  title: string;
  author: string;
  image: string;
  verified?: boolean;
}

export const CollectionCard = ({
  className = '',
  title,
  author,
  image,
  verified = false,
}: CollectionCardProps) => {
  return (
    <div
      className={`bg-[rgba(255,255,255,0.05)] box-border flex flex-col gap-2 items-center justify-start pb-2 pt-1 px-1 relative rounded-[12px] shrink-0 w-[175px] border border-[rgba(255,255,255,0.05)] ${className}`}
    >
      <div
        className="bg-center bg-no-repeat bg-cover rounded-[8px] shrink-0 size-[167px]"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="box-border flex flex-col gap-1 items-start justify-start px-2 py-0 relative shrink-0 w-[167px]">
        <div className="flex gap-1 items-center justify-start relative shrink-0 w-full">
          <div className="font-exo2-bold font-bold max-w-[130px] leading-[14px] relative shrink-0 text-[14px] text-white overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </div>
          {verified && (
            <div className="relative shrink-0 size-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
              >
                <path
                  d="M3.11805 1.12626C3.16402 0.573858 3.81492 0.304246 4.23804 0.662344C5.25501 1.52305 6.74499 1.52305 7.76196 0.662344C8.18508 0.304246 8.83598 0.573858 8.88195 1.12626C8.99245 2.45398 10.046 3.50755 11.3737 3.61805C11.9261 3.66402 12.1958 4.31492 11.8377 4.73804C10.977 5.75501 10.977 7.24499 11.8377 8.26196C12.1958 8.68508 11.9261 9.33598 11.3737 9.38195C10.046 9.49245 8.99245 10.546 8.88195 11.8737C8.83598 12.4261 8.18508 12.6958 7.76196 12.3377C6.74499 11.477 5.25501 11.477 4.23804 12.3377C3.81492 12.6958 3.16402 12.4261 3.11805 11.8737C3.00755 10.546 1.95398 9.49245 0.626259 9.38195C0.0738584 9.33598 -0.195754 8.68508 0.162344 8.26196C1.02305 7.24499 1.02305 5.75501 0.162344 4.73804C-0.195754 4.31492 0.0738584 3.66402 0.626259 3.61805C1.95398 3.50755 3.00755 2.45398 3.11805 1.12626Z"
                  fill="#72C0EC"
                />
                <path
                  d="M7.72382 4.07085C7.84116 3.90023 8.07466 3.85685 8.2453 3.97417C8.41582 4.09148 8.45914 4.32504 8.34198 4.49565L5.59174 8.49541C5.52576 8.59138 5.41873 8.65182 5.30243 8.65801C5.21529 8.66261 5.1305 8.63602 5.06147 8.5855L4.99775 8.52764L3.49775 6.77715L3.45453 6.71489C3.36991 6.5624 3.40119 6.36626 3.53876 6.24834C3.67637 6.13054 3.87494 6.12963 4.01264 6.23662L4.06757 6.28935L5.2497 7.66851L7.72382 4.07085Z"
                  fill="black"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="font-['Exo_2'] font-normal leading-[14px] relative shrink-0 text-[#afb0b0] text-[12px]">
          {author}
        </div>
      </div>
    </div>
  );
};
