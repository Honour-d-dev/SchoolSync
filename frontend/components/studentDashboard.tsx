export default function Dashboard() {
  return (
    <div className="flex flex-row flex-wrap w-[90%] justify-center xl:gap-[60px_60px] gap-8 md:gap-10 pt-12">
      <Frame name={"Course Registration"} img={"/icons/dashboard-school.png"} />
      <Frame name={"Academic Records"} img={"/icons/dashboard-calender.png"} />
      <Frame name={"My Progress"} img={"/icons/dashboard-progress.png"} />
      <Frame name={"My Clearance"} img={"/icons/dashboard-tasks.png"} />
      <Frame name={"My Payments"} img={"/icons/dashboard-payment.png"} />
    </div>
  );
}

function Frame({ img, name }: { img: string; name: string }) {
  return (
    <div className="flex flex-col p-2 bg-accent-200 gap-2 items-center justify-center w-[40%] md:w-[30%] max-w-[260px] rounded-lg shadow-lg">
      <img src={img} alt="options" />
      <span className="text-center font-semibold">{name}</span>
    </div>
  );
}
